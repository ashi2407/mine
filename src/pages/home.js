import React, { Component, useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input, } from 'reactstrap';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal"
import Web3 from "web3"
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import OilMiners from '../abi/oilminer.json';
import { Oil } from '../config';
import { useParams } from 'react-router-dom';
import "./calculator.css"
//import Modal from "react-modal"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Row } from 'bootstrap-4-react/lib/components/layout';













export const HomePage = () => {

  toast.configure()
  const params = useParams()



  $('button').on('click', function () {
    function random(max) {
      return Math.random() * (max - 0) + 0;
    }

    var c = document.createDocumentFragment();
    for (var i = 0; i < 100; i++) {
      var styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(200) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                    background: hsla('+ random(360) + ',100%,50%,1);\
                    animation: bang 700ms ease-out forwards;\
                    opacity: 0';

      var e = document.createElement("i");
      e.style.cssText = styles.toString();
      c.appendChild(e);
    }
    // document.body.appendChild(c);
    $(this).append(c);
  })







  const [walletAddress, setWalletAddress] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modal2IsOpen, setModal2IsOpen] = useState(false)
  const [modal3IsOpen, setModal3IsOpen] = useState(false)
  const [Value, setValue] = useState('')
  const [walletBalance, setWalletBalance] = useState("0")
  const [oilRate, setOilRate] = useState("0")
  const [contractBalance, setContractBalance] = useState("0")
  const [rewardValue, setRewards] = useState("0")
  const [paramValue, setParams] = useState(params.id)







  useEffect(() => {
    setWalletAddress(JSON.parse(localStorage.getItem('walletAddress')));
  }, []);

  useEffect(() => {
    // storing input name
    localStorage.setItem("walletAddress", JSON.stringify(walletAddress));

  }, [walletAddress]);

  // useEffect(() => {
  //   window.localStorage.setItem('walletAddress', walletAddress);
  // }, [walletAddress]);



  const providerOptions = {

    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "a21cf6bd75f74b49b4eeaac87f970745"
      }
    }
  };

  const web3Modal = new Web3Modal({
    network: "rinkeby",
    theme: "dark",
    cacheProvider: true,
    providerOptions
  });

  const toggle = () => {

    setModalIsOpen(!modalIsOpen)
  }

  const toggle2 = () => {

    setModal2IsOpen(!modal2IsOpen)
  }

  const toggle3 = () => {

    setModal3IsOpen(!modal3IsOpen)
  }

  async function connectwallet() {
    web3Modal.clearCachedProvider()
    var provider = await web3Modal.connect();
    var web3 = new Web3(provider);
    await window.ethereum.send('eth_requestAccounts');
    var accounts = await web3.eth.getAccounts();
    var account = accounts[0];
    setWalletAddress(account)



    // document.getElementById('wallet-address').textContent = account; 
    //contract = new web3.eth.Contract(ABI, ADDRESS);

  }

  async function disconnectwallet() {

    web3Modal.clearCachedProvider()
    setWalletAddress("")
    setOilRate("0")
    setRewards("0")
    setContractBalance("0")
    setWalletBalance("0")
    // document.getElementById('wallet-address').textContent = account; 
    //contract = new web3.eth.Contract(ABI, ADDRESS);

  }

  async function getbalance() {


    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const oilContract = new ethers.Contract(Oil, OilMiners, signer);
    var balance = (ethers.utils.formatEther(await oilContract.getBalance()) * 1).toFixed(6);
    console.log("Contract balance", balance.toString())
    
    setContractBalance(balance)
    return balance
  }

  async function getOil(address) {


    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const oilContract = new ethers.Contract(Oil, OilMiners, signer);
    var oilRew = (ethers.utils.formatEther(await oilContract.getMyMiners(address)) * 1).toFixed(20);
    console.log("oil", oilRew.toString())
    setOilRate(oilRew)
    return oilRew
  }

  async function getWalletBalance(address) {

    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    var wblnc = (ethers.utils.formatEther(await provider.getBalance(address)) * 1).toFixed(6);

    console.log("walletbalance", wblnc)
    setWalletBalance(wblnc)
    return wblnc
  }

  //amount of matic to invest 
  async function pressbutton() {

    if (!walletAddress) {
      // return console.log("Connect to the Wallet")
      return toast.info("Connect Wallet First!!")
    }
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const options = { value: ethers.utils.parseEther(Value) }


    try {
      const signer = provider.getSigner();
      const oilContract = new ethers.Contract(Oil, OilMiners, signer);
      var hireminers = await oilContract.buyBarrels(walletAddress, options)
      console.log(Value)
      console.log(walletAddress)
    }
    catch (err) {

      alert(err)
    }
  }

  async function collect() {

    if (!walletAddress) {
      // return console.log("Connect to the Wallet")
      return toast.info("Connect Wallet First!!")
    }
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);



    try {
      const signer = provider.getSigner();
      const oilContract = new ethers.Contract(Oil, OilMiners, signer);
      var collect = await oilContract.sellBarrels();

      console.log(collect)
    }
    catch (err) {

      alert(err)
    }
  }

  async function rehire() {


    if (!walletAddress) {
      // return console.log("Connect to the Wallet")
      return toast.info("Connect Wallet First!!")
    }
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);


    try {
      const signer = provider.getSigner();
      const oilContract = new ethers.Contract(Oil, OilMiners, signer);
      var rehireminers = await oilContract.sellBarrels();

      console.log(rehireminers)
    }
    catch (err) {

      alert(err)
    }
  }

  async function rewards(ads) {

    
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const oilContract = new ethers.Contract(Oil, OilMiners, signer);
    console.log(oilContract)
    var rewards =await oilContract.oilRewards(ads);
    // rewards=ethers.utils.parseEther(rewards);
    console.log("Rewards", rewards)
    // setRewards(rewards)


  }

  //collect = getmy barrels

  // rewards(walletAddress) //rewards
  getbalance()   // for Contract Balance
  getOil(walletAddress) // oil rewards
  getWalletBalance(walletAddress) // wallet balance
  //Calculator
  
  async function calc() {
    const clc=myaAmount * duration * 8
    return clc; 
  }
  
  async function barrel(){
    console.log("*********************************")
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const oilContract = new ethers.Contract(Oil, OilMiners,provider);
    console.log(myaAmount);
    const amount=ethers.utils.parseEther(myaAmount);
    console.log(amount);
    const Barrels=await oilContract.calculateBarrelBuySimple(amount);
    const barell=Barrels.toString()
    setBarrels(barell);
    
    return true;
  }


  const [myaAmount, setMyaAmount] = useState("");
  const [myaPurchasePrice, setMyaPurchasePrice] = useState("");
  const [apyPercentage, setApyPercentage] = useState("");
  const [myaFuturePrice, setMyaFuturePrice] = useState("");
  const [duration, setDuration] = useState("");
  const [TokenBalanceAmount, setTokenBalanceAmount] = useState("");
  const [Estimated,setEstimated]=useState("");
  const[Barrels,setBarrels]=useState("");

  const Calculate = (e) => {
    e.preventDefault();
    console.log(myaPurchasePrice, "myaPurchaseprice");
    console.log(myaAmount, "myaAmount");
    
    console.log(myaFuturePrice, "myaFuturePrice");
    console.log(duration, "duration");
  };

  const inputEvent = (event) => {
    // console.log(event);
    if (event.target.name === "myaPurchasePrice") {
      setMyaPurchasePrice(event.target.value);
      
    } else if (event.target.name === "myaAmount") {
      setMyaAmount(event.target.value);
        
    // } else if (event.target.name === "apyPercentage") {
    //   setApyPercentage(event.target.value);
    } else if (event.target.name === "myaFuturePrice") {
      setMyaFuturePrice(event.target.value);
    } else if (event.target.name === "Duration") {
      setDuration(event.target.value);
      setEstimated((myaAmount*(event.target.value)*8)/100)
      barrel();
    } 
  };

  return (




    <section className="mainminediv">

      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logobrand">
                <img src="images/minelogo.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="topnav">
                <ul>
                  <li>
                    <Link to="/whitePaper">WhitePaper</Link>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#modalthree" onClick={toggle3}>Calculator</a>
                  </li>

                  <li>
                    <a href="#" data-toggle="modal" data-target="#modalone" onClick={toggle}>Creators Contest</a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#modaltwo" onClick={toggle2}>Disclaimer</a>
                  </li>
                  <li>
                    <Link to="/RoadMap">RoadMap</Link>
                  </li>

                </ul>
                <div className="fixdtopbtn">
                  <button className="connectbtn" onClick={() => connectwallet()}>CONNECT</button>


                  {/* <div className="dropdown">
<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Mine
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
</div>
</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container contentsection">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="maincontent">

              <div className="tophiringmin">
                <div className="hircontent">
                  <div className="himininput">
                    <ul>
                      <li>
                        <p>Contract</p>
                        <h5>{contractBalance} MATIC</h5>
                      </li>
                      <li>
                        <p>Wallet</p>
                        <h5>{walletBalance} MATIC</h5>
                      </li>
                      <li>
                        <p>Oil</p>
                        <h5>{oilRate} Oil</h5>
                      </li>
                    </ul>
                    <div className="hirinput">
                      <input type="number" placeholder="0.1" className="form-control" onChange={event => setValue(event.target.value)} />
                      <span>MATIC</span>
                    </div>
                    <div className="chekboxcustom"><input type="checkbox" />
                      <span>I have read the <span>Disclaimer</span></span></div>
                    <button className="hirbuton" onClick={pressbutton}>
                      HIRE MINERS
                    </button>
                  </div>


                  <div className="rewardbox">
                    <div className="app__interactstatsreward"><p>Your Rewards</p><h5>{rewardValue} MATIC</h5></div>
                    <div className="app__rewards">
                      <span>
                      <button className={walletAddress ? "cmnbtn hoverme" : "cmnbtn"} onClick={rehire} style={{width:"200px"}} >RE-HIRE</button>
                      <button className={walletAddress ? "cmnbtn hoverme" : "cmnbtn"} onClick={collect}style={{width:"200px"}}>COLLECT</button>
                      </span>
                    </div>
                  </div>
                </div>



                <div className="statistics hircontent">
                  <h2>Statistics</h2>
                  <div className="himininput">
                    <ul>
                      <li>
                        <p>Daily Return</p>
                        <h5>Up to 8%</h5>
                      </li>
                      <li>
                        <p>APR</p>
                        <h5>2,920%</h5>
                      </li>
                      <li>
                        <p>Deposit Fee</p>
                        <h5>8%</h5>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="adsbox hircontent">

                </div>

                <div className="referrallink hircontent">
                  <h2>Referral Link
                  </h2>
                  <input className="app__referralinput form-control" type="text" readonly="" value={walletAddress ? "http://localhost:3000/" + walletAddress : "http://localhost:3000"} />
                  <p>Earn 12% of the MATIC used to mine Oil<br /> from anyone who uses your referral link</p>
                </div>

              </div>

              {/* <ul className="footerlist">
                <li>
                  <a href="#">
                    <img src="images/snowtrace_social.png" className="img-fluid" onClick={() => disconnectwallet()} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/telegram_social.png" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/twitter_social.png" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/discord_social.png" className="img-fluid" />
                  </a>
                </li>
              </ul> */}
              <div className="businquery">
                <a href="#">Business Inquiries</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="footerlist ftbottom  ">
        <li>
          <a href="#">
            <img src="images/snowtrace_social.png" className="img-fluid" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/telegram_social.png" className="img-fluid" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/twitter_social.png" className="img-fluid" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/discord_social.png" className="img-fluid" />
          </a>
        </li>
      </ul>

      <div>
        <Modal isOpen={modalIsOpen} toggle={() => toggle()}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
            <span aria-hidden="true">&times;</span>
          </button>
          <ModalBody>

            <div className="modalcontent">
              <h2>Oil Mine Creators Contest</h2>
              <p>Win a juicy MATIC price pool without the need of a huge following!</p>
              <strong className="colrpurple">For who is this competition?</strong>         <p>For anyone who has a social following on Tiktok, Youtube, Twitter, Reddit,.... Small to medium sized accounts. This is for all of us.<br />

                We will have different measures in place to value your content individually depending on many KPIs such as views, comments, likes, post quality and quantity.</p>
              <p>Prize pool: 15% of the total marketing wallet fees taken by 31st of May. The total prize pool amount will be announced on May 31st.

              </p>
              <h6 className="colrpurple">Competition Start: <span>6th of April</span></h6>
              <h6 className="colrpurple">Competition End: <span>31st of May</span></h6>
              <h6 className="colrpurple">Prize pool distribution:</h6>
              <p>#1 - 30%<br />#2 - 20%<br />#3 - 15%<br />#4 - 10%<br />#5 - 8%<br />#6 - 6%<br />#7 - 4%<br />#8 - 3%<br />#9 - 2%<br />#10 - 2%<br /></p>
              <h6 className="colrpurple">Competition Details &amp; Rules:</h6>
              <p>• Put our website link  in your post, bio or clearly mention it in the video, otherwise your post will not be valued.<br />• Submit your material to <a href="https://t.me/roihazecom" rel="noreferrer" target="_blank">@roihazecom</a> on TG or Discord.<br />• Post as many times as you wish to increase your chances to win. Not only the quality counts, but also the quantity.</p>
            </div>
          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>

        <Modal isOpen={modal2IsOpen} toggle={() => toggle2()} className="modal2">
          <ModalBody>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={toggle2}>
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modalcontent">
              <h2>High Risk Investment</h2>
              <p>Investing in Oil Mine carries a high level of risk, and may not be suitable for all investors. Before deciding to invest in Oil Mine you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with high-risk projects such as Oil Mine, and seek advice from an independent financial advisor.</p>
              <p>Oil Mine will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information.</p>
              <p>Oil Mine makes no representation or warranties as to the accuracy and or timelines of the information contained herein. A qualified professional should be consulted before making any financial decisions.</p>
            </div>

          </ModalBody>
          <ModalFooter>

          </ModalFooter>
        </Modal>
        <Modal id="Calc" isOpen={modal3IsOpen} toggle={() => toggle3()}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle3}>
            <span aria-hidden="true">&times;</span>
          </button>
          <ModalBody style ={{backgroundColor:"black"}}>

            {/* <Header /> */}

            <div className="content-area"  >
              <div className="custom-container"   >
                <div className="content-area-inner"  >
                  <div className="row" >
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                      {/* <Sidebar /> */}
                    </div>
                    <div className="col-12 col-md-8 col-lg-9 col-xl-8">
                      <form onSubmit={Calculate}>
                        <div className="content-right">
                          <div className="custom-container-inner">
                            <div className="video-grid">
                              <div className="row justify-content-center">
                                <div className="col-lg-12">
                                  <div className="ac-box">
                                    <div className="ac-box-inner">
                                      <div className="text-center">
                                        <h4>Oil & Barrels</h4>
                                        <h4>Estimate your returns</h4>
                                        <h3>(APR 2920%)</h3>
                                      </div>
                                      {/* 
                                  <div className="cc-box-outer">
                                    <div className="row">
                                      <div className="col-lg-4">
                                        <div className="cc-box">
                                          <p>MYA Price</p>
                                          <h4>$0.071422</h4>
                                        </div>
                                      </div>
                                      <div className="col-lg-4">
                                        <div className="cc-box">
                                          <p>APY:</p>
                                          <h4>102,483.58%</h4>
                                        </div>
                                      </div>
                                      <div className="col-lg-4">
                                        <div className="cc-box">
                                          <p>Your MYA Balance</p>
                                          <h4>{TokenBalanceAmount} MYA</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}

                                      <div className="ts-form bs-form mt-3" >
                                        <div className="row" >
                                          <div className="col-md-8 col-xl-3">
                                            <div className="form-group">
                                              <label htmlFor="">
                                                <h5>Amount(MATIC)</h5>
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="0"
                                                name="myaAmount"
                                                onChange={inputEvent}
                                                
                                              />
                                              <p
                                                style={{
                                                  textAlign: "right",
                                                  transform:
                                                    "translateY(-33px) translateX(-18px) ",
                                                  display: "inline-block",
                                                  float: "right",
                                                }}
                                              >
                                                Max
                                              </p>
                                            </div>
                                          </div>
                                          {/* <div className="col-md-6 col-xl-3">
                                            <div className="form-group">
                                              <label htmlFor="">
                                                <h5>APY(%)</h5>
                                              </label> */}
                                              {/* <input
                                                type="text"
                                                className="form-control"
                                                placeholder="102483.58"
                                                name="apyPercentage"
                                                onChange={inputEvent}
                                              /> */}
                                              {/* <p
                                                style={{
                                                  textAlign: "right",
                                                  transform:
                                                    "translateY(-33px) translateX(-18px) ",
                                                  display: "inline-block",
                                                  float: "right",
                                                }}
                                              >
                                                Current
                                              </p>
                                            </div> */}
                                          {/* </div> */}
                                          <div className="col-md-8 col-xl-4">
                                            <div className="form-group">
                                              <label htmlFor="">
                                                <h5>
                                                  Price at Purchase($)
                                                </h5>
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="0.071422"
                                                name="myaPurchasePrice"
                                                onChange={inputEvent}
                                                value={myaPurchasePrice}
                                              />
                                              <p
                                                style={{
                                                  textAlign: "right",
                                                  transform:
                                                    "translateY(-33px) translateX(-18px) ",
                                                  display: "inline-block",
                                                  float: "right",
                                                }}
                                              >
                                                Current
                                              </p>
                                            </div>
                                          </div>
                                          <div className="col-md-8 col-xl-4">
                                            <div className="form-group">
                                              <label htmlFor="">
                                                <h5>Future  Price($)</h5>
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="0.071422"
                                                name="myaFuturePrice"
                                                onChange={inputEvent}
                                              />
                                              <p
                                                style={{
                                                  textAlign: "right",
                                                  transform:
                                                    "translateY(-33px) translateX(-18px) ",
                                                  display: "inline-block",
                                                  float: "right",
                                                }}
                                              >
                                                Current
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="ct-range">
                                        <label htmlFor="">
                                          <h5>364 days</h5>
                                        </label>
                                        <input
                                          id= "krish"
                                          type="range"
                                          min="1"
                                          max="364"
                                          defaultValue="25"
                                          name="Duration"
                                          className="form-control-plaintext"
                                          onChange={inputEvent}
                                        />
                                      </div>
                                      <label htmlFor="">
                                        <h5>{duration}</h5>
                                      </label>

                                      <div className="bridge-table-section mt-4">
                                        <div className="row">
                                          <div className="col-lg-6">
                                            <table className="table table-borderless">
                                              <tbody>
                                                <tr>
                                                  <td className="text-white">
                                                    <h5>
                                                      Your Initial Investment
                                                    </h5>
                                                  </td>
                                                  <td className="text-white text-end">
                                                    <h5>{myaAmount} MATIC</h5>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="text-white">
                                                    <h5>Barrels</h5>
                                                  </td>
                                                  <td className="text-white text-end">
                                                    <h5>{Barrels}</h5>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="text-white">
                                                    <h5>
                                                      Rewards estimation(upto 8 % Daily)
                                                    </h5>
                                                  </td>
                                                  <td className="text-white text-end">
                                                    <h5>{Estimated}</h5>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <div className="col-lg-6">
                                            <table className="table table-borderless">
                                              <tbody>
                                                <tr>
                                                  <td className="text-white">
                                                    <h5>Potential return</h5>
                                                  </td>
                                                  <td className="text-white text-end">
                                                    <h5>$0.00</h5>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="text-white">
                                                    <h5>
                                                      Potential number of Space
                                                      Travels
                                                    </h5>
                                                  </td>
                                                  <td className="text-white text-end">
                                                    <h5>0</h5>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td colSpan="2">
                                                    <div className="btnCalculateContainer">
                                                      <button className={walletAddress ? "cmnbtn hoverme" : "cmnbtn"}>
                                                        Calculate
                                                      </button>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Footer /> */}

          </ModalBody>
        </Modal>
      </div>
    </section>
  )
}