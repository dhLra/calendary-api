import { PrismaClient } from "@prisma/client";
import { updateReservesDTO } from "../dto/UpdateReservesDTO";

export class updateReservesUseCase {
    async execute({ id_reserve,
        event_name,
        start_date,
        final_date,
        total_amount,
        received_amount,
        balance,
        observation }: updateReservesDTO) {

        const prisma = new PrismaClient();
        const dataUpdateReserve = await prisma.reserves.findFirst({
            where: {
                id: id_reserve
            },
            select: {
                received_amount: true
            }
        })

        console.log("1",dataUpdateReserve)
        var update = {}

        if(dataUpdateReserve){
                   const updateReserve = await prisma.reserves.update({
            where: {
                id: id_reserve
            },
            data: {
                event_name: event_name,
                start_date: start_date,
                final_date: final_date,
                total_amount: total_amount,
                received_amount: dataUpdateReserve.received_amount + received_amount,
                balance: balance - received_amount,
                observation: observation
            }
        }) 

            update = updateReserve    
            console.log("2", update) 
        }

        if (!update) {
            return { status: 500, message: "Something wrong happen" }
        } else {
            const updataActionLog = await prisma.reserves_actions_log.create({
                data: {
                    id_reserve: id_reserve,
                    action: 'edited',
                    create_date: new Date(),
                }
            })
            if (!updataActionLog) {
                return { status: 500, message: "Could not create log" }
            } else {
                return { status: 200, message: "Reserve successfully updated" }
            }
        }
    }
}