import { petApi } from '../../support/api/petApi.js'

let apiData

before(() => {
  cy.fixture(`api/${Cypress.config('environment')}/petApi.json`).then((json) => {
    apiData = json
  })
})

describe('Pet', () => {
  it('GET / findByStatus / available', () => {
    // Description -------------------------------------------------------------

    // Test Data ---------------------------------------------------------------
    const petStatus = petApi.PET_STATUS_AVAILABLE

    // Prerequisites -----------------------------------------------------------
    cy.window()
      .its('performance')
      .invoke('mark', 'findByStatus')

    // Test Steps --------------------------------------------------------------
    petApi.getFindByStatus(petStatus)

    cy.window()
      .its('performance')
      .invoke('measure', 'findByStatus')
      .its('duration', { timeout: 0 })
      .should('be.lessThan', 200)

    // Restore State -----------------------------------------------------------

  })

  it('GET / findByTags / tag1', () => {
    // Description -------------------------------------------------------------

    // Test Data ---------------------------------------------------------------
    const petTag1 = petApi.PET_TAGS_TAG1

    // Prerequisites -----------------------------------------------------------
    cy.window()
      .its('performance')
      .invoke('mark', 'findByTags')

    // Test Steps --------------------------------------------------------------
    petApi.getFindByTags(petTag1)

    cy.window()
      .its('performance')
      .invoke('measure', 'findByTags')
      .its('duration', { timeout: 0 })
      .should('be.lessThan', 200)

    // Restore State -----------------------------------------------------------

  })
})
