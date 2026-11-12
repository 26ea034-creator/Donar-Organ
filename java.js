// Store demo donor information
let donors = JSON.parse(localStorage.getItem("donors")) || [];

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
    localStorage.setItem("donors", JSON.stringify(donors));

    document.getElementById("message").innerText =
    "Registration successful! Thank you.";

    document.getElementById("donorForm").reset();
});
// Donor registration
const donorForm = document.getElementById("donorForm");

if (donorForm) {

    donorForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Keep all your existing registration code here

    });

}  // Close the if condition here




// Search donor
function searchDonor() {

    let organName = document.getElementById("searchOrgan")
        .value.toLowerCase().trim();

    if (organName === "") {
        document.getElementById("results").innerText =
            "Please enter an organ name.";
        return;
    }

    let found = donors.filter(function(donor) {
        return donor.organ.toLowerCase() === organName;
    });

    sessionStorage.setItem("searchResults", JSON.stringify(found));
    sessionStorage.setItem("searchedOrgan", organName);

    window.location.href = "search-results.html";
}
const resultsPage = document.getElementById("resultsPage");

if (resultsPage) {

    let found = JSON.parse(
        sessionStorage.getItem("searchResults")
    ) || [];

    let organName = sessionStorage.getItem("searchedOrgan") || "";

    if (found.length > 0) {

        found.forEach(function(donor) {

            let item = document.createElement("p");

            item.textContent =
                "Name: " + donor.name +
                " | Organ: " + donor.organ +
                " | City: " + donor.city;

            resultsPage.appendChild(item);
        });

    } else {
        resultsPage.innerText =
            "No matching demo records found for " + organName + ".";
    }
}