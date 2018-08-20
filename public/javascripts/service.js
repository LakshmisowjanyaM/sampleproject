angular.module('myApp').factory('MessageService',
    ['$q', '$timeout', '$http',
        function ($q, $timeout, $http) {


            // return available functions for use in the controllers
            return ({
                saveMessage: saveMessage,
                getMessages: getMessages,
                getMessage: getMessage,
                deleteMessage: deleteMessage
            });

            function saveMessage(msg){
                var deferred = $q.defer();
                $http.post('/saveMessage',
                    {message:msg})
                // handle success
                    .success(function (data, status) {
                        if (status === 200 && data.status) {
                            deferred.resolve(data.status);
                        } else {
                            deferred.reject();
                        }
                    })
                    // handle error
                    .error(function (data) {
                        deferred.reject();
                    });
                return deferred.promise;
            }
            function getMessages()
            {
                var deferred = $q.defer();

                // send a get request to the server
                $http({
                    method: 'GET',
                    url: '/getMessages',
                    processData: false
                })
                // handle success
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    // handle error
                    .error(function (data) {
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;
            }
            function getMessage(msgid)
            {
                var deferred = $q.defer();

                // send a get request to the server
                $http({
                    method: 'GET',
                    url: '/getMessage',
                    params: {messageid:msgid},
                    processData: false
                })
                // handle success
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    // handle error
                    .error(function (data) {
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;
            }
            function deleteMessage(msgid)
            {
                var deferred = $q.defer();

                // send a get request to the server
                $http({
                    method: 'GET',
                    url: '/deleteMessage',
                    params: {messageid:msgid},
                    processData: false
                })
                // handle success
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    // handle error
                    .error(function (data) {
                        deferred.reject();
                    });

                // return promise object
                return deferred.promise;
            }
        }]);