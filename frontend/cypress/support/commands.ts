/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
//
import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

// Cypress.Commands.add('getByDataCy', (selector, ...args) => {
//   return cy.get(`[data-cy="${selector}"]`, ...args)
// })

Cypress.Commands.add(
	'signIn',
	(email = 'thiago.teste@gmail.com', password = 'testaa') => {
		cy.findByPlaceholderText(/e-mail/i).type(email);
		cy.findByPlaceholderText(/senha/i).type(password);

		cy.findByRole('button', { name: /entrar/i }).click();
	},
);

Cypress.Commands.add('signInAsRecruiter', () => {
	cy.signIn('recruiter@gmail.com', 'testaa');
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from failing the test
	return false;
});
