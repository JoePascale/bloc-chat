(function() {
    function RoomCtrl(Room) {
        this.rooms = Room.all;
        console.log(this.rooms);
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
