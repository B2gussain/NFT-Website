import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import CollectionSection from "./components/CollectionSection";
import AboutSection from "./components/AboutSection";

const page = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <Herosection/>
            <CollectionSection/>
            <AboutSection/>
        </div>
    );
};

export default page;
