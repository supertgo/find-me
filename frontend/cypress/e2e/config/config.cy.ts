/// <reference types="cypress" />
//

beforeEach(() => {
		cy.visit('/', {
			failOnStatusCode: false,
		});
		cy.signIn('candidato@gmail.com', 'testaa');
})

describe('Config - Employee', () => {
	it('should be able to change config information', () => {

		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByTitle('Ir para as configurações').click();

		cy.waitUntil(() => cy.url().should('contain', 'config'));

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

  it('should be able to add competence as a employee', () => {
		cy.waitUntil(() => cy.url().should('contain', 'home'));

		cy.findByTitle('Ir para as configurações').click();

		cy.waitUntil(() => cy.url().should('contain', 'config'));

		cy.findByTitle('Adicionar Experiência').click();

    cy.getByName('company_name').type('Google')

    cy.getByName('position').type('Software Developer')
    
    cy.getByName('location').type('Vale do Silício')
  
    cy.getByDataCy('work_model').select('Home Office')
    
    cy.getByDataCy('employment_type').select('Tempo integral')

    cy.getByName('start_date').type('2022-05-23')

    const currentDate = new Date().toISOString(). split('T')[0]

    cy.getByName('end_date').type(currentDate)

    cy.getByName('description', 'textarea').type('Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.')

    cy.findByRole('button', { name: /Salvar/i }).click({
      force: true
    })

    cy.findByText('Software Developer')
  })
});
