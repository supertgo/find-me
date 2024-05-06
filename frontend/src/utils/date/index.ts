export function yearsMonthsSinceNow(date: string) {
  const specifiedDate: Date = new Date(date);
  const currentDate: Date = new Date();
  const differenceMs: number = currentDate.getTime() - specifiedDate.getTime();
  const years: number = differenceMs / (1000 * 60 * 60 * 24 * 365.25);

  const fullYears: number = Math.floor(years);

  const remainingMonths: number = Math.floor((years - fullYears) * 12);

  return {
    years: fullYears,
    months: remainingMonths
  };
}
