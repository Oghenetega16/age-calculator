function calculateAge() {

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dayError = document.getElementById('dayError');
    const monthError = document.getElementById('monthError');
    const yearError = document.getElementById('yearError');

    const dayLabel = document.querySelector('.day label');
    const monthLabel = document.querySelector('.month label');
    const yearLabel = document.querySelector('.year label');


    // For day: Conditions for error
    if (!dayInput.value) {
        dayError.style.display = 'block';
        dayInput.style.border = '1px solid var(--light-red)';
        dayLabel.style.color = 'var(--light-red)';
    }
    else if (dayInput.value > 31) {
        dayError.style.display = 'block';
        dayError.innerHTML = 'Must be a valid day';
        dayLabel.style.color = 'var(--light-red)';
    }
    else {
        dayError.style.display = 'none';
        dayInput.style.border = '1px solid var(--light-grey)';
        dayLabel.style.color = 'var(--smokey-grey)';
    }

    // For month: Conditions for error
    if (!monthInput.value) {
        monthError.style.display = 'block';
        monthInput.style.border = '1px solid var(--light-red)';
        monthLabel.style.color = 'var(--light-red)';
    }
    else if (parseInt(monthInput.value) === 4 || parseInt(monthInput.value) === 6 || parseInt(monthInput.value) === 9 || parseInt(monthInput.value) === 11) {
        if (dayInput.value > 30) {
            dayError.style.display = 'block';
            dayError.innerHTML = 'Must be a valid date';
            dayInput.style.border = '1px solid var(--light-red)';
            dayLabel.style.color = 'var(--light-red)';
            monthInput.style.border = '1px solid var(--light-red)';
            monthLabel.style.color = 'var(--light-red)';
            yearInput.style.border = '1px solid var(--light-red)';
            yearLabel.style.color = 'var(--light-red)';
            return;
        }
        monthInput.style.border = '1px solid var(--light-grey)';
        monthLabel.style.color = 'var(--smokey-grey)';
    }

    else if (parseInt(monthInput.value) === 2) {
        if (parseInt(yearInput.value) % 4 === 0 && parseInt(yearInput.value) % 100 !== 0 || parseInt(yearInput.value) % 400 === 0) {
            // It's a leap year
            if (dayInput.value > 29) {
                dayError.style.display = 'block';
                dayError.innerHTML = 'Must be a valid date';
                dayInput.style.border = '1px solid var(--light-red)';
                dayLabel.style.color = 'var(--light-red)';
                monthInput.style.border = '1px solid var(--light-red)';
                monthLabel.style.color = 'var(--light-red)';
                yearInput.style.border = '1px solid var(--light-red)';
                yearLabel.style.color = 'var(--light-red)';
                return;
            }
        }
        else if (parseInt(yearInput.value) % 4 !== 0 && parseInt(yearInput.value) % 100 === 0 || parseInt(yearInput.value) % 400 !== 0) {
            // It's a common year
            if (dayInput.value > 28) {
                dayError.style.display = 'block';
                dayError.innerHTML = 'Must be a valid date';
                dayInput.style.border = '1px solid var(--light-red)';
                dayLabel.style.color = 'var(--light-red)';
                monthInput.style.border = '1px solid var(--light-red)';
                monthLabel.style.color = 'var(--light-red)';
                yearInput.style.border = '1px solid var(--light-red)';
                yearLabel.style.color = 'var(--light-red)';
                return;
            }
        }
        monthInput.style.border = '1px solid var(--light-grey)';
        monthLabel.style.color = 'var(--smokey-grey)';
    }

    else if (monthInput.value > 12) {
        monthError.style.display = 'block';
        monthError.innerHTML = 'Must be a valid month';
        monthInput.style.border = '1px solid var(--light-red)';
        monthLabel.style.color = 'var(--light-red)';
    }
    else {
        monthError.style.display = 'none';
        monthInput.style.border = '1px solid var(--light-grey)';
        monthLabel.style.color = 'var(--smokey-grey)';
    }

    // For year: Conditions for error
    if (!yearInput.value) {
        yearError.style.display = 'block';
        yearInput.style.border = '1px solid var(--light-red)';
        yearLabel.style.color = 'var(--light-red)';
    }
    else if (yearInput.value.length < 4 || yearInput.value.length > 4) {
        yearError.style.display = 'block';
        yearError.innerHTML = 'Must be a valid month';
        yearInput.style.border = '1px solid var(--light-red)';
        yearLabel.style.color = 'var(--light-red)';
        return;
    }
    else {
        yearError.style.display = 'none';
        yearInput.style.border = '1px solid var(--light-grey)';
        yearLabel.style.color = 'var(--smokey-grey)';
    }

    if (!dayInput.value || !monthInput.value || !yearInput.value) {
        return;
    }

    if (dayInput.value > 31 || monthInput.value > 12 || yearInput.value.length < 4 || yearInput.value.length > 4) {
        return;
    }

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value) - 1;
    const year = parseInt(yearInput.value);

    const today = new Date;
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let ageDay = currentDay - day;
    let ageMonth = currentMonth - month;
    let ageYear = currentYear - year;


    if (ageDay < 0) {
        ageDay += new Date(currentYear, currentMonth, 0).getDate();
        ageMonth--;
    }

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }

    document.getElementById('years').innerHTML = `${ageYear}`;
    document.getElementById('months').innerHTML = `${ageMonth}`;
    document.getElementById('days').innerHTML = `${ageDay}`;
} 

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', calculateAge);





