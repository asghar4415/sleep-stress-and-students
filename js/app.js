document.getElementById('sleepForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Calculate total score
  let totalScore = 0;
  for (let i = 1; i <= 7; i++) {
    const selectedValue = document.querySelector('input[name="q' + i + '"]:checked');
    if (selectedValue) {
      totalScore += parseInt(selectedValue.value, 10);
    }
  }

  // Display total score
  document.getElementById('totalScore').value = 'Your Sleep Quality Score: ' + totalScore;
});