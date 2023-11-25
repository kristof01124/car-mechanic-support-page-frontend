
import { MyDropdownButton, MyDropdownButtonElementInterface } from "./components/MyDropdownButton"

export interface CarData {
    brand: string,
    type: string,
    licensePlate: string,
    serialNumber: string
}

export interface OrderData {
    severity: string,
    position: string,
    description: string,
}