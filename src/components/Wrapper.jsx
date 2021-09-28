import { useEffect, useContext, Fragment } from "react";
import { ThemeContext } from "../context/theme-context";
import Head from "next/head";

const Wrapper = ({ Component, pageProps }) => {
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		document.querySelector("body").className = theme;
	}, [theme]);

	return (
		<Fragment>
			<Head>
				<meta
					httpEquiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
					key="viewport"
				/>

				<title>PrivImage - Hide Information in Image</title>
				<meta name="description" content="" />
				<meta property="og:site_name" content="Emerghub" />
				<meta
					property="og:title"
					content="PrivImage - Hide Information in Image"
				/>
				<meta
					property="og:description"
					content="PrivImage is a small tool that allow you to hide your private information within an image. You can then share this image with others who can then decode the info by going to our app"
				/>
				<meta
					property="og:image"
					itemProp="image"
					content="https://imgur.com/PtG1lWY.png"
				/>
				<meta property="og:type" content="website" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default Wrapper;
