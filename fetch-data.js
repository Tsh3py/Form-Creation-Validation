async function fetchUserData() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li'); 
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        console.error('There was a problem fetching the user data:', error); 
        dataContainer.innerHTML = 'Failed to load user data.'; 
        dataContainer.style.color = '#dc3545'; 
        dataContainer.style.backgroundColor = '#ffbaba'; 
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);