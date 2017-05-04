(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        /*return {
            all: rooms
            //addRoom:
        };*/
        Room.all = rooms;

        Room.add = function(room) {
          //Use the firebase method $add here
          rooms.$add(ModalCtrl.modalInstance.addRoom);
        }

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
