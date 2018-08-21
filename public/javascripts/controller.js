angular.module('myApp').controller('homeController',
    ['$scope', '$location', 'MessageService','$routeParams','$http','$timeout',
        function ($scope, $location, MessageService,$routeParams,$http,$timeout) {
            $scope.showstatmsg = false;
    function reverseString(mstr)
    {
        return mstr.split("").reverse().join("");
    }
    $scope.submit=function(){
        $scope.showstatmsg = false;
          var rstr=reverseString($scope.message);
          var palindrome=($scope.message === rstr) ? true :false;
        MessageService.saveMessage($scope.message,palindrome).then(function(data)
        {
            console.log(data);
            $scope.msg="message saved successfully";
            $scope.showstatmsg=true;
            $timeout(function(){
                $scope.showstatmsg = false;
            }, 5000);
            $scope.message="";
        }).catch(function(){
            $scope.message="";
            });
        }
        }]);

angular.module('myApp').controller('inboxController',
    ['$scope', '$location', 'MessageService','$routeParams',
        function ($scope, $location, MessageService,$routeParams) {
            $scope.showstatmsg = false;
            msgdispay();
            function msgdispay() {
                MessageService.getMessages().then(function (data) {
                    $scope.msgarray = data;

                }).catch(function () {

                });
            }
            $scope.delete=function(msg){

                MessageService.deleteMessage(msg._id).then(function(data)
                {

                      msgdispay();

                }).catch(function(){

                });
            }

        }]);

angular.module('myApp').controller('mdisplayController',
    ['$scope', '$location', 'MessageService','$routeParams','$timeout',
        function ($scope, $location, MessageService,$routeParams,$timeout) {
       $scope.showstatmsg = false;
       $scope.search=function(){
           MessageService.getMessage($scope.searchm).then(function(data)
           {
               $scope.msga=data;
           }).catch(function(status){
               if(status === 404)
               {
                   $scope.msg="no message found with given id";
                   $scope.showstatmsg=true;
                   $timeout(function(){
                       $scope.showstatmsg = false;
                   }, 1000);
               }

           });

       }
        }]);

