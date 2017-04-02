var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Sobir',
	location: 'Tashkent'
};

var objTwo = {
	age: 29,
	...objOne
};

console.log(objTwo);

ReactDOM.render(
			<h1>Boilerplate</h1>,
			document.getElementById('app')
		);
