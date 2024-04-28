import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 mb-16">
        <div className="relative flex justify-center md:justify-end items-center col-span-1 md:pr-20 order-2 md:order-1">
            <div className="relative transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer">
                <img className="w-full h-[200px]" src="/splat.png"/>
                    <a href="https://app.ston.fi/swap?chartVisible=false&amp;ft=TON&amp;tt=EQCqWKCZsBEQxhKbeZnNF6GLsnlPG-JmLlpUXoL99j8hJMi5&amp;ta=5000000">
                    <div className="absolute centered-element-buy font-[bubblegum] text-white text-[30px]">BUY</div>
                    </a>
                    </div>
                    </div>
                    <div className="col-span-1 order-1 md:order-2 flex justify-center md:justify-start items-center">
                        <div>
                            <div className="font-[opszwght] text-[#ff6971] text-[30px] font-extrabold leading-[1.15rem]">life's a peach <span className="text-[20px]">🍑</span>
                            </div>
                            <div className="font-[opszwght] text-[#ff6971] text-[30px] font-extrabold">and then you die <span className="text-[20px]">💀️</span></div>
                            <div className="font-[opszwght] text-white font-bold">Welcome to the world of Peach Coin, the cryptocurrency that’s as</div>
                            <div className="font-[opszwght] text-white font-bold">sweet and uplifting as the ‘Life’s a Peach’ sticker pack from Telegram.</div>
                            <div className="font-[opszwght] text-white font-bold">Just like the playful and heartwarming stickers that add a dash of</div>
                            <div className="font-[opszwght] text-white font-bold">sweetness to your conversations, It represents a community that</div>
                            <div className="font-[opszwght] text-white font-bold">cherishes optimism, embraces the bright side, and believes that</div>
                            <div className="font-[opszwght] text-white font-bold">every day can be as peachy as the next. 🍑</div>
                            <div className="font-[opszwght] text-[#ff6971] font-bold underline">#lifesapeach</div>
                        </div>
                    </div>
                </div>
                <div className="relative z-[49] px-2 md:px-20">
                    <img src="/cut.png" />
                </div>
</>
  )
}

export default Content