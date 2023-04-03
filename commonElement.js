const array = [
	[
		{
			name: 'karpagam',
			country: 'india'
		},
		{
			name: 'Rohit',
			country: 'india'
		},
		{
			name: 'anitha',
			country: 'india'
		},
		{
			name: 'vivaan',
			country: 'india'
		},
	],
	[
		{
			name: 'arun',
			country: 'india'
		},
		{
			name: 'Rohit',
			country: 'india'
		},
		{
			name: 'sam',
			country: 'india'
		},

	],
	[
		{
			name: 'vivaan',
			country: 'india'
		},
		{
			name: 'Rohit',
			country: 'india'
		},
	],
];

const getCommonName = (commonNames) => {
	const shortestArray = array.reduce((prev, next) => prev.length > next.length ? next : prev);
	console.log(commonNames[0].find((common, ind) =>
		shortestArray.some((shortArray, index) =>
			shortArray.name === common.name)));
}

const result = getCommonName(array);

const main = () => console.log(result);