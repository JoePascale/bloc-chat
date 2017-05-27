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

    //takes a message object as an argument and submits it to your Firebase server
    Message.send = function(content, roomId) {
        // Send method logic
        //debugger;

        var newMessage = {};
        newMessage.content = content;
        newMessage.roomId = roomId;
        newMessage.sentAt = new Date();
        //newMessage.username = $cookies.get('blocChatCurrentUser');
        console.log(newMessage);
        //messages.$add(newMessage);
    }

    return Message;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
