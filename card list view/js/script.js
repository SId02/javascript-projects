 document.addEventListener('DOMContentLoaded', () => {
            const userContainer = document.getElementById('userContainer');
            const cardViewBtn = document.getElementById('cardViewBtn');
            const listViewBtn = document.getElementById('listViewBtn');
            let usersData = []; // To store fetched user data
            let currentView = 'card'; // Default view

            const fetchUsers = async () => {
                try {
                    const response = await fetch('https://reqres.in/api/users');
                    const data = await response.json();
                    usersData = data.data; // Assuming data.data holds the array of users
                    renderUsers(currentView);
                } catch (error) {
                    console.error('Error fetching users:', error);
                    userContainer.innerHTML = '<p class="has-text-danger has-text-centered">Failed to load user data.</p>';
                }
            };

            const createUserCard = (user) => `
                <div class="column is-one-quarter-desktop is-half-tablet">
                    <div class="card user-card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img src="${user.avatar}" alt="User Avatar">
                            </figure>
                        </div>
                        <div class="card-content has-text-centered">
                            <p class="title is-4">${user.first_name} ${user.last_name}</p>
                            <p class="subtitle is-6">${user.email}</p>
                        </div>
                    </div>
                </div>
            `;

            const createUsetListItem = (user) => `
                <div class="box user-list-item is-flex is-align-items-center">
                    <figure class="image is-64x64 is-flex-shrink-0 mr-4">
                        <img class="is-rounded" src="${user.avatar}" alt="User Avatar">
                    </figure>
                    <div class="media-content">
                        <p class="title is-5 mb-1">${user.first_name} ${user.last_name}</p>
                        <p class="subtitle is-6">${user.email}</p>
                    </div>
                </div>
            `;

            const renderUsers = (view) => {
                userContainer.innerHTML = ''; // Clear existing content
                if (view === 'card') {
                    userContainer.classList.add('is-multiline');
                    userContainer.classList.remove('is-flex', 'is-flex-direction-column');
                    usersData.forEach(user => {
                        userContainer.innerHTML += createUserCard(user);
                    });
                } else if (view === 'list') {
                    userContainer.classList.remove('is-multiline');
                    userContainer.classList.add('is-flex', 'is-flex-direction-column');
                    usersData.forEach(user => {
                        userContainer.innerHTML += createUsetListItem(user);
                    });
                }
            };

            const toggleView = (view) => {
                currentView = view;
                renderUsers(currentView);
                if (view === 'card') {
                    cardViewBtn.classList.add('is-primary');
                    cardViewBtn.classList.remove('is-light', 'is-info');
                    listViewBtn.classList.remove('is-primary');
                    listViewBtn.classList.add('is-info', 'is-light');
                } else {
                    listViewBtn.classList.add('is-primary');
                    listViewBtn.classList.remove('is-light', 'is-info');
                    cardViewBtn.classList.remove('is-primary');
                    cardViewBtn.classList.add('is-info', 'is-light');
                }
            };

            // Event listeners for toggle buttons
            cardViewBtn.addEventListener('click', () => toggleView('card'));
            listViewBtn.addEventListener('click', () => toggleView('list'));

            // Initial fetch and render
            fetchUsers();
        });