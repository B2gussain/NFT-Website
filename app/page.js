import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import CollectionSection from "./components/CollectionSection";
import AboutSection from "./components/AboutSection";
import TopCreator from "./components/TopCreator";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

const page = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <Herosection/>
            <CollectionSection/>
            <AboutSection/>
            <TopCreator/>
            <Services/>
            <Gallery/>
            <CtaSection/>
            <Footer/>
        </div>
    );
};

export default page;
