import React from 'react'
import Product from './Product'

function Home() {
  return (
    <>
    <img width={'100%'} height={'700px'}  src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/09/24/997848-amazon-great-indian-festival-amazonin.jpg" alt="" />

<div className='d-flex fw-bolder ' >

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/51wKPntT05L._SL1080_.jpg"   
    id="6767"
    title="Maybelline New York Oil Control Powder"
    price={' ₹380'}
    rating={5}
   
    />

</div>

<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black'}}
>
    <Product  
     image="https://m.media-amazon.com/images/I/41GnHRki09L._SX300_SY300_QL70_FMwebp_.jpg"
    id="1234"
    title="HUG 'n' FEEL SOFT TOYS Long Soft  Teddy Bear "
    price={' ₹350'}
    rating={4}
      
    />

</div>



<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px',width:'400px' , color:'black'}}
>
    <Product 
    image="https://m.media-amazon.com/images/I/41D6U8HssQL._SY300_SX300_QL70_FMwebp_.jpg"  
    id="4678"
    title="
    Bergmann Typhoon Heavy Duty Metal Car Tyre Inflator (Blue)  "
    price={' 1900'}
    rating={3}
      
    />

</div>

<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px',width:'400px' , color:'black'}}
>
    <Product  
      image="https://m.media-amazon.com/images/I/41wrgMfwdbL._SY300_SX300_.jpg" 
    id="9876"
    title="
    Fossil Gwen Analogue Women's Watch "
        price={' ₹500'}
    rating={3}
    
    />

</div>
</div>

<div className='d-flex fw-bolder ' >

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black'}}
>
    <Product  
     image="https://m.media-amazon.com/images/I/81CSw4UjL5L._SX679_.jpg"   
    id="8787"
    title="Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC "
    price={' ₹1500'}
    rating={1}
   
    />

</div>


<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/51SGNyXoECL._SY395_SX395_.jpg"   
    id="5464"
    title="ZOUK Vegan Leather Women's Office Bag  "
    price={' ₹2500'}
    rating={3}
   
    />

</div>

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://o.remove.bg/downloads/ebaf4e03-e73a-41df-94b0-b216765da213/712_YtEr4HL._SY695_-removebg-preview.png"   
    id="6767"
    title="Puma Womens Ultimate Ease WNS Walking Shoe  "
    price={' ₹2000'}
    rating={5}
   
    />

</div>

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://o.remove.bg/downloads/121171d9-e674-460b-b746-d021d5fe4092/61oXoXM4LDL._SX679_-removebg-preview.png"   
    id="6767"
    title="Ayukta Women's Cotton Salwar Suit Set "
    price={' ₹3000'}
    rating={5}
   
    />

</div>

</div>
    </>
  )
}

export default Home

