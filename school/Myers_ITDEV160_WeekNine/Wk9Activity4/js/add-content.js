var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Greetings, minions of the night!';
} else if (hourNow > 12) {
    greeting = 'It\'s five o\'clock somewhere';
} else if (hourNow > 0) {
    greeting = 'Cockadoodledoo!';
} else {
    greeting = 'Yo!';
}

document.write('<h3>' + greeting + '</h3>');