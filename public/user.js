// public/user.js
document.addEventListener("DOMContentLoaded", function() {
    // Simulating fetching user data. In a real app, you'd fetch this from your server.
    const userData = {
        name: "John",
        surname: "Doe",
        nickname: "Johnny",
        age: 30,
        bio: "A short bio about John Doe."
    };

    const userProfileDiv = document.getElementById('user-profile');

    userProfileDiv.innerHTML = `
        <h1>${userData.name} ${userData.surname}</h1>
        <p>Nickname: ${userData.nickname}</p>
        <p>Age: ${userData.age}</p>
        <p>Bio: ${userData.bio}</p>
    `;
});
