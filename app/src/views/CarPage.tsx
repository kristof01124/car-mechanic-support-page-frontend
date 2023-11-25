import { CustomerPageLayout } from "../components/CustomerPageCompnents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"

interface CarPageInterface {
    carData: CarData,
}

interface CarData {
    brand: string,
    type: string,
    licensePlate: string,
    serialNumber: string
}

export function CarPage(props: CarPageInterface) {
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Autó adatainak szerkesztése" onChange={(obj: any) => { alert(JSON.stringify(obj)); return true }} parameters={[
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