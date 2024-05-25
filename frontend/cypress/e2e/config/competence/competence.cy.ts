beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn('candidato@gmail.com', 'testaa');
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.findByTitle('Ir para as configurações').click();

	cy.waitUntil(() => cy.url().should('contain', 'config'));
});

describe('Config - Competence', () => {
	it('should be able to add an competence', () => {
		cy.createCompetence({
			competence: 'PHP',
		});

		cy.findAllByText('PHP');
	});

	it('should be able to add an competence by sad path', () => {
    cy.findByTitle('Adicionar Competência').click();

		cy.getByName('competence').focus();

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});

		cy.findByText('A competência é obrigatória.');

		cy.createCompetence(
			{
				competence: 'Laravel',
			},
			false,
		);

		cy.findAllByText('PHP');
	});
});
