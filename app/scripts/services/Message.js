(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    //chain the child method with orderbyChild, targeting roomId
    ref.orderbyChild("roomId");

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      ref.orderByChild('roomId').equalTo('roomId').on('activeRoom', function(snapshot) {
        console.log(snapshot.val());
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
