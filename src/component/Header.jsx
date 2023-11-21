import React from "react";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="bg  align-items-center d-flex mt-0" style={{height:"60px",top:'0',zIndex:'100',position:'sticky',backgroundColor:'#131921'}} >
     
    <Link to={'./'}>  <img style={{width:'100px',objectFit:'contain',margin:'0 20px',marginTop:'18px'}} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
        
        <div className=" d-flex align-items-center" style={{ flex:'1', borderRadius:'24px'}}>
        <i class="fa-solid fa-location-dot ">  </i>
        
        <p  style={{fontSize:'15px',wordSpacing:'10px',fontFamily:'sans-serif',marginLeft:'20px', marginTop:'20px'}}>Delivery To Location</p>

        <input  placeholder="Search The Product" style={{height:'40px',padding:'10px',border:'none',width:"450px",marginLeft:'100px'}} type="text"  className="rounded"/>
                 <i class="fa-solid fa-magnifying-glass rounded   " style={{background:'orange' ,width:'50px',height:'30px',padding:'20px',marginRight:'20px',border:'none', }}></i> </div>
        

      <Link to={'https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D58355126069%26hvpone%3D%26hvptwo%3D%26hvadid%3D676742234347%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D15415670598565236220%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9149274%26hvtargid%3Dkwd-10573980%26hydadcr%3D14453_2367553%26gclid%3DCjwKCAiAx_GqBhBQEiwAlDNAZrefUGhtRJIUr3xugjvj9ZuFZChlFu69tj1laRBdcy3e2pXdHUc6pRoCEPwQAvD_BwE&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'}><p style={{color:'white',marginRight:'40px',textDecoration:'none',marginTop:'20px'}}>Hellow Sign In</p></Link>  


        <Link to={'./wishlist'}><i class="fa-solid fa-heart" style={{marginRight:'10px',width:'50px'}}></i></Link>
    <Link to={'./ca'} ><i class="fa-solid fa-cart-shopping  " style={{marginRight:'10px',width:'50px'}}></i>
    </Link>
    </div>
  );
}

export default Header;