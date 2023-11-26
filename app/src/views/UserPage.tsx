import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"
import { PatchUserDTO, UserController } from "../controller/api/UserController"
import { getCurrentUser, setCurrentUser } from "../controller/session/session"

interface UserData {
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    userRole: string
}

interface UserPageInterface {
    userData: UserData
}

async function onChange(value: PatchUserDTO, navigate: NavigateFunction) {
    await UserController.modifyUser(getCurrentUser().user_id.toString(), value)
    setCurrentUser(await UserController.getUserById(getCurrentUser().user_id.toString()))
    window.location.reload();
}

export function UserPage(props: UserPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Felhasználó adatainak szerkesztése" onChange={(value: PatchUserDTO) => onChange(value, navigate)} parameters={[
                {
                    id: "email_address",
                    title: "E-mail cím",
                    inputType: "text",
                    isChangable: false,
                    value: props.userData.email,
                }, {
                    id: "password",
                    title: "Jelszó",
                    inputType: "password",
                    isChangable: true,
                    value: props.userData.password.replaceAll(/./gi, "\*"),
                }, {
                    id: "last_name",
                    title: "Családnév",
                    inputType: "text",
                    isChangable: true,
                    value: props.userData.lastName,
                }, {
                    id: "first_name",
                    title: "Utónév",
                    inputType: "text",
                    isChangable: true,
                    value: props.userData.firstName,
                }, {
                    id: "date_of_birth",
                    title: "Születési idő",
                    inputType: "date",
                    isChangable: true,
                    value: props.userData.dateOfBirth,
                }, {
                    id: "user_role",
                    title: "Felhasználó típusa",
                    inputType: "date",
                    isChangable: false,
                    value: props.userData.userRole,
                }
            ]} />
        </CustomerPageLayout>
    )
}