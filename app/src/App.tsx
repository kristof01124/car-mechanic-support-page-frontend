import { PageLayout } from "./components/PageLayout";
import './App.css'
import { Homepage } from "./views/Homepage";
import { InputForm } from "./components/InputForm";
import { Title } from "@mantine/core";
import { UserController } from "./controller/api/UserController";

export const App = () => {
  return (
    <>
      <button onClick={() => {
        alert(
          JSON.stringify(UserController.getAllUsers())
        )
      }}></button >
    </>
  );
};