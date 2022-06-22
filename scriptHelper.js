// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput ===''){
        return 'Empty'
    } else if (isNaN(testInput)){
        return 'Not a number'
    } else if (Number(testInput)){
        return 'Is a number' 
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let form = document.querySelector('testForm');
   form.addEventListener('formSubmit', function(event){

    if (validateInput(pilot)=='Empty' || validateInput(copilot)=='Empty' || validateInput(fuelLevel)=='Empty' || validateInput(cargoLevel)=='Empty'){
        alert('All fields are required!');
        event.preventDefault();
    } else if (validateInput(pilot)=='Is a number' || validateInput(copilot)=='Is a number'){
        alert('Input must NOT be a number!');
        event.preventDefault();
    } else if (validateInput(fuelLevel)=='Not a number' || validateInput(cargoLevel)=='Not a number'){
        alert('Input must be a number!');
        event.preventDefault();
    } else {
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} Ready`
    document.getElementById('copilotStatus'.innetHTML) = `Co-pilot ${copilotNameInput.value} Ready`

        if (fuelLevel.value < 10000){
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('fuelStatus').innerHTML = `There is not enough fuel for the journey`;
            document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
            document.getElementById('launchStatus').style.color = 'red';
        } else {
            document.getElementById('launchStatus').style.color = 'green';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
        }

        if (cargoLevel.value > 10000){
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = 'There is too much mass for the shuttle to take off'
            document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
            document.getElementById('launchStatus').style.color = 'red';
        } else {
            document.getElementById('launchStatus').style.color = 'green';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
        }
    }

   })
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
