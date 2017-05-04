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

        modalInstance.result.then(function(input){
          console.log(input);
          modalInstance.addRoom = input;
        })
        //pass to Room factory

      }


  }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
