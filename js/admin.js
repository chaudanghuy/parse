$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ZdZB07zZtmf6BWRJjQlxjNWW7zs1cikGVZE6Opc9", "uJF6xLuo5IMvJVLgYJt2oVkRnEQtDeFHhnxKAt6N");
 
 	// $('.form-signin').on('submit', function(e){
 	// 	// Prevent default submit event
 	// 	e.preventDefault();

 	// 	// Get data from the form and put them into variables
 	// 	var data = $(this).serializeArray(),
 	// 	username = data[0].value,
 	// 	password = data[1].value; 		

 	// 	alert(data);

 	// 	// Call Parse Login function with those variables
 	// 	Parse.User.logIn(username, password, {
 	// 		// If the username and password matches
 	// 		success: function(user) {
 	// 			alert('Welcome!');
 	// 		},
 	// 		error: function(user, error){
 	// 			alert('Error!');
 	// 			console.log(error);
 	// 		}
 	// 	});
 	// });

 	var Blog = Parse.Object.extend("Blog");
 	var Blogs = Parse.Collection.extend({
		model: Blog
	});
 	var blog = new Blogs(); 	

 	$('.form-submit').on('submit', function(e){ 		
 		e.preventDefault();

 		blog.set("title", $('.parse-title').val());
 		blog.set("content", $('.parse-content').val());

 		alert($('.parse-title').val());

 		blog.save(null, {
		  success: function(blog) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + blog.id);
		  },
		  error: function(blog, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    alert('Failed to create new object, with error code: ' + error.message);
		  }
		});
 	});
});