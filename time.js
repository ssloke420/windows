function updateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    
    // Format date
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', optionsDate);

    // Format time
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('en-US', optionsTime);

    // Combine date and time with a line break
    const dateTimeString = `${timeString}<br>${dateString}`;

    datetimeElement.innerHTML = dateTimeString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
