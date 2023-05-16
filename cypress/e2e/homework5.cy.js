const BASE_URL = "https://www.amazon.com/"
const SIGN_IN_URL = "https://www.amazon.com/ap/signin"
const SHOP_BY_INTEREST_URL = "https://www.amazon.com/finds?ref_=nav_em_allpf_foundit_d_0_1_1_30"

describe('Invalid login with no input', () => {
  it('Should show error message after an invalid login', () => {
    cy.visit(BASE_URL)
    cy.get('a:contains("Sign in securely")').click()
    cy.get('input[id="continue"]').click()
    cy.url().should('contain', SIGN_IN_URL)
    cy.get('div[id="auth-email-missing-alert"]').should('contain.text',"Enter your email or mobile phone number")
  })
})

describe('Navigate to Shop By Interest Page', () => {
  it('Should navigate to Shop By Interest Page', () => {
    cy.visit(BASE_URL)
    cy.get('a[id="nav-hamburger-menu"]').click()
    cy.get('a:contains("Shop By Interest")').click()
    cy.title().should('eq', "Shop By Interest")
    cy.url().should('eq', SHOP_BY_INTEREST_URL)
  })
})

describe('Successful Search', () => {
  it('Should search for iPhone 14 Pro', () => {
    cy.visit(BASE_URL)
    cy.get('input[id="twotabsearchtextbox"]').type("iPhone 14 Pro")
    cy.get('input[id="nav-search-submit-button"]').click()
    cy.title().should('eq', "Amazon.com : iPhone 14 Pro")
    cy.get('span[class="a-size-medium a-color-base a-text-normal"]').first().should('contain', "iPhone 14 Pro")
  })
})

