var cars = {
    busname: "Grego's Rent-A-Car",
    types: ['economy', 'midsize'],
    econcount: 500,
    midcount: 200,
};

window.onload = function() {
    document.getElementById("bizName").innerHTML = cars.busname;
};

function clicked_on() {
document.getElementById("econCars").innerHTML = cars.types[0];
document.getElementById("econCarsAvail").innerHTML = cars.econcount;
document.getElementById("midSizeCars").innerHTML = cars.types[1];
document.getElementById("midSizeCarsAvail").innerHTML = cars.midcount;

};

function midclick() {
    cars.midcount--;
    document.getElementById("midSizeCarsAvail").innerHTML = cars.midcount;
}

function econclick() {
    cars.econcount--;
    document.getElementById("econCarsAvail").innerHTML = cars.econcount;
}



