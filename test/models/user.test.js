const user = require ('./../../app/models/user')

describe ("Prueba de jest", () =>{
    test ("Requerimiento 1: Creacion del user", () =>{
        const user = new user (1,"DanielaZ","Dany","Bio")
        expect (user.id).toBe(1)
        expect (user.name).toBe("DanielaZ")
        expect (user.bio).toBe ("Bio")
    })

    test ("Requerimiento 2: Fechas en atributos de user", () =>{
        const user = new user (1,"carlogilmar","carlo","bio")
        expect (user.dateCreated).not.toBeUndefined()
        expect (user.lastUpdate).not.toBeUndefined()

    })
    test ("Requerimiento 3: Agregando getters", () =>{
        const user = new user (1,"carlogilmar","carlo","bio")
        expect (user.getUsername).toBe ("DanielaZ")

    })
    test ("Requerimiento 4 : Agregando setters", () =>{
        const user = new user (1,"carlogilmar","carlo","bio")
        user.setUserName = "cgilmar"
        expect(user.username).toBe ("cgilmar")
    })
})