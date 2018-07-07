var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint, elUsername; // Declare variables
elForm          = document.getElementById('formSignup');          // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');
elUsername 		= document.getElementById('username');

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Wise choice!';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();  								// Don't submit form
  }	
}

function checkName(event) {
  if(elUsername.value.length < 5) {
	  elTermsHint.innerHTML = 'Name must be more than 5 characters.';
	  event.preventDefault();
  }
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elForm.addEventListener('submit', checkName, false);
elSelectPackage.addEventListener('change', packageHint, false);

