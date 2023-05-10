import { PrismaClient } from "@prisma/client";
import { renterDTO } from "../dto/renterDTO";

export class postRenterRegisterUseCase {
    async execute({ renter_name, cnpj, phone, email }: renterDTO) {
        const prisma = new PrismaClient();
        const registerRenter = await prisma.renters.create({
            data: {
                name: renter_name,
                cnpj: cnpj,
                email: email,
                create_date: new Date()
            }
        })

        const registerRenterPhone = await prisma.renters_phone.create({
            data: {
                id_renter: registerRenter.id,
                phone: phone,
                create_date: new Date()
            }
        })

        if(registerRenter && registerRenterPhone){
            return {status: 200, message: "Renter successfully createded"}
        } else {
            return {status: 500, message:"Something wrong happen"}
        }
    }
}