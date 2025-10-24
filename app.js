const random = (dice) => {
    const cleanMax = Number(dice.slice(1))
    return Math.round(Math.random() * (cleanMax - 1) + 1);
};