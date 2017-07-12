var dir=angular.module('dir',[]);
dir.directive('showright',function(){
    return {
        restrict:"ECMA",
        templateUrl:'tpl/main.html',
        scope:{
            data:"="
        }
    }

})