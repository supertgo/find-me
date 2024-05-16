/// <reference types="cypress" />

describe('Auth - Login', () => {
	it('should be able to login a user by happy path', () => {
		cy.visit('/');
		cy.signIn();

		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByText('Bem-vindo, thiago.teste@gmail.com');
	});

	it('should show form errors on email and password field', () => {
		cy.visit('/');

		cy.findByPlaceholderText(/e-mail/i).type('invalidemail');
		cy.findByPlaceholderText(/senha/i).focus();
		cy.findByText('Entre com a sua conta').click();

		cy.findByText('Digite um e-mail válido.');
		cy.findByText('A senha é obrigatória.');

		cy.findByPlaceholderText(/e-mail/i).clear();
		cy.signIn();

		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByText('Bem-vindo, thiago.teste@gmail.com');
	});

	it('should be able to sign in and logout', () => {
		cy.visit('/');
		cy.signIn();

		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByText('Bem-vindo, thiago.teste@gmail.com');

    cy.findByTitle('Sair').click()

    cy.findByText('Entre com a sua conta')
	});
});
