(function() {
    function ModalCtrl($uibModal, Room) {

      //opens the modal instance, creates an object with various properties
      this.open = function() {
        var modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: './templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',
        });

        modalInstance.result.then(function(room){
          Room.add(room);
        })

      }


  }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
