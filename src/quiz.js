
var form = document.getElementById("theQuizForm")
var submitAnswers = (e) => {
    e.preventDefault();
    var total = 5;
    var score = 0;
    // get provided input
    var q1 = document.forms.quizForm["q1"].value;
    var q2 = document.forms.quizForm["q2"].value;
    var q3 = document.forms.quizForm["q3"].value;    
    var q4 = document.forms.quizForm["q4"].value;
    var q5 = document.forms.quizForm["q5"].value;

    // validation
    for(i=1; i<=total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed question ' + i);
        }    
    }

    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then(response => response.json())
      .then(data => console.log(data));

    document.getElementById("test").innerHTML = data.results[0].question;
    // set correct answers
    // var answers = ['a','b','c','d','a'];
    // //check answers
    // for(i=1; i<=total; i++){
    //     if(eval('q'+i) == answers[i - 1]){
    //         score++;
    //     }    
    // }    
    // //display results
    // var results = document.getElementById('results');
    // results.innerHTML = '<h3>You have '+ score + 'out of' + total + 'marks</h3>';
    // alert('You scored ' + score + 'out of '+ total);
    // return false; 

    
}

window.onload = function(){
    form.addEventListener('submit', submitAnswers)
}
