// load type definitions from Cypress module
/// <reference types="cypress" />

type WorkModel = 'Presencial' | 'Híbrido' | 'Home Office';
type EmploymentType = 'Tempo integral' | 'Meio Período';
type SalaryTimeUnit = 'mês' | 'hora' | 'semana' | 'dia';

type User = {
	email: string;
	password: string;
};

type CreateProfessionalXpProps = {
	companyName: string;
	position: string;
	location: string;
	workModel: WorkModel;
	employmentType: EmploymentType;
	startDate: string;
	endDate?: string | undefined;
	description: string;
};

type CreateAcademicRecordProps = {
	institution: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string;
	description: string;
};

type CreateCompetenceProps = {
	competence: string;
};

type WriteCoverLetterProps = {
	position: string;
	companyName: string;
	experienceInYears?: number;
};

type CreateJobProps = {
	name: string;
	workModel: WorkModel;
	employmentType: EmploymentType;
	salary: string;
	salaryTimeUnit: SalaryTimeUnit;
	location: string;
	applicationsAmount: string;
	acceptApplicationUntil: string;
  skills: string[]
  description: string
};

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to get element by data-cy
			 * @example cy.getByDataCy('selector')
			 */
			getByDataCy(selector: string): Chainable<JQuery<Element>>;

			/**
			 * Custom command to get element by name
			 * @example cy.getByDataCy('selector')
			 */
			getByName(name: string, element?: string): Chainable<JQuery<Element>>;

			/**
			 * Custom command to singUp an user
			 * @example cy.signUp(user)
			 */
			signUp(user: User): Chainable<Element>;

			/**
			 * Custom command to sing in an user
			 * @example cy.signIn(user)
			 */
			signIn(email?: string, password?: string): Chainable<Element>;

			/**
			 * Custom command to logout an user
			 * @example cy.logout(user)
			 */
			logOut(): Chainable<Element>;

			/**
			 * Custom command to sing in an recruiter user
			 * @example cy.signInAsRecruiter()
			 */
			signInAsRecruiter(): Chainable<Element>;

			/**
			 * Custom command to check banner in page
			 * @example cy.shouldRenderBanner()
			 */
			shouldRenderBanner(): Chainable<Element>;

			/**
			 * Custom command to find a price and compare to the passed number
			 * @example cy.shouldBeLessThan(number)
			 */
			shouldBeLessThan(number: number): Chainable<Element>;

			/**
			 * Custom command to find a price and compare to the passed number
			 * @example cy.shouldBeGreaterThan(number)
			 */
			shouldBeGreaterThan(number: number): Chainable<Element>;

			/**
			 * Custom command to create a professional xp into employee's cv
			 * @example cy.createProfessionalXp(professionalXP)
			 */
			createProfessionalXp(
				professionalXP: CreateProfessionalXpProps,
				shouldClickOnAddXP?: boolean,
			): void;

			/**
			 * Custom command to create an academic record into employee's cv
			 * @example cy.createAcademicRecord(academicRecord)
			 */
			createAcademicRecord(
				academicRecord: CreateAcademicRecordProps,
				shouldClickOnAddAcademicRecord?: boolean,
			): void;

			/**
			 * Custom command to add a competence into employee's cv
			 * @example cy.createCompetence(academicRecord)
			 */
			createCompetence(
				competence: CreateCompetenceProps,
				shouldClickOnAddCompetence?: boolean,
			): void;

			/**
			 * Custom command to create a job as recruiter
			 * @example cy.createJob(job)
			 */

			createJob(job: CreateJobProps): void;

			/**
			 * Custom command to add skill's into job creation
			 * @example cy.addSkills(skills)
			 */
			addSkills(skills: string[]): void;

			/**
			 * Custom command to write a cover letter
			 * @requires User to be an employee
			 * @example cy.writeCoverLetter(skills)
			 */
			writeCoverLetter(coverLetter: WriteCoverLetterProps): void;

			/**
			 * Custom command to go to job page
			 * If more there's more than one job with the same title if will go to the last one
			 * @example cy.goToJob(jobTilte)
			 */
			goToJob(jobTitle: string): void;
		}
	}
}

import './commands';
