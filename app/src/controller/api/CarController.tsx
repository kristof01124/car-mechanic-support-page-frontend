import axios from "axios";
import { url } from "./constants"
// String brand, String type, String license_plate, String serial_number
interface CarDTO {
    car_id?: number,
    brand?: string,
    type?: string,
    license_plate?: string,
    serian_number?: string
}

export class CarController {
    static async getCars(): Promise<CarDTO[]> {
        const response = await axios.get(url + '/Cars')
        return response.data
    }

    static async getCarById(id: number): Promise<CarDTO> {
        const response = await axios.get(url + '/Cars/' + id)
        return response.data
    }

    static async createCar(carDTO: CarDTO) {
        const response = await axios.post(url + '/Cars', carDTO)
    }

    static async updateCarById(id: number, carDTO: CarDTO): Promise<CarDTO> {
        const response = await axios.patch(url + '/Cars/' + id, carDTO)
        return response.data
    }



    static async deleteCarById(id: number) {
        const response = await axios.delete(url + '/Cars/' + id)
    }
}