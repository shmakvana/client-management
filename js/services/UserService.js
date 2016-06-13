app.factory('UserService', UserService);

UserService.$inject = [ '$http', '$rootScope' ];
function UserService($http, $rootScope) {
	var service = {};
	var userData = [
					{
						clientId : 1,
						name : {
								firstName : 'Sagar',
								lastName : 'Makvana'
							},
						businessName : 'Software Devloper',
						email : 'sagar@gmail.com',
						phone : '7405208718',
						bankAccountNumber : '',
						address : {
									street1 : "pipaliya hall main road",
									street2 : "ABC",
									city : "Rajkot",
									state : "Gujarat",
									country : "India",
									pincode : "360002"
								  },
						status : 'Active'
					},
					{
						clientId : 2,
						name : {
								firstName : 'Ankur',
								lastName : 'Gandhi'
							},
						businessName : 'Software Devloper',
						email : 'ankur@gmail.com',
						phone : '9998988755',
						bankAccountNumber : '',
						address : {
									street1 : "iscon main road",
									street2 : "ABC",
									city : "Ahmedabad",
									state : "Gujarat",
									country : "India",
									pincode : "380015"
								  },
						status : 'Active'
					},
					{
						clientId : 3,
						name : {
								firstName : 'Nitin',
								lastName : 'Sharma'
							},
						businessName : 'Software Devloper',
						email : 'nitin@gmail.com',
						phone : '8877899887',
						bankAccountNumber : '',
						address : {
									street1 : "Iscon main road",
									street2 : "ABC",
									city : "Ahmedabad",
									state : "Gujarat",
									country : "India",
									pincode : "380015"
								  },
						status : 'Active'
					},
					{
						clientId : 4,
						name : {
								firstName : 'Harshraj',
								lastName : 'chavda'
							},
						businessName : 'Software Devloper',
						email : 'harshraj@gmail.com',
						phone : '8877899887',
						bankAccountNumber : '',
						address : {
									street1 : "Iscon main road",
									street2 : "ABC",
									city : "Ahmedabad",
									state : "Gujarat",
									country : "India",
									pincode : "380015"
								  },
						status : 'Active'
					}					
				   ];

	service.getUserInfo = function() {
		return userData;
	};
	service.deleteInfo = function(clientId) {
		for(var i = userData.length - 1; i >= 0; i--){
			if(userData[i].clientId == clientId){
				userData.splice(i,1);
			}
		}
		console.log("Client with id: " + clientId + " is deleted.");
	};
	service.updateInfo = function(user) {
		for(var i = userData.length - 1; i >= 0; i--){
			if(userData[i].clientId == user.clientId){
				userData[i] = user;
			}
		}
		for(var i = userData.length - 1; i >= 0; i--){
			console.log(" City : "  + userData[i].address.city);
		}		
	};
	service.saveInfo = function(user) {

		console.log("saveInfo Service start Execution");

		userData.push(user);
		
		console.log("record inside service");

	};
	return service;
}