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

export const App = () => {
  return (
    <UserPage userData={
      {
        password: "alma",
        email: "kristof01124@gmail.com",
        firstName: "Kristóf",
        lastName: "Tóth",
        userRole: "Mechanic",
        dateOfBirth: "2023-11-11"
      }
    } />
  )
};