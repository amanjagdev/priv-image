import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useContext } from "react";
import logo from "../assets/logo.svg";
import logoWhite from "../assets/logoWhite.svg";
import { ThemeContext } from "../context/theme-context";

const HeroSection = () => {
	const { theme, changeTheme } = useContext(ThemeContext);

	return (
		<div className="HeroSection">
			<div className="container">
				<Fade triggerOnce>
					<figure>
						<Image
							onClick={changeTheme}
							src={theme === "dark" ? logoWhite : logo}
							alt="PrivImage"
						/>
						<figcaption onClick={() => router.push("/")}>
							PrivImage
						</figcaption>
					</figure>
				</Fade>
				<section className="section">
					<Fade delay={400} cascade triggerOnce>
						<div className="section__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Viverra curabitur et faucibus facilisis ut.
							Nisi, urna rhoncus sit vestibulum turpis
						</div>
						<div className="section__text">
							We also have{" "}
							<span
								className="change-theme"
								onClick={changeTheme}>
								{theme === "dark" ? "Light" : "Dark"} Mode
							</span>
						</div>
					</Fade>
				</section>
			</div>
		</div>
	);
};

export default HeroSection;
