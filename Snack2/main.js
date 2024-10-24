// footballTeams Array Declaration

const footballTeams = [


    // team in footballTeams

    {
        name: "Inter",
        points: 0,
        fouls: 0
    },

    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },

    {
        name: "Napoli",
        points: 0,
        fouls: 0
    },

    {
        name: "Lazio",
        points: 0,
        fouls: 0
    },

    {
        name: "Bologna",
        points: 0,
        fouls: 0
    }

    //


];

//


// getRndInteger Function

/**
 * Generates a random number between min and max (both included).
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function getRndInteger(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

};

//


// generateRandomStats Function

/**
 * Generates random stats for a given football team.
 * @param {object} team
 * @returns {object}
 */

function generateRandomStats(team) {

    team.points = getRndInteger(0, 114);

    team.fouls = getRndInteger(0, 50);

};
//


// Random Stats Algorithm

for (team of footballTeams) {

    generateRandomStats(team);

};

//