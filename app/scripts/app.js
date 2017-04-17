(function() {
    
    $stateProvider
         .state('main', {
             templateUrl: '/index.html'
         });
    
    angular
        .module('blocChat', ['ui.router', 'Firebase'])
})();