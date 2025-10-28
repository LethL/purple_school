const isOlder = (birthday) => {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    if (currentDate.getFullYear() - birthdayDate.getFullYear() >= 15) {
        return true;
    }

    if (currentDate.getFullYear() - birthdayDate.getFullYear() === 14) {
        if (birthdayDate.getMonth() < currentDate.getMonth()) {
            return true;
        }
        if (birthdayDate.getMonth() === currentDate.getMonth() && birthdayDate.getDate() <= currentDate.getDate()) {
            return true;
        }
    }

    return false;
}