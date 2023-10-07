import { InputForm } from "../../components/InputForm";
import { CustomerPageLayout } from "../../components/CustomerPageCompnents/CustomerPageLayout";


export function CustomerNewOrderPage() {
    return (
        <CustomerPageLayout>
            <InputForm title="Új rendelés" titles={
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
            </InputForm>
        </CustomerPageLayout>
    )
}