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
  
  it('should be able to add an competence and then remove it', () => {
		cy.createCompetence({
			competence: 'Competência a ser removida',
		});

    cy.findAllByTitle('Remover Competência').last().click({
      force: true
    })
    
    cy.findByText('Tem certeza que deseja excluir essa competência?')

    cy.findByRole('button', { name: /Cancelar/i }).should('be.enabled')
    cy.findByRole('button', { name: /Excluir/i }).should('be.enabled').click()

    cy.findByText('Competência a ser removida').should('not.exist')
	});
});
