document.getElementById('login-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  //user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  
  if (userEmail == 'akramhossain55667@gmail.com' && userPassword == 'akram123'){
      window.location.href = 'banking.html'
  };
   

});


