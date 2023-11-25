import { PageLayout } from "./components/PageLayout";
import './App.css'
import { Homepage } from "./views/Homepage";
import { InputForm } from "./components/InputForm";
import { Title } from "@mantine/core";

export const App = () => {
  return (
    <InputForm title="Bejelentkezés" titles={
      [{
        title: "Felhasználónév",
        id: "username",
        inputType: "text",
      },
      {
        title: "Jelszó",
        id: "password",
        inputType: "password"
      }
      ]
    } onSubmit={(values) => alert(JSON.stringify(values))} />
  );
};