let registerUser = document.getElementById("register")

registerUser.addEventListener("click", async (event) => {
    try {
        event.preventDefault()
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const doctor = document.getElementById("doctor").value;
        let userObj = {
            username: username,
            email: email,
            password: password
        }

        let userDetails = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        if (userDetails.ok) {
            let user = await userDetails.json()
            alert("Done")
            console.log(user)
        }
    } catch (err) {
        console.log(err)
    }
})

let loginUser = document.getElementById("login")
// loginUser.addEventListener("click",()=>{
//     alert("Ok")
// })

loginUser.addEventListener("click", async (event) => {
    try {
        event.preventDefault()
        let email = document.getElementById("email").value
        let password = document.getElementById("pass").value
        fetch(`http://localhost:3000/users`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // if (data[0].password === password) {
                //     alert("logged In")
                // } else {
                //     alert("wrong password")
                // }
            })
    } catch (error) {
        console.log(error)
    }
})