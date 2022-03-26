import './styles/global.css';

// COMPONENTS :
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FormField from './components/FormField';
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<FormField />
			<Section />
			<Footer />
		</>
	);
}
