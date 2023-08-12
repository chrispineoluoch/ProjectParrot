// Update the country names in the dropdown menu
var countryDropdown = document.querySelector(".iti__country-list");
var countryList = countryDropdown.querySelectorAll(".iti__country");

countryList.forEach(function (country) {
    var countryCode = country.getAttribute("data-country-code");
    var countryName = getCountryName(countryCode);
    country.querySelector(".iti__country-name").textContent = countryName;
});

// Helper function to get the updated country name
function getCountryName(countryCode) {
    // Replace the country names as needed
    switch (countryCode) {
        //case "us":
        //    return "USA";
        //case "ca":
        //    return "CAN";
        //case "au":
        //    return "AUS";
        // Add more country code and name mappings as needed
        default:
            return countryCode.toUpperCase();
    }
}