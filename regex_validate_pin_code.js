function validatePIN(pin) {

    let result = (pin.length === 4 || pin.length === 6);

    if (result) {
        for (let i = 0; i < pin.length; i++) {
            if (!(pin.charCodeAt(i) > 47 && pin.charCodeAt(i) < 58)) {
                return false;
            }
        }

    }
    return result;
}