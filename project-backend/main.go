package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

type Address struct {
	Info string
}

type Balance struct {
	Confirmed   int `json:"confirmed"`
	Unconfirmed int `json:"unconfirmed"`
}

var a Address
var global Balance

type Api struct {
	Txid          string      `json:"txid"`
	Vout          string      `json:"vout"`
	Value         json.Number `json:"value"`
	Confirmations json.Number `json:"confirmations"`
}

type Apis []Api

func apiCount(a string) int {

	response, err := http.Get("https://blockbook-bitcoin.tronwallet.me/api/v2/utxo/" + a)
	if err != nil {
		log.Fatal(err)
		fmt.Printf("The HTTP request failed with erro %s\n", err)
	} else {
		body, err := ioutil.ReadAll(response.Body)
		if err != nil {
			log.Fatal(body)
		}

		var myJson = []byte(body)
		var apis Apis

		err2 := json.Unmarshal(myJson, &apis)
		if err != nil {
			log.Fatal(err2)
		}

		value, err2 := getMyCount(apis)
		if err != nil {
			log.Fatal(err)
		}

		return value
	}
	return 0
}

func getMyCount(apis Apis) (int, error) {
	var buffer bytes.Buffer
	var err error
	var b []byte
	var count int = 0
	var nocount int = 0
	var conf []byte

	for _, apis := range apis {
		b, err = json.Marshal(apis.Value)
		conf, err = json.Marshal(apis.Confirmations)

		if err != nil {
			return 0, err
		}

		confConvert, _ := strconv.Atoi(string(conf))
		// fmt.Println(int(confConvert))

		byteToInt, _ := strconv.Atoi(string(b))
		// fmt.Println(int(byteToInt))

		if confConvert < 2 {
			//fmt.Println("Qtd.:", confConvert)
			nocount = nocount + byteToInt
			//fmt.Println("Unconfirmed", nocount)
		} else {
			//fmt.Println("Qtd.:", confConvert)
			count = count + byteToInt
			//fmt.Println("Confirmed", count)

		}

		buffer.WriteString(string(b) + " ")
	}

	global.SetConfirmed(count)
	global.SetNoConfirmed(nocount)

	return count, nil

}

func (a *Address) SetAddress(address string) {
	a.Info = address
}

func (a *Address) getAddress() string {
	return a.Info
}

func (b *Balance) SetConfirmed(balance int) {
	b.Confirmed = balance
}

func (b *Balance) SetNoConfirmed(balance int) {
	b.Unconfirmed = balance
}

func (b *Balance) getCount() int {
	return b.Confirmed
}

func (b *Balance) getNoCount() int {
	return b.Unconfirmed
}

func getBalance() []Balance {
	var Balances []Balance = []Balance{
		Balance{
			Confirmed:   apiCount(a.getAddress()),
			Unconfirmed: global.getNoCount(),
		},
	}

	return Balances

}

func mainRoute(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Main")
}

func address(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Headers", "Authorization") // You can add more headers here if needed
		fmt.Print("Options")
	} else {

		w.Header().Set("Content-Type", "application/json")

		body, err := ioutil.ReadAll(r.Body)
		fmt.Println("body:", body)

		if err != nil {

		}

		var newAddress Address
		json.Unmarshal([]byte(body), &newAddress)

		a.SetAddress(newAddress.Info)
		fmt.Println(a.getAddress())
		// fmt.Print(newAddress.Info)

		http.HandleFunc("/balance", listBalances) // This route only exists when the value is passed through the POST localhost:3339/address
	}
}

func listBalances(w http.ResponseWriter, r *http.Request) {
	encoder := json.NewEncoder(w)
	encoder.Encode(getBalance())

}

func routesConfig() {
	http.HandleFunc("/", mainRoute)
	http.HandleFunc("/address", address)

}

func serverConf() {
	routesConfig()
	var port int = 3339

	fmt.Println("Server is running on the port", port)
	http.ListenAndServe(":3339", nil) // DefaultServerMux
}

func main() {

	serverConf()
}
