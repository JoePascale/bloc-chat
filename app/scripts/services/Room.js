(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            all: rooms
        };

        /*Calls AngularFire's $add() on rooms array retrieved with
        the $firebaseArray service.*/
        var addRoom = this.rooms.$add();

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
