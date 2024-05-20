document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-profile-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("/save-profile", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "/users";
            } else {
                alert("There was an error saving your profile.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});