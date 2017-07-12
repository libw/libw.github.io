var service=angular.module('service',[]);
service.factory('$name',function($http,$q){
    return {
        getall:(function() {
            var def=$q.defer();
            $http({
                method:'GET',
                url:'php/index.php?url=http://news-at.zhihu.com/api/4/themes'
            }).then(function(data){
                def.resolve(data.data)
            })
            return def.promise;
        })(),
        getId:function(id) {
            var def=$q.defer();
            $http({
                method:'GET',
                url:'php/index.php?url=http://news-at.zhihu.com/api/4/theme/'+id,
            }).then(function(data){
                def.resolve(data.data)
            })
            return def.promise;
        },
        getnew:function() {
            var def=$q.defer();
            $http({
                method:'GET',
                url:'php/index.php?url=http://news-at.zhihu.com/api/4/news/latest',
            }).then(function(data){
                def.resolve(data.data)
            })
            return def.promise;
        },
        getshow:function(id) {
            var def=$q.defer();
            $http({
                method:'GET',
                url:'php/index.php?url=http://news-at.zhihu.com/api/4/news/'+id,
            }).then(function(data){
                def.resolve(data.data)
            })
            return def.promise;
        },
        
    }
    
})
