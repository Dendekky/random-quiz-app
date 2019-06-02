console.log(5);

var form = document.getElementById("theQuizForm")
var submitAnswers = (e) => {
    e.preventDefault();

    alert('Baba Iya Eyan')
    var total = 5;
    var score = 0;
    // get provided input
    var q1 = document.forms["quizform"]["q1"].value;
    var q2 = document.forms["quizform"]["q2"].value;
    var q3 = document.forms["quizform"]["q3"].value;    
    var q4 = document.forms["quizform"]["q4"].value;
    var q5 = document.forms["quizform"]["q5"].value;

    alert(q1);
    // validation
    for(i=1; i<=total; i++){
        if('q'+i == null || 'q'+i == ''){
            alert('You missed question ' + i);
            return false;
        }    
    }

    // set correct answers
    var answers = ['a','b','c','d','a'];
    //check answers
    for(i=1; i<=total; i++){
        if(eval('q'+i) == answers[i - 1]){
            score++;
        }    
    }    
    //display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You have '+ score + 'out of' + total + 'marks</h3>';
    alert('You scored ' + score + 'out of '+ total);
    return false; 

    
}

window.onload = function(){
    form.addEventListener('submit', submitAnswers)
}






