import { CarData, OrderData } from "../../Controller";
import { CustomerPageLayout } from "../../components/CustomerPageCompnents/CustomerPageLayout";
import { ViewList } from "../../components/ViewList";

interface CustomerUserPageInterface {
    id: string,
}

export function CustomerUserPage(props: CustomerUserPageInterface) {
    return (
        <CustomerPageLayout>
            <h1>Fiók</h1>
            <ViewList onClicked={(id) => alert(id)} elements={[
                {
                    id: "id",
                    name: "Rendelés azonosító",
                    value: "fafasfsf"
                } // API_CALL: Get userdata based on userID
            ]} />
        </CustomerPageLayout>
    )
}