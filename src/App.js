import Footer from "./components/Footer";
import Home from "./components/Home";
import IncrementAndDecrement from "./components/IncrementAndDecrement";
import Anshu from "./components/NavBar";
function App() {
  return (
    <>
    <div className="flex justify-center ">
    <div className="flex flex-col   ">
      <Anshu />
      <Home />
      <IncrementAndDecrement />
      <Footer/>
    </div>
    </div>
    </>
  );
}

export default App;
