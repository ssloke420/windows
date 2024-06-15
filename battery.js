//battery
async function updateBattery() {
    const battery = await navigator.getBattery();
    document.getElementById('battery').innerText = `Battery: ${Math.round(battery.level * 100)}%`;

    // Update battery status on change
    battery.onlevelchange = () => {
        document.getElementById('battery').innerText = `Battery: ${Math.round(battery.level * 100)}%`;
    };
}
updateBattery();
