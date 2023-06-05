//import model
const db = require("./db")


//register logic
register = (uname, acno, psw) => {
    //asynchronous port is different so to access we use then()-promise
    return db.User.findOne({ acno }).then(user => {
        if (user) {
            return {
                message: "ACCOUNT ALREADY EXISTS",
                status: false,
                statuscode: 404
            }
        }
        else {
            newuser = new db.User({
                acno: acno,
                uname: uname,
                passw: psw,
                balance: 0,
                transaction: []
            })
            //To reflect the changes done by server in database
            newuser.save()
            return {
                message: "ACCOUNT CREATED SUCCCESFULLY",
                status: true,
                statuscode: 200
            }


        }
    })
}

//login logic

login = (acno, passw) => {
    return db.User.findOne({ acno, passw }).then(user => {
        if (user) {
            return {
                message: "LOGIN SUCCESS",
                status: true,
                statuscode: 200

            }
        } else {
            return {
                message: "LOGIN FAILED",
                status: false,
                statuscode: 404

            }

        }
    })
}




//export function
module.exports = {
    register,login
}