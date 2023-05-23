import { PrismaClient } from "@prisma/client";
import { reserveDTO } from "../dto/ReservesDTO";

export class getReservesPoolUseCase {
    async execute(data: any) {


        var query: any = []
        var count = 0;
        if (data.reserve_number !== "") {
            const id = data.reserve_number
            query = { ...query, id }
            count = count + 1
        }

        if (data.renter_name !== "") {
            const name = data.renter_name
            query = { ...query, renters: { name } }
            count = count + 1
        }

        if (data.start_date !== "") {
            const start_date = data.start_date
            query = { ...query, start_date }
            count = count + 1
        }

        if (data.create_by !== "") {
            const name = data.create_by
            query = { ...query, users: { name } }
            count = count + 1
        }

        if (data.event_name !== "") {
            const event_name = data.event_name
            query = { ...query, event_name }
            count = count + 1
        }


        const prisma = new PrismaClient();
        const reservesPool = await prisma.reserves.findMany({
            where: {
                AND: query,
                status_flag: true
            }, select: {
                id: true,
                event_name: true,
                create_date: true,
                final_date: true,
                start_date: true,
                total_amount: true,
                balance: true,
                observation: true,
                received_amount: true,
                renters: {
                    select: {
                        name: true,
                        renters_phone: {
                            select: {
                                phone: true
                            }
                        }
                    }

                },
                users: {
                    select: {
                        name: true,
                    }
                }
            }
        })

        if (reservesPool.length === 0 && count > 1) {
            return { status: 404, message: "Mismatched parameters" }
        } else if (reservesPool.length === 0 && count <= 1) {
            return { status: 404, message: "Reserve not found" }
        } else {
            return { status: 200, message: "Reserve finded", reservesPool }
        }


    }
}