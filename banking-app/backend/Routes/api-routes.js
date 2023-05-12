const { json } = require("body-parser");
var express = require("express");
var fs = require("fs");

var router = express.Router()

var Users = []

fs.readFile("./Database/Users.json",
    (err, data) => {
        if (err) {
            console.log(err)
        }
        Users = JSON.parse(data)
        console.log(Users)
    })


const authMiddle = async (req,res,next) => {
    const token = req.cookies.token || "" ;
    console.log(token)
    try {
        if(!token) {
            return res.status(401).json('You need to login')
        }
        const decrypt = await jwt.verify(token, "Key")

        req.user = {
            username: decrypt.username
        }

        next();
    } catch(e) {
       return res.status(500).json(e.toString());
    }
}

router.post("/register", (req, res) => {
    const {
        name,
        address,
        email,
        username,
        password
    } = req.body
    if (!name || !address || !email || !username || !password) {
        res.send("all required")
    }
    Users.map((user) => {
        if (user.username == username) {
            res.send("already exists")
        }
    })
    const User = {
        name: name,
        address: address,
        email: email,
        username: username,
        password: password,
        balance: 0
    }

    Users.push(User)

    fs.writeFile("./Database/Users.json",
        JSON.stringify(Users),
        (err) => {
            if (err) res.send("User Registration Successful")
        })
    const token = jwt.sign({
        username: User.username
    }, "Key")

    res.cookie("token",
        token,
        {
            httpOnly: true
        }).send("Registered")
})

router.post("/login", (req, res) => {

    const {
        username,
        password
    } = req.body
    if (!username || !password) {
        res.send("all required")
    }

    Users.map((user) => {
        if (user.username == username && user.password == password) {
            const token = jwt.sign({
                username: username
            }, "key")
            res.cookie("jwt-token",
                token,
                {
                    httpOnly: true
                }).send(username)
        } else {
            res.status(400).send("login failed")
        }
    })
})

router.post("/logout", (req, res) => {
    res.clearCookie("token").send("logged out")
})


router.get("./username", authMiddle, (req,res) => {
    Users.map((user) => {
        if(req.params,username == user.username) {
            res.send(user)
        }
    })
})

router.post("/depo", authMiddle, (req, res) => {
    const amount = parseInt(req.body.amount);
    const uname = req.user.username;
    if(!amount) {
        res.send("Amount not to be null")
    }
    Users.map((user) => {
        if(user.username == uname) {
            user.balance = user.balance + amount;
            fs.writeFile("./Database/Users.json",
            JSON.stringify(Users),
            (err) => {
                if(err) {
                    res.send("Amount not deposited")
                }
                res.status(200).send("Amount deposited")
            }
            )
        }
    })
})

router.post("/withd", authMiddle, (req,res) => {
    const amount = parseInt(req.body.amount);
    const uname = req.user.username;
    if(!amount) {
        res.send("Amount not to be null")
    }

    Users.map((user) => {
        if(user.username == uname) {
            if(amount > user.balance) {
                res.send("Not enough balance")
                return;
            }
            user.balance = user.balance - amount
            fs.writeFile("./Database/Users.json",
            JSON.stringify(Users),
            (err) => {
                if(err) {
                    res.send("Amount not withdrawn")
                }
                res.status(200).send("Amount Withdrawn")
            }
            )
        }
    })
})

module.exports = router;