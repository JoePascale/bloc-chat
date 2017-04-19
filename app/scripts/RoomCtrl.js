(function() {
    function RoomCtrl(Room) {
        this.scope = Room;
    }
 
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();