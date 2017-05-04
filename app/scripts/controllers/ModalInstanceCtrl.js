(function() {
    function ModalInstanceCtrl($uibModalInstance) {

      //submit form data to modal
      this.submit = function () {
        $uibModalInstance.close(this.room);
      }

      //cancel the modal after it is open by pressing modal button
      this.close = function () {
        $uibModalInstance.dismiss();
      }


  }



    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
