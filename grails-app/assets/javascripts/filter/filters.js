/**
 * Created by stephenokennedy on 25/05/15.
 */
angular.module('todoFilters',[]).filter('difficulty',function(){
    return function(input){
        switch (input){
            case 1: return "Minor"
                break;
            case 2: return "Moderate"
                break;
            case 3: return "Major"
                break;
            case 4: return "Severe"
                break;
            default: return "Just too damn difficult"
        }
    };
});