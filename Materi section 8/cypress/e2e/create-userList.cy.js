describe ('Add user', ()=> {
  it('Add a new user', () => {
    var user = {
        "name": 'Aisya Mashadi',
        "job": 'Mentor'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.equal(user.name)
        expect(response.body.job).to.equal(user.job)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')
    })
  })
})

