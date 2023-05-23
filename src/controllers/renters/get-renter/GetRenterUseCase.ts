import { PrismaClient } from "@prisma/client";
import { renterDTO } from "../dto/renterDTO";

export class getRenterUseCase {
    async execute(data: any) {

        var query: any = []
        var count = 0;
        if (data.renter_name !== "") {
            const name = data.renter_name
            query = { ...query, name }
            count = count + 1
        }

        if (data.cnpj !== "") {
            const cnpj = data.cnpj
            query = { ...query, cnpj }
            count = count + 1
        }

        if (data.email !== "") {
            const email = data.email
            query = { ...query, email }
            count = count + 1
        }

        const prisma = new PrismaClient();

        const renterData = await prisma.renters.findFirst({
            where: {
                AND:
                    query
                ,
            }, select: {
                name: true,
                cnpj: true,
                email: true,
                renters_phone: {
                    select: {
                        phone: true,
                    }
                },
                reserves: true
            }
        })

        if (renterData === null && count > 1) {
            return { status: 404, message: "Mismatched parameters" }
        } else if (renterData === null && count <= 1) {
            return { status: 404, message: "Renter not found" }
        } else {
            return { status: 200, message: "Renter finded", renterData }
        }

    }
}