$("#myForm").submit(function () {
    /* declare variables and load values from the form into the variables*/
    var fassignment;
    var fgroupProject;
    var fQuiz;
    var fExam;
    var fIntex;
    var finalGrade;
    fassignment = $('#a').val();
    fgroupProject = $('#gp').val();
    fQuiz = $('#q').val();
    fExam = $('#e').val();
    fIntex = $('#i').val();

    /* calculate final grade using weights */
    finalGrade = (fassignment * 0.55) + (fgroupProject * 0.05) + (fQuiz * 0.1)
        + (fExam * 0.2) + (fIntex * 0.1)
    /* make the final grade have no decimals*/
    noDecFinalGrade = parseInt(finalGrade)

    /* if statements to determine the letter grade*/
    var letter;
    if (noDecFinalGrade >= 94) {
        letter = "A"
    }
    if (noDecFinalGrade >= 90 && noDecFinalGrade < 94) {
        letter = "A-"
    }
    if (noDecFinalGrade >= 87 && noDecFinalGrade < 90) {
        letter = "B+"
    }
    if (noDecFinalGrade >= 84 && noDecFinalGrade < 87) {
        letter = "B"
    }
    if (noDecFinalGrade >= 80 && noDecFinalGrade < 84) {
        letter = "B-"
    }
    if (noDecFinalGrade >= 77 && noDecFinalGrade < 80) {
        letter = "C+"
    }
    if (noDecFinalGrade >= 74 && noDecFinalGrade < 77) {
        letter = "C"
    }
    if (noDecFinalGrade >= 70 && noDecFinalGrade < 74) {
        letter = "C-"
    }
    if (noDecFinalGrade >= 67 && noDecFinalGrade < 70) {
        letter = "D+"
    }
    if (noDecFinalGrade >= 64 && noDecFinalGrade < 67) {
        letter = "D"
    }
    if (noDecFinalGrade >= 60 && noDecFinalGrade < 64) {
        letter = "D-"
    }
    if (noDecFinalGrade < 60) {
        letter = "E"
    }
    /*Display pop up box with the user's final grade and letter grade*/
    alert("You will receive a " + noDecFinalGrade + "% with a letter grade of " + letter + " in this course.")
})