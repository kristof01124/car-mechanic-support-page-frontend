import { CarData, OrderData } from "../../Controller";
import { CustomerPageLayout } from "../../components/CustomerPageCompnents/CustomerPageLayout";
import { OrderFeedbackList } from "../../components/CustomerPageCompnents/OrderFeedbackList";
import { ViewList } from "../../components/ViewList";

interface CustomerOrderPageInterface {
    id: string,
}

export function CustomerOrderPage(props: CustomerOrderPageInterface) {
    return (
        <>
            <CustomerPageLayout>
                <h1>Rendelés: {props.id}</h1>
                <ViewList onClicked={(id) => alert(id)} elements={[
                    {
                        id: "id",
                        name: "Rendelés azonosító",
                        value: "fafasfsf"
                    } // API_CALL: Get data of order based on id
                ]} />
                <OrderFeedbackList feedbacks={
                    [
                        {
                            title: "TITLE",
                            start_time: "2022.01.01",
                            end_time: "2023.12.14",
                            comment: "fédlafkladsnféadslnfaskdlnféaslfksadf"
                        }
                    ]
                } />
            </CustomerPageLayout>
        </>
    )
}