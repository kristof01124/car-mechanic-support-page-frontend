import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";

export function LoginPage() {
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <InputForm title="Bejelentkezés" onSubmit={(values) => alert(JSON.stringify(values))} titles={
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
                <a>Nincs még fiókod? Legyél átlagos! Regisztrálj!</a> 
            </InputForm>
        </PageLayout>
    ) // TODO: Setup routing for the link
}