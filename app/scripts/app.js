(function() {
    function config($stateProvider, $locationProvider) {

        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('room', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: 'templates/room.html'
            });
    }

    function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        var userModal = $uibModal.open({
          // Modal configuration object properties
          animation: this.animationsEnabled,
          templateUrl: './templates/usermodal.html',
          controller: 'UserModalCtrl',
          controllerAs: 'user',
        })

        userModal.result.then(function(username){
          console.log(username);
          $cookies.put('username', username);
        });
      }
    }

    angular
        .module('blocChat', ['ngCookies', 'ui.router', 'firebase', 'ui.bootstrap'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
