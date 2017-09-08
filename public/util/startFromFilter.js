angular.module('startFromFilter',[])
    .filter('startFrom', function () {
        return function (input, start) {
            start = +start; //parse to int
            if (input) {
                return input.slice(start);
            }
        };
    });