// Store demo donor information
let donors = [];

// Donor registration
document.getElementById("donorForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let organ = document.getElementById("organ").value;
    let city = document.getElementById("city").value;

    if (age < 18 || age > 100) {
        document.getElementById("message").innerText =
        "Please enter a valid age (18–100).";
        return;
    }

    let donor = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        organ: organ,
        city: city
    };

    donors.push(donor);

    document.getElementById("message").innerText =
    "Registration successful! Thank you.";

    document.getElementById("donorForm").reset();
});


// Search donor
function searchDonor() {

    let organName = document.getElementById("searchOrgan")
    .value.toLowerCase().trim();

    let results = document.getElementById("results");

    results.innerHTML = "";

    if (organName === "") {
        results.innerText = "Please enter an organ name.";
        return;
    }

    let found = donors.filter(function(donor) {
        return donor.organ.toLowerCase() === organName;
    });

    if (found.length > 0) {

        found.forEach(function(donor) {

            let item = document.createElement("p");

            item.textContent =
                "Name: " + donor.name +
                " | Organ: " + donor.organ +
                " | City: " + donor.city;

            results.appendChild(item);

        });

    } else {

        results.innerText = "No matching demo records found.";

    }
}