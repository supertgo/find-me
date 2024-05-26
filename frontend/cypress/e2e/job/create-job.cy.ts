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
		cy.findByRole('button', { name: /Anuncie uma vaga/i }).click();

		cy.getByName('name').type('Tech Lead | Node.js (Híbrido - BH)');

		cy.getByName('employment_type', 'select').select('Tempo integral');

		cy.getByName('work_model', 'select').select('Híbrido');

		cy.getByName('salary').type('3200');

		cy.getByName('salary_time_unit', 'select').select('mês');

		cy.getByName('location').type('Belo Horizonte, Minas Gerais, Brasil');

		cy.getByName('applications_amount').type('10');

		cy.getByName('accept_application_until').type(
			new Date().toISOString().split('T')[0],
		);

		cy.findByPlaceholderText('Adicione uma skill').type('Nodejs');
		cy.findByRole('button', { name: /Adicionar/i }).click();

		cy.findByPlaceholderText('Adicione uma skill').type('MySQL');
		cy.findByRole('button', { name: /Adicionar/i }).click();

		cy.findByPlaceholderText('Adicione uma skill').type('Git');
		cy.findByRole('button', { name: /Adicionar/i }).click();

		cy.findByPlaceholderText('Adicione uma skill').type('Scrum');
		cy.findByRole('button', { name: /Adicionar/i }).click();

		cy.findByRole('button', { name: /Próximo/i })
			.should('be.enabled')
			.click();

		cy.getByName('description', 'textarea').type(
			'Para a vaga de Tech Lead | Node.js, buscamos um(a) profissional que será responsável por um dos nossos Squads de tecnologia, tanto do ponto de gestão quanto de desenvolvimento. Além disso, buscamos alguém que também seja dinâmico(a), que saiba trabalhar em equipe e que se conecte com nossa cultura e valores.',
		);

		cy.findByRole('button', { name: /Concluir/i }).click();

		cy.wait(2000);

		cy.getByDataCy('sidebar').within(() => {
			cy.findByTitle('Sair').click();
		});

		cy.signIn('candidato@gmail.com', 'testaa');

		cy.getByDataCy('sidebar').within(() => {
			cy.findByRole('link', { name: /Vagas/i }).click();
		});

		cy.wait(1500);

		cy.scrollTo('bottom');

		cy.findAllByText('Tech Lead | Node.js (Híbrido - BH)')
			.last()
			.parent()
			.parent()
			.parent()
			.within(() => {
				cy.findByRole('button', { name: /Visualizar/i }).click();
			});

		cy.findByRole('button', { name: /Aplicar/i }).click();

		cy.findByText('Deseja aplicar para essa vaga?').should('exist');

		cy.getByName('cover_letter', 'textarea').type(
			'Gostaria de me candidatar à vaga de [Nome da Posição] na [Nome da Empresa], conforme anunciado [onde você encontrou a vaga]. Acredito que minhas habilidades e experiências são uma excelente combinação para esta posição. Tenho [número] anos de experiência em [sua área de atuação]. Na minha posição mais recente na [Nome da Última Empresa], fui responsável por [uma ou duas responsabilidades principais]. Durante esse período, desenvolvi as habilidades necessárias.{enter}Sou uma pessoa relevante, como organizada, dedicada, comunicativa, e acredito que essas qualidades me tornam um bom candidato para a vaga. Estou ansioso para a oportunidade de contribuir para a equipe da [Nome da Empresa].',
		);

    cy.findByRole('button', { name: /Aplicar/i }).should('be.enabled').click()
	});
});
