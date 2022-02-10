
function calculate() {
    var inputDate = new Date(document.getElementById("date1").value);
    var currentDate = new Date();
    console.log("inputDate : " + inputDate);

    var milliseconds = Math.floor(currentDate.getTime() - inputDate.getTime());

    var seconds = (milliseconds / 1000) % 60;
    var minutes = ((milliseconds / (1000 * 60)) % 60);
    var hours = ((milliseconds / (1000 * 60 * 60)) % 24);
    var days = milliseconds / (1000 * 60 * 60 * 24);

    var totalTimeDiff = document.getElementById("result").innerHTML = Math.floor(days) + " days " +
        Math.floor(hours) + " hours " + Math.floor(minutes) + " minutes " + Math.floor(seconds) + "seconds ago";

    console.log(totalTimeDiff);
    console.log("calculated Minutes : " + Math.floor(minutes));
    console.log("current date minutes : " + currentDate.getMinutes);
    if (Math.floor(minutes) == currentDate.getMinutes()) {
        console.log("just now")
    }


    return totalTimeDiff;
}


// {/* <script>
         
//          var date= new Date();

//          let hours = date.getHours();
//          let minutes = date.getMinutes();

//          var timeformat="";

//           if(hours - 12 < 0){
//              timeformat = "AM"
//           }
//           else
//           {
//               timeformat =  "PM";
//           }

//           document.getElementById("displayTime").innerHTML = hours + ":" + minutes+"&nbsp;"+ timeformat;
      
      
//       </script> */}
