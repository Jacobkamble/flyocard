import React from "react";
import "./Booknowcomponent.css";
// import 'bootstrap/dist/css/bootstrap.css';
const Bookingsetup = ()=>{
    return (<>
    <div className="container">
    <div className="container privacy">
<small>Tickets are non-transferable and name changes are not permitted. Total price shown includes all applicable <a href="#">taxes & fees</a> and <a href="#">our service fees</a>. Some airlines may charge additional <a href="#">baggage fees</a> or
     other fees. Fares are not guaranteed until ticketed. Tickets and our fees are non-refundable. Some taxes and government agency fees may be non-refundable. Date and
     routing changes will be subject to airline penalties and <a href="#">our fees</a><a href="#"></a></small>
        </div>
        <div className="container">
            <p className="acceptionletter mt-2">By clicking 'confirm and book' i agree that i have read and accept above policies and Fly0kart's <a href="#">Terms and Conditions</a> and <a href="#">privacy and policy</a></p>
        </div>
        <div className="container justify-content-center mx-auto">
            <button className="pay-btn">Confirm & Book<br/>
            Secure payment
            </button>
        </div> 
    </div>
        
        </>
    );
}
export default Bookingsetup;