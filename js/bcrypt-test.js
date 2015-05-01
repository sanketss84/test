var password = $('#password');

//[Not compatible with npm bcrypt (unicode) · Issue #4 · dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js/issues/4)

//bcrypyt configuration 
var bcrypt = dcodeIO.bcrypt;
var salt = bcrypt.genSaltSync(8);

// Auto-gen a salt and hash:
// var hash = bcrypt.hashSync('bacon', 8);

// To check a password:
// // Load hash from your password DB.
// bcrypt.compareSync("B4c0/\/", hash); // true
// bcrypt.compareSync("not_bacon", hash); // false

$(document).ready(function () {

	//Process Text 
	$('#hashme').on('click', function() {

		var hashText = hashPassword(password.val());
		console.log(password.val());
		console.log(hashText);

	});

}); //Ready Function Ends


function hashPassword (clearText) {
	var hash = bcrypt.hashSync(clearText, salt);
	return hash;
}

// Returns True if all good
function comparePassword (clearText) {
	
	// Eg. following will return true
	// bcrypt.compareSync('test', 'somelongrandomstringshouldbeusedhere');
	// bcrypt.compareSync('å', 'somelongrandomstringshouldbeusedhere');

	//hash text for password "test"
	var hash = "somelongrandomstringshouldbeusedhere"; //load hash from db for 'test'
	var result = bcrypt.compareSync(clearText, hash); //bool
	// console.log(result);
	return result;
}
