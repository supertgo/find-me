beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn('candidato@gmail.com', 'testaa');
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.findByTitle('Ir para as configurações').click();

	cy.waitUntil(() => cy.url().should('contain', 'config'));
});

describe('Config - Academic Record', () => {
	it('should be able to add an academic record', () => {
		cy.findByTitle('Adicionar Formação Acadêmica').click();

		cy.getByName('institution').type('Universidade Federal de Minas Gerais');

		cy.getByName('degree').type('Bacharelado');

		cy.getByName('field_of_study').type('Sistemas de Informação');

		cy.getByName('start_date').type('2010-08-20');

		cy.getByName('end_date').type('2030-07-25');

		cy.getByName('description', 'textarea').type(
			'Atividades e grupos: Passei por matérias como:{enter}● Introdução à Lógica Computacional {enter}● Geometria Analítica e Álgebra Linear {enter}● Programação e Desenvolvimento de Software {enter}● Administração {enter}● ÁLGEBRA LINEAR COMPUTACIONAL {enter}● CALCULO DIFERENCIAL E INTEGRAL I {enter}● MATEMÁTICA DISCRETA {enter}● ECONOMIA',
		);

    cy.findByRole('button', { name: /Salvar/i }).click()

    cy.findAllByText('Universidade Federal de Minas Gerais')
	});
});
