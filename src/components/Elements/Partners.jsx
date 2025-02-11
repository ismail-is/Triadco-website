import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/allimges/about1.webp'),
    require('./../../images/allimges/about2.webp'),
    require('./../../images/allimges/about1.webp'),
    require('./../../images/allimges/about2.webp'),
   
]

var bnr1 = require('./../../images/background/line.png');

class Partners extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                    <h3 className="font-weight-600" >Ils Nous<span style={{color:'#75BF44'}}> Font Confiance</span></h3>
                    <h2 className="font-weight-600" style={{textAlign:'center'}}>INSTITUTIONS <span style={{color:'#75BF44'}}> & ONG </span></h2>
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/1img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/5img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/3img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/4img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/2img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/6img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/folder1/7img.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                              
                              
                            </div>
                        </div>
                    </div>
                </div>











                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                    {/* <h3 className="font-weight-600" >Ils Nous<span style={{color:'#75BF44'}}> Font Confiance</span></h3> */}
                    <h2 className="font-weight-600" style={{textAlign:'center'}}>CLINIQUES 
                    <span style={{color:'#75BF44'}}> MEDICALES  </span></h2>
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img1.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img2.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img3.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img4.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img5.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                                {/* <div className="item" > */}
                                                    <div className="ow-img">
                                                 <img src={require('./../../images/floder2/img6.jpg')}  alt=""/>
                                                    {/* </div> */}
                                                </div>
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Partners;