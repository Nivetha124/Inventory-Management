import Inventory from "../Component/Inventory"
import Hero from "../Component/Hero";


function Home(){
    return(
        <>
        <Inventory />
            <Hero
            cName="hero"
            heroImg="https://www.spherewms.com/hubfs/blog-files/SPH%20Whse%20Inv%20Mgmt%20Blog-shutterstock_1930996376.jpg"
            title="INVENTORY MANAGEMENT"
            text="Keep Your Inventory Organized"
            buttonText="Travel Plan"
            url="/"
            btnclass="show"
            />
           
        </>
    );
}
export default Home;