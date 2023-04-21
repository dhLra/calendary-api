import { PrismaClient } from "@prisma/client";
import { authDTO } from "./dto/authDTO";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { Secret } from "jsonwebtoken";


export class authUseCase {
    async execute({ email, password }: authDTO) {

        const prisma = new PrismaClient();
        const auth = await prisma.users.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password_hash: true
            }
        })

        if (!auth) {
            return { status: 404, message: "User not found" }
        } else {
            const isAuth = await bcrypt.compare(password, auth.password_hash)
            console.log(isAuth)
            if (!isAuth) {
                return { status: 401, message: "Aunauthorized" }
            } else {
                const token = jwt.sign({ userName: auth.name }, process.env.SECRET as Secret, { expiresIn: 3000 })

                return {
                    id: auth.id,
                    name: auth.name,
                    email: auth.email,
                    status: 200,
                    message: "Successfully logged in",
                    token
                }
            }
        }
    }
}