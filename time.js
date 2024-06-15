function updateDateTime() {
    const now = new Date();
    const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const dateOptions = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    };

    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('time').innerText = formattedTime;
    document.getElementById('date').innerText = formattedDate;
}

// Initial update
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);

//cheese
