import { GetOrderDTO } from "./OrderController";

export interface CreateCarDTO {
    brand: string,
    type: string,
    license_plate: string,
    serial_number: string
}

export interface GetCarDTO {
    relatedOrders: GetOrderDTO[]
    car_id: number,
}