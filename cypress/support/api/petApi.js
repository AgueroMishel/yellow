export const petApi = {
  URL: `${Cypress.config('baseUrl')}${Cypress.config('apiVersion')}`,
  BASE: '/pet',

  PET_STATUS_AVAILABLE: 'available',

  PET_TAGS_TAG1: 'tag1',

  // Methods -------------------------------------------------------------------
  getFindByStatus(status) {
    const endpoint = '/findByStatus'

    return cy.request({
      url: `${this.URL}${this.BASE}${endpoint}/?status=${status}`,
      method: 'GET'
    })
  },

  getFindByTags(tags) {
    const endpoint = '/findByTags'

    return cy.request({
      url: `${this.URL}${this.BASE}${endpoint}/?tags=${tags}`,
      method: 'GET'
    })
  },

  // Actions -------------------------------------------------------------------

}
