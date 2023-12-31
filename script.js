// Function to fetch a random quote from the Quotable API
function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-text').innerHTML = data.content;
            document.getElementById('quote-author').innerHTML = `- ${data.author}`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
getRandomQuote();

function onSubmit() {
    // Validate email format
    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        //invalid email
        window.alert('Enter a valid email address.');
        return false;
    }

    // alert message for successful submission
    window.alert('Thank you for submitting the form! Welcome to the Foodie Community :) We will share the community group details on your Email ID!');

    return false;
}

