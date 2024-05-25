/// <reference types="cypress" />
//

beforeEach(() => {
	cy.visit('/', {
		failOnStatusCode: false,
	});
	cy.signIn('candidato@gmail.com', 'testaa');
	cy.waitUntil(() => cy.url().should('contain', 'home'));

	cy.findByTitle('Ir para as configurações').click();

	cy.waitUntil(() => cy.url().should('contain', 'config'));
});

describe('Config - Employee', () => {
	it('should be able to change config information', () => {
		cy.findByPlaceholderText('Digite o seu nome completo').should(
			'not.be.empty',
		);
		cy.findByPlaceholderText('Digite o seu celular').should('not.be.empty');
		cy.findByPlaceholderText('Digite o seu email').should('not.be.empty');

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
