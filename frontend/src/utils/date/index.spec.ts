import { yearsMonthsSinceNow, experienceDate } from './index';

type ExperienceDateProps = {
	startDate: string;
	endDate: string | null;
	isCurrent: number;
};

describe('yearsMonthsSinceNow()', () => {
	it('should return 0 years and 0 months for the current date', () => {
		const result = yearsMonthsSinceNow(new Date().toISOString());
		expect(result).toEqual({ years: 0, months: 0 });
	});

	it('should return 1 year and 0 months for a date exactly one year ago', () => {
		const oneYearAgo = new Date();
		oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
		const result = yearsMonthsSinceNow(oneYearAgo.toISOString());
		expect(result).toEqual({ years: 1, months: 0 });
	});
});

describe('experienceDate()', () => {
	it('should return correct formatted strings for a given start and end date', () => {
		const props: ExperienceDateProps = {
			startDate: '2020-01-02',
			endDate: '2021-01-02',
			isCurrent: 0,
		};
		const result = experienceDate(props);
		expect(result).toEqual(`jan/2020 - jan/2021 (1 ano)`);
	});
});
