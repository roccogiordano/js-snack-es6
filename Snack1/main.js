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


// Weight Comparison

let minWeight = "";

for (const bike of bikesList) {
    
    if (bike.weight < minWeight || minWeight === "") {

        minWeight = bike.weight;

    };

};

//