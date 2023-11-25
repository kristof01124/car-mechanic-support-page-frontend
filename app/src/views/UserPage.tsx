import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"

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

export function UserPage(props: UserPageInterface) {
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Felhasználó adatainak szerkesztése" onChange={(obj: any) => { alert(JSON.stringify(obj)); return true }} parameters={[
                {
                    id: "email",
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