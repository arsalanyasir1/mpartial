import React, {Component} from 'react';
import './App.css';
import ReactPlayer from 'react-player';
import {ReactNavbar} from "react-responsive-animate-navbar";
import Circle from  "./download.png";
import Pre from "./images/pre-mitigation.jpg";
import Post from "./images/post-mitigation.jpg";
import Arrow from "./arrow.png";
import ImageSlider from "react-image-comparison-slider";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import SectionTitle from "./SectionTitle";
import { css } from 'emotion';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { withRouter, Link } from "react-router-dom";
import { DeliverablesBox } from "./deliverablesBoxWidget";
import { DeliverSlider } from "./DelieverSlider";
import sketch from "./TS_Plus_Front.png";
import sketch2 from "./TS_Plus_Top_View.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./images/slide1.jpg";
import image2 from "./images/slide2.jpg";
import image3 from "./images/slide3.jpg";
import image4 from "./images/slide4.jpg";
import image5 from "./images/slide5.jpg";
import image6 from "./images/slide6.jpg";






const priceRanges = [
  {
    "from": 950001,
    "to": 1000000,
    "value": "4.70"
  },
  {
    "from": 900001,
    "to": 950000,
    "value": "4.98"
  },
  {
    "from": 850001,
    "to": 900000,
    "value": "5.12"
  },
  {
    "from": 800001,
    "to": 850000,
    "value": "5.26"
  },
  {
    "from": 750001,
    "to": 800000,
    "value": "5.40"
  },
  {
    "from": 700001,
    "to": 750000,
    "value": "5.54"
  },
  {
    "from": 650001,
    "to": 700000,
    "value": "5.68"
  },
  {
    "from": 600001,
    "to": 650000,
    "value": "5.82"
  },
  {
    "from": 550001,
    "to": 600000,
    "value": "5.96"
  },
  {
    "from": 500001,
    "to": 550000,
    "value": "6.10"
  },
  {
    "from": 450001,
    "to": 500000,
    "value": "6.24"
  },
  {
    "from": 400001,
    "to": 450000,
    "value": "6.38"
  },
  {
    "from": 350001,
    "to": 400000,
    "value": "6.52"
  },
  {
    "from": 300001,
    "to": 350000,
    "value": "6.66"
  },
  {
    "from": 250001,
    "to": 300000,
    "value": "6.80"
  },
  {
    "from": 200001,
    "to": 250000,
    "value": "6.94"
  },
  {
    "from": 150001,
    "to": 200000,
    "value": "7.08"
  },
  {
    "from": 100001,
    "to": 150000,
    "value": "7.22"
  },
  {
    "from": 50001,
    "to": 100000,
    "value": "7.36"
  },
  {
    "from": 0,
    "to": 50000,
    "value": "7.50"
  }
];



const App: React.FC<WaterFallProps> = ({ }) => {

 

  const [volume, setVolume] = React.useState(150000);
  const [commission, setCommission] = React.useState("7.22");

  const onChangeRange = (v) => {
    setVolume(v);
    priceRanges.map(priceRange => {
      if (v >= priceRange.from && v <= priceRange.to) {
        setCommission(priceRange.value);
      }
    })
  }

  const convertToStr = (labelValue) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

      ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6

        ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

          ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"

          : Math.abs(Number(labelValue));

  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <p className="popver_text">
          Fee Structure Example: An estimate grand total of $100k will result in a fee of $7,360. The $750 deposit will be collected upon submission and applied toward the overarching fee.
        </p>

      </Popover.Content>
    </Popover>
  );

 

    
      
        return (

          <div>

          <ReactNavbar
          color= "white"
          logo= "data:image/png;base64,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"
          menu={[
            { name: "Ground Truth Data", to: "" },
            { name: "How It Works", to: "#works" },
            { name: "Fee Structure", to: "#fee" },
            { name: "Example Deliverables", to: "#deliverables" },
            { name: "Submission Portal", to: "#portal" },
            { name: "Contact Us", to: "#contact" },

          ]}
          social={[
           ]}
        ></ReactNavbar>


<div >

<ReactPlayer
url= "https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
width="100%"
height="100%"
autoPlay="true"
playing
poster
loop
playsinline
config={{ file: { attributes: {
  autoPlay: true,
  muted: true
}}}}

/>


<div class="main_banner_text">
Impartial, Remote, 3rd-Party,
<br/>   
Estimating Engine
</div>



</div>


<div className="container1">

    <div className="title left">

        <div className="row">



      <div className="col-md-6 col-sm-12">

      <img src={Circle} className="circle"/>
        
        <div className="text"><h1>GROUND-TRUTH <br/> DATA EVERYONE <br/> TRUSTS</h1></div>
       </div>

        <div className="col-md-6 col-sm-12">
        <div className="section_title_description">We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TrueSketch PLUS are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals
        </div>
           
        </div>

        </div>

       
    </div>
    
    </div>



    <div className="container2">

         <div >
    <ImageSlider
        image1= {Pre}
        image2= {Post}
        handleColor="green"
        sliderColor="#28a745"
        onSlide={() => {
          console.log("sliding");
        }}
    />
</div>
        
</div>


<div className="container3">
  
<div className="mpartial_section" css={{ backgroundColor: '#FFFFFF', justifyContent: 'center', textAlign: 'center', color: '#0A5169', paddingBottom: '20px' }}>
        <div className="container3">
          <SectionTitle
            title={"Waterfall Fee Structure"}
            description={""}
            type="center"
            background={Circle}
          ></SectionTitle>
          <div className="slider" css={{ margin: '80px 0 50px' }}>
            <Slider
              min={0}
              max={1000000}
              tooltip={true}
              alwaysShowTooltip={true}
              step={50000}
              value={volume}
              format={(v) => {
                return (
                <>
                  <div className="rangeslider_handle-tooltip">
                    <div className="slider_tooltip_price">${convertToStr(v)}</div>
                    <div className="slider_tooltip_text">Estimate Grand Total</div>
                  </div>
                  </>
                )
              }}
              oriientation={'vertical'}
              onChange={onChangeRange}
            />
            <ul css={{
              listStyle: 'none',
              padding: '0 15px 0 15px',
              display: 'flex',
              justifyContent: 'space-between',
              'li': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                width: '1px',
                background: '#D3D3D3',
                height: '20px',
                lineHeight: '60px',
                margin: '0 0 20px 0',
                fontFamily: 'Gilroy',
                color: '#84A7B3',
                fontSize: '12px',
                fontWeight: 600,
              },
            }} className="css-wrrl2p-WaterFall ">
              <li>$0</li>
              <li>$250,000</li>
              <li>$500,000</li>
              <li>$750,000</li>
              <li>$1M+</li>
            </ul>
          </div>
          <p css={{
            maxWidth: '620px',
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '14px',
          }} className={'section_title_description'}>
            Drag the slider around based on what you think it will cost to repair the property. <br />
            Move forward based on the estimated fee structure below.
          </p>
          <div className="partial_fee_btn">
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <i className="info_popup">i</i>
            </OverlayTrigger>
            <label>{commission}%</label>
            <span>mpartial Fee</span>
          </div>
          <p className="waterfall_info_text">[$750 Minimum]</p>
        </div>
      </div>
      

</div>


      <div
        className="mpartial_section howitworks container4"
        css={{
          backgroundColor: "#F2F6F7",
          justifyContent: "center",
          textAlign: "center",
          color: "#0A5169",
          padding: "15px 0",
        }}
      >
          <SectionTitle
            title={"Example Deliverables"}
            description={""}
            type="center"
            background={Circle}
          ></SectionTitle>
          <h3 className={"widget-title sub mt-1"}>
            Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch PLUS)
          </h3>
          <div className={"deliver_widget_container "}>
            <DeliverablesBox
              title={""}
              url={"https://my.matterport.com/show/?m=e5Wxtu8Arbx"}
            />
            <span className={"numeric-character"}></span>
            <DeliverablesBox
              title={""}
              url={"https://my.matterport.com/show/?m=DhqzGgT7M1E"}
            />
          </div>
          <span className={"numeric-character"}></span>
          <div className={"deliver-slider bg"}>
            <h3 className={"widget-title sub mt-1 "}>
              Immaculate. Impartial. [ESX]
            </h3>
            <div className="bg">
            <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
      <img src={image5} className="sliderimg"/>
      <img src={image6} className="sliderimg"/>
</AliceCarousel>
            </div>
          </div>
          <div className={"sketch-widget"}>
            <h3 className={"widget-title sub mt-1"}>
              <a href="https://support.matterport.com/hc/en-us/articles/360001452428-Matterport-TrueSketch-and-TrueSketch-PLUS-for-Xactimate" target="_blank">
                TrueSketch PLUS [SKX]
              </a>
            </h3>
            <section className={"sketch-container container4"}>
              <img src={sketch} />
              <img src={sketch2} />
            </section>
          </div>
        </div>
      
   




</div>






          
        )
    
}

export default App;
