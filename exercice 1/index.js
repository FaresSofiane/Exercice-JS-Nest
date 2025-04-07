user = {
    "name": "Sofiane",
    "username": "Sofianef",
    "mail": "Sofianef@sofiane.f",
    "age": 21,
}

function generateToken(user) {
    return btoa( JSON.stringify(user))
}

console.log(generateToken(user))

function verifyToken(token) {

    const token_decoder = atob(token)
    const user = JSON.parse(token_decoder)

    return user

}

const token = generateToken(user)
console.log(verifyToken(token))
