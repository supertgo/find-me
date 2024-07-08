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
	(email = 'candidato@gmail.com', password = 'testaa') => {
		cy.findByPlaceholderText(/e-mail/i).type(email);
		cy.findByPlaceholderText(/senha/i).type(password);

		cy.findByRole('button', { name: /entrar/i }).click();
	},
);

Cypress.Commands.add('signInAsRecruiter', () => {
	cy.signIn('recrutador@gmail.com', 'testaa');
});

Cypress.Commands.add(
	'createProfessionalXp',
	(
		{
			companyName,
			position,
			location,
			workModel,
			employmentType,
			startDate,
			endDate,
			description,
		},
		shouldClickOnAddXP = true,
	) => {
		shouldClickOnAddXP && cy.findByTitle('Adicionar Experiência').click();

		cy.getByName('company_name').type(companyName);

		cy.getByName('position').type(position);

		cy.getByName('location').type(location);

		cy.getByName('work_model', 'select').select(workModel);

		cy.getByName('employment_type', 'select').select(employmentType);

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

Cypress.Commands.add(
	'createAcademicRecord',
	(
		{ institution, fieldOfStudy, degree, startDate, endDate, description },
		shouldClickOnAddAcademicRecord = true,
	) => {
		shouldClickOnAddAcademicRecord &&
			cy.findByTitle('Adicionar Formação Acadêmica').click();

		cy.getByName('institution').type(institution);

		cy.getByName('degree').type(degree);

		cy.getByName('field_of_study').type(fieldOfStudy);

		cy.getByName('start_date').type(startDate);

		cy.getByName('end_date').type(endDate);

		cy.getByName('description', 'textarea').type(description);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});
	},
);

Cypress.Commands.add(
	'createCompetence',
	({ competence }, shouldClickOnAddCompetence = true) => {
		shouldClickOnAddCompetence &&
			cy.findByTitle('Adicionar Competência').click();

		cy.getByName('competence').type(competence);

		cy.findByRole('button', { name: /Salvar/i }).click({
			force: true,
		});
	},
);

Cypress.Commands.add(
	'createJob',
	({
		name,
		employmentType,
		workModel,
		salary,
		salaryTimeUnit,
		location,
		applicationsAmount,
		acceptApplicationUntil,
		skills,
		description,
	}) => {
		cy.findByRole('button', { name: /Anuncie uma vaga/i }).click();

		cy.getByName('company_id', 'select').select(2);

		cy.getByName('name').type(name);

		cy.getByName('employment_type', 'select').select(employmentType);

		cy.getByName('work_model', 'select').select(workModel);

		cy.getByName('salary').type(salary);

		cy.getByName('salary_time_unit', 'select').select(salaryTimeUnit);

		cy.getByName('location').type(location);

		cy.getByName('applications_amount').type(applicationsAmount);

		cy.getByName('accept_application_until').type(acceptApplicationUntil);

		cy.addSkills(skills);

		cy.findByRole('button', { name: /Próximo/i })
			.should('be.enabled')
			.click();

		cy.getByName('description', 'textarea').type(description);

		cy.findByRole('button', { name: /Concluir/i }).click();
	},
);

Cypress.Commands.add('logOut', () => {
	cy.getByDataCy('sidebar').within(() => {
		cy.findByTitle('Sair').click();
	});
});

Cypress.Commands.add('addSkills', (skills) => {
	skills.forEach((skill) => {
		cy.findByPlaceholderText('Adicione uma skill').type(skill);
		cy.findByRole('button', { name: /Adicionar/i }).click();
	});
});

Cypress.Commands.add(
	'writeCoverLetter',
	({ position, companyName, experienceInYears = 3 }) => {
		cy.findByRole('button', { name: /Aplicar/i }).click();
		cy.findByText('Deseja aplicar para essa vaga?').should('exist');

		cy.getByName('cover_letter', 'textarea').type(
			`Gostaria de me candidatar à vaga de ${position} na ${companyName}. Acredito que minhas habilidades e experiências são uma excelente combinação para esta posição. Tenho ${experienceInYears} anos de experiência na área de atuação. Durante esse período, desenvolvi as habilidades necessárias.{enter}Sou uma pessoa relevante, como organizada, dedicada, comunicativa, e acredito que essas qualidades me tornam um bom candidato para a vaga. Estou ansioso para a oportunidade de contribuir para a equipe da ${companyName}.`,
		);
		cy.findByRole('button', { name: /Aplicar/i })
			.should('be.enabled')
			.click();
	},
);

Cypress.Commands.add('goToJob', (jobTitle) => {
	cy.findAllByText(jobTitle)
		.last()
		.parent()
		.parent()
		.parent()
		.within(() => {
			cy.findByRole('button', { name: /Visualizar/i }).click();
		});
});

Cypress.on('uncaught:exception', () => {
	return false;
});
