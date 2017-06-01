(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    //set up query to match and display messages with same roomId as the activeRoom selected
    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      var currentMessages;

      currentMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));

      return currentMessages;
    };

    //takes a message object as an argument and submits it to your Firebase server
    Message.send = function(content, roomId) {
        // Send method logic
        var newMessage = {};
        newMessage.content = content;
        newMessage.roomId = roomId;
        newMessage.sentAt = Date();
        newMessage.username = $cookies.get('username');
        messages.$add(newMessage)/*.then(function(ref) {
          debugger;
          var id = ref.key;
          console.log("added record with id " + id);
          messages.$indexFor(id);
        });*/

    }

    return Message;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
