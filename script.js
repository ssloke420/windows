let isWindowOpen = false;

function toggleWindow(windowId, frameId) {
    console.log("function toggleWindow called");
    const allWindows = document.querySelectorAll('iframe, textarea');
    const allFrames = document.querySelectorAll('.framehidden, .frameshown');

    // If any window is already open and the current window is not the same as the one being toggled
    if (isWindowOpen && !document.getElementById(windowId).classList.contains('windowshown')) {
        console.log("Another window is already open.");
        return; // Prevent opening another window
    }

    // Hide all other windows
    allWindows.forEach(win => {
        if (win.id !== windowId) {
            win.classList.remove('windowshown');
            win.classList.add('windowhidden');
        }
    });

    // Hide all other frames
    allFrames.forEach(frame => {
        if (frame.id !== frameId) {
            frame.classList.remove('frameshown');
            frame.classList.add('framehidden');
        }
    });

    const windowElement = document.getElementById(windowId);
    const frameElement = document.getElementById(frameId);

    if (windowElement.classList.contains('windowhidden')) {
        windowElement.classList.remove('windowhidden');
        windowElement.classList.add('windowshown');
        frameElement.classList.remove('framehidden');
        frameElement.classList.add('frameshown');
        isWindowOpen = true; // Update the global state
    } else {
        windowElement.classList.remove('windowshown');
        windowElement.classList.add('windowhidden');
        frameElement.classList.remove('frameshown');
        frameElement.classList.add('framehidden');
        isWindowOpen = false; // Update the global state
    }
}

function fullscreen(id) {
    const windowElement = document.getElementById(id);
    const iframe = windowElement.querySelector('iframe');

    if (windowElement.classList.contains('fullscreen')) {
        windowElement.classList.remove('fullscreen');
        iframe.classList.remove('fullscreen');
    } else {
        windowElement.classList.add('fullscreen');
        iframe.classList.add('fullscreen');
    }
}
function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        performSearch(event.target.value);
    }
}

function performSearch(query) {
    const googleFrame = document.getElementById('gwindow');
    const googleFrameHeader = document.getElementById('googleframeheader');
    
    // Check if the query is a valid URL
    if (isValidURL(query)) {
        // If it doesn't start with http or https, add https
        if (!/^https?:\/\//i.test(query)) {
            query = 'https://' + query;
        }
        googleFrame.src = query;
    } //else {
    //     // Perform a Google search
    //      googleFrame.src = `https://www.google.com/search?igu=1&ogs=1&q=${encodeURIComponent(query)}`;
    // }

    // Display the Google frame
    googleFrame.classList.remove('windowhidden');
    googleFrame.classList.add('windowshown');
    googleFrameHeader.classList.remove('framehidden');
    googleFrameHeader.classList.add('frameshown');
}


// document.addEventListener("keydown", function (event) {
//     if (event.ctrlKey && event.key === 'l') {
//         event.preventDefault(); // Prevent the default action if needed
//         lockOpen();
//     }
// });
