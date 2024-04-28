import Navbar from "./Navbar";
import "./App.css";
import Header from "./Header";

const App = () => {
  return (
    <>
      <img src={'/bg-sharp.jpeg'} alt="background" className="fixed top-0 left-0 w-full h-full -z-[10] zoom-effect" />

      <Navbar />
      <Header />
    </>
  );
};

export default App;
