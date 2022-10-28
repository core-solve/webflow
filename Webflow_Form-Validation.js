<script type="text/javascript">
$(document).ready(function () {
    $('#submit-btn').click(function() {
      
      email = $("#clientEmail").val();
      msg = $("#clientMsg").val();
      phone = $("#clientPhone").val(); 
      companyStg = $("#companyStage option:selected").index();
      checked1 = $(".checkbox:checked").length;
     
      if(!checked1) {
        document.getElementById("checkbox-error").innerHTML = "Please check and try again.";
        //return false;
      }
      
      if(email == "" || email == undefined){        
        document.getElementById("clientEmail").style.borderColor = "red";
        document.getElementById("email-error").innerHTML = "Please check and try again.";
      }
      
      if (companyStg == 0){
        document.getElementById("company_stage-error").innerHTML = "Please check and try again.";
      }
      
      if(msg == "" || msg == undefined){
        document.getElementById("clientMsg").style.borderColor = "red";
        document.getElementById("msg-error").innerHTML = "Please check and try again.";
      }
      
      if(phone == "" || phone == undefined){
        document.getElementById("clientPhone").style.borderColor = "red";
        document.getElementById("phone-error").innerHTML = "Please check and try again.";
      } 
      
      $("#clientEmail").keyup(function (e) {
        // in Webflow this regex should also be added to input attribute as pattern = "regex"
      let emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if($('#clientEmail').val().match(emailcheck)){
          document.getElementById("clientEmail").style.borderColor = "skyblue";
          document.getElementById("email-error").innerHTML = "";
          return true;
        }
        else{
          document.getElementById("clientEmail").style.borderColor = "red";
          document.getElementById("email-error").innerHTML = "Invalid Email."
          return false;
        }
      });
      
      $("#clientPhone").keyup(function (e) {
        //for 7 to 15 digit phone number; regex = ^\+?\d{7,15}$
        // in Webflow this regex should also be added to input attribute as pattern = "regex"
        let phonenocheck = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        if($('#clientPhone').val().match(phonenocheck)){
          document.getElementById("clientPhone").style.borderColor = "skyblue";
          document.getElementById("phone-error").innerHTML = "";
          return true;
        }
        else{
          document.getElementById("clientPhone").style.borderColor = "red";
          document.getElementById("phone-error").innerHTML = "Invalid Phone number."
          return false;
        }
      });
      
      $("#clientMsg").keyup(function (e) {
      let msgcheck = /^[A-Za-z0-9 _-]*$/;
      if($('#clientMsg').val().match(msgcheck)){
          document.getElementById("clientMsg").style.borderColor = "skyblue";
          document.getElementById("msg-error").innerHTML = "";
          return true;
        }
        else{
          document.getElementById("clientMsg").style.borderColor = "red";
          document.getElementById("msg-error").innerHTML = "Only letters, numbers, underscores and dashes are allowed."
          return false;
        }
      });
      
      let checkbox_all = document.querySelectorAll(".checkbox-wrapper .checkbox");
      for (var i = 0; i < checkbox_all.length; i++) {
        checkbox_all[i].addEventListener("change", checkedOrNot);
      }
      function checkedOrNot(){
        var isChecked = this.checked;
        checknumber = $(".checkbox:checked").length;
        console.log(checknumber);

        if(checknumber){
          document.getElementById("checkbox-error").innerHTML = "";
          return true;
        } else {
          document.getElementById("checkbox-error").innerHTML = "Please check at least one of the skills";
          return false;
        }
        return false;
      }
    });

    $('#companyStage').on('change', function (e) {
      companyStg = $("#companyStage option:selected").index();
      if (companyStg == 0){
          document.getElementById("company_stage-error").innerHTML = "Please check and try again.";
      }
      else{
          document.getElementById("company_stage-error").innerHTML = "";
      }
    });
    
});

</script>