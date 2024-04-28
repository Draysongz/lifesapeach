import React from "react";
import './Navbar.css'

function Navbar(){
    return(
        <div className="flex justify-between text-white font-semibold navbar">
            <div>
                <h1 className="text-md"><span className="text-green-500 font-bold ml-4">$</span>PEACH</h1>
            </div>
            <div className="mr-4">
                <ul className="flex gap-4">
                    <li><a href="#home" className="">home <span className="font-bold text-green-400 text-2xl ml-3">.</span></a></li>
                    <li><a href="#home">buy <span className="font-bold text-green-400 text-2xl ml-3">.</span></a></li>
                    <li><a href="#home">team <span className="font-bold text-green-400 text-2xl ml-3">.</span></a></li>
                    <li className="mt-2"><a href="#home">token</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;