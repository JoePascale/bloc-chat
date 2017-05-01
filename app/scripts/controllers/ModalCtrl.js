(function() {
    function ModalCtrl($uibModal, $uibModalInstance, Room) {

      //opens the modal instance, creates an object with various properties
      this.open = function() {
        var modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: './templates/modal.html',
        });
      }

      //submit form data to modal
      this.submit = function () {
        Room.addRoom();
        $uibModalInstance.close();
      }

      //cancel the modal after it is open by pressing modal button
      this.close = function () {
        $uibModalInstance.dismiss();
      }


  }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
