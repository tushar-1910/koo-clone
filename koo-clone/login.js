var data=JSON.parse(localStorage.getItem('mobile')) || [];
      
        function OTP(){
            event.preventDefault();
            var obj={
             mobile:document.querySelector("#entermobileno").value,
         };
         data.push(obj);

         localStorage.setItem("data",JSON.stringify(data));
         var a=document.querySelector("#entermobileno").value;
         if(a.length==10)
         {
            document.querySelector("#proceed").style.backgroundColor="#e41d36";
        alert("Your OTP is 112737");
         }
        }
       

  
   



      function login()
      {

          event.preventDefault();
         var a=document.querySelector("#enterotp").value;
          if(a==112737)
          {
              document.getElementById("proceed").style.backgroundColor="#e41d36";
              alert("Login Successfull");
         window.location.href="";
          }
          else{
              alert("Wrong OTP")
          }
          
       
      }