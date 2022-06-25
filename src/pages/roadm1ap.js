import React, { Component, useState, useEffect } from 'react';

import "./fluxui.css"


import { useScrollPosition } from './hooks';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
toast.configure()


export const RoadMap = () => {
  ""
  const [scroll, setScroll] = useState("black")
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <div id="yeses">
      <div className="section-timeline" >
        <h2 style={{ backgroundColor: '#222222' }}>Roadmap</h2>
        <div className="container" >
          <div className="timeline_wrapper">
            <div className="timeline_progress">
              <div className="timeline_progress-bar" />
            </div>
            <div
              data-w-id="0f683f86-f550-3954-0d49-2cb73ef13f85"
              className="timeline_item"
            >
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1"
                className="timeline_left"
                style={scrollPosition >150? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="timeline_date-text">Year 2022</div>
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1"
                className="timeline_centre"
              >
                <div
                  className="timeline_circle"
                  style={scrollPosition > 150 ? {
                    willChange: "background",
                    backgroundColor: "rgb(255, 255, 255)"
                  } : {
                    willChange: "background",
                    backgroundColor: "rgb(65, 65, 65)"
                  }}
                />
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1"
                className="timeline_right"
                style={scrollPosition > 150 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="margin-bottom-xlarge">
                  <div className="timeline_title">Genesis</div>
                  <ul role="list" className="list-4">
                    <li className="list-item-2">
                      <div className="timeline_text">
                      &#8226;Whitepaper Documentation Website Development
                        Smart Contract Development
                        Testnet for smart contract
                        Smart Contract Audit
                        Smart Contract Deployment on Mainnet
                        Marketing Campaign
                        Discord Launch
                        Telegram Launch
                        Twitter Page
                        Facebook Launch
                        1 Million Market Cap
                        5 Million Market Cap
                        10 Million Market Cap
                        Monthly AMA’s
                        <br />
                      </div>
                    </li>
                    <li className="list-item-2">
                      <div className="timeline_text"><br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-w-id="0f683f86-f550-3954-0d49-2cb73ef13f85"
              className="timeline_item"
            >
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1"
                className="timeline_left"
                style={scrollPosition > 444 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="timeline_date-text">Year(2022-2023)</div>
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1"
                className="timeline_centre"
              >
                <div
                  className="timeline_circle"
                  style={scrollPosition > 444 ? {
                    willChange: "background",
                    backgroundColor: "rgb(255, 255, 255)"
                  } : {
                    willChange: "background",
                    backgroundColor: "rgb(65, 65, 65)"
                  }}
                />
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1"
                className="timeline_right"
                style={scrollPosition > 444 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="margin-bottom-xlarge">
                  <div className="timeline_title">Next Phase of the Miners </div>
                  <ul role="list" className="list-4">
                    <li className="list-item-2">
                      <div className="timeline_text">
                      &#8226; Community Vote on where we go next<br />
                        - DeFi is a broad field – we’ll make it easy for you by narrowing down the best choices and letting you decide what kind of project we do next<br />
                        - Those with the most barrels of Oil will have the most voting power<br />
                        - The original Oil holders will be able to purchase tokens or nodes of the following project with their barrels of Oil<br />
                        - Create a “bulletproof portfolio” with all aspects of investing to protect from any type of economic downturns<br />
                        - Expand Marketing and Development Team<br />
                        - New V2 dashboard development<br />
                        - New Project Testnet testing<br />
                        - 50 million Market Cap<br />
                        - Apply for IDO on Polkabridge launchpad and do public sale<br />
                        - Locked Liquidity for 10 years<br />
                        - Audit of Branching Project<br />
                        - New Project Mainnet Launch<br />
                        - Listing on major DEX’s<br />
                        - Coinmarket Cap Listing<br />
                        - Coingecko Listing<br />
                        - Monthly AMA’s<br />
                        - Community votes on future investments from Treasury Funds<br />
                        - 100 Million Market Cap<br />
                        - Partnerships<br />
                        - New V2 Dashboard Deployment<br />
                        - Airdrop<br />


                        
                      </div>
                    </li>
                    <li className="list-item-2">
                      <div className="timeline_text"><br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-w-id="0f683f86-f550-3954-0d49-2cb73ef13f85"
              className="timeline_item"
            >
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1"
                className="timeline_left"
                style={scrollPosition > 7223 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="timeline_date-text">Year (2023-2024)</div>
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1"
                className="timeline_centre"
              >
                <div
                  className="timeline_circle"
                  style={scrollPosition > 7223 ? {
                    willChange: "background",
                    backgroundColor: "rgb(255, 255, 255)"
                  } : {
                    willChange: "background",
                    backgroundColor: "rgb(65, 65, 65)"
                  }}
                />
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1"
                className="timeline_right"
                style={scrollPosition > 7223 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="margin-bottom-xlarge">
                  <div className="timeline_title">Golden Ages</div>
                  <ul role="list" className="list-4">
                    <li className="list-item-2">
                      <div className="timeline_text">Launch Influencer and Athlete Campaigns
                        Sign Major Names to the team
                        Merchandise and E-store Launch
                        500 Million Market Cap
                        Memecoin Lottery – there will be a lottery done with people’s predictions of what the price of certain Memecoin’s will be – whoever wins will receive an airdrop
                        Launch on major CEX’s
                        Create DeFi and DEX Platform
                        Allow seamless bridging in between all blockchains easily
                        Develop liquid staking with our own DEX platform
                        Allow project holders to vote on next investments from the treasury
                        Monthly AMA’s

                        <br />
                      </div>
                    </li>
                    <li className="list-item-2">
                      <div className="timeline_text"><br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              data-w-id="0f683f86-f550-3954-0d49-2cb73ef13f85"
              className="timeline_item"
            >
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f86-45cac3f1"
                className="timeline_left"
                style={scrollPosition > 10556 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="timeline_date-text">Year (2025-2026)</div>
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f89-45cac3f1"
                className="timeline_centre"
              >
                <div
                  className="timeline_circle"
                  style={scrollPosition > 10556 ? {
                    willChange: "background",
                    backgroundColor: "rgb(255, 255, 255)"
                  } : {
                    willChange: "background",
                    backgroundColor: "rgb(65, 65, 65)"
                  }}
                />
              </div>
              <div
                id="w-node-_0f683f86-f550-3954-0d49-2cb73ef13f8b-45cac3f1"
                className="timeline_right"
                style={scrollPosition > 10556 ? { willChange: "opacity", opacity: "1" } : { willChange: "opacity", opacity: "0.25" }}
              >
                <div className="margin-bottom-xlarge">
                  <div className="timeline_title">Unstoppable</div>
                  <ul role="list" className="list-4">
                    <li className="list-item-2">
                      <div className="timeline_text">1 Billion Dollar Market Cap
                        Continued Developer and Investor Team additions
                        Form ETF’s and DAO’s that will overcome regulatory hurdle’s
                        PR and Marketing Campaign
                        Monthly AMA’s
                        Much more to come!

                        <br />
                      </div>
                    </li>
                    <li className="list-item-2">
                      <div className="timeline_text"><br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="overlay-fade-bottom" />
            <div className="overlay-fade-top" />
          </div>
        </div>
      </div>
    </div>
  )
}
