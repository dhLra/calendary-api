import { PrismaClient } from "@prisma/client";
import { renterDTO } from "../dto/renterDTO";

export class getRenterUseCase {
    async execute({ renter_name, cnpj, email }: renterDTO) {
        const prisma = new PrismaClient();
        const renterData = await prisma.renters.findFirst({
            where: {
                OR: [{
                    name: renter_name,
                },
                {
                    cnpj: cnpj,
                },
                {
                    email: email
                }
                ],
            }, select: {
                name: true,
                cnpj: true,
                email: true,
                renters_phone: {
                    select: {
                        phone: true,
                    }
                }
            }
        })

// tem que ser feita uma checagem para caso o usuario mande mais de um paramentro para busca
// suugiro que seja feito um loop com para verificar os campos e montar o query do where

        if (renterData) {
            return { status: 200, message: "Renter finded", renterData }
        } else {
            return { status: 404, message: "Renter not found" }
        }

    }
}