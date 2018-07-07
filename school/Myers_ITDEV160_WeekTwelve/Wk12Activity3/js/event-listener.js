function checkUsername() { 								// Declare function
  var usernameLength=document.getElementById('username').value.length;  //get length of username
  var elUsernameMsg = document.getElementById('feedback1');     // Get feedback element
  if (usernameLength < 5) {                         // If username too short
    elUsernameMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elUsernameMsg.textContent = '';                            // Clear msg
  }
}

//Password check
function checkPassword() {                             // Declare function
  var elPasswordLength = document.getElementById('password').value.length;	//get password
  var elPasswordMsg = document.getElementById('feedback2');     // Get feedback2 element
  if (elPasswordLength < 6) {                         // If password too short
    elPasswordMsg.textContent = 'Password must be 6 characters or more'; // Set msg
  } else {                                             // Otherwise
    elPasswordMsg.textContent = '';                            // Clear msg
  }
}

var elUsername = document.getElementById('username');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);

var elPassword = document.getElementById('password');  // Get password input
// When it loses focus call checkPassword()
elPassword.addEventListener('blur', checkPassword, false);

