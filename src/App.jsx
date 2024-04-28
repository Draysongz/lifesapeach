import Navbar from "./Navbar";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Buy from "./Buy";
import Peaches from "./Peaches";
import Nomics from "./Nomics";
import Down from "./Down";
import Up from "./Up";

const App = () => {
  return (
    <>
      <img src={'/bg-sharp.jpeg'} alt="background" className="fixed top-0 left-0 w-full h-full -z-[10] zoom-effect" />
      <Navbar />
      <Header />
      <Content />
      <Buy />
      <Peaches />
      <Nomics />
      <Down />
      <Up />
    </>
  );
};

export default App;