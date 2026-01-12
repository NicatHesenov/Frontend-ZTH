export interface Employee {
  id: number;
  fullName: string;
  position: string;
  isActive: boolean;
}
export interface EmployeeState {
  list: Employee[];
}
