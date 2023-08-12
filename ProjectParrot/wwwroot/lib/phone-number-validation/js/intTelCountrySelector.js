// Add this script after including intlTelInput.js and intlTelInput-utils.js

// Initialize the input field with intlTelInput
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
    utilsScript: "/lib/phone-number-validation/js/intlTelInput-utils.js",
    customPlaceholder: customPlaceholder // Reference the customPlaceholder function from custom-placeholder.js
});

// Add this script after including intlTelInput.js and intlTelInput-utils.js

// Reference the intTelCountryNames.js file
var script = document.createElement("script");
script.src = "/lib/phone-number-validation/js/intTelCountryNames.js";
document.head.appendChild(script);

// Add an event listener to the input field for keydown event
input.addEventListener("keydown", function (event) {
    // Get the pressed key
    var key = event.key;

    // Allow numbers (0-9) and the "+" sign
    var isAllowedKey =
        /^[0-9]$/.test(key) || // Numbers 0-9
        key === "+" || // "+" sign
        key === "Backspace" || // Backspace
        key === "Delete" || // Delete
        key === "Enter"; // Enter key

    // Allow the "+" sign only if it's the first character
    var isFirstCharPlus = input.value.length === 0 && key === "+";
    if (!isAllowedKey && !isFirstCharPlus) {
        event.preventDefault();
    }
});

// Add an event listener to the input field for input event
input.addEventListener("input", function (event) {
    var maxLength = 15;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
});

// Add an event listener to the country dropdown
var countryDropdown = document.querySelector(".iti__flag-container");
countryDropdown.addEventListener("click", function () {
    var dialCode = iti.getSelectedCountryData().dialCode;
    input.value = "+" + dialCode + "";
});

// Validate the phone number on form submission
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var phoneNumber = input.value.trim();
    var isValid = iti.isValidNumber();

    // Ensure the phone number has the country code at the beginning
    var hasCountryCode = phoneNumber.startsWith("+");
    isValid = isValid && hasCountryCode;

    if (isValid) {
        // Phone number is valid, proceed with form submission
        form.submit();
    } else {
        // Phone number is invalid, handle the error
        //var validationError = iti.getValidationError();
        //var errorMessage = getErrorMessage(validationError);
        var errorMessage = "Invalid phone number";
        displayErrorMessage(errorMessage);
    }
});


// Helper function to get the error message based on the validation error code
//function getErrorMessage(errorCode) {
//    switch (errorCode) {
//        case -99:
//            return "Invalid phone number";
//        case 0:
//            return "No error";
//        case 1:
//            return "Invalid country code";
//        case 2:
//            return "The phone number is too short";
//        case 3:
//            return "The phone number is too short";
//        case 4:
//            return "Invalid number format";
//        case 5:
//            return "Invalid number type";
//        case 6:
//            return "Invalid region";
//        case 7:
//            return "Missing or invalid IDD prefix";
//        case 8:
//            return "Too many leading zeros";
//        default:
//            return "Invalid phone number";
//    }
//}

// Helper function to display the error message to the user
function displayErrorMessage(errorMessage) {
    var errorElement = document.getElementById("phone-error");
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
}
