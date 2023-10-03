import { PageLayout } from "./components/PageLayout";
import './App.css'
import { Homepage } from "./views/Homepage";
import { InputForm } from "./components/InputForm";

export const App = () => {
  return (
    <InputForm titles={[{
      title: "Felhasználónév",
      inputType: "password"
    }]} onSubmit={(values) => alert(JSON.stringify(values))} />
  );
};