
export interface DailyExpenseModel {
    day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    amount: number;
}

export interface ExpenseModel {
    balance: number;
    month: number;
    fromLastMonthPercentage: number;
    lastSevenDays: DailyExpenseModel[];    
}