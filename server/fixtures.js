if (!Meteor.users.find().count()) {
    Accounts.createUser({
        email: 'test@test.com',
        password: '12345'
    })
}
