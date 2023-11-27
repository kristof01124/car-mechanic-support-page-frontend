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

async function onChange(value: any, carId: string) {
    await CarController.modifyCar(carId, {
        brand: value.brand,
        serial_number: value.serial_number,
        license_plate: value.license_plate,
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