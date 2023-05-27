let doctorButton = document.getElementById("doctorData")

doctorButton.addEventListener("click",doctorDetail)

async function doctorDetail(event){
    try {
        event.preventDefault()
        let name = document.getElementById("name").value
        let image = document.getElementById("image").value
        let specialization = document.getElementById("specialization").value
        let experience = document.getElementById("experience").value
        let date = document.getElementById("date").value
        let slots = document.getElementById("slots").value
        let fee = document.getElementById("fee").value

        let doctorObj={
            name:name,
            image:image,
            specialization:specialization,
            experience:experience,
            date:date,
            slots:slots,
            fee:fee
        }

        let doctorDetails = await fetch("http://localhost:3000/appointments",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(doctorObj)
        })
        if (doctorDetails.ok) {
            let doctor = await doctorDetails.json()
            alert("Done")
            console.log(doctor)
        }

    } catch (error) {
        console.log(err)
    }
}