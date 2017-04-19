(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'RoomCtrl as room',
                templateUrl: './index.html'
            });
    }
    
    angular
        .module('blocChat', ['ui.router', 'Firebase'])
        .config(config);
})();