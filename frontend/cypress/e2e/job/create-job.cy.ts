/// <reference types="cypress" />
//

beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn();
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.getByDataCy('sidebar').within(() => {
		cy.findByRole('link', { name: /Vagas/i }).click();
	});
});

describe('Job - Creation', () => {
	it('recruiter should create a job and an employee should apply to it', () => {
		cy.createJob({
			name: 'Tech Lead | Node.js (Híbrido - BH)',
			employmentType: 'Tempo integral',
			workModel: 'Híbrido',
			salary: '3200',
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

		cy.signIn('candidato@gmail.com', 'testaa');

		cy.getByDataCy('sidebar').within(() => {
			cy.findByRole('link', { name: /Vagas/i }).click();
		});

		cy.wait(1500);

		cy.scrollTo('bottom');

		cy.goToJob('Tech Lead | Node.js (Híbrido - BH)');

		cy.writeCoverLetter({
			companyName: 'Onfly',
			position: 'Tech Lead | Node.js (Híbrido - BH)',
			experienceInYears: 5,
		});
	});
});
