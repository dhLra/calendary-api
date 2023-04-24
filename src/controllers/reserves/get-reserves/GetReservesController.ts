import { Request, Response } from "express";
import { getReserveUseCase } from "./GetReservesUseCase";

class getReserveController {
    async handler(req: Request, res: Response) {
        try {
            const getReserveUseCaseInstance = new getReserveUseCase();
            const result = await getReserveUseCaseInstance.execute();

            if(result.status === 200){
                return res.status(result.status).json(result)
            }else if(result.status){
                return res.status(result.status).json({message: result.message})
            }
        } catch (error) {

        }
    }
}

export default getReserveController;