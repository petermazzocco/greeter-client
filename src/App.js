import Footer from "./component/Footer";
import Greeter from "./component/Greeter";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="bg-[#090302] h-screen">
      <Navbar />
      <Greeter />
      <Footer />
    </div>
  );
}

export default App;
