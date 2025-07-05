function sendMail () {
    const parms = {
        firstName: document.querySelector("#first-name").value,
        lastName: document.querySelector("#last-name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    }

    emailjs
        .send("service_d6cc6nf","template_0gtxmgx",parms)
        .then(() => {
            alert("Email Sent!");
        })
        .catch((err) => {
            console.log("Error Sending email:", err);
            alert("Failed to Send Mail!");
        });
}