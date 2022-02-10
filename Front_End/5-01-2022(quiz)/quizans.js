function anssubmit(){


   var data = {
      que1: {

         answer:"",
         correctans:"because JS is client side scripting"
      },

      que2:{

         answer:"",
         correctans:"client Side Scripting Language"
      },

      que3:{

         answer:"",
         correctans:"HTML"
      },

      que4:{

         answer:"",
         correctans:"Function/Method"
      },

      que5:{

         answer:"",
         correctans:"src"
      },


   }

   var que1= document.getElementsByName("Que 1");
   // var que1= document.getElementsByName("Q")
   var que2= document.getElementsByName("Que 2");
   var que3= document.getElementsByName("Que 3");
   var que4= document.getElementsByName("Que 4");
   var que5= document.getElementsByName("Que 5");

   
// que1
 for(var a=0;a<que1.length;a++){
   var que1option = que1[a];
      if(que1option.checked == true){
         console.log(que1option.value);
         data.que1.answer=que1option.value;
      }
 }
// que2
 for(var b=0;b<que2.length;b++){
   var que2option = que2[b];
      if(que2option.checked == true){
         console.log(que2option.value);
         data.que2.answer=que2option.value;
      }
 }
// que3
 for(var c=0;c<que3.length;c++){
   var que3option = que1[c];
      if(que3option.checked == true){
         console.log(que3option.value);
         data.que3.answer=que3option.value;
      }
 }
// que4
 for(var d=0;d<que4.length;d++){
   var que4option = que4[d];
      if(que4option.checked == true){
         console.log(que4option.value);
         data.que4.answer=que4option.value;
      }
 }
// que5
 for(var e=0;e<que5.length;e++){
   var que5option = que5[e];
      if(que5option.checked == true){
         console.log(que5option.value);
         data.que5.answer=que5option.value;
      }
 }

 
 console.log(data)

  
}




// function changecolor(){

//    var que1 = document.getElementById(1);

//    if(data.que1.answer == correctans){
//       que1.style.color = 'green';
//    } else(que1.style.color = 'red');

// }

//  console.log(data)