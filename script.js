// Config Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Init irebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login
document.getElementById('login-btn')?.addEventListener('click', function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        window.location.href = 'catalog.html'; //
    }).catch((error) => {
        console.error(error.message);
    });
});

// Registro // Pra depois!!!
document.getElementById('register-btn')?.addEventListener('click', function () {
    alert("Função de registro a ser implementada.");
});

// Autenticar
auth.onAuthStateChanged(user => {
    if (!user && window.location.pathname === '/catalog.html') {
        window.location.href = 'login.html';
    }
});

// AJEITAR !!!!!!!

// Init mapa
function initMap() {
    const map = L.map('map').setView([-8.047562, -34.877494], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const trails = [
        { name: "Trilha da Pedra Grande", location: [-8.052756, -34.844958] },
        { name: "Trilha do Pico do Jaraguá", location: [-8.058292, -34.815928] }
    ];

    trails.forEach(trail => {
        L.marker(trail.location).addTo(map)
            .bindPopup(trail.name);
    });
}

//test
document.addEventListener('DOMContentLoaded', initMap);

// AJEITAR !!!!!!!