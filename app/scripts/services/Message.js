(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    //set up query to match and display messages with same roomId as the activeRoom selected
    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      ref.orderByChild('roomId').equalTo('roomId').on('activeRoom', function(snapshot) {
        return snapshot.val();
      });
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
