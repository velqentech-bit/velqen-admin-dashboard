// Chart
const ctx = document.getElementById('salesChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [1200, 1900, 1500, 2200, 2800, 3200],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});

// Table Data
const users = [
    {name: "John Smith", email: "john@mail.com", status: "Active"},
    {name: "Emma Brown", email: "emma@mail.com", status: "Pending"},
    {name: "Michael Lee", email: "michael@mail.com", status: "Active"},
    {name: "Sophia White", email: "sophia@mail.com", status: "Inactive"}
];

const table = document.getElementById('userTable');

users.forEach(user => {
    const row = `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status}</td>
        </tr>
    `;
    table.innerHTML += row;
});

const menuItems = document.querySelectorAll('.sidebar li');
const pages = document.querySelectorAll('.page');
const pageTitle = document.getElementById('pageTitle');

menuItems.forEach(item => {
    item.addEventListener('click', () => {

        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const text = item.textContent;

        pages.forEach(page => page.classList.remove('active'));

        if (text === 'Dashboard') {
            document.getElementById('dashboardPage').classList.add('active');
        }
        if (text === 'Users') {
            document.getElementById('usersPage').classList.add('active');
        }
        if (text === 'Orders') {
            document.getElementById('ordersPage').classList.add('active');
        }
        if (text === 'Settings') {
            document.getElementById('settingsPage').classList.add('active');
        }

        pageTitle.textContent = text;
    });
});
