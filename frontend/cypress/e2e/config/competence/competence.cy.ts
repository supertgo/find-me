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

describe('Config - Competence', () => {
	it('should be able to add an competence', () => {
		cy.createCompetence({
			competence: 'PHP',
		});

		cy.wait(2000);

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

		cy.wait(2000);

		cy.findAllByText('Laravel');
	});

	it('should be able to add an competence and then remove it', () => {
		cy.createCompetence({
			competence: 'Competência a ser removida',
		});

		cy.wait(2000);

		cy.findAllByTitle('Remover Competência').last().click({
			force: true,
		});

		cy.findByText('Tem certeza que deseja excluir essa competência?');

		cy.findByRole('button', { name: /Cancelar/i }).should('be.enabled');
		cy.findByRole('button', { name: /Excluir/i })
			.should('be.enabled')
			.click();

		cy.wait(2000);

		cy.findByText('Competência a ser removida').should('not.exist');
	});
});
