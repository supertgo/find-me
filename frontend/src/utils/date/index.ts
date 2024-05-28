import { format, differenceInMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type ExperienceDateProps = {
	startDate: string;
	endDate: string | null;
	isCurrent: number;
};

export function yearsMonthsSinceNow(date: string) {
	const specifiedDate: Date = new Date(date);
	const currentDate: Date = new Date();
	const differenceMs: number = currentDate.getTime() - specifiedDate.getTime();
	const years: number = differenceMs / (1000 * 60 * 60 * 24 * 365.25);

	const fullYears: number = Math.floor(years);

	const remainingMonths: number = Math.floor((years - fullYears) * 12);

	return {
		years: fullYears,
		months: remainingMonths,
	};
}

export function experienceDate({
	endDate,
	startDate,
	isCurrent,
}: ExperienceDateProps) {
	const initialDate = new Date(startDate);
	const finalDate = isCurrent ? new Date() : endDate ? new Date(endDate) : null;

	const formatDate = (date: Date) => format(date, 'MMM/yyyy', { locale: ptBR });
	const startDateString = formatDate(initialDate);
	const endDateString = isCurrent
		? 'o momento'
		: finalDate
			? formatDate(finalDate)
			: '';

	const differenceInMonthsTotal = finalDate
		? differenceInMonths(finalDate, initialDate)
		: 0;
	const differenceInYearsTotal = Math.floor(differenceInMonthsTotal / 12);
	const remainingMonths = differenceInMonthsTotal % 12;

	const durationString = differenceInYearsTotal
		? `${differenceInYearsTotal} ano${differenceInYearsTotal > 1 ? 's' : ''}${
				remainingMonths
					? ` e ${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`
					: ''
			}`
		: `${remainingMonths} mes${remainingMonths > 1 ? 'es' : ''}`;

	return `${startDateString} - ${endDateString} (${durationString})`;
}
