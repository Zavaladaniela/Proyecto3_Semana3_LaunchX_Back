
class User{
    constructor (id,username,name,bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

   /*  get getUsername(){
        return this.username
    }
    set setUsername (newUserName){
        this.username = newUserName
    } */
    

}

module.exports = User