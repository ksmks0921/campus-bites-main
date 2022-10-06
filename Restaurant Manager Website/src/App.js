import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./style/slick/slick.css";
import "./style/slick/slick-theme.css";
import Public from "./pages/landing";
import Serving from "./pages/serving"
import {OrderStateContext} from './contexts/orderStateContext'
import PastOrders from "./pages/pastOrders";
export default function App() {
  const [status, setStatus] =useState("open")
  const values ={
    status:status,
    setStatus:(val)=> {setStatus(val)}
  }
  return (
    <div className="font-nunito">
        <OrderStateContext.Provider value={values}>
      <Routes>

        <Route path="/" element={<Public />} />
        <Route path="/serving" element={<Serving />} />
        <Route path="/past-orders" element={<PastOrders />} />
        
      </Routes>
        </OrderStateContext.Provider>
    </div>
  );
}
