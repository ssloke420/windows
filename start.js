
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
}

function openApp(app) {
    // Add logic to open the specified app
    console.log(`Opening ${app}`);
    toggleStartMenu();
}
