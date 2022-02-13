document.getElementById('login-submit').addEventListener('click', function(){
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  //user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  
  if (userEmail == 'akram@gmail.com' && userPassword == '123456'){
      window.location.href = 'banking.html'
  };
   

});


