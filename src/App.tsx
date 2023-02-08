import { useEffect, useState } from 'react';
import HeroImage from './components/HeroImage/HeroImage';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import ClientList from './components/ClientList/ClientList';
import CallToAction from './components/CallToAction/CallToAction';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import Testimonial from './types/testimonial';
import './App.scss';

function App() {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

	useEffect(() => {
		getTestimonials();
	}, []);

	const getTestimonials = async () => {
		try {
			const response = await fetch('http://localhost:3000/testimonials');
			const data = await response.json();
			setTestimonials(data);
		}
		catch (error) {
			setTestimonials([
				{
					"_id": "63e2d880a1499a77733ae3b7",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": false,
					"createdAt": new Date("2023-02-07T23:02:24.170Z"),
					"updatedAt": new Date("2023-02-07T23:31:58.245Z"),
					
				},
				{
					"_id": "63e2e8cd97d0d30bff3b15f4",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:11:57.969Z"),
					"updatedAt": new Date("2023-02-08T00:11:57.969Z"),
					
				},
				{
					"_id": "63e2e8d097d0d30bff3b15f6",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:00.938Z"),
					"updatedAt": new Date("2023-02-08T00:12:00.938Z"),
					
				},
				{
					"_id": "63e2e8d297d0d30bff3b15f8",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:02.005Z"),
					"updatedAt": new Date("2023-02-08T00:12:02.005Z"),
					
				},
				{
					"_id": "63e2e8d297d0d30bff3b15fa",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:02.976Z"),
					"updatedAt": new Date("2023-02-08T00:12:02.976Z"),
					
				},
				{
					"_id": "63e2e8d397d0d30bff3b15fc",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:03.873Z"),
					"updatedAt": new Date("2023-02-08T00:12:03.873Z"),
					
				},
				{
					"_id": "63e2e8d497d0d30bff3b15fe",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:04.720Z"),
					"updatedAt": new Date("2023-02-08T00:12:04.720Z"),
					
				},
				{
					"_id": "63e2e8d597d0d30bff3b1600",
					"photoUrl": "https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp",
					"name": "Elon Musk1",
					"post": "CEO,SpaceX",
					"description": "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
					"active": true,
					"createdAt": new Date("2023-02-08T00:12:05.559Z"),
					"updatedAt": new Date("2023-02-08T00:12:05.559Z"),
					
				}
			])
		}
	}

	return (
		<div className="App">
			<HeroImage />
			<Service />
			<Pricing />
			<CallToAction />
			<Testimonials testimonials={testimonials} />
			<ClientList />
			<ContactForm />
			<Footer />
		</div>
	)
}

export default App;
