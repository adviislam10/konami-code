// KONAMI CODE

let keyCodes = [];

document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    // Add current keycode to end of array
    keyCodes.push(event.code);
    if (keyCodes.length > 4) {
        // Remove first (oldest) element
        keyCodes.shift();
    }

    console.log(keyCodes);

    // Check if keyCodes is the secret code('code')
    if (keyCodes.join() == ['KeyC', 'KeyO', 'KeyD', 'KeyE'].join()) {
        alert('SECRET CODE ENTERED');
        document.body.style.backgroundColor = 'purple';
    }

}