
const habits = document.getElementById("enter");
const add = document.getElementById("add");
const listspace = document.getElementById("card-body")

function addTask(){

    let habit = document.createElement("div");
    let grid = document.createElement("div");
    
    habit.classList.add("habits");
    grid.classList.add("grids");

    listspace.appendChild(habit);
    habit.appendChild(grid);

    

    let name = document.createElement("div");
    let streak = document.createElement("div");
    let checkin = document.createElement("button");
    let reset = document.createElement("button");
    let start = 0;

    name.classList.add("block");
    streak.classList.add("block");
    checkin.classList.add("button");
    reset.classList.add("button");

    grid.appendChild(name);
    grid.appendChild(streak);
    grid.appendChild(checkin);
    grid.appendChild(reset);

    name.textContent = habits.value;
    streak.textContent = start;
    checkin.textContent = "Check In";
    reset.textContent = "Result";


    function addStreak(){
        start = start+1;
        streak.textContent = start ;
    }

    function resetStreak(){
        start = 0;
        streak.textContent = start;

    }
    checkin.addEventListener("click",addStreak);
    reset.addEventListener("click",resetStreak);

    habits.value = "";

}



add.addEventListener("click", addTask);