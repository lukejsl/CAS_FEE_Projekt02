/**
 * Created by sigell on 10.09.2015.
 */
'use strict';

angular.module('shopApp', [])
    // Controller ArticlesCtrl wird hier beschrieben. Wir fügen scope und http als Services hinzu.
    .controller('ArticlesCtrl', function($scope, $http) {
        // http-Service. Was http-Service zurückliefert heisst Promise
        $http.get('../module/articles.json').then(function (articlesResponse) {
            $scope.articles = articlesResponse.data;
        });
    });
