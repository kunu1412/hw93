player1name=localStorage.getItem("player_1")
player2name=localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML=player1name
document.getElementById("player2_name").innerHTML=player2name
var score1=0
var score2=0
document.getElementById("player1_score").innerHTML=score1
document.getElementById("player2_score").innerHTML=score2
document.getElementById("question").innerHTML="question turn:"+player1name
document.getElementById("answer").innerHTML="answer turn:"+player2name



function sent(){

    q=document.getElementById("ques").value
    qw=q.toLowerCase()
     char1=qw.charAt(1)
     console.log(char1)
    


     len=qw.length
     mat=Math.floor(len/2)
     char2=qw.charAt(mat)
     console.log(char2)
    

    mat2 =len-1
    char3=qw.charAt(mat2)
    console.log(char3)

    remove1=qw.replace(char1,"_")
    console.log(remove1)

    remove2=remove1.replace(char2,"_")
    console.log(remove2)

    remove3=remove2.replace(char3,"_")
    console.log(remove3)


   col1="<h3 id='display'>Q. " +remove3+ "</h3>"
   col2='<br><br> answer <input id="ans" type="text">'
   col3='<br><br> <button onclick="check()" class="btn btn-info" >check</button>'
   join=col1+col2+col3
   document.getElementById("output").innerHTML=join
   document.getElementById("ques").value=""
}
var question_turn="p1"
var answer_turn="p2"
function check(){
    value=document.getElementById("ans").value
    answer=value.toLowerCase()
    if(answer==qw){ 
        if(question_turn=="p1"){
            score1=score1+1
            document.getElementById("player1_score").innerHTML=score1 
        }else{
            score2=score2+1
            document.getElementById("player2_score").innerHTML=score2

        }  
    }
    if(question_turn=="p1"){
        question_turn="p2"
        document.getElementById("question").innerHTML="question turn:"+player2name
    }
    else{
        question_turn="p1"
        document.getElementById("question").innerHTML="question turn:"+player1name

    }
    if(answer_turn=="p2"){
        answer_turn="p1"
        document.getElementById("answer").innerHTML="answer turn:"+player1name

    }
    else{
        answer_turn="p2"
        document.getElementById("answer").innerHTML="answer turn:"+player2name
    }
    document.getElementById("output").innerHTML=""

}

