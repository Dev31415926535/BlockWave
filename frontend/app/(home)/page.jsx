"use client";
import { ClerkProvider} from '@clerk/nextjs';
import Hero from '@/components/ui/Hero';
import HowSection from '@/components/HowSection'
import AnimatedFeaturesSection from '@/components/Features';  
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
        <ClerkProvider>
            <Hero/>
            <HowSection/>
            <AnimatedFeaturesSection/>
            <Footer />
        </ClerkProvider>
    </>
  );
};

export default HomePage;