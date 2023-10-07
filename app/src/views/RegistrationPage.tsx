import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";


export function RegistrationPage() {
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <InputForm title="Regisztráció" onSubmit={(values) => alert(JSON.stringify(values))} titles={
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
                    },
                    {
                        title: "Jelszó mégegyszer",
                        id: "password2",
                        inputType: "password"
                    },
                    {
                        title: "E-mail cím",
                        id: "email",
                        inputType: "e-mail"
                    },
                    {
                        title: "Születési dátum",
                        id: "birthdate",
                        inputType: "date"
                    }
                ]
            }>
                <a>Van már átlagos fiókod? Jelentkezz be!</a>
            </InputForm>
        </PageLayout>
    )
}