import React, { useReducer } from "react";

const Context = React.createContext().Provider

const Reducer = (state, action) => {
	switch (action.type) {
		case 'action1': {
			console.log("action1")
			return
		}
		case 'actio2': {
			console.log("action1")
			return
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

const Provider = (props) => {
	const [state, dispatch] = useReducer(Reducer, {})
	const value = { state, dispatch }

	return (
		<Provider value={value}>
			{props.children}
		</Provider>
	)
}

export { Context, Provider }
