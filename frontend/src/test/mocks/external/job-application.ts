import { JobApplication } from 'protocols/external/job/job-application';

export const mockJobApplication: JobApplication[] = [
	{
		id: 1,
		job_id: 17,
		user_id: 1,
		status: 'pending',
		cover_letter:
			'Gostaria de me candidatar à vaga de Tech Lead | Node.js (Híbrido - BH) na Onfly. Acredito que minhas habilidades e experiências são uma excelente combinação para esta posição. Tenho 5 anos de experiência na área de atuação. Durante esse período, desenvolvi as habilidades necessárias.\nSou uma pessoa relevante, como organizada, dedicada, comunicativa, e acredito que essas qualidades me tornam um bom candidato para a vaga. Estou ansioso para a oportunidade de contribuir para a equipe da Onfly.',
		created_at: '2024-05-28T19:13:40.000000Z',
		updated_at: '2024-05-28T19:13:40.000000Z',
		candidates: [
			{
				id: 1,
				name: 'test',
				type: 'employee',
				phone: '999999999',
				email: 'candidato@gmail.com',
				email_verified_at: null,
				about_me: null,
				profile_picture_path: null,
			},
		],
	},
];
