import { Request, Response } from "express"
import { authUseCase } from "./AuthUseCase";


class authController {
    async handler(req: Request, res: Response) {
        try {
            
            const { email, password } = req.body;
            const authUseCaseInstace = new authUseCase();
            const result = await authUseCaseInstace.execute({ email, password });

            console.log(result)
            if(result.status === 200){
                return res.status(200).json(result)
            } else if(result.status === 401){
                return res.status(401).json({message: result.message})
            } else if(result.status === 404){
                return res.status(404).json({message: result.message})
            }

        } catch (error) {
            return res.json({error:'algo de errado'})
        }
    }
}

export default authController;