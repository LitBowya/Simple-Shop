import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavLinks from "./components/navlinks/NavLinks";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Location from "./pages/Location";
import ProductDetails from "./components/product-details/ProductDetails";
import PhonePage from "./components/phonepage/PhonePage";
import PcPage from "./components/pcpage/PcPage";
import OthersPage from "./components/otherspage/OthersPage";
import Footer from "./components/footer/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="position-relative">
      <Navbar />
      <NavLinks />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/phonepage" element={<PhonePage />} />
        <Route path="/pcpage" element={<PcPage />} />
        <Route path="/otherpage" element={<OthersPage />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
