function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`);
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function(status = "special") {
        return `You are ${flair}${status}${flair}!`;
    }
}
wrapAdjective();