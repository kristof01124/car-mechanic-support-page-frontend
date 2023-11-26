import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"
import { CarController } from "../controller/api/CarController"

interface CarsPageInterface {
    licensePlates: string[]
}

async function onclick(licensePlate: string, navigate: NavigateFunction) {
    navigate("/car/" + (await CarController.getCarByLicensePlate(licensePlate)).car_id)
}

export function CarsPage(props: CarsPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <ItemList IDs={props.licensePlates} onClick={(id) => onclick(id, navigate)} />
            <button onClick={() => navigate("/createCar")}>Új autó hozzáadása</button>
        </CustomerPageLayout>
    )
}