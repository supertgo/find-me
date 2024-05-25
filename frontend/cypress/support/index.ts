// load type definitions from Cypress module
/// <reference types="cypress" />

type User = {
	email: string;
	password: string;
};

type CreateProfessionalXp = {
	companyName: string;
	position: string;
	location: string;
	workModel: 'Presencial' | 'Híbrido' | 'Home Office';
	employmentType: 'Tempo integral' | 'Meio Período';
	startDate: string;
	endDate?: string | undefined;
	description: string;
};

type CreateAcademicRecord = {
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string
  description: string
}

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to visit google page
			 * @example cy.google()
			 */
			google(): Chainable<Window>;

			/**
			 * Custom command to add a game to cart by index
			 * @example cy.addToCartByIndex(index)
			 */
			addToCartByIndex(index: number): Chainable<Element>;

			/**
			 * Custom command to remove a game from cart by index
			 * @example cy.removeFromCartByIndex(index)
			 */
			removeFromCartByIndex(index: number): Chainable<Element>;

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
      createProfessionalXp(professionalXP: CreateProfessionalXp, shouldClickOnAddXP?: boolean): void
      
      /**
			 * Custom command to create an academic record into employee's cv 
       * @example cy.createAcademicRecord(academicRecord)
			 */
      createAcademicRecord(academicRecord: CreateAcademicRecord, shouldClickOnAddAcademicRecord?: boolean): void
		}
	}
}

import './commands';
