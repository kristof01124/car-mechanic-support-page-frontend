import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"

interface OrderPageInterface {
    orderData: OrderData,
    isMechanic: boolean
}

interface FeedbackData {
    title: string,
    startTime: string,
    endTime: string,
    comment: string,
    isSuccesful: boolean
}

interface OrderData {
    severity: string,
    approximatePosition: string,
    description: string,
    feedback: FeedbackData
}

export function OrderPage(props: OrderPageInterface) {
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Autó adatainak szerkesztése" onChange={(obj: any) => { alert(JSON.stringify(obj)); return true }} parameters={[
                {
                    id: "severity",
                    title: "Probléma fontossága",
                    inputType: "dropdown",
                    isChangable: true,
                    value: props.orderData.severity,

                }, {
                    id: "approximate_position",
                    title: "Nagyjábóli elhelyezkedése a problémának",
                    inputType: "dropdown",
                    isChangable: true,
                    value: props.orderData.approximatePosition,

                }, {
                    id: "description",
                    title: "Leírás",
                    inputType: "text",
                    isChangable: true,
                    value: props.orderData.description,

                }, {
                    id: "feedback",
                    title: "Visszajelzés",
                    inputType: "textarea",
                    isChangable: props.isMechanic,
                    value: props.orderData.feedback.comment,
                }, {
                    id: "start_time",
                    title: "Szerelés kezdeti ideje",
                    inputType: "date",
                    isChangable: props.isMechanic,
                    value: props.orderData.feedback.startTime,
                }, {
                    id: "end_time",
                    title: "Szerelés végének ideje",
                    inputType: "date",
                    isChangable: props.isMechanic,
                    value: props.orderData.feedback.endTime,
                },
                {
                    id: "is_successful",
                    title: "Sikeres a javítás?",
                    inputType: "dropdown",
                    isChangable: props.isMechanic,
                    value: props.orderData.feedback.isSuccesful,
                },
            ]} />
        </CustomerPageLayout>
    )
}