import { useState, useEffect } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
	// useState, allows us to managa a state when ever we update that state
	// any components that uses useState will re-render, if a componenet uses
	// a custom hook and that cust hook uses useState the component will re-render
	// when that custom hook triggers a rerender
	const setState = useState(globalState)[1];

	useEffect(() => {
		// listeners is an array, full of functions that I can call to update all components
		// thar are using my custom hook
		listeners.push(setState);

		// clean up function, removes the listeners
		return () => {
			listeners = listeners.filter((li) => li !== setState);
		};
	}, [setState]);
};
