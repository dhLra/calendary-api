export interface reserveDTO {
    id_renter: number,
    event_name: string,
    start_date: Date,
    final_date: Date,
    total_amount: number,
    received_amount: number,
    balance: number,
    observation: string,
    create_by: number,
}