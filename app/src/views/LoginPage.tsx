import { Link } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";

export function LoginPage() {
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <InputForm title="Bejelentkezés" onSubmit={(values) => alert(JSON.stringify(values))} inputFormElements={
                [
                    {
                        title: "Felhasználónév",
                        id: "username",
                        inputType: "text"
                    },
                    {
                        title: "Jelszó",
                        id: "password",
                        inputType: "password"
                    }
                ]
            }>
                <a>Nincs még fiókod? Legyél átlagos! <Link to={"/register"}>Regisztrálj!</Link></a>
            </InputForm>
        </PageLayout>
    ) // API_CALL: Check login for user data
}