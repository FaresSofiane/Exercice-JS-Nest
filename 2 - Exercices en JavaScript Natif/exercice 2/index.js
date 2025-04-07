const liste_user = [

    {
        "id" : 1,
        "name": "Sofiane sofiane",
        "username": "Sofianef",
        "mail": "Sofianef@sofiane.f",
        "age": 15,
    },
    {
        "id" : 2,
        "name": "Sofiane2",
        "username": "Sofianef2",
        "mail": "Sofianef2@sofiane.f",
        "age": 21,
    },
    {
        "id" : 4,
        "name": "Sofiane3",
        "username": "Sofianef3",
        "mail": "Sofianef3@sofiane.f",
        "age": 21,
    }
]

function filtrage(liste, critere) {
    return(liste.filter(critere))
}


console.log(filtrage(liste_user, element => element.name.includes("sofiane")))

console.log(filtrage(liste_user, element => element.age > 20))
