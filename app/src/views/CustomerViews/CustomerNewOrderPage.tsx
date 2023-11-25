import { CustomerPageLayout } from "../../components/CustomerPageCompnents/CustomerPageLayout";
import { InputForm } from "../../components/InputForm";
interface CustomerNewOrderPageInterface {
    userID: string
}

export function CustomerNewOrderPage() {
    return (
        <CustomerPageLayout>
            <InputForm title="Új rendelés" inputFormElements={
                [
                    {
                        title: "Autó",
                        inputType: "dropdown",
                        id: "carId"
                    },
                    {
                        title: "Probléma fontossága",
                        inputType: "dropdown",
                        id: "severity"
                    },
                    {
                        title: "Probléma nagyjábóli helye",
                        inputType: "dropdown",
                        id: "placeOfProblem"
                    },
                    {
                        title: "Leírás",
                        inputType: "textarea",
                        id: "description"
                    }
                ]
            } onSubmit={(values) => alert(JSON.stringify(values))}>
                {
                    // API_CALLL: Create new order for a given userID
                }
            </InputForm>
        </CustomerPageLayout>
    )
}