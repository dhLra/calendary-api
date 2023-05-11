import { Request, Response } from "express";
import { getRenterUseCase } from "./GetRenterUseCase";

class getRenterController {
    async handler(req: Request, res: Response) {
        try {
            const data = req.body

            const getRenterUseCaseInstace = new getRenterUseCase();
            const result = await getRenterUseCaseInstace.execute(data)

            if (result.status === 200) {
                return res.status(result.status).json(result)
            } else if (result.status === 404) {
                return res.status(result.status).json({ message: result.message })
            }
        } catch (error) {
            return res.json({ error })
        }
    }
}

export default getRenterController