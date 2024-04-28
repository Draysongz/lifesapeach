import React from 'react'

const Up = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[100] transition-all hover:scale-110 ease-in-out duration-500 cursor-pointer"><div className="flex gap-4 pl-4 pb-4"><div className="bg-[#FE9181] border border-black rounded-full py-2 px-4"><button className="flex"><span className="font-[opszwght]  font-extrabold text-white">Sharpiru</span><div className="transition-all group-hover:text-myblue group-active:text-myorange flex justify-center items-center h-full pt-1 pl-2 text-[#be1d4d]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-4 h-4 "><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path></svg></div></button><div className="absolute right-1 top-[-40px] fade-in-out hidden"><div className="bg-white border border-[#4f1212] rounded-full px-4 py-1 font-[opszwght] font-extrabold">copied!</div></div></div></div></div>
  )
}

export default Up