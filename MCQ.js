function check(){
   // document.write("Never give up") it is here to check if the function is working properly
   
   var c=0;//to collect the correct answer
   var q1=document.quiz.question1.value;
   var q2=document.quiz.question2.value;
   var q3=document.quiz.question3.value;
   var q4=document.quiz.question4.value;
   var q5=document.quiz.question5.value;
   var q6=document.quiz.question6.value;
   var q7=document.quiz.question7.value;
   var q8=document.quiz.question8.value;
   var q9=document.quiz.question9.value;
   var q10=document.quiz.question10.value;
   var div=document.getElementById("div")
   var p=document.getElementById("p")
   div.setAttribute("width","40px")
   div.setAttribute("color","white")
   div.setAttribute("background-color","#29d73b")
   div.setAttribute("height","40px")
   if(q1=="C"){
      c+=10;
   }else{
      c+=0;

   }
  
   if(q2=="B2"){
      c+=10;
   }else{
      c+=0;
   }
   if(q3=="A3"){
      c+=10;
   }else{
      c+=0;

   }
   if(q4=="D4"){
      c+=10;
   }else{
      c+=0;

   }

   if(q5=="D5"){
      c+=10;
    }else{
       c+=0;

    }
   if(q6=="B6"){
      c+=10;
   }else{
      c+=0;

   }
   if(q7=="C7"){
      c+=10;
   }else{
      c+=0;

   }
   if(q8=="A8"){
      c+=10;
   }else{
      c+=0;

   }
   if(q9=="B9"){
      c+=10;
   }else{
      c+=0;

   }
 if (q10 == "B10"){
   c+=10;
}else{
   c+=0;

}

   p.innerHTML=c
   p.appendChild(document.createTextNode("%"))
}