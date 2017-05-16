(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    //set up query to match and display messages with same roomId as the activeRoom selected
    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      var currentMessages;

      ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
          currentMessages = snapshot.val();
      });

      return currentMessages;
    };

    return Message;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
