import React from "react";
import "./Footer.css";

const Footer = () => {
return (
	<>
    <footer>
    <hr />

    <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic footer-widget-heading"><h3>About us</h3></div>
         <div class="logoContainer"><div class="logoTextF"><h1 class="logoH1">Fly0kart.com</h1></div>
         <div class="logoImage">
             <img src="/static/media/flyokart-plane-svg.42974c30.svg" alt="logo" class="logoSvg" />
        </div>
        </div>
         <p>FLY0KART is a Global Technology Company with the Heart of a Startup. Fly0kart we keep our customers at HEART.</p>
       </div>
       <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="https://www.facebook.com/fly0kart/" target="blank"><i className="fab fa-facebook-f facebook" target="blank"></i></a>
            <a href="https://twitter.com/fly0kart" target="blank"><i className="fab fa-twitter twitter"></i></a>
            <a href="https://www.instagram.com/fly0kart" target="blank"><i className="fab fa-instagram instagram"></i></a>
            <a href="https://www.linkedin.com/company/fly0kart" target="blank"><i className="fab fa-linkedin-in linkedin" target="blank"></i></a>
        </div>
       {/* <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div className="email">
           <a href="#"><i className="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div> */}
    </div>
    <div className="middle box">
       <div className="topic footer-widget-heading"><h3>Our Services</h3></div>
       <div><p>24/7 Customer Service</p></div>
       <div><p>Guaranteed resolution in 30 min</p></div>
       <div><p>Serving 187 countries & counting</p></div>
       <div><p>Best Customer service</p></div>
       <div><p>Quick Booking</p></div>
       <div><p>Partnership with more than 600 airlines</p></div>
       <div><p>Easy payments</p></div>
       
    </div>
    <div className="right box">
       <div className="footer-widget">
        <div className="footer-widget-heading">
            <h3 className="topic">Subscribe</h3>
        </div>
        <div className="footer-text">
            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
        </div>
        <div className="subscribe-form">
            <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane"></i></button>
            </form>
        </div>

        {/* <div className="footer-social-icon">
            <span>Follow us</span>
            <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
            <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
            <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
        </div> */}
    </div>
    </div>
    </div>
    <hr />
    <div className="bottom">
        <div style={{marginLeft:"10px"}}>
            <p>Copyright ©{(new Date().getFullYear())} <a href="#" className="name">Fly0Kart</a> All rights reserved</p>     
        </div>
        {/* <div className="footerMenu">
            <a href="#" class="active">Home</a>
            <a href="#">About US</a>
            <a href="#">Services</a>
            <a href="#">Contact US</a>
            <a href="#">Policies</a>
            <a href="#">Pay Now</a>
        </div> */}
    </div>
    {/* <div className="" style={{width:"50%", float:"right"}}>
        <div style={{float:"right"}}>
            <ul>
                <li>Home</li>
            </ul>
        </div>
    </div> */}

   
    </footer>
    </>
);
};
export default Footer;
