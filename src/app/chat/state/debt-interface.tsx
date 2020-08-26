export interface UserData {
    debt: number
    name: string
    prolongation: number
    returnDate: string
    overdue: number
}

export type Status = 'New' | 'Processing' | 'Reject'
    | 'Accept' | 'Active' | 'Closed' | 'Canceled';
