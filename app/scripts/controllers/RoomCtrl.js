(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;

        //container to hold list of messages to the right of the list of available chat rooms
        //this.activeRoom = room.onClick() in Room.rooms;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
