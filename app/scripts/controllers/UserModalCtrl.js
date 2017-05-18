(function() {
    function UserModalCtrl($uibModal, BlocChatCookies) {
      this.open = BlocChatCookies.open();
      this.submit = BlocChatCookies.submit();
    }



    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$uibModal', 'BlocChatCookies', UserModalCtrl]);
})();
