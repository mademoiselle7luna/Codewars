function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    var cDate = new Date(currentDate);
    var eDate = new Date(expirationDate);
    if (enteredCode === correctCode && cDate <= eDate) {
        return true;
    }
    else
        return false;
}