export enum EIncome {
  SALARY = 'salary',
  BONUS = 'bonus',
  REVENUE = 'revenue',
  INVESTMENT = 'investment',
  OTHER = 'other',
}

export const incomeLabels: Record<EIncome, string> = {
  [EIncome.SALARY]: 'Lương',
  [EIncome.BONUS]: 'Thưởng',
  [EIncome.REVENUE]: 'Doanh thu',
  [EIncome.INVESTMENT]: 'Đầu tư',
  [EIncome.OTHER]: 'Khác',
};

export const incomeOptions = Object.entries(incomeLabels).map(([key, value]) => ({
  label: value,
  value: key,
}));
