import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ThemeContext from "./utils/ThemeContext";
import Index from "./pages/index";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./styles/variable";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			console.log("i got a click");
			this.setState((state) => ({
				theme: state.theme === "dark" ? "light" : "dark",
			}));
		};

		// State also contains the updater function so it will    // be passed down into the context provider
		this.state = {
			theme: "light",
			toggleTheme: this.toggleTheme,
		};
	}

	render() {
		const theme = this.state.theme === "light" ? lightTheme : darkTheme;
		return (
			<BrowserRouter>
				<ThemeContext.Provider value={this.state}>
					<ThemeProvider theme={theme}>
						<Route path="/" component={Index} />
					</ThemeProvider>
				</ThemeContext.Provider>
			</BrowserRouter>
		);
	}
}

export default App;
