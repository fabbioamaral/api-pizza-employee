export interface GetEmployeesResponse {
    message: string,
    employees: Employee[]
}

export interface GetEmployeeResponse {
    message: string,
    employees: Employee
}

export interface Employee {
    id?: number,
    fullName: string,
    role: string,
    salary: number,
    cellphone: string,
    address: string,
    personalPhoto: string
}