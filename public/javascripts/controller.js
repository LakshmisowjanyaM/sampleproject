angular.module('myApp').controller('homeController',
    ['$scope', '$location', 'MessageService','$routeParams','$http',
        function ($scope, $location, MessageService,$routeParams,$http) {
    $scope.submit=function(){
        // var res = $http.post('/saveMessage', {"message":$scope.message});
        // res.success(function(data, status, headers, config) {
        //     $scope.message = data;
        // });
        // res.error(function(data, status, headers, config) {
        //     alert( "failure message: " + JSON.stringify({data: data}));
        // });
        MessageService.saveMessage($scope.message).then(function(data)
        {
            console.log(data);
            $scope.message="";
        }).catch(function(){
            $scope.message="";
            });
        }
        }]);

angular.module('myApp').controller('inboxController',
    ['$scope', '$location', 'MessageService','$routeParams',
        function ($scope, $location, MessageService,$routeParams) {
            MessageService.getMessages().then(function(data)
            {
                console.log("jgh",data);
                $scope.msgarray=data;

            }).catch(function(){

            });
            $scope.delete=function(msg){

                MessageService.deleteMessage(msg._id).then(function(data)
                {
                    console.log("jghvh",data);


                }).catch(function(){

                });
            }

        }]);

angular.module('myApp').controller('mdisplayController',
    ['$scope', '$location', 'MessageService','$routeParams',
        function ($scope, $location, MessageService,$routeParams) {

        }]);

