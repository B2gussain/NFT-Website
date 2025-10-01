import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

const page = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <Herosection/>
        </div>
    );
};

export default page;
