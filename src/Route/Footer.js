import React from "react";
import { Link} from "react-router-dom";

function Footer(){
    return(
        <footer className="footer">
            <div className="col1">
            <h1 className="footer_heading"><span className="the_">The</span> Siren</h1>
            <img className="blog" src="https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72" alt="not found"></img>
            </div>
            <div className="col2">
                <h2 style={{color:'#efefef' , fontWeight:'300',marginBottom:'10px'}}>USEFUL LINKS</h2>
            <Link to='/Home' className="item"   >Home </Link>
            <Link to='/Bollywood' className="item"  >Bollywood </Link>
            <Link to='/Hollywood' className="item"  >Hollywood </Link>
            <Link to='/Technology' className="item" >Technology </Link>
            <Link to='/Fitness' className="item"  >Fitness </Link>
            <Link to='/Food' className="item" >Food</Link>
                </div>
            <div className="col3">
                <h2 style={{color:'#efefef' , fontWeight:'300',marginBottom:'10px'}}>FOLLOW US AT</h2>
            <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-linkedin"></i>
              </div>
        </footer>
    )
}
export default Footer;