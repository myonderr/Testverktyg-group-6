// Fetch users from the server
fetch('/users')
    .then(response => response.json())
    .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/user.html?id=${user.id}`;
            link.textContent = user.name;
            listItem.appendChild(link);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'x';
            deleteButton.addEventListener('click', () => {
                deleteUser(user.id);
            });
            listItem.appendChild(deleteButton);
            userList.appendChild(listItem);
        });
    });

function deleteUser(userId) {
    fetch(`/users/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // If successful, remove the user from the list
            document.getElementById('userList').querySelector(`[href="/user.html?id=${userId}"]`).parentNode.remove();
        } else {
            console.error('Failed to delete user');
        }
    })
    .catch(error => console.error('Error:', error));
}
