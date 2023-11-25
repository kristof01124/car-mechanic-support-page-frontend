import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout";
import { InputForm } from "../components/InputForm";
interface NewCarInterface {
    userID: number
}

export function NewCarPage(props: NewCarInterface) {
    return (
        <CustomerPageLayout>
            <InputForm title="Új autó hozáadása" inputFormElements={
                [
                    {
                        title: "Márka",
                        inputType: "text",
                        id: "brand"
                    },
                    {
                        title: "Típus",
                        inputType: "text",
                        id: "type"
                    },
                    {
                        title: "Rendszám",
                        inputType: "text",
                        id: "license_plate"
                    },
                    {
                        title: "Alvázszám",
                        inputType: "text",
                        id: "serial_number"
                    }
                ]
            } onSubmit={(values) => alert(JSON.stringify(values))}>
                {
                    // API_CALLL: Create new car for a given userID
                }
            </InputForm>
        </CustomerPageLayout>
    )
}