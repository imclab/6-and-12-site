/*
 * routes/index.js
 * 
 * Routes contains the functions (callbacks) associated with request urls.
 */

/*
	GET /
*/
exports.index = function(req, res) {
	console.log("6and12 index requested");
	res.render('index.html');
}


/*
	POST /create
*/
// exports.createAstro = function(req, res) {
	
// 	console.log("received form submission");
// 	console.log(req.body);

// 	// accept form post data
// 	var newAstro = new astronautModel({
// 		name : req.body.name,
// 		photo : req.body.photoUrl,
// 		source : {
// 			name : req.body.source_name,
// 			url : req.body.source_url
// 		},
// 		slug : req.body.name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'_')

// 	});

// 	// you can also add properties with the . (dot) notation
// 	if (req.body.birthdate) {
// 		newAstro.birthdate = moment(req.body.birthdate).toDate();
// 	}

// 	newAstro.skills = req.body.skills.split(",");

// 	// walked on moon checkbox
// 	if (req.body.walkedonmoon) {
// 		newAstro.walkedOnMoon = true;
// 	}
	
// 	// save the newAstro to the database
// 	newAstro.save(function(err){
// 		if (err) {
// 			console.error("Error on saving new astronaut");
// 			console.error(err); // log out to Terminal all errors

// 			var templateData = {
// 				page_title : 'Enlist a new astronaut',
// 				errors : err.errors, 
// 				astro : req.body
// 			};

// 			res.render('create_form.html', templateData);
// 			// return res.send("There was an error when creating a new astronaut");

// 		} else {
// 			console.log("Created a new astronaut!");
// 			console.log(newAstro);
			
// 			// redirect to the astronaut's page
// 			res.redirect('/astronauts/'+ newAstro.slug)
// 		}
// 	});
// };