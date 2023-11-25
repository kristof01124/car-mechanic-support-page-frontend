import { InputForm } from "../../components/InputForm";
import { CustomerPageLayout } from "../../components/CustomerPageCompnents/CustomerPageLayout";
import { ViewList } from "../../components/ViewList";

interface CustomerOrdersPageInterface {
    userID: string
}

export function CustomerOrdersPage() {
    return (
        <CustomerPageLayout>
            <h1>Rendelések</h1>
            <ViewList onClicked={(id) => alert(id)} elements={[
                {
                    id: "id",
                    name: "Rendelés azonosító",
                    value: "fafasfsf"
                } // API_CALL: Get all orders for a given userID
            ]} />
        </CustomerPageLayout>
    )
}