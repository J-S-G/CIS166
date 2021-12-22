var $ = function (id) {
    return document.getElementById(id);
}

//the dreaded $ variable

var grades = [];
//array

//update scores with scores, first, last, sort by last
var update_scores = function () {
        var val = get_item_list(grades);
        $("scores").value = val;
        $("last_name").value = "";
        $("first_name").value = "";
        $("score").value = "";
        $("average_score").value = getAverageScore(grades);
    }
    //function to add last, first, score to studentGrade
var addScore = function () {

    var last = $("last_name").value;
    var first = $('first_name').value;
    var score = parseFloat($('score').value);

    grades.push([last, first, score]);
    update_scores();
}


var get_item_list = function (item_list) {
    if (item_list.length == 0) {
        return "";
    }
    var list = "";
    for (var i = 0; i < item_list.length; i++) {
        var current = item_list[i];
        for (var attribute in current) {
            list += current[attribute] + ", ";
        }
        list += "\n";
    }
    return list;
}

//average function
function getAverageScore(grades) { //function-takes grades array
    var i; //declare variable
    var numberOfStudents = grades.length; //declare variable along length of array for number of students
    var sum = 0; //set sum to zero
    if (numberOfStudents > 0) 
    { // step through grades if > 0 students
        for (i = 0; i < numberOfStudents; i++) 
        { //increment by 1 through grades
            sum += grades[i][2]; //add each score to sum
        }
        return sum / numberOfStudents; //divide total of sum by how many students
    }
    
}

 var clearScores = function () {   
    grades.splice(0, grades.length); 
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    $("first_name").focus();
};

var sortScores = function () //ENTIRE FUNCTION TO SORT ARRAY AND REPRINT
    {
        grades.sort();
        update_scores();
    }

window.onload = function () {

    $("add_button").onclick = addScore;
    $("sort_button").onclick = sortScores;
    $("first_name").focus();
    $("clear_button").onclick = clearScores; 
    
}
