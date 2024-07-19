function Footer(){
    return(
        <footer className="bg-gray-200 py-10 my-3">
            <div className="container mx-auto  text-center ">
                <h2 className="text-5xl mb-6"> 
                   Subscribe & get up to 30% OFF 
                </h2>
                <div className=" flex gap-10 justify-center flex-col sm:flex-row"> 
                <input type="text" placeholder="Enter your email" className="border border-[#45c9a1] bg-white rounded-full px-[4em] py-4"/>
                <button className="  py-4 px-[4em] rounded-full cursor-pointer bg-[#45c9a1]">Subscribe</button>
            </div>
            </div>
            <div className=" container mx-auto flex  flex-col sm:flex-row">
            <div className="flex-1 sm:pr-[10em]">
            <img src="src/assets/images/logo.svg"/>
                <p>Offering a unique and stylish perspective on fashion is our number one priority. Confuse your mirror by our trendy outfits.</p>
            </div>
            <div className="leading-10 flex-1">
                <h2 className="font-bold text-2xl">Store</h2>
                <ul>
                    <li>Women's Fashion</li>
                    <li>Men's Fashion</li>
                    <li>Store Sale</li>
                    <li>Collection</li>
                </ul>
            </div>
            <div className="leading-10 flex-1">
                <h2 className="font-bold text-2xl" >Help</h2>
                <ul>
                    <li>Customer Support</li>
                    <li>Terms& Condition</li>
                    <li>Privacy Policy</li>
                   <li> Track Your Order</li>
                </ul>
            </div>
            <div className="leading-10 flex-1">
                <h2 className="font-bold text-2xl">Contact Us</h2>
                <ul>
                    <li className="flex gap-3 items-center mt-2"><img src="src/assets/images/email.png " width={40}/><p>contact@clozzet.com</p></li>
                    <li className="flex gap-3 items-center mt-4"><img src="src/assets/images/phone.png" width={40}/><p>254-700-333-333</p></li>
                    <li>Follow Us</li>
<div className="flex gap-4">
<img src="src/assets/images/facebook.png"width={40} /> 
<img src="src/assets/images/instagram.png"width={40}/>
<img src="src/assets/images/twitter.png" width={40}/>
</div>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer;