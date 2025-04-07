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

