(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        animation: this.animationsEnabled,
        templateUrl: './templates/usermodal.html',
        controller: 'UserModalCtrl',
        controllerAs: 'user',
      });

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
