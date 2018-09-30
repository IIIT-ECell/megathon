let timeDisplay = document.getElementById("downCount");

const countDown = (endDate) => {
    let days, hours, minutes, seconds;

    console.log(endDate);

    if (isNaN(endDate)) {
        return;
    }

    const calculate = () => {
        let startDate = new Date(), timeLeft;
        startDate = startDate.getTime();
        timeLeft = "";

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            timeLeft += (days) ? `${days}D ` : '';

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            timeLeft += (hours) ? `${hours}H ` : '';

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            timeLeft += `${minutes}M `;

            seconds = parseInt(timeRemaining);

            timeLeft += `${seconds}S left to hack`;

            timeDisplay.innerHTML = timeLeft;
        } else {
            return;
        }
    }

    setInterval(calculate, 1000);
}

//  Format: Date(yr, mnth - 1, day, 24H, min, sec)
countDown(new Date(2018, 8, 30, 13, 00, 0));
