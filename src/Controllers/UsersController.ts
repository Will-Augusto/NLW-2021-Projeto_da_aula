import { json } from "body-parser";
import {Request, response, Response} from "express"
import { UserService } from "../Services/UsersService"



class UsersController {
    async create(request: Request, response: Response): Promise<Response>{
        const { email } = request.body;

        const usersService = new UserService();

        const user = await usersService.create(email)

        return response.json(user)
    }
}

export {UsersController}