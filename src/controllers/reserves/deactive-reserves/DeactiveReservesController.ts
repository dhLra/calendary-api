import { Request, Response } from "express";
import { deactiveReservesUseCase } from "./DeactiveReservesUseCase";

class deactiveReserveController {
    async handler(req: Request, res: Response) {
        try {
            const { id_reserve } = req.body;
            const deactiveReservesUseCaseInstace = new deactiveReservesUseCase();
            const result = await deactiveReservesUseCaseInstace.execute({ id_reserve })

            if (result.status === 200) {
                return res.status(result.status).json(result)
            } else if (result.status === 500) {
                return res.status(result.status).json({ message: result.message })
            }

        } catch (error) {
            return res.json({ error })
        }
    }
}

export default deactiveReserveController;