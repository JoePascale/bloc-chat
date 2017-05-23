(function() {
    function UserModalCtrl($uibModalInstance) {

      this.submit = function () {
        $uibModalInstance.close(this.username);
      }
    }



    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModalInstance', UserModalCtrl]);
})();
