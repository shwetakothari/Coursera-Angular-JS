(function () {
'use strict';

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['saveInfoService'];
function RegistrationController(saveInfoService) {
  var reg = this;

 // reg.user = { 
 //             username : "",
 //             email : "",
 //             phone : ""
 //          };

 //  reg.comment = "";
  var reg.ss = "shweta";

  var reg.completed = false;
   reg.submit = function () {
    console.log("I am in submit function");

    reg.completed = true;
     
    saveInfoService.user = reg.user;

    reg.comment = " Your Information has been saved !! ";


  };
}

})();











