import { GetOrderDTO } from "./OrderController";
import { deleteBody, getBody, patchBody, postBody, url } from "./constants";

export interface CreateCarDTO {
    brand: string,
    type: string,
    license_plate: string,
    serial_number: string
}

export interface PatchCarDTO {
    brand?: string,
    type?: string,
    license_plate?: string,
    serial_number?: string
}

export interface GetCarDTO extends CreateCarDTO {
    relatedOrders: GetOrderDTO[]
    car_id: number,
}

export class CarController {
    // GET methods
    static async getCarById(id: string): Promise<GetCarDTO> {
        return (await fetch(url + "/Cars/" + id, getBody)).json()
    }


    static async getAllCars(): Promise<GetCarDTO[]> {
        return (await fetch(url + "/Cars", getBody)).json()
    }

    static async getCarByLicensePlate(licensePlate: string): Promise<GetCarDTO> {
        return (await fetch(url + "/Cars/license_plate/" + licensePlate)).json()
    }

    // POST methods
    static async createNewCar(userId: string, body: CreateCarDTO) {
        return await (await fetch(url + "/Users/" + userId + "/Cars", {
            ...postBody,
            body: JSON.stringify(body)
        })
        ).json()
    }

    // PATCH methods
    static async modifyCar(id: string, body: PatchCarDTO) {
        return (await fetch(url + "/Cars/" + id, {
            ...patchBody,
            body: JSON.stringify(body)
        })
        )
    }

    // DELETE methods
    static async deleteCarById(id: string) {
        return (await fetch(url + "/Cars/" + id, {
            ...deleteBody
        })
        )
    }
}