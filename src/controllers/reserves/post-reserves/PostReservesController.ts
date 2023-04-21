import { Request, Response } from "express"
import { postReserveUseCase } from "./PostReservesUseCase";


class postReserveController {
    async handler(req: Request, res: Response) {
        try {

            const { id_renter, event_name, start_date, final_date, total_amount, received_amount, create_by } = req.body;
            const postReserveUseCaseInstace = new postReserveUseCase();
            const result = await postReserveUseCaseInstace.execute(
                {
                    id_renter,
                    event_name,
                    start_date,
                    final_date,
                    total_amount,
                    received_amount,
                    create_by
                });

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

export default postReserveController;