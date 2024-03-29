import { Routes, Route } from "react-router-dom";
// components
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Registerpage from "./pages/registerpage/registerpage.component";
import Signinpage from "./pages/siginpage/signinpage.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/signin" element={<Signinpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
