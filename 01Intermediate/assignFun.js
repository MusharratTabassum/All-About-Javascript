let getMyGrade = function(currentMarks,totalMarks){

    let myPercentage = (currentMarks/totalMarks)*100
    
    let myGrade = ''

    if(myPercentage>=80)
    {
        myGrade='A+'
    }
    else if(myPercentage>=75){
        myGrade = 'A'
    }
    else if(myPercentage>=70){
        myGrade = 'A-'
    }
    else if(myPercentage>=65){
        myGrade = 'B+'
    }
    else if(myPercentage>=60){
        myGrade = 'B'
    }
    else if(myPercentage>=55){
        myGrade = 'B-'
    }
    else if(myPercentage>=50){
        myGrade = 'C'
    }
    else if(myPercentage>=45){
        myGrade = 'C+'
    }
    else if(myPercentage>=40){
        myGrade = 'D'
    }
    else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and Percentage is ${myPercentage}`


}

let yourResult=getMyGrade(95,200)
console.log(yourResult);
