// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(event) {
        let shuttleConfirm = window.confirm("Confirm that the shuttle is ready for takeoff");
        if(shuttleConfirm) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = "10,000";
        }
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        let landAlert = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = "0";
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event) {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if(confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.background = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });

    leftButton.addEventListener("click", function(event) {
        rocket.style.marginLeft = "-10px";
    });

    rightButton.addEventListener("click", function(event) {
        rocket.style.marginLeft = "10px";
    });

    upButton.addEventListener("click", function(event) {
        rocket.style.marginTop = "-10px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener("click", function(event) {
        rocket.style.marginTop = "10px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });
});
