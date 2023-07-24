$(document).ready(function(){
var flag=true;


$("#b1").click(function(){

  if($("#b1").text()==="X" || $("#b1").text()==="O"){
    alert("This place is already filled!!");
    return;
  }

  if(flag==true){
    $("#b1").text("X");
      flag=false;

      if($("#b1").text()==="X" && $("#b2").text()==="X" && $("#b3").text()==="X"){
        $("#b1").css("background-color","rgb(0, 128, 0)");
        $("#b2").css("background-color","rgb(0, 128, 0)");
        $("#b3").css("background-color","rgb(0, 128, 0)");
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b4").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b5").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      } 
      else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
      && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
      && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
      {
       alert("Its a DRAW!!");
      }
    }
      else{

        $("#b1").text("O");
        flag=true;
        
        if($("#b1").text()==="O" && $("#b2").text()==="O" && $("#b3").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b4").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b5").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
    else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
    && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
    && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
    {
     alert("Its a DRAW!!");
    }
  }
  })

//----------------------------------------------------------------------------------

$("#b2").click(function(){
 
  if($("#b2").text()==="X" || $("#b2").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  
  if(flag==true){
    $("#b2").text("X");
    flag=false; 

      if($("#b1").text()==="X" && $("#b2").text()==="X" && $("#b3").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b2").text()==="X" && $("#b5").text()==="X" && $("#b8").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
      && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
      && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
      {
       alert("Its a DRAW!!");
      }
    }
      else{
      
        $("#b2").text("O");
        flag=true;
        
           if($("#b4").text()==="O" && $("#b5").text()==="O" && $("#b6").text()==="O"){
            alert("Circle player WON!!");
          }
          else if($("#b1").text()==="O" && $("#b4").text()==="O" && $("#b6").text()==="O"){
            alert("Circle player WON!!");
          }
          else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
          && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
          && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
          {
           alert("Its a DRAW!!");
          }
  }
  })

//----------------------------------------------------------------------------------

$("#b3").click(function(){
  
  if($("#b3").text()==="X" || $("#b3").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  if(flag==true){
    $("#b3").text("X");
      flag=false; 

      if($("#b1").text()==="X" && $("#b2").text()==="X" && $("#b3").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b6").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b5").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
      && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
      && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
      {
       alert("Its a DRAW!!");
      }
     
    }
      else{
        $("#b3").text("O");
        flag=true;
        
        if($("#b1").text()==="O" && $("#b2").text()==="O" && $("#b3").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b6").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b5").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
         alert("Its a DRAW!!");
        }
  }


 })

//----------------------------------------------------------------------------------

$("#b4").click(function(){
 
  if($("#b4").text()==="X" || $("#b4").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  if(flag==true){
    $("#b4").text("X");
      flag=false; 

      if($("#b4").text()==="X" && $("#b5").text()==="X" && $("#b6").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b4").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
      && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
      && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
      {
       alert("Its a DRAW!!");
      }
     
    }
      else{
        $("#b4").text("O");
        flag=true;
      
        if($("#b4").text()==="O" && $("#b5").text()==="O" && $("#b6").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b4").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
&& $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
&& $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
{
 alert("Its a DRAW!!");
}
  }
  })

//----------------------------------------------------------------------------------

$("#b5").click(function(){
  
  if($("#b5").text()==="X" || $("#b5").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  if(flag==true){

    $("#b5").text("X");
      flag=false; 

      if($("#b4").text()==="X" && $("#b5").text()==="X" && $("#b6").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b2").text()==="X" && $("#b5").text()==="X" && $("#b8").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b5").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b5").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
      && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
      && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
      {
        alert("Its a DRAW!!");
      }
     
    }
      else{
        $("#b5").text("O");
        flag=true;

        if($("#b4").text()==="O" && $("#b5").text()==="O" && $("#b6").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b2").text()==="O" && $("#b5").text()==="O" && $("#b8").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b5").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b5").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
          alert("Its a DRAW!!");
        }
  }
  })

//----------------------------------------------------------------------------------

$("#b6").click(function(){
 
  if($("#b6").text()==="X" || $("#b6").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  if(flag==true){

    $("#b6").text("X");
      flag=false; 
  
      if($("#b4").text()==="X" && $("#b5").text()==="X" && $("#b6").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b6").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
     else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
     && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
     && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
     {
      alert("Its a DRAW!!");
     }
    }
      else{
        $("#b6").text("O");
        flag=true;

        if($("#b4").text()==="O" && $("#b5").text()==="O" && $("#b6").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b6").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        } 
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
          alert("Its a DRAW!!");
        } 
  }
  })

//----------------------------------------------------------------------------------

$("#b7").click(function(){
  
  if($("#b7").text()==="X" || $("#b7").text()==="O"){
    alert("This place is already filled!!");
    return;
  }

  if(flag==true){
    $("#b7").text("X");
      flag=false; 
  
      if($("#b7").text()==="X" && $("#b8").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b4").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b5").text()==="X" && $("#b7").text()==="X"){
        alert("Cross player WON!!");
      }
     else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
     && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
     && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
     {
      alert("Its a DRAW!!");
     }
    }
      else{
        
        $("#b7").text("O");
        flag=true;
        
        if($("#b7").text()==="O" && $("#b8").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b4").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b5").text()==="O" && $("#b7").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
         alert("Its a DRAW!!");
        }
  }
  })

//----------------------------------------------------------------------------------

$("#b8").click(function(){
 
  if($("#b8").text()==="X" || $("#b8").text()==="O"){
    alert("This place is already filled!!");
    return;
  }
  if(flag==true){

    $("#b8").text("X");
      flag=false; 
      
      if($("#b7").text()==="X" && $("#b8").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b2").text()==="X" && $("#b5").text()==="X" && $("#b8").text()==="X"){
        alert("Cross player WON!!");
      }
     else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
     && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
     && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
     {
      alert("Its a DRAW!!");
     }
    }
      else{
        $("#b8").text("O");
        flag=true;
        
        if($("#b7").text()==="O" && $("#b8").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b2").text()==="O" && $("#b5").text()==="O" && $("#b8").text()==="O"){
          alert("Circle player WON!!");
        } 
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
         alert("Its a DRAW!!");
        }
  }
  })

//----------------------------------------------------------------------------------

$("#b9").click(function(){
  
  if($("#b9").text()==="X" || $("#b9").text()==="O"){
    alert("This place is already filled!!");
    return;
  }

  if(flag==true){
    $("#b9").text("X");
      flag=false; 
      
      if($("#b7").text()==="X" && $("#b8").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b3").text()==="X" && $("#b6").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
      else if($("#b1").text()==="X" && $("#b5").text()==="X" && $("#b9").text()==="X"){
        alert("Cross player WON!!");
      }
     else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
     && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
     && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
     {
      alert("Its a DRAW!!");
     }
    }
      else{
        $("#b9").text("O");
        flag=true;
        
        if($("#b7").text()==="O" && $("#b8").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b3").text()==="O" && $("#b6").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text()==="O" && $("#b5").text()==="O" && $("#b9").text()==="O"){
          alert("Circle player WON!!");
        }
        else if($("#b1").text().trim().length>0 && $("#b2").text().trim().length>0 && $("#b3").text().trim().length>0
        && $("#b4").text().trim().length>0 && $("#b5").text().trim().length>0 && $("#b6").text().trim().length>0 
        && $("#b7").text().trim().length>0 && $("#b8").text().trim().length>0 && $("#b9").text().trim().length>0)
        {
         alert("Its a DRAW!!");
        }
  }
  })

//-------------------------------------------------

$("#resett").click(function(){
  $("#b1").text("");
  $("#b2").text("");
  $("#b3").text("");
  $("#b4").text("");
  $("#b5").text("");
  $("#b6").text("");
  $("#b7").text("");
  $("#b8").text("");
  $("#b9").text("");
  flag=true;
})
});