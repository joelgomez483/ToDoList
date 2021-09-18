function displayFriday() {
    var TODO = [
        "English Homework",
        "Finish Science Project",
        "Pick up Dry Cleaning"
    ];
    display(TODO);
}

function displaySaturday() {
    var TODO = [
        "Laundry",
        "Wash Dishes",
        "Grocery Shopping"
    ];
    display(TODO);
}

function displaySunday() {
    var TODO = [
        "Complete English Essay",
        "Bake Brownies for Bake Sale on Tuesday",
        "Pickup Gift for Nephew"
    ];
    display(TODO);
}

function display(list) {
    var preview = document.getElementById("preview");

    var todo_list = "";

    todo_list += "<li>" + list[0] + "</li>";
    todo_list += "<li>" + list[1] + "</li>";
    todo_list += "<li>" + list[2] + "</li>";

    preview.innerHTML = "<ol>" + todo_list + "</ol>";
}
