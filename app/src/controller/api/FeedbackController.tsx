import { deleteBody, getBody, patchBody, postBody, url } from "./constants"

export interface CreateFeedbackDTO {
    title: string,
    start_time: string | null,
    end_time: string | null,
    comment: string,
    is_successful: boolean
}

export interface PatchFeedbackDTO {
    title?: string,
    start_time?: string,
    end_time?: string,
    comment?: string,
    is_successful?: boolean
}

export interface GetFeedbackDTO extends CreateFeedbackDTO {
    feedback_id: number
}

export class FeedbackController {
    // GET methods
    static async getFeedbackById(id: string): Promise<GetFeedbackDTO> {
        return (await fetch(url + "/Feedbacks/" + id, getBody)).json()
    }


    static async getAllFeedbacks(): Promise<GetFeedbackDTO[]> {
        return (await fetch(url + "/Feedbacks", getBody)).json()
    }


    // POST methods
    static async createNewFeedback(orderId: string, body: CreateFeedbackDTO) {
        return (await fetch(url + "/Orders/" + orderId + "/Feedbacks", {
            ...postBody,
            body: JSON.stringify(body)
        })
        )
    }

    // PATCH methods
    static async modifyFeedback(id: string, body: PatchFeedbackDTO) {
        return await (await fetch(url + "/Feedbacks/" + id, {
            ...patchBody,
            body: JSON.stringify(body)
        })
        ).json()
    }

    // DELETE methods
    static async deleteFeedbackById(id: string) {
        return (await fetch(url + "/Feedbacks/" + id, {
            ...deleteBody
        })
        )
    }
}