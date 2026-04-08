
function manualValidation() {
    const form = document.getElementById('contact');
    const sentSection = document.getElementById('sent');

    if(form.checkValidity()) {
        form.style.display = 'none';
        sentSection.style.display = 'block';

        redirectAfterDelay();
        
    }
    else {
        console.log("Form validation failed");
    }
}




function redirectAfterDelay() {
    const form = document.getElementById('contact');
    const sentSection = document.getElementById('sent');
    
    form.style.display = 'none';
    sentSection.style.display = 'block';

    console.log("Redirecting to homepage in 5 seconds...");
    setTimeout(function() {
        window.location.href = "index.html";
    }, 5000);
}