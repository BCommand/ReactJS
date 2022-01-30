import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import CardComponent from './Components/CardComponent/CardComponent';
import Header from './Components/Header/Header';


class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header
					title='Soy el titulo a partir de una prop'
					subtitle='Vivir Hoy'
				/>
				<div className='UserSection'>
					<CardComponent
						name='Daniel Di Salvo'
						date='Se unio en Enero 2021'
						description='Front-end Developer y profesor del Curso de React.js en CoderHouse'
						img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
					/>
					<CardComponent
						name='Raul Gutierrez'
						date='Se unió en Abril 2021'
						description='Scrum Master y UX Designer en Mercado Libre'
						img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
					/>
					<CardComponent
						name='Francesca Bertotti'
						date='Se unió en Julio 2021'
						description='DevOps y profesora del curso de React.js en CoderHouse'
						img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
					/>
				</div>
			</div>
		);
	}
}

export default App;
