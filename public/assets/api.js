const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb69cac1c7mshcbb45604bfeec52p1699e2jsnc430607302c5',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};

fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/?format=json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 


fetch('https://timetable-lookup.p.rapidapi.com/airlines/%7Bairlineiatacode%7D/routes/?format=json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 

fetch('https://timetable-lookup.p.rapidapi.com/airlines/?format=json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 

