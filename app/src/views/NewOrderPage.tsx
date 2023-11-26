import { NavigateFunction, useNavigate } from "react-router-dom";
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout";
import { InputForm } from "../components/InputForm";
import { CreateOrderDTO, GetOrderDTO, OrderController } from "../controller/api/OrderController";
import { FeedbackController } from "../controller/api/FeedbackController";
import { positionDropdownItems, severityDropdownItems } from "../controller/enums";
import { getCurrentUser, setCurrentUser } from "../controller/session/session";
import { UserController } from "../controller/api/UserController";
interface NewOrderInterface {
    userID: number
}

interface OrderData {
    carId: string,
    severity: string,
    placeOfProblem: string,
    description: string
}

async function onSubmit(data: OrderData, navigate: NavigateFunction) {
    var order = await OrderController.createNewOrder(data.carId, {
        severity: data.severity,
        approximate_position: data.placeOfProblem,
        description: data.description
    })
    if (order.error != undefined) {
        alert(order.message)
        return
    }
    setCurrentUser(await UserController.getUserById(getCurrentUser().user_id.toString()))
    navigate("/order/" + order.order_id)
}

export function NewOrderPage() {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <InputForm title="Új rendelés" inputFormElements={
                [
                    {
                        title: "Autó",
                        inputType: "dropdown",
                        id: "carId",
                        dropDownElements: getCurrentUser().ownedCars.map((car) => {
                            return {
                                id: car.car_id.toString(),
                                title: car.license_plate
                            }
                        })
                    },
                    {
                        title: "Probléma fontossága",
                        inputType: "dropdown",
                        id: "severity",
                        dropDownElements: severityDropdownItems
                    },
                    {
                        title: "Probléma nagyjábóli helye",
                        inputType: "dropdown",
                        id: "placeOfProblem",
                        dropDownElements: positionDropdownItems
                    },
                    {
                        title: "Leírás",
                        inputType: "textarea",
                        id: "description"
                    }
                ]
            } onSubmit={(values) => onSubmit(values as OrderData, navigate)}>
            </InputForm>
        </CustomerPageLayout>
    )
}