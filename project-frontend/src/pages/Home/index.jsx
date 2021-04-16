import React from 'react';
import { Card } from 'react-bootstrap';


// Components
import {Carroussel, CarrousselSupporters} from '../../components/Carroussel';


import CardsReciclo from '../../components/Card';

// Styles
import './Home.css';
import RoscaChart from '../../components/Charts';


const Home = () =>{

    const[data, setData] = React.useState([]);
    const[code, setCode] = React.useState("");
    const[render, setRender] = React.useState(false);

    React.useEffect( async () =>{
            const urlGetData = "http://localhost:3339/balance";
            const response = await fetch(urlGetData);
            setData(await response.json())
            
            console.log("Data")
            console.log(data)
        
    },[render])

   function Consult(event){
 
        event.preventDefault();

        let formData = new FormData(event.target)
        console.log(formData.get("info"));

        var obj = {
            info:formData.get("info")
        };

        var obj2 = JSON.stringify(obj);

        console.log(obj);
        console.log(obj2);
                            
        const urlSendData = "http://localhost:3339/address";

        fetch(urlSendData,{
            method:"OPTIONS",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })

       
            fetch(urlSendData,{
                method:"POST",
                body: obj2
            })

            if(render){
                setRender(false);
            }else{
                setRender(true);
            }
            
          
        }
        
    return(

        <div className="container-fluid">            
            <div className="row my-4 justify-content-around consult shadow">
                <div className="col-sm-9 col-md-5 ">
                <form onSubmit={Consult}>
                                      <div className="form-group my-3">
                                          <label for="inome">Address Code</label>
                                          <input type="text" value={code} onChange={(event) => setCode(event.target.value)} className="form-control" id="inome" name="info" placeholder="Type the  address code here..." required/>
                                      </div>                          
                                  <button type="submit" className="btn btn-success px-4 submit">Submit</button>
                </form>
                {data.map( row =>                                
                                                  <Card className="my-1 shadow card" key={row.id}>
                                                      <Card.Body className="py-2 w-100">
                                                          <Card.Text>
                                                               <p className="text-primary">Confirmed Bal.:<span className="text-success">{row.confirmed}</span></p>
                                                               <p className="text-primary">Unconfirmed Bal.:<span className="text-dark">{row.unconfirmed}</span></p>       
                                                               <RoscaChart confirmed={row.confirmed} unconfirmed={row.unconfirmed} />
                                                          </Card.Text>                                    
                                                      </Card.Body>
                                                  </Card>
                                          )}
                </div>   
                <div className="col-sm-9  col-md-5 col-lg-6 my-5">
                    <Carroussel />
                </div>
            </div>
            <div className="row my-4 mx-auto">
                <div className="col-12 d-flex justify-content-around">
                    <CardsReciclo />                    
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12">
                    <CarrousselSupporters /> 
                </div>
            </div>
        </div>
    );
}

export default Home;