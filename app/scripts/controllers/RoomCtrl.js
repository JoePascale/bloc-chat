(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;

        //container to hold list of messages to the right of the list of available chat rooms
        this.activeRoom = function(roomObj) {
          console.log(roomObj.$id);
          this.currentRoomName = roomObj.name;
        };

        /*this.activeMessages = function(messageObj) {
          console.log(messageObj);
          this.currentMessage = messageObj.getByRoomId;
        };
        */

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
