const Header = () => {
  return (
    <div className="flex flex-col items-center pt-[7rem]">
      <img src="/peach3.webp" width={250} height={350} className="z-[140]" />
      <div className="flex justify-center items-center relative">
        <img className="h-auto max-h-[200px] transition-all hover:scale-110 ease-in-out duration-500" src="/logo.png" />
        <img className="absolute right-0 h-auto md:max-h-[200px] md:top-[-130px] max-h-[150px] top-[-100px]" src="/cto.png" />
        </div>
    </div>
  );
};

export default Header;
