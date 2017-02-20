$(document).ready(function() {

	// process the form
	$('form').submit(function(event) {

		$('.form-group').removeClass('has-error'); // remove the error class
		$('.help-block').remove(); // remove the error text

		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {

			'name': $('input[name=name]').val(),
			'email' 	: $('input[name=email]').val(),
			'message': $('textarea[name=message]').val()
		};

		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'contact_form.php', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			encode 		: true
		})
//        

			.done(function(data) {
				if ( ! data.success) {
					if (data.errors.name) {
					}
					if (data.errors.email) {
					}
					if (data.errors.superheroAlias) {
					}

				} else {
				}
			})
			.fail(function(data) {
                $('#form').each (function(){
                    this.reset();
                })  
			});
		event.preventDefault();
	});

});