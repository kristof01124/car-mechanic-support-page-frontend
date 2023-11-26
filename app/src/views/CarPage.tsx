import { useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"
import { CarController } from "../controller/api/CarController"

interface CarPageInterface {
    carId: string
    carData: CarData,
}

interface CarData {
    brand: string,
    type: string,
    licensePlate: string,
    serialNumber: string
}

async function onChange(value: CarData, carId: string) {
    await CarController.modifyCar(carId, {
        brand: value.brand,
        serial_number: value.serialNumber,
        license_plate: value.licensePlate,
        type: value.type
    })
    window.location.reload();
}

export function CarPage(props: CarPageInterface) {
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Autó adatainak szerkesztése" onChange={(obj: any) => { onChange(obj, props.carId); }} parameters={[
                {
                    id: "brand",
                    title: "Márka",
                    inputType: "text",
                    isChangable: true,
                    value: props.carData.brand,

                }, {
                    id: "type",
                    title: "Típus",
                    inputType: "text",
                    isChangable: true,
                    value: props.carData.type,

                }, {
                    id: "license_plate",
                    title: "Rendszám",
                    inputType: "text",
                    isChangable: true,
                    value: props.carData.licensePlate,

                }, {
                    id: "serial_number",
                    title: "Alvázszám",
                    inputType: "text",
                    isChangable: true,
                    value: props.carData.serialNumber,

                },
            ]} />
        </CustomerPageLayout>
    )
}