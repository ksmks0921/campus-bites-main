import { Routes, Route, Link } from "react-router-dom";
import "./style/slick/slick.css";
import "./style/slick/slick-theme.css";
import Main from "./pages/main";
import Scooter from "./pages/scooter";
import Northsider from "./pages/northsider";
import TheLoft from "./pages/theLoft";
import TS from "./pages/ts";
import Public from "./pages/landing";
import SignUp from "./pages/signup";
import Menu from "./pages/menu";
import News from "./pages/news";
import ContactUs from "./pages/contactUs";
import Product from "./pages/product";
import Cart from "./pages/cart";
import UnAuthedHomepage from "./pages/unAuthedHomepage";
import Checkout from "./pages/checkout";
import CheckoutDelivery from "./pages/checkoutDelivery";
import CheckoutPickup from "./pages/checkoutPickup";
import Profile from "./pages/profile";
import Login from "./pages/login";
import NewsContent from "./pages/newsContent";
import Restaurant from './pages/restaurant'
import Example from "./components/profile/test";
export default function App() {
  return (
    <div className="font-nunito">
      <Routes>
        <Route path="/main" element={<Main />} exact />
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/menu/restaurant/:id" element={<Restaurant />} exact />
        <Route path="/menu/meal/:id" element={<Product />} exact />
        {/* <Route path="/product/:id" element={<Product />} exact /> */}
        {/* <Route path="/menu/ts" element={<TS />} />
        <Route path="/menu/theloft" element={<TheLoft />} />
        <Route path="/menu/northsider" element={<Northsider />} />
        <Route path="/menu/scooter" element={<Scooter />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-delivery" element={<CheckoutDelivery />} />
        <Route path="/checkout-pickup" element={<CheckoutPickup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/public" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Public />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<UnAuthedHomepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news/content" element={<NewsContent />} />
        <Route path="/example" element={<Example />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}
