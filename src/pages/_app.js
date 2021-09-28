import ThemeContextProvider from "../context/theme-context";
import "../styles/index.scss";
import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeContextProvider>
			<Wrapper Component={Component} pageProps={pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
