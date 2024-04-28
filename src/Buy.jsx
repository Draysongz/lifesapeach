import React from "react";
import "./Buy.css"

function Buy(){
    return(
        <>
        <div id="howtobuy" className="relative z-10 min-h-screen px-4 mb-16">
            <div className="py-14 md:py-[7.5rem] flex justify-center items-center">
                <div className="">
                    <img className="h-auto max-h-[90px]" src="/howtobuy.png"/>
                    </div>
                    </div>
                    <div className="container m-auto py-20 justify-center items-center flex">
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                                <div className="flex justify-center  transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer">
                                    <div className="relative">
                                        <img className="h-[350px] relative z-[2]" src="/splat1.png"/>
                                        <div className="absolute top-[-65px] left-0 z-[4]">
                                            <img className="h-[100px] rotate-[-34deg]" src="/peach4.webp"/>
                                            </div>
                                            <div className="absolute centered-element font-[bubblegum] z-[3] text-white text-[30px]">
                                                <div className="flex justify-center">STEP 1</div>
                                                <div className="font-[opszwght] text-[14px] text-center">
                                                    <span className="text-[#5bfda6]">• </span>Here you will find instructions on how to purchase the $PEACH token.</div>
                                                    <div className="font-[opszwght] text-[14px] text-center">
                                                        <span className="text-[#5bfda6]">• </span>Create a Wallet &amp; Download Tonkeeper wallet Extension 🍑</div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <div className="flex justify-center  transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer">
                                                            <div className="relative">
                                                                <div className="absolute top-[-59px] right-[33%] z-[4]">
                                                                    <img className="h-[100px] " src="/peach5.webp"/>
                                                                    </div>
                                                                    <img className="h-[350px]" src="/splat2.png"/>
                                                                    <div className="absolute centered-element font-[bubblegum] text-white text-[30px]">
                                                                        <div className="flex justify-center">STEP 2</div>
                                                                        <div className="font-[opszwght] text-[14px] text-center">
                                                                            <span className="text-[#5bfda6]">• </span>Get Some TON</div>
                                                                            <div className="font-[opszwght] text-[14px] text-center"><span className="text-[#5bfda6]">• </span>To buy $PEACH, first fund your TON wallet. You can buy TON on Bybit, OKX, or other exchanges.</div><div className="font-[opszwght] text-[14px] text-center"><span className="text-[#5bfda6]">• </span>Go to Ston.fi 🍑</div></div></div></div><div className="flex justify-center transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer"><div className="relative"><div className="absolute top-[-62px] right-0 z-[4]"><img className="h-[100px] rotate-[31deg]" src="/peach3.webp"/></div><img className="h-[350px]" src="/splat3.png"/><div className="absolute centered-element font-[bubblegum] text-white text-[30px]"><div className="flex justify-center">STEP 3</div><div className="font-[opszwght] text-[14px] text-center"><span className="text-[#5bfda6]">• </span>Visit Ston.fi, connect your wallet, and paste the $PEACH token address. Select $PEACH, confirm, and sign when prompted by Tonkeeper. 🍑</div></div></div></div><div className="flex justify-center transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer"><div className="relative"><div className="absolute top-[-79px] right-[29%] z-[4]"><img className="h-[100px]" src="/peach2.webp"/></div><img className="h-[350px]" src="/splat4.png"/><div className="absolute centered-element font-[bubblegum] text-white text-[30px]"><div className="flex justify-center">STEP 4</div><div className="font-[opszwght] text-[14px] text-center"><span className="text-[#5bfda6]">• </span>Swap TON to $PEACH</div><div className="font-[opszwght] text-[14px] text-center"><span className="text-[#5bfda6]">• </span>Swap TON for $PEACH with zero taxes. Slippage settings may be required during market volatility. 🍑</div></div></div></div></div></div></div></div>
        <div className="relative z-[49] px-2 md:px-20">
            <img src="/cut.png" />
        </div>
        </>
    )
}

export default Buy;