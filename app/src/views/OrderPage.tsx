import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"
import { FeedbackController } from "../controller/api/FeedbackController"
import { OrderController } from "../controller/api/OrderController"
import { positionDropdownItems, severityDropdownItems, successDropdownItems } from "../controller/enums"

interface OrderPageInterface {
    orderId: string,
    feedbackId: string,
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

interface OrderInputFormData {
    severity: string,
    approximate_position: string,
    description: string,
    title: string,
    start_time: string,
    end_time: string,
    comment: string,
    is_successfull: string
}

async function onChange(value: OrderInputFormData, orderId: string, feedbackId: string) {
    await OrderController.modifyOrder(orderId, {
        severity: value.severity,
        approximate_position: value.approximate_position,
        description: value.description,
    })
    await FeedbackController.modifyFeedback(feedbackId, {
        title: value.title,
        start_time: value.start_time,
        end_time: value.end_time,
        comment: value.comment,
        is_successful: value.is_successfull.toString() == "SUCCES" ? true : false
    })
    window.location.reload()
}

export function OrderPage(props: OrderPageInterface) {
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Rendelés adatainak szerkesztése" onChange={(value) => onChange(value, props.orderId, props.feedbackId)} parameters={[
                {
                    id: "severity",
                    title: "Probléma fontossága",
                    inputType: "dropdown",
                    isChangable: true,
                    value: props.orderData.severity,
                    dropDownElements: severityDropdownItems
                }, {
                    id: "approximate_position",
                    title: "Nagyjábóli elhelyezkedése a problémának",
                    inputType: "dropdown",
                    isChangable: true,
                    value: props.orderData.approximatePosition,
                    dropDownElements: positionDropdownItems
                }, {
                    id: "description",
                    title: "Leírás",
                    inputType: "text",
                    isChangable: true,
                    value: props.orderData.description
                }, {
                    id: "comment",
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
                    id: "is_successfull",
                    title: "Sikeres a javítás?",
                    inputType: "dropdown",
                    isChangable: props.isMechanic,
                    value: props.orderData.feedback.isSuccesful,
                    dropDownElements: successDropdownItems
                },
            ]} />
        </CustomerPageLayout>
    )
}