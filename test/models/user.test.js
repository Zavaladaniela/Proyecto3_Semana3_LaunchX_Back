/* 
const User = require ('./../../app/models/user')

describe ("Unit Tests for User class", () => {
    test ('Create an User object', () => {
        const user = new User 
    })
}) */
const User = require ('./../../app/models/user')

describe ("Prueba de jest", () =>{
    test ("Requerimiento 1: Creacion del user", () =>{
        const user = new User (1,"DanielaZ","Dany","Bio")
        expect (user.id).toBe(1)
        expect (user.username).toBe("DanielaZ")
        expect (user.name).toBe("Dany")
        expect (user.bio).toBe ("Bio")
        expect (user.dateCreated).not.toBeUndefined ()
        expect (user.lastUpdate).not.toBeUndefined()
    });

    /* test ("Requerimiento 2: Fechas en atributos de user", () =>{
        const user = new User (1,"carlogilmar","carlo","bio")
        expect (user.dateCreated).not.toBeUndefined()
        expect (user.lastUpdate).not.toBeUndefined()

    })
    test ("Requerimiento 3: Agregando getters", () =>{
        const user = new User (1,"carlogilmar","carlo","bio")
        expect (user.getUsername).toBe ("DanielaZ")

    })
    test ("Requerimiento 4 : Agregando setters", () =>{
        const user = new User (1,"carlogilmar","carlo","bio")
        user.setUserName = "cgilmar"
        expect(user.username).toBe ("cgilmar")
    }); */
})