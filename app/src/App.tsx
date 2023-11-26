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
import { CreateOrder, FetchCarData, FetchCarsForUser, FetchOrderData, FetchOrdersForUser, CreateCar, EditUserData } from "./controller/fetchers/Fetchers";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/orders/" Component={FetchOrdersForUser} />
        <Route path="/order/:id" Component={FetchOrderData} />
        <Route path="/createOrder/" Component={CreateOrder} />
        <Route path="/cars/" Component={FetchCarsForUser} />
        <Route path="/car/:id" Component={FetchCarData} />
        <Route path="/createCar/" Component={CreateCar} />
        <Route path="/user/" Component={EditUserData} />
      </Routes>
    </BrowserRouter>
  )
};