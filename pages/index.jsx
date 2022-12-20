import { useState } from 'react';

function Header(props) {
	return <h1>{props.title ?? 'Default Title'}</h1>;
}

export default function HomePage() {
	const [likes, setLikes] = useState(0);

	const NAMES = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title='Develop. Preview. Ship. 🚀' />
			<p>React is a JavaScript library for building user interfaces. This is also Next.</p>
			<ul>
				{NAMES.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Likes {likes}</button>
		</div>
	);
}
