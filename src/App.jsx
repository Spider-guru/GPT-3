import "./App.css";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";

function App() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;