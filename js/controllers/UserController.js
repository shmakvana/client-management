app.controller('UserController', [ '$scope', '$rootScope', 'UserService',
		function($scope, $rootScope, UserService) {
			$scope.toggle = true;
			$scope.userData = [];
			$scope.user =[];
			$scope.status = [ 'Active', 'passive', 'pipeline','prospec'];

			$scope.getUserInfo = function() {
				console.log("getUserInfo start");
				$scope.userData = UserService.getUserInfo();
			};
			$scope.saveInfo = function(user) {
				console.log("saveInfo start");
				if(user.name.firstName == '')
				{
						alert("Please enter firstName");
				}else{
					UserService.saveInfo(user);
					$scope.reset();
					$location.path('#/home');
				}
			};
			$scope.updateInfo = function(user) {				
				console.log("updateInfo() start");
				UserService.updateInfo(user);				
				$scope.changeState();
			};
			$scope.editInfo = function(user) {				
				console.log("editInfo() start");
				$scope.user = user;
				$scope.changeState();
			};
			$scope.deleteUserInfo = function(clientId) {
				console.log("deleteUserInfo start Execution : " + clientId);
				
				var result = confirm('Are you sure ?');
				if(result == true){
					UserService.deleteInfo(clientId);
					$scope.getUserInfo();
				}
			};
			$scope.changeState = function() {
				$scope.toggle = !$scope.toggle;
			};
			$scope.reset = function(){
				$scope.user 
				=	
					{
						clientId : '',
						name :
							{
									firstName : '',
									lastName : '' 
							},
						businessName : '',
						email : '',
						phone : '',
						bankAccountNumber : '',
						address : {
									street1 : '',
									street2 : '',
									city : '',
									state : '',
									country : '',
									pincode : ''
								  },
						status : ''
					};
			}
		} ]);
