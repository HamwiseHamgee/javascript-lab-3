// 1
const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]

// 2
const addSubmission = function(array, newName, newScore, newDate) {
    const submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false
        
    }
    array.push(submission);
}
// addSubmission(submissions, "Sam", 99, "2021-08-29");


// 3
let deleteSubmissionByIndex = function(array, index) {
    array.splice(index, 1);
}


// 4
let deleteSubmissionByName = function(array, name) {
    let deleteIndex = array.findIndex(array => array.name === name);
    array.splice(deleteIndex, 1);
}
// console.log(deleteSubmissionByName(submissions, "Jack"));

// 5
let editSubmission = function(array, index, score) {
    array[index].score = score;
    array[index].passed = score >= 60 ? true : false;
}
// editSubmission(submissions, 0, 95);
// editSubmission(submissions, 1, 95);
// editSubmission(submissions, 2, 95);
// editSubmission(submissions, 3, 95);
// console.log(submissions);

// 6
let findSubmissionByName = function(array, name) {
    let getName = array.find(array => array.name === name);
    return getName;
}
// console.log(findSubmissionByName(submissions, "Jill"));

// 7
let findLowestScore = function(array) {
    let lowestScore = array[0];
    array.forEach(submission => {
        if (lowestScore.score > submission.score) {
            lowestScore = submission;
        }
    })
    return lowestScore;
}
// console.log(findLowestScore(submissions));

// 8
let findAverageScore = function(array) {
    let totalScores = 0;
    for (let submission of array) {
        totalScores += submission.score;
    }
    let average = totalScores / array.length;
    return average;
}
// console.log(findAverageScore(submissions));

// 9
let filterPassing = function(array) {
    let passingArray = array.filter(array => array.passed === true);
    return passingArray;
}
// console.log(filterPassing(submissions));

// 10
let filter90AndAbove = function(array) {
    let get90AndAbove = array.filter(array => array.score >= 90);
    return get90AndAbove;
}
// console.log(filter90AndAbove(submissions));