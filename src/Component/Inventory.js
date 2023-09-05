import { Component } from "react";
import { Link } from "react-router-dom";
import "./InventoryStyle.css";
import {Menulist} from "./Menulist"


class Inventory extends Component{
    state={clicked: false};  
    handleClick=() =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <inv className="InventoryItems">
                <h1 className="inventory-logo"> Inventory </h1>

                <div className="menu-icons" onClick={ this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked?
                "inv-menu active": "inv-menu"}>
                {Menulist.map((item,index) => {
                     return(
                        <li key={index}>
                        <Link className={item.cName} to ={item.url} >
                        <i className={item.icon}></i>
                        {item.title}</Link>
                    </li>
                     )
                  })
                }
                <button>Profile</button>
                </ul> 
            </inv>
        )
    }

}
export default Inventory;
