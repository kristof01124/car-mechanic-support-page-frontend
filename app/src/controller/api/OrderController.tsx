import { GetFeedbackDTO } from "./FeedbackController";
import { patchBody, postBody, deleteBody, getBody, url } from "./constants"


export interface CreateOrderDTO {
    relatedFeedback: GetFeedbackDTO,
    severity: string,
    approximate_position: string,
    description: string
}

export interface GetOrderDTO extends CreateOrderDTO {
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
    static async createNewOrder(body: CreateOrderDTO) {
        return (await fetch(url + "/Orders/", {
            ...postBody,
            body: JSON.stringify(body)
        })
        )
    }

    // PATCH methods
    static async modifyOrder(id: string, body: CreateOrderDTO) {
        return (await fetch(url + "/Orders/" + id, {
            ...patchBody,
            body: JSON.stringify(body)
        })
        )
    }

    // DELETE methods
    static async deleteOrderById(id: string) {
        return (await fetch(url + "/Orders/" + id, {
            ...deleteBody
        })
        )
    }

}