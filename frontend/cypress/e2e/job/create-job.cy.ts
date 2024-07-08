/// <reference types="cypress" />
//

beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn('recrutador@gmail.com', 'testaa');
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.getByDataCy('sidebar').within(() => {
		cy.findByRole('link', { name: /Vagas/i }).click();
	});
});

describe('Job - Creation', () => {
	it('recruiter should create a job and an employee should apply to it', () => {
		const jobName = 'Tech Lead | Node.js (Híbrido - BH)';
		cy.createJob({
			name: jobName,
			employmentType: 'Tempo integral',
			workModel: 'Híbrido',
			salary: '7200',
			salaryTimeUnit: 'mês',
			location: 'Belo Horizonte, Minas Gerais, Brasil',
			applicationsAmount: '10',
			acceptApplicationUntil: new Date().toISOString().split('T')[0],
			skills: ['Nodejs', 'MySQL', 'Git', 'Scrum'],
			description:
				'Para a vaga de Tech Lead | Node.js, buscamos um(a) profissional que será responsável por um dos nossos Squads de tecnologia, tanto do ponto de gestão quanto de desenvolvimento. Além disso, buscamos alguém que também seja dinâmico(a), que saiba trabalhar em equipe e que se conecte com nossa cultura e valores.',
		});

		cy.wait(2000);

		cy.logOut();

		// Parte do candidato
		cy.findByText('Entre com a sua conta');

		cy.signIn('candidato@gmail.com', 'testaa');
		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByText('Bem-vindo, candidato@gmail.com');

		cy.getByDataCy('sidebar').within(() => {
			cy.findByRole('link', { name: /Vagas/i }).click();
		});

		cy.goToJob(jobName);

		cy.wait(2000);

		cy.findByRole('button', { name: /Aplicar/i })
			.should('be.visible')
			.click();
		cy.findByPlaceholderText('Escreva uma carta de apresentação')
			.should('be.visible')
			.clear()
			.type(
				'Escrevendo algo sobre mim. Escrevendo mais um pouco sobre mim e mais um pouco ainda!',
			);
		cy.findByRole('button', { name: /Aplicar/i })
			.should('be.enabled')
			.click();

		cy.wait(1500);

		cy.getByDataCy('sidebar').within(() => {
			cy.findByRole('link', { name: /Início/i }).click();
		});

		cy.get('div:contains("' + jobName + '")')
			.last()
			.click();

		cy.wait(2000);

		cy.findByRole('button', { name: /Ver candidatura/i })
			.should('be.visible')
			.click();

		cy.findByRole('button', { name: /Desistir/i }).click();

		cy.wait(1500);

		cy.findByRole('button', { name: /Ver candidatura/i }).click();

		cy.findByText('Cancelado').should('exist');
	});
});
