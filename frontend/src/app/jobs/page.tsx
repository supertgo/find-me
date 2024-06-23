'use client';
import { Base } from 'templates/Base/Base';
import { Jobs } from 'templates/Jobs/Jobs';
import { CreateJobHeader } from 'components/CreateJobHeader';

export default function JobsPage() {
	return (
		<Base>
			<CreateJobHeader title="Vagas" />
			<Jobs />
		</Base>
	);
}
