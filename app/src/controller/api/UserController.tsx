import { GetCarDTO } from "./CarController"
import { deleteBody, getBody, patchBody, postBody, url } from "./constants"

export interface CreateUserDTO {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    phone_number: string,
    email_address: string,
    password: string,
    user_role?: string
}

export interface PatchUserDTO {
    first_name?: string,
    last_name?: string,
    date_of_birth?: string,
    phone_number?: string,
    email_address?: string,
    password?: string,
    user_role?: string
}

export interface GetUserDto {
    first_name: string,
    last_name: string,
    date_of_birth: string,
    phone_number: string,
    email_address: string,
    password: string,
    user_role: string | undefined,
    user_id: number,
    ownedCars: GetCarDTO[]
}

export class UserController {

    // GET methods
    static async getUserById(id: string): Promise<GetUserDto> {
        return (await fetch(url + "/Users/" + id, getBody)).json()
    }

    static async getUserByEmail(email: string): Promise<GetUserDto> {
        return (await fetch(url + "/Users/email/" + email, getBody)).json()
    }

    static async getAllUsers(): Promise<GetUserDto[]> {
        return (await fetch(url + "/Users", getBody)).json()
    }


    // POST methods
    static async createNewUser(body: CreateUserDTO): Promise<GetUserDto> {
        return await (await fetch(url + "/Users", {
            ...postBody,
            body: JSON.stringify(body)
        })
        ).json()
    }

    // PATCH methods
    static async modifyUser(id: string, body: PatchUserDTO) {
        return (await fetch(url + "/Users/" + id, {
            ...patchBody,
            body: JSON.stringify(body)
        })
        )
    }

    // DELETE methods
    static async deleteUserById(id: string) {
        return (await fetch(url + "/Users/" + id, {
            ...deleteBody
        })
        )
    }

}