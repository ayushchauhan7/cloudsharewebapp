import React from 'react'
import HeroSection from "../components/landing/HeroSection.jsx";
import FeaturesSection from "../components/landing/FeaturesSection.jsx";
import PricingSection from "../components/landing/PricingSection.jsx";
import TestimonialsSection from "../components/landing/TestimonialsSection.jsx";
import CTASection from "../components/landing/CTASection.jsx";
import Footer from "../components/landing/Footer.jsx";

const Landing = () => {
    return (
        <div className='landing-page bg-gradient-to-b from-gray-50 to-gray-100'>
            {/*Hero Section*/}
<HeroSection />
            {/*Features Section*/}
<FeaturesSection />
            {/*Pricing Section*/}
<PricingSection />
            {/*Testimonials Section*/}
<TestimonialsSection />
            {/*CTA Section*/}
<CTASection />
            {/*Footer Section*/}
<Footer />
        </div>
    )
}
export default Landing
