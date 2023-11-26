import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";
import { CreateUserDTO, UserController } from "../controller/api/UserController";
import { setCurrentUser } from "../controller/session/session";

async function onSubmit(values: CreateUserDTO, navigate: NavigateFunction) {
    values.user_role = "CUSTOMER"
    setCurrentUser(await UserController.createNewUser(values))
    navigate("/orders")
}

export function RegistrationPage() {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos autószerelő-műhely átlagos weboldala"}>
            <InputForm title="Regisztráció" onSubmit={(values) => onSubmit(values as CreateUserDTO, navigate)} inputFormElements={
                [
                    {
                        title: "E-mail cím",
                        id: "email_address",
                        inputType: "e-mail"
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
                        title: "Születési dátum",
                        id: "date_of_birth",
                        inputType: "date"
                    },
                    {
                        title: "Családnév",
                        id: "last_name",
                        inputType: "text"
                    },
                    {
                        title: "Utónév",
                        id: "first_name",
                        inputType: "text"
                    },
                    {
                        title: "Telefonszám",
                        id: "phone_number",
                        inputType: "text"
                    }
                ]
            }>
                <a>Van már átlagos fiókod? <Link to={"/login"}>Jelentkezz be!</Link></a>
            </InputForm>
        </PageLayout>
    ) // API_CALL: register new user
}