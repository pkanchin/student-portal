function generateRandomPercentages() {
    const subject1 = getRandomPercentage();
    const subject2 = getRandomPercentage();
    const subject3 = getRandomPercentage();
    const subject4 = getRandomPercentage();

    document.getElementById('subject1').value = `${subject1}%`;
    document.getElementById('subject2').value = `${subject2}%`;
    document.getElementById('subject3').value = `${subject3}%`;
    document.getElementById('subject4').value = `${subject4}%`;

    document.getElementById('subject1-details').textContent = getClassDetails(subject1);
    document.getElementById('subject2-details').textContent = getClassDetails(subject2);
    document.getElementById('subject3-details').textContent = getClassDetails(subject3);
    document.getElementById('subject4-details').textContent = getClassDetails(subject4);

    const total = (subject1 + subject2 + subject3 + subject4) / 4;

    document.getElementById('totalPercentage').textContent = `${total.toFixed(2)}%`;
}

function getRandomPercentage() {
    return Math.floor(Math.random() * 61) + 40; // Generates a random percentage between 40% and 100%
}

function getClassDetails(percentage) {
    const totalClasses = 50; // Assuming total classes as 50 for calculation
    const classesPresent = Math.round((percentage / 100) * totalClasses);
    const classesAbsent = totalClasses - classesPresent;
    return `Present: ${classesPresent}, Absent: ${classesAbsent}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateRandomPercentages();
});
