/**
 * Created by aniruddha on 11/2/17.
 */


(function(){

    angular
        .module('quiz.authentication.services')
        .factory('Authentication',Authentication);

    Authentication.$inject = ['$resource'];

    function Authentication($resource){
        return {
         Register:$resource('/api/v1/auth/register/'),
         Login:$resource('api/v1/auth/login/'),
         Authenticate:$resource('api/v1/auth/authenticate/')
        }

    }


})();