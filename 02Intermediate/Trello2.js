let myTodos = {
    Day : 'Monday',
    Meetings : 0,
    meetDone : 0

}

let addMeeting = function(todo,meet=0){
    todo.Meetings = todo.Meetings+meet
}

let meetDone = function(todo,meet=0){
    todo.meetDone = todo.meetDone + meet
}


let resetDay = function(todo,meet=0){
    todo.Meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo){
    let leftMeet = todo.Meetings - todo.meetDone
    return `You have ${leftMeet} left today`

}

addMeeting(myTodos,4)

meetDone(myTodos,2)


console.log(getSummaryOfDay(myTodos))
