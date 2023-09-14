import { Button,Container,Paper, colors } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./App.css"
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Footer from "./user/footer";
import Typography from '@mui/material/Typography';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { alignProperty } from "@mui/material/styles/cssUtils";
import { FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
function AboutUs() {
    const history = useHistory();
       
    return (
        <div className="landingOut">
        
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h5" noWrap component="div" className='whiteline'>
          EcoWheels <ElectricCarIcon/>
          </Typography>
          <div className='abtcon'>
          <span onClick={()=>history.goBack()}>Home</span> &nbsp;&nbsp; <span onClick={()=>history.push("/aboutus")}>About us</span> &nbsp;&nbsp; <span onClick={()=>history.push("/contactus")} >Contact us</span>
          </div>
        </Toolbar>
       
      </AppBar>
      <div class="about-container ">
      <br/><br/><br/><br/><br/>
       <h3><center>ABOUT US</center></h3> 
<p className="abt-info">
Welcome to EcoWheels! We are a forward-thinking company dedicated to revolutionizing the way people travel and power their electric vehicles (EVs). 
Our mission is to make EV ownership and usage accessible, convenient, and sustainable for everyone.</p>
<br/>

<h3><center>Our Vision</center></h3>

<p className="abt-info">
At Electric Vehicle Charging Slot and EV Car Rental, we envision a future where EVs are the norm, and fossil fuel dependency is a thing of the past. We believe in the power of clean, green transportation to create a more sustainable and eco-friendly world for generations to come.
</p>
<h3><center>Our Commitment</center></h3>
<p className="abt-info">
Our commitment to sustainability drives everything we do. We are dedicated to reducing the carbon footprint of transportation by providing reliable EV charging infrastructure and access to a fleet of top-quality electric vehicles for rent. We believe in taking bold steps towards a cleaner planet.
</p><br/>
<h3><center>Why Choose Us?</center></h3>
<div className="abt-info-pt">
1. Comprehensive Charging Solutions: Our cutting-edge EV charging stations are strategically located for your convenience. Whether you're on a cross-country road trip or just need a quick top-up, our network of charging slots has you covered.
<br/>
2. Diverse EV Rental Fleet: From compact EVs for city commuting to spacious electric SUVs for family trips, our rental fleet has a vehicle for every occasion. Experience the thrill of driving electric without the commitment of ownership.
<br/>
3. User-Friendly Booking: We've made booking EV charging slots and rentals incredibly easy. Our user-friendly app allows you to reserve a charging slot or rent an EV in just a few clicks.
<br/>
4. Customer Satisfaction: Your satisfaction is our priority. Our dedicated support team is available 24/7 to assist you with any inquiries or issues. We want your EV journey to be as seamless as possible.
<br/>
5. Environmental Impact: By choosing our services, you're actively contributing to a cleaner environment. Every EV mile driven and every kilowatt-hour of clean energy used takes us one step closer to a greener future.
</div>
<br/>
<br/>
<h3><center>Join Us in Building a Sustainable Future</center></h3>
<p className="abt-info">
We invite you to join us on this exciting journey towards a sustainable future. Whether you're an EV owner looking for reliable charging or someone curious about the benefits of electric vehicles, Electric Vehicle Charging Slot and EV Car Rental is your trusted partner.

Together, we can drive change, reduce emissions, and pave the way for a brighter and more eco-conscious world. Thank you for choosing Electric Vehicle Charging Slot and EV Car Rental – where the future of transportation begins today.
</p>

{/* team */}
<div>
      <section id="team" class="team">

<h4 class="heading"><br/><center> Our Team</center></h4><br/>

<div class="row">

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")}/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/163/163803.png"}/>
  </div>
  <div class="info">
    <h4>Bhupendra Pawar

</h4>
    <h4>Developer</h4>
   
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img  src={require("../images/1.png")}/> */}
    <img  src={"https://cdn-icons-png.flaticon.com/512/145/145867.png"}/>
  </div>
  <div class="info">
    <h4>Sammed Patil
</h4>
    <h4>Developer</h4>
    
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")} alt=""/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/1320/1320737.png"} alt=""/>
  </div>
  <div class="info">
    <h4>Jaywardhan Patil</h4>
    <h4>Developer</h4>
    
  </div>
</div>
</div>
<br/><br/>
{/* section2 */}
<div class="row">

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")}/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/145/145862.png"}/>
  </div>
  <div class="info">
    <h4>Priyanka Pawar

</h4>
    <h4>Developer</h4>
   
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img  src={require("../images/1.png")}/> */}
    <img  src={"https://cdn-icons-png.flaticon.com/512/145/145866.png"}/>
  </div>
  <div class="info">
    <h4>Hitakshi Chaudhary
</h4>
    <h4>Developer</h4>
    
  </div>
</div>

<div class="card">
  <div class="image">
    {/* <img src={require("../images/1.png")} alt=""/> */}
    <img src={"https://cdn-icons-png.flaticon.com/512/145/145865.png"} alt=""/>
  </div>
  <div class="info">
    <h4>Umair Waseem</h4>
    <h4>Developer</h4>
    
  </div>
</div>
</div>

</section>

    </div>
</div>


<Footer/>
 </div>

    );
  }
  
  export default AboutUs;
  