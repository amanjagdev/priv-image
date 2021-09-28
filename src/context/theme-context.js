import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
	theme: "dark",
	changeTheme: () => {},
});

const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		setTheme(localStorage.getItem("theme") || "dark");
	}, [theme]);

	const changeTheme = () => {
		localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme,
			}}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
