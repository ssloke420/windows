function toggleWindow(windowId, frameId) {
    console.log("function toggleWindow called");
    const allWindows = document.querySelectorAll('iframe, textarea');
    const allFrames = document.querySelectorAll('.framehidden, .frameshown');

    allWindows.forEach(win => {
        if (win.id !== windowId) {
            win.classList.remove('windowshown');
            win.classList.add('windowhidden');
            // if (windowId == "gwindow") {
            //     win.src = "https://www.google.com/search?igu=1";
            // }
        }
    });

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
    } else {
        windowElement.classList.remove('windowshown');
        windowElement.classList.add('windowhidden');
        frameElement.classList.remove('frameshown');
        frameElement.classList.add('framehidden');
    }
    // if (windowElement.id =="gwindow") {
    //     windowElement.src = "https://www.google.com/search?igu=1";
    // }
}


function fullscreen(id) {
    const windowElement = document.getElementById(id);
    const iframe = windowElement.querySelector('iframe');
    // const taskbar = document.getElementById("taskbar");
    
    if (windowElement.classList.contains('fullscreen')) {
        windowElement.classList.remove('fullscreen');
        iframe.classList.remove('fullscreen');
        // taskbar.style.display = "flex";
    } else {
        windowElement.classList.add('fullscreen');
        iframe.classList.add('fullscreen');
        // taskbar.style.display = "none";
    }
}
