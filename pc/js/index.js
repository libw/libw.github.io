/**
 * Created by libw on 2017/5/19.
 */
var zhihu=angular.module('zhihu',['ngRoute','services','ngSanitize']);
zhihu.config(function($routeProvider){//路由
    $routeProvider.when('/',{
        templateUrl:'tpl/homelist.html',
        controller:function ($scope,stores) {
            stores.getNew().then(function(data){
                $scope.dddata = data.stories;
            })
        }
    }).when('/show/:id',{
        templateUrl:'tpl/show.html',
        controller:'show'
    }).when('/list/:id',{
        templateUrl:'tpl/list.html',
        controller:function ($scope,$routeParams,stores) {
            var id=$routeParams.id;
            stores.getId(id).then(function(data){
                $scope.ddata = data.stories;
                $scope.mdata=data;
                $scope.per=data.editors;
                $scope.imageurl=data.background
            })
        }
    }).when('/show/:id',{
        templateUrl:'tpl/show.html',
        controller:function ($scope,$routeParams,stores) {
            var id=$routeParams.id;
            stores.getShow(id).then(function(data){
                $scope.ddddata = data;
                console.log(data)
            })
        }
    })
})

zhihu.run(function ($rootScope,stores) {
    stores.getThemes.then(function(data){

        $rootScope.data = data.others;
    })
})
zhihu.controller('con',function ($scope) {

    $scope.show=function (i) {
        $scope.index=i;
    };


});


