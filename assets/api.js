const Amadeus = require("amadeus");
const amadeus = new Amadeus ({
    clientId: 'NVcyzjnmXu3lFLNAAstsO5Em7GNo07Ei',
    clientSecret: 'hUQeoHR8BRt8OmUT',
});


// retrieving info about the airport
amadeus.referenceData.location('ALHR').get()
    .then(function (response) {
        console.log(response);
    }).catch(function (response) {
        console.error(response);
    });

//getting cities/airports that start with letter
amadeus.referenceData.locations.get({
    keyword: 'r',
    subType: Amadeus.location.any
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.error(response);
});

// flight availabilities 
body = JSON.stringify({
    "originDestinations": [
        {
            "id": "1",
            "originLocationCode": "MIA",
            "departureDateTime": {
                "date": "2023-30-01"
            }
        }
    ],
    "travelers": [
        {
            "id": "1",
        "travelerType": "ADULT" 
        }
    ],
    "sources": [
        "GDS"
    ]
})
amadeus.shopping.availability.flightAvailabilities.post(body).then(function (response) {
    console.log(response);
}).catch(function (repsonse) {
    console.error(response);
}).then(function (flightOffersSearchResponse) {
    return amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
            "data": {
                "type": "flight-offers-pricing",
                "flightOffers": [
                    flightOffersSearchResponse.data[0]
                ]
            }
        })
    );
}).then(function (pricingResponse) {
    return amadeus.booking.flightOrders.post(
        JSON.stringify({
            'data': {
                'type': 'flight-order',
                'flightOffers': [pricingResponse.data.flightOffers[0]],
                'travelers': [{
                    "id": "1",
                    "dateOfBirth": "1995-04-03",
                    "name": {
                        "firstName": "HELEN",
                        "lastName": "HOSSE"
                    },
                    "gender": "FEMALE",
                    "contact": {
                        "emailAddress": "helenhosse@yahoo.com",
                        "phones": [{
                            "deviceType": "MOBILE",
                            "countryCallingCode": "01",
                            "number": "6154969890"
                        }]
                    },
                    "documents": [{
                        "documentType": "PASSPORT",
                        "birthPlace": "United States",
                        "issuanceLocation": "United States",
                        "issuanceDate": "2015-04-14",
                        "number": "000000000",
                        "expiryDate": "2025-04-14",
                        "issuanceCountry": "USA",
                        "validityCounry":"USA",
                        "nationality": "US",
                        "holder": true
                    }]
                }]
            }
        })
    );
}).then(function (flightOrdersResponse) {
    return amadeus.booking.flightOrder(flightOrdersResponse.data.id).get()
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.error(response);
});






//book a flight from MAD to ATH on 20520-08-01 and then retrieve it
amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'MAD',
    destinationLocationCode: 'ATH',
    departureDate: '2020-08-01',
    adults: '1'
})


// Returns activities for a location in Barcelona based on geolocation coordinates
amadeus.shopping.activities.get({
    latitude: 41.397158,
    longitude: 2.160873
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.error(response);
});


//Get list of available offers in specific hotels by hotel ids
amadeus.shopping.hotelOffersSearch.get({
    hotelIds: 'RTPAR001',
    adults: '2',
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.error(response);
});

//list of hotels in specific city
amadeus.referenceData.locations.hotels.byCity.get({
    cityCode: 'PAR'
}).then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.error(response);
});


//Recommended locations similar to PAR
amadeus.referenceData.recommendedLocations.get({
    cityCodes: 'PAR',
    travelerCountryCode: 'FR'
}).then(function(response) {
    console.log(response.data);
}).catch((error) => {
    console.log("Error");
    done();
});



//const key = 'NVcyzjnmXu3lFLNAAstsO5Em7GNo07Ei'
