(function() {
    function RoomCtrl(Room, Message) {
        this.rooms = Room.all;

        //container to hold list of messages to the right of the list of available chat rooms
        this.activeRoom = function(roomObj) {
          console.log(roomObj.$id);
          this.currentRoomName = roomObj.name;
          this.roomMessages = Message.getByRoomId(roomObj.$id);
        };

        this.createMessage = Message.send;

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
