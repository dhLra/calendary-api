import { Request, Response } from "express";
import { getReservesPoolUseCase } from "./GetReservesPoolUseCase";

class getReservesPoolController {
    async handler(req: Request, res: Response) {
        try {
            const data = req.body
            const getReservesPoolUseCaseInstace = new getReservesPoolUseCase();
            const result = await getReservesPoolUseCaseInstace.execute(data);


            if (result.status === 200) {
                return res.status(result.status).json(result)
            } else if (result.status === 404) {
                return res.status(result.status).json(result)
            }
        } catch (error) {
            return res.json({ error })
        }
    }
}

export default getReservesPoolController;