const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb69cac1c7mshcbb45604bfeec52p1699e2jsnc430607302c5',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};

fetch('https://timetable-lookup.p.rapidapi.com/codes/entertainment/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));