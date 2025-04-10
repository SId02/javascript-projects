	
document.getElementById('calculateBtn').addEventListener('click', function() {
    const date1Input = document.getElementById('date1').value;
    const date2Input = document.getElementById('date2').value;

    const { years, months, days, totalDays } = calculateDifference(date1Input, date2Input);
    
    document.getElementById('result').innerText = 
        `Difference: ${years} years, ${months} months, and ${days} days (Total: ${totalDays} days)`;
});

function calculateDifference(date1, date2) {
    const [day1, month1, year1] = date1.split('/').map(Number);
    const [day2, month2, year2] = date2.split('/').map(Number);
    const firstDate = new Date(year1, month1 - 1, day1);
    const secondDate = new Date(year2, month2 - 1, day2);

    if (firstDate > secondDate) {
        [firstDate, secondDate] = [secondDate, firstDate];
    }

    const timeDifference = Math.abs(secondDate - firstDate);
    const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let years = year2 - year1;
    let months = month2 - month1;
    
    if (months < 0) {
        years--;
        months += 12;
    }

    let days = day2 - day1;
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(year2, month2 - 1, 0); 
        days += lastMonth.getDate(); 
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    return { years, months, days, totalDays };
}