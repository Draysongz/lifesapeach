import "./Navbar.css";

function Navbar() {
  return (
    <nav className="relative top-0 left-0 w-full z-[100]">
      <div className="relative flex justify-between text-white font-semibold">
        <div className="absolute top-0 left-0 w-full h-auto -z-[10] bouncing-element">
          <div className="bg-[#fe9181]"></div>
          <img src={'/drip2.png'} alt="background" className="" />
        </div>

        <div>
          <h1 className="text-md">
            <span className="text-green-500 font-bold ml-4">$</span>PEACH
          </h1>
        </div>
        <div className="mr-4">
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="">
                home <span className="font-bold text-green-400 text-2xl ml-3">.</span>
              </a>
            </li>
            <li>
              <a href="#home">
                buy <span className="font-bold text-green-400 text-2xl ml-3">.</span>
              </a>
            </li>
            <li>
              <a href="#home">
                team <span className="font-bold text-green-400 text-2xl ml-3">.</span>
              </a>
            </li>
            <li className="mt-2">
              <a href="#home">token</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
