import urls, { user } from "./urls"
require('cypress-plugin-api')

Cypress.Commands.add('auth_bypass_api', () =>{
    cy.fixture("dados").then((data) => {
        cy.login_api(data.username, data.password).then((token) => Cypress.env("auth.token", token))
        cy.find_user_by_name_api(data.username).then((user) => Cypress.env("auth.user.id", user ))
        console.log(user);
    });
})

Cypress.Commands.add('login_api', (username, password) =>{

    cy.api({
        method: 'POST',
        url: urls.user_api + '/auth',
        headers: {
            "Content-type": "application/json"
        },
        body: {
            username: username,
            password: password
        }

    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body.token
        })
    })

    Cypress.Commands.add('find_user_by_name_api', (username) =>{

        cy.api({
            method: 'GET',
            url: urls.user_api + '/api/v1/users/find-by/user-name/',
            headers: {
                "Content-type": "application/json",
                "Authorization": Cypress.env("auth.token")
            },
            qs: {
                username: username
            }
    
        }).then((response) => {
            expect(response.status).to.eq(200)
            return response.body
            })
        })