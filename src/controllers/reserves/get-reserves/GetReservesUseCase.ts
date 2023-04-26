import { PrismaClient } from "@prisma/client";
import { reserveDTO } from "../dto/ReservesDTO";

export class getReserveUseCase {
    async execute() {
        const prisma = new PrismaClient();
        const allReserve = await prisma.reserves.findMany({
            select: {
                id: true,
                id_renter: true,
                event_name: true,
                start_date: true,
                final_date: true,
                total_amount: true,
                received_amount: true,
                observation: true,
                create_date: true,
                renters: {
                    select: {
                        name: true,
                        renters_phone: {
                            select: {
                                phone: true
                            }
                        }
                    }
                }
            }
        })

        if (!allReserve) {
            return { status: 400, message: "Something wrong happen" }
        } else {
            return { status: 200, allReserve }
        }
    }
}