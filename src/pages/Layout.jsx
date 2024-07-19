import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Layout({children, cart, setCart}){
    return(
<div >
    <Nav cart={cart} setCart={setCart}/>
    <main className="  flex  min-h-screen flex-1 ">
        {children}
    </main>
    <Footer/>
</div>
    )
}
export default Layout;