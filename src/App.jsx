import { useState } from 'react'
import logo from './assets/logo.png'
import cart from './assets/cart.png'
import search from './assets/search.png'
import './assets/apple.css'
import './App.css'

function App() {
  
  return (
    <>
      <div className="header1Justify">
        <div className="header1">
            <a href=""><img src={logo} alt="" /></a>
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Vision</p>
            <p>AirPods</p>
            <p>TV & Home</p>
            <p>Entertainment</p>
            <p>Accessories</p>
            <p>Support</p>
            <a href=""><img src={search} alt="" /></a>
            <a href=""><img src={cart} alt="" /></a>
        </div>
        </div>
        <div className="header2Justify">
        <div className="header2">
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_s10_link_light__fws1u5oodpm6_large.svg"} alt="" />
                </p>
                <p className="model1">Apple Watch Series 10</p>
                <p className="new">New</p>  
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_ultra_light__dnosu8kc2tme_large.svg"} alt="" />
                </p>
                <p className="rectStyle4">Apple Watch Ultra 2</p>
                <p className="new">New Color</p>  
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_se_light__ch5dbdx2ybo2_large.svg"} alt="" />
                </p>
                <p className="rectStyle4">Apple Watch <br /> SE</p>
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_nike_light__c36zk943xfo2_large.svg"} alt="" />
                </p>
                <p className="model1">Apple Watch Nike</p>
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_hermes_light__q9veqdmv73ey_large.svg"} alt="" />
                </p>
                <p className="model1">Apple Watch hermes</p>
                <p className="new">New</p>  
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_studio_light__dzd9rwk2242u_large.svg"} alt="" />
                </p>
                <p className="model1">Apple Watch Studio</p>
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_compare__cdkbsrx8arw2_large.svg"} alt="" />
                </p>
                <p className="model1">Compare</p>
            </div>
            <div>
                <p className="reactStyle1">
                    <img style={{width: 16}} src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_bands__b9c37m8hpgya_large.svg"} alt="" />
                </p>
                <p className="model1">Bands</p> 
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_airpods__e9283t02ry2y_large.svg"} alt="" />
                </p>
                <p className="model1">AirPods</p>
                <p className="new">New</p>  
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_accessories__glsax9gul7ue_large.svg"} alt="" />
                </p>
                <p className="model1">Accessories</p>
            </div>
            <div>
                <p>
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_fitness__c1o0w8ojsfwy_large.svg"} alt="" />
                </p>
                <p className="model1">Apple Fitness+</p>
            </div>
            <div>
                <p className="reactStyle2" >
                    <img style={{width:38}} src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_watch_os__bpf576367ple_large.svg"} alt="" />
                </p>
                <p className="model1">watchOS 11</p>
                </div>
            <div>
                <p> 
                    <img src={"https://www.apple.com/v/watch/bo/images/chapternav/watch_nav_shop_watch_light__f4fr5gzdhjyy_large.svg"} alt="" />
                </p>
                <p className="model1">Stop Watch</p>
            </div>
        </div>
    </div>
    <div className="offer">
        Now through 12/2,get a $50 Apple Gift Card when you buy Apple Watch SE. &nbsp; <a href="">Shop ></a>
    </div>
    <div className="watchV1">
        <div className="text">
            <p className="bold">Apple Watch</p>
            <p className="light">The Ultimate device <br /> for a healthy life.</p>
        </div>
        <video autoplay muted controls src={"small_2x.mp4"}></video>
    </div>
    <p className="featcherText">Get to know <b> Apple Watch.</b></p>
    <div className="watchOptions">
        <div className="box1">
            <p className="health1">Health</p>
            <p className="knowHeart1">Knows you by heart.</p>
            <p className="button">
              <p>+</p>
            </p>
        </div>
        <div className="box2">
            <p className="health">Fitness</p>
            <p className="knowHeart">Every move counts.</p>
            <p className="button">
              <p>+</p>
            </p>
        </div>
        <div className="box3">
            <p className="health">Connectivity</p>
            <p className="knowHeart">The right call for <br /> staying in touch.</p>
            <p className="button1">
              <p>+</p>
            </p>
        </div>
    </div>
    <div className="flex1">
        <div className="scroolButton1">{"<"}</div>
        <div className="scroolButton2">{">"}</div>
    </div>
    <div className="exploreHeading">
        <h1>Explore the lineup.</h1>
        <a href="">Compaew all models ></a>
    </div>
    </>
  )
}

export default App
