import { PageLayout } from "./components/PageLayout";
import './App.css'
import { InputForm } from "./components/InputForm";
import { Title } from "@mantine/core";
import { LoginPage } from "./views/LoginPage";
import { Homepage } from "./views/Homepage";
import { NewOrderPage } from "./views/NewOrderPage";
import { OrdersPage } from "./views/OrdersPage";
import { NewCarPage } from "./views/NewCarPage";
import { CarPage } from "./views/CarPage";
import { OrderPage } from "./views/OrderPage";
import { UserPage } from "./views/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationPage } from "./views/RegistrationPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/orders/:userID" element={<RegistrationPage />} />
        <Route path="/order/:id" element={<RegistrationPage />} />
        <Route path="/createOrder" element={<RegistrationPage />} />
        <Route path="/cars" element={<RegistrationPage />} />
        <Route path="/car/:id" element={<RegistrationPage />} />
        <Route path="/createCar" element={<RegistrationPage />} />
        <Route path="/user/:id" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
};