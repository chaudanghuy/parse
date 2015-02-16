$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ZdZB07zZtmf6BWRJjQlxjNWW7zs1cikGVZE6Opc9", "uJF6xLuo5IMvJVLgYJt2oVkRnEQtDeFHhnxKAt6N");
 
 	$('.form-signin').on('submit', function(e){
 		// Prevent default submit event
 		e.preventDefault();

 		// Get data from the form and put them into variables
 		var data = $(this).serializeArray(),
 		username = data[0].value,
 		password = data[1].value; 		

 		alert(data);

 		// Call Parse Login function with those variables
 		Parse.User.logIn(username, password, {
 			// If the username and password matches
 			success: function(user) {
 				alert('Welcome!');
 			},
 			error: function(user, error){
 				alert('Error!');
 				console.log(error);
 			}
 		});
 	});
});