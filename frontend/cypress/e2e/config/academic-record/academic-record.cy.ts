beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn('candidato@gmail.com', 'testaa');
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.getByDataCy('sidebar').within(() => {
		cy.findByRole('link', { name: /Perfil Público/i }).click();
	});

	cy.waitUntil(() => cy.url().should('contain', 'config'));
});

describe('Config - Academic Record', () => {
	it('should be able to add an academic record', () => {
		cy.createAcademicRecord({
			institution: 'Universidade Federal de Minas Gerais',
			degree: 'Bacharelado',
			fieldOfStudy: 'Sistemas de Informação',
			startDate: '2010-08-20',
			endDate: '2030-07-25',
			description:
				'Atividades e grupos: Passei por matérias como:{enter}● Introdução à Lógica Computacional {enter}● Geometria Analítica e Álgebra Linear {enter}● Programação e Desenvolvimento de Software {enter}● Administração {enter}● ÁLGEBRA LINEAR COMPUTACIONAL {enter}● CALCULO DIFERENCIAL E INTEGRAL I {enter}● MATEMÁTICA DISCRETA {enter}● ECONOMIA',
		});

		cy.findAllByText('Universidade Federal de Minas Gerais');
	});

	it('should be able to add an academic record by sad path', () => {
		cy.findByTitle('Adicionar Formação Acadêmica').click();

		cy.getByName('degree').focus();

		cy.findByText('A instituição é obrigatória.');

		cy.getByName('field_of_study').focus();
		cy.findByText('O diploma é obrigatório.');

		cy.getByName('start_date').focus();
		cy.findByText('O campo de estudo é obrigatório.');

		cy.getByName('end_date').focus();
		cy.findByText('A data de início é obrigatória.');

		cy.getByName('description', 'textarea').focus();
		cy.findByText('A data de término é obrigatória.');

		cy.getByName('institution').focus();
		cy.findByText('A descrição é obrigatória.');

		cy.createAcademicRecord(
			{
				institution: 'Centro Federal de Educação Tecnológica de Minas Gerais',
				degree: 'Ensino Médio/Técnico',
				fieldOfStudy: 'Redes de Computadores',
				startDate: '2010-08-20',
				endDate: '2030-07-25',
				description:
					'Atividades e grupos: O curso de redes de computadores contempla as áreas de: {enter}● Programação {enter}● Banco de Dados {enter}● Segurança de Redes {enter}● Infraestrutura de Redes {enter}● Desenvolvimento web {enter}● Manutenção de computadores {enter}● Organização de Computadores {enter}● Banco de dados entre outros conteúdos voltado à telecomunicação.',
			},
			false,
		);

		cy.findAllByText('Centro Federal de Educação Tecnológica de Minas Gerais');
	});

	it('should be able to add an academic record and then delete it', () => {
		const institution = 'Instituição a ser removida do currículo';

		cy.createAcademicRecord({
			institution,
			degree: 'Bacharelado',
			fieldOfStudy: 'Sistemas de Informação',
			startDate: '2010-08-20',
			endDate: '2030-07-25',
			description: 'Descrição da instituiçao a ser removida do currículo.',
		});

		cy.findByText(institution);

		cy.wait(2000);

		cy.findAllByTitle('Remover Formação Acadêmica').last().click();

		cy.findByText('Tem certeza que deseja excluir esse registro acadêmico?');

		cy.findByRole('button', { name: /Cancelar/i }).should('be.enabled');

		cy.findByRole('button', { name: /Excluir/i })
			.should('be.enabled')
			.click();

		cy.findByText(institution).should('not.exist');
	});
});
