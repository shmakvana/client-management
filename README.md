------------------------------
Project Description

Project Name : Client-Management
Technology   : AngularJS
Description  : Create client management system in which user can able to add, update, delete, show 
	           (CRUD Operation) on client record.
			
			-- In this application data is not persistance it is use array from Json.
			-- when new client is added at that time it push data to json array.
				-- Same for all other operation.
Design Format : Created a Dashboard.
		- It should show tiles for total number of clients and separate tile for each status
		- Below tiles show a table with following details -  
			Client ID, name (Firstname + lastname), Business name, Email, Phone, city, Actions
		- On dashboard page header put a button to add new client
		- Separate pages for add and view client
		- View client should have link to dashboard and delete option
		
		-- This code is Organized in Controller and Services.
------------------------------
Directory Structure 
------------------------------
js/
	Controller/   // each component is treated as a mini Angular app
		homeController.js
	Service/ 
		homeService.js
	Shared/
		angular.min.js
		app.routes.min.js
		app.routes.js
	app.js
assert/
	adminLTE/ 
	BootStrap/ 	
	css /
	img/
	jQuery
View/
addUser.html
showUser.html
home.html

index.html
---------------------
How to Use
---------------------
User can add new user by click on Add button
User can get user details by click on Show button

