document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Formun normalde yapılacak olan gönderimini engeller

        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            nickname: formData.get("nickname"),
            age: formData.get("age"),
            bio: formData.get("bio"),
        };

        fetch("/save-profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});