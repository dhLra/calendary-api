import { Request, Response } from "express";
import { updateReservesUseCase } from "./UpdataReservesUseCase";


class updateReservesController {
    async handler(req: Request, res: Response) {
        try {
            const { id_reserve, event_name, start_date, final_date, total_amount, received_amount, balance, observation } = req.body
            console.log(req.body)
            const updateReserveUseCaseInstace = new updateReservesUseCase();
            const result = await updateReserveUseCaseInstace.execute({
                id_reserve, event_name, start_date, final_date, total_amount, received_amount, balance, observation
            })

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

export default updateReservesController