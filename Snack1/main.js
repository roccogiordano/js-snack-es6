// Variables Initialization

let minWeight = "";

let minWeightName = "";

//


// bikesList Array Declaration

const bikesList = [


    // bike in bikesList

    {
        name: "Bike1",
        weight: 7.2
    },

    {
        name: "Bike2",
        weight: 8.4
    },

    {
        name: "Bike3",
        weight: 9.6
    },

    {
        name: "Bike4",
        weight: 7.8
    },

    {
        name: "Bike5",
        weight: 8.5
    }

    //


];

//


// Weight Comparison Algorithm

for (const bike of bikesList) {
    
    if (bike.weight < minWeight || minWeight === "") {

        minWeight = bike.weight;

        minWeightName = bike.name;

    };

};

//


// Output Display

console.log(`${minWeightName}, con un peso di ${minWeight}Kg, è la bici più leggera!`);

//