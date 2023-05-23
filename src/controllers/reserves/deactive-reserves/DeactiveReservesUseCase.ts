import { PrismaClient } from "@prisma/client";
import { deactiveReservesDTO } from "../dto/DeactiveReservesDTO";

export class deactiveReservesUseCase {
    async execute({ id_reserve }: deactiveReservesDTO) {
        const prisma = new PrismaClient();
        const deactiveReserve = await prisma.reserves.update({
            where: {
                id: id_reserve
            },
            data: {
                status_flag: false
            }
        })

        if (!deactiveReserve) {
            return { status: 500, message: "Something wrong happen" }
        } else {
            const updataActionLog = await prisma.reserves_actions_log.create({
                data: {
                    id_reserve: id_reserve,
                    action: 'deactive',
                    create_date: new Date(),
                }
            })
            if (!updataActionLog) {
                return { status: 500, message: "Could not create log" }
            } else {
                return { status: 200, message: "Reserve successfully deactiveded" }
            }
        }
    }
}