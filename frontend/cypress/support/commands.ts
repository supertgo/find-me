import '@testing-library/cypress/add-commands';
import 'cypress-wait-until';

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
	return cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add('getByName', (name, element = 'input', ...args) => {
	return cy.get(`${element}[name="${name}"]`, ...args);
});

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

Cypress.Commands.add(
	'createPrefessionalXp',
	({
		companyName,
		position,
		location,
		workModel,
		employmentType,
		startDate,
		endDate,
		description,
    },
   shouldClickOnAddXP = true 
  ) => {
    
    shouldClickOnAddXP && cy.findByTitle('Adicionar Experiência').click();

		cy.getByName('company_name').type(companyName);

		cy.getByName('position').type(position);

		cy.getByName('location').type(location);

		cy.getByDataCy('work_model').select(workModel);

		cy.getByDataCy('employment_type').select(employmentType);

		cy.getByName('start_date').type(startDate);

		endDate
			? cy.getByName('end_date').type(endDate)
			: cy
					.findByRole('checkbox', { name: /Trabalho atualmente neste cargo/i })
					.click();

		cy.getByName('description', 'textarea').type(description);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});
	},
);

Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});
