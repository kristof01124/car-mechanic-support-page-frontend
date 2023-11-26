import { Path } from "react-router-dom";
import { CreateFeedbackDTO, GetFeedbackDTO } from "./FeedbackController";
import { patchBody, postBody, deleteBody, getBody, url } from "./constants"


export interface CreateOrderDTO {
    severity: string,
    approximate_position: string,
    description: string
}

export interface PatchOrderDTO {
    severity?: string,
    approximate_position?: string,
    description?: string
}

export interface GetOrderDTO extends CreateOrderDTO {
    relatedFeedback: GetFeedbackDTO,
    order_id: number
}

export class OrderController {
    // GET methods
    static async getOrderById(id: string): Promise<GetOrderDTO> {
        return (await fetch(url + "/Orders/" + id, getBody)).json()
    }


    static async getAllOrders(): Promise<GetOrderDTO[]> {
        return (await fetch(url + "/Orders", getBody)).json()
    }


    // POST methods
    static async createNewOrder(carId: string, body: CreateOrderDTO) {
        return await (await fetch(url + "/Cars/" + carId + "/Orders", {
            ...postBody,
            body: JSON.stringify(body)
        })
        ).json()
    }

    // PATCH methods
    static async modifyOrder(id: string, body: PatchOrderDTO) {
        return await (await fetch(url + "/Orders/" + id, {
            ...patchBody,
            body: JSON.stringify(body)
        })
        ).json()
    }

    // DELETE methods
    static async deleteOrderById(id: string) {
        return (await fetch(url + "/Orders/" + id, {
            ...deleteBody
        })
        )
    }

}