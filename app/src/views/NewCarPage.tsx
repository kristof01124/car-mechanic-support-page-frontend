import { NavigateFunction, useNavigate } from "react-router-dom";
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout";
import { InputForm } from "../components/InputForm";
import { CarController, CreateCarDTO, GetCarDTO } from "../controller/api/CarController";
import { getCurrentUser, setCurrentUser } from "../controller/session/session";
import { UserController } from "../controller/api/UserController";
interface NewCarInterface {
    userID: number
}

async function onSubmit(userId: string, value: CreateCarDTO, navigate: NavigateFunction) {
    if (value.brand == undefined
        || value.license_plate == undefined
        || value.serial_number == undefined
        || value.type == undefined) {
        alert("Please fill in all the values!")
        return;
    }
    var data: any = await CarController.createNewCar(userId, value)
    if (data.error != undefined) {
        alert(data.message)
        return
    }
    setCurrentUser(await UserController.getUserById(getCurrentUser().user_id.toString()))
    navigate("/car/" + data.car_id)
}

export function NewCarPage(props: NewCarInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <InputForm submitButtonText="Hozzáad" title="Új autó hozáadása" inputFormElements={
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
            } onSubmit={(value: any) => onSubmit(getCurrentUser().user_id.toString(), value, navigate)}>
            </InputForm>
        </CustomerPageLayout>
    )
}