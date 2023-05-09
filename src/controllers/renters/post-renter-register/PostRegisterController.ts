import { Request, Response } from "express";
import { postRenterRegisterUseCase } from "./PostRegisterUseCase";
import { getReserveUseCase } from "../../reserves/get-reserves/GetReservesUseCase";

class postRenterRegisterController {
    async handler(req: Request, res: Response) {
        try {
            const { renter_name, cnpj, phone, email } = req.body
            const postRenterRegisterUseCaseInstance = new postRenterRegisterUseCase();
            const result = await postRenterRegisterUseCaseInstance.execute({ renter_name, cnpj, phone, email });

            if(result.status === 200){
                return res.status(result.status).json(result)
            } else if (result.status === 500){
                return res.status(result.status).json({message: result.message})
            }
        } catch (error) {
            return res.json({ error })
        }
    }
}

export default postRenterRegisterController