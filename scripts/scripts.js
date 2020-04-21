var fn = document.getElementById('firstName');
var ln = document.getElementById('lastName');
var email = document.getElementById('email')

console.log(fn.value)

function success(){
    if(fn.value == '' || ln.value == '' || email.value == ''){
        $( function() {
            $( "#error").dialog();
          } );

          var newMsg = "Please fill out all fields";
          document.getElementById('error').innerText = newMsg;
        
    }
    else{
        $( function() {
            $( "#success" ).dialog({dialogClass:'dialog_style1'});
          } );

          var succMsg = "Thank you for signing up to our newsletter, " + fn.value;
          document.getElementById('success').innerText = succMsg;
    }

}