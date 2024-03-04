import { petApi } from '../support/api/petApi.js'

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
    const expectedPets = apiData.petsAvailable
    const petStatus = petApi.PET_STATUS_AVAILABLE

    // Prerequisites -----------------------------------------------------------

    // Test Steps --------------------------------------------------------------
    petApi.getFindByStatus(petStatus).then(pets => {
      expect(pets.status).to.eq(200)

      expect(pets.body.length).to.eq(expectedPets.length)
      expect(pets.body).to.deep.equal(expectedPets)
    })

    // Restore State -----------------------------------------------------------

  })

  it('GET / findByTags / tag1', () => {
    // Description -------------------------------------------------------------

    // Test Data ---------------------------------------------------------------
    const expectedPets = apiData.petsTag1
    const petTag1 = petApi.PET_TAGS_TAG1

    // Prerequisites -----------------------------------------------------------

    // Test Steps --------------------------------------------------------------
    petApi.getFindByTags(petTag1).then(pets => {
      expect(pets.status).to.eq(200)

      expect(pets.body.length).to.eq(expectedPets.length)
      expect(pets.body).to.deep.equal(expectedPets)
    })

    // Restore State -----------------------------------------------------------

  })
})
