import { PrismaClient } from "@prisma/client";
import { reserveDTO } from "../dto/ReservesDTO";

export class postReserveUseCase {
    async execute(
        { id_renter,
            event_name,
            start_date,
            final_date,
            total_amount,
            balance,
            received_amount,
            observation,
            create_by }: reserveDTO) {

        const prisma = new PrismaClient();
        const newReserve = await prisma.reserves.create({
            data: {
                id_renter: id_renter,
                event_name: event_name,
                start_date: start_date,
                final_date: final_date,
                total_amount: total_amount,
                received_amount: received_amount,
                balance: balance + received_amount,
                observation: observation,
                create_by: create_by,
                create_date: new Date()
            }
        })

        console.log(newReserve)
        if(!newReserve){
            console.log(newReserve)
            return {status: 500, message:"Something wrong happen"}
        } else {
            console.log(newReserve)
            return {status: 200, message:"Reserve successfully createded"}
        }
    }
}