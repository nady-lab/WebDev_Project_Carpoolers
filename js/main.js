//JS validation for the contact page

const form = document.getElementById('contact.html');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    //Variables for the validation
    const first_name = form.firstname.value.trim();
    const surname = form.surname.value.trim();
    const email = form.email.value.trim();
    const reason = form.reason.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.trim();

    //Regex patterns
    const NamePattern = /^[A-Za-z\s]+$/;
    const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PhonePattern = /^(\+353\s?|0)([1,2,4,5,6,7,8]\s?|\d{2,3}\s?)\d{3,4}\s?\d{4}$/;

    // if statements to validate the input
    if (!NamePattern.test(first_name)) {
        alert("Please enter a Valid First name (Letters only)");
        return;
    }
    if (!EmailPattern.test(surname)) {
        alert("please enter a Valid surname (Letters only)");
        return;
    }
    if (!PhonePattern.test(phone)) {
        alert("Please enter a valid Phone number (Numbers only)");
        return;
    }
    if (!reason) {
        alert("Please select a reason");
        return;
    }
    if (!message) {
        alert("Please enter a message");
        return;
    }

    form.onsubmit();

});