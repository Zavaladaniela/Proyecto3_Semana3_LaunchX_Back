class user{
    constructor (id,username,name,bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new dateCreated()
        this. lastUpdate = new lastUpdate ()
    }

    get getUsername(){
        return this.username
    }
    set setUserName (newUserName){
        this.username = newUserName
    }
    

}

module.exports = user