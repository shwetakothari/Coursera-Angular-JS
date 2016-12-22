(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['saveInfoService'];
function RegistrationController(saveInfoService) {
  var reg = this;

  var reg.user = { 
  	         var username = "";
  	         var email = "";
  	         var phone = "";
  	      };

  var reg.comment = "";

  reg.submit = function () {
    reg.completed = true;
     
    SaveMyInfo.username = reg.user;

    reg.comment = " Your Information has been saved !! ";


  };
}



})();
