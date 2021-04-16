# Bitcoin-Balance

## Introduction

<p>This project is a challenge proposed by <a href="https://klever.io/en/">Klever<a/>, for the sake of ethics, I will pass on basic information.</p>
<p>Klever.io is a crypto wallet ecosystem serving over 2 million users from more than 200 countries worldwide.</p>


## Challenge

<p>The <a href="https://blockbook-bitcoin.tronwallet.me/">Blockbook</a> platform has an API in which shows transactions made in bitcoins, contains: id, values, confirmations, etc:</p>

```
  https://blockbook-bitcoin.tronwallet.me/api/v2/
```

<p>But you need to use an address code, like this: </p>

```
bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf
```

<p>provided by the platform itself, <a href="https://blockbook-bitcoin.tronwallet.me/block/679453"> see </a></p>.

<p>So it is possible to consult the API:</p>

```
  {
    "txid": "fe3e19c13f64e5f6ea02f4ee4dc13e4f292a41179c117773b808fc7c79b96a74",
    "vout": 8,
    "value": "371910169",
    "confirmations": 0
}
```

<p>Notice that there is an attribute with the name 'confirmations'. For a confirmation to be valid, a minimum of 2 confirmations must occur.</p>

<p>The challenge is to obtain records of valid confirmations and generate your balance, as well as invalid confirmations and generate your balance.</p>

<p><b>The challenge has some technical prerequisites, but for the sake of ethics I will pass only what is necessary</b></p>


## Some prerequisites
<ul>
  <li>Backend: Golang</li>
  <li>Frontend: React JS</li>
</u>



## Devices
<p>The project serves web, tablet and mobile:</p>

<a href="https://imgbox.com/2yj257ck" target="_blank"><img src="https://images2.imgbox.com/82/1c/2yj257ck_o.png" alt="image host"/></a>



## Resolution
<p>In this video it shows the project being executed and solving the challenge:
  
[![Watch the video](https://images2.imgbox.com/6d/21/UDgs6QRj_o.png)](https://www.youtube.com/watch?v=9tEfDZU2MsY)





