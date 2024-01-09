
function resetInput() {

  var inputElement = document.getElementById('agetest');
  inputElement.value = '';
}

 
function handleInputChange(){

 var age = parseFloat(document.getElementById("agetest").value);


// console.log(age);
 
 if (isNaN(age)) {
    //location.reload(true);
    document.querySelector("input").placeholder="Please enter a valid number!!!!!";
    // document.querySelector("input").placeholder.style.color="red";
    document.getElementById("adult").style.display ="none";
    document.getElementById("child").style.display ="none";
    resetInput();
    //alert("Please enter a valid number");
     //document.getElementById("Message").innerHTML = 'Please enter a valid number.';
    //document.querySelector("input").placeholder="Please enter a valid number";
    //alert("Please enter a valid number");
    // document.getElementById("registration").reset();
    
    //document.getElementById("Card-para-Age18").innerHTML=" ";
    //document.getElementById("Card-para-Age").innerHTML=" ";
 
     
    } 
     
  else {

    if(age>=18){
       
      
        document.getElementById("child").style.display ="none"
        document.getElementById("adult").style.display ="block"
        document.getElementById("Card-para-Age18").innerHTML="You are an adult <br> Your age is: " + age;
        document.getElementById("Card-para-Age18").style.color = "green";
        resetInput();
        
    }
    else
    {
        document.getElementById("adult").style.display ="none"
        document.getElementById("child").style.display ="block"
        document.getElementById("Card-para-Age").innerHTML="You are a child <br> Your age is: " + age;
        document.getElementById("Card-para-Age").style.color = "green";
        resetInput();
      
     
   
  }

  
   }
}