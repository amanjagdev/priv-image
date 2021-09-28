import Header from "../components/Header";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";

export default function Home() {
	return (
		<div className="Home">
			<Fade triggerOnce>
				<Header />
			</Fade>
			<Fade triggerOnce>
				<Footer />
			</Fade>
		</div>
	);
}
