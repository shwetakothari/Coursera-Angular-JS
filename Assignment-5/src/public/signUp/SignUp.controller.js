(function () {
'use strict';

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['saveInfoService'];
function RegistrationController(saveInfoService) {
  var reg = this;

 reg.user = { 
             var username = "";
             var email = "";
             var phone = "";
          };

  reg.comment = "";

  reg.submit = function () {
    reg.completed = true;
     
    saveInfoService.user = reg.user;

    reg.comment = " Your Information has been saved !! ";


  };
}

})();










