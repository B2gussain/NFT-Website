import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import CollectionSection from "./components/CollectionSection";
import AboutSection from "./components/AboutSection";
import TopCreator from "./components/TopCreator";

const page = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <Herosection/>
            <CollectionSection/>
            <AboutSection/>
            <TopCreator/>
        </div>
    );
};

export default page;
