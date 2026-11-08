// Filter Classes
function filterClass(className) {
    const cards = document.querySelectorAll('.card');
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (className === 'all' || card.classList.contains(className)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modal Handlers
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleAuth(event) {
    event.preventDefault();
    alert('Login Successful! Welcome to PrepMaster Student Dashboard.');
    closeLoginModal();
}

function startTest(testName) {
    alert('Launching: ' + testName + ' (Demo Mode Active)');
}