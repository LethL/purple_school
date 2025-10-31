const div = document.querySelector('#counter');

const update = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextYear = new Date(currentYear + 1, 0, 1).getTime();
    const now = new Date().getTime();

    const timeLeft = nextYear - now;

    const months = `${Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30))} месяцев, `;
    const days = `${Math.floor((timeLeft / (1000 * 60 * 60 * 24)) % 30)} дней, `;
    const hours = `${Math.floor((timeLeft / (1000 * 60 * 60)) % 24)} часов, `;
    const minutes = `${Math.floor((timeLeft / (1000 * 60)) % 60)} минут, `;
    const seconds = `${Math.floor((timeLeft / 1000) % 60)} секунд`;

    return div.innerHTML = `${months}${days}${hours}${minutes}${seconds}`;
}

setInterval(() => update(), 1000)