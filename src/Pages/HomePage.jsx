import React from 'react'
import Hero from '../Components/Body';
import Navbar from '../Components/Navbar';
import ClientJourney from '../Components/ClientJourney';
import ClientTestimonials from '../Components/Testimonials';
import OurTeam from '../Components/OurTeam';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';


export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
           
           
                <ClientJourney />
                <ClientTestimonials />
                <OurTeam />
                <ContactUs />
                <Footer />
          
        </div>
    )
}