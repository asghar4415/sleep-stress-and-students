document.getElementById('sleepForm').addEventListener('submit',(event)=> {
  event.preventDefault();

  // Calculate total score
  let totalScore = 0;

  //Calculating component 1
  const c1_score=document.querySelector('input[name="q9"]:checked');
  if(c1_score)
  {
    console.log(parseInt(c1_score.value,10));
    totalScore+= parseInt(c1_score.value,10);
  }

  //Calculating component 2
    const c2_score = document.querySelector('input[name="q2"]:checked');
    if (c2_score) {
      totalScore += parseInt(c2_score.value, 10);
    }

    //Calculating component 3
    const c3_score=document.querySelector('input[name="q4"]:checked');
    if(c3_score)
    {
      totalScore=totalScore+parseInt(c3_score.value)-3;
    }

    //Calculating component 4
    var c4_score=parseInt(document.querySelector('input[name="q3"]:checked').value);
    c4_score-=parseInt(document.querySelector('input[name="q1"]:checked').value);
    c4_score=parseInt(document.querySelector('input[name="q4"]:checked').value)/c4_score;
    if(c4_score)
    {
    if(c4_score>=0.85)
    totalScore+=3;
    else if(c4_score>=0.75 && c4_score<=0.84)
    totalScore+=2;
    else if(c4_score>=0.65 && c4_score<=74)
    totalScore+=1;
    else totalScore+=0;
    }

    //Calculating component 5
    const c5_score=document.querySelector('input[name="q8"]:checked');
    if(c5_score){
      totalScore+=parseInt(c5_score.value,10);
    }

    //Calculating component 6
    const c6_score=document.querySelector('input[name="q5"]:checked');
    if(c6_score)
    {
      totalScore+=parseInt(c6_score.value,10);
    }

    //Calculating component 7
    const c7_score=Math.ceil((parseFloat(document.querySelector('input[name="q6"]:checked').value)+parseFloat(document.querySelector('input[name="q7"]:checked').value))/2);
    if(c7_score)
    {
      totalScore+=c7_score;
    }
  // Display total score
  document.getElementById('totalScore').value = 'Your Sleep Quality Score: ' + totalScore;
});