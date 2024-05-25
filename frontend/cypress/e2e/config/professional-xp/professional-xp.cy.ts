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

describe('Config - Professional XP', () => {
	it('should be able to add an xp with end_date', () => {
		cy.findByTitle('Adicionar Experiência').click();

		cy.getByName('company_name').type('Google');

		cy.getByName('position').type('Software Developer');

		cy.getByName('location').type('Vale do Silício');

		cy.getByDataCy('work_model').select('Home Office');

		cy.getByDataCy('employment_type').select('Tempo integral');

		cy.getByName('start_date').type('2022-05-23');

		const currentDate = new Date().toISOString().split('T')[0];

		cy.getByName('end_date').type(currentDate);

		cy.getByName('description', 'textarea').type(
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.',
		);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});

		cy.findAllByText('Software Developer');
	});

	it('should be able to add an xp without end_date', () => {
		cy.findByTitle('Adicionar Experiência').click();

		cy.getByName('company_name').type('Amazon');

		cy.getByName('position').type('AWS Engineer');

		cy.getByName('location').type('Vale do Silício');

		cy.getByDataCy('work_model').select('Home Office');

		cy.getByDataCy('employment_type').select('Tempo integral');

		cy.getByName('start_date').type('2022-05-11');

		cy.findByRole('checkbox', {
			name: /Trabalho atualmente neste cargo/i,
		}).click();

		cy.getByName('description', 'textarea').type(
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.',
		);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});

		cy.findAllByText('AWS Engineer');
	});

	it('should be able to add an xp without end_date by sad path', () => {
		cy.findByTitle('Adicionar Experiência').click();

		cy.getByName('position').focus();

		cy.findByText('O nome da empresa é obrigatório.');

		cy.getByName('location').focus();
		cy.findByText('O cargo é obrigatório.');

		cy.getByName('start_date').focus();
		cy.findByText('A localização é obrigatória.');

		cy.findByRole('checkbox', {
			name: /Trabalho atualmente neste cargo/i,
		}).click();

		cy.getByName('description', 'textarea').focus();
		cy.findByText('A data de início é obrigatória.');

		cy.getByName('company_name').focus();
		cy.findByText('A descrição é obrigatória.');

		cy.getByName('company_name').type('Sad Path Job');

		cy.getByName('position').type('Software Developer Sad Path');

		cy.getByName('location').type('Vale do Silício');

		cy.getByDataCy('work_model').select('Presencial');

		cy.getByDataCy('employment_type').select('Meio Período');

		cy.getByName('start_date').type('2022-05-23');

		cy.getByName('description', 'textarea').type(
			'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.',
		);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});

		cy.findAllByText('Software Developer Sad Path');
	});
});
