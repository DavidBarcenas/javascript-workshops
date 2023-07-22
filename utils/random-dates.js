function getRandomDateInRange(startDate, endDate) {
    const startMS = startDate.getTime();
    const endMS = endDate.getTime();
    return new Date(startMS + Math.random() * (endMS - startMS));
}

function getRandomInYearRange(startYear, endYear) {
    const randomYear = Math.floor(startYear + Math.random() * (endYear - startYear + 1));
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 28); // incluyendo febrero
    return new Date(randomYear, randomMonth - 1, randomDay);
}

function getRandomDateFromToday(numDays) {
    const today = new Date();
    const randomMillis = today.getTime() + (Math.random() - 0.5) * numDays * 24 * 60 * 60 * 1000;
    return new Date(randomMillis);
}

function runExample() {
    // const yearInRange = getRandomInYearRange(2020, 2023);
    // const dateInRange = getRandomDateInRange(new Date(2020, 6, 10), new Date())

    Array.from({ length: 10 }, () => {
        console.log(getRandomDateFromToday(30))
    });
}
runExample();