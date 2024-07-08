/// <reference types="cypress" />
//

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

describe('Config - Employee', () => {
	it('should be able to change config information', () => {
		cy.findByPlaceholderText('Nome Completo').should('not.be.empty');
		cy.findByPlaceholderText('Celular').should('not.be.empty');
		cy.findByPlaceholderText('E-mail').should('not.be.empty');

		cy.findByPlaceholderText('Digite a sua nova senha').should('be.empty');
		cy.findByPlaceholderText('Descreva um pouco sobre você')
			.clear()
			.type(
				'Escrevendo algo sobre mim. Escrevendo mais um pouco sobre mim e mais um pouco ainda!',
			);

		cy.findByRole('button', { name: /Salvar Perfil/i }).should('be.disabled');

		cy.findByPlaceholderText('Digite a sua nova senha').type('testaa');

		cy.findByRole('button', { name: /Salvar Perfil/i })
			.should('be.enabled')
			.click();
	});
});
