import React from "react";

const AboutSection = () => {
    return (
        <div className="flex justify-center md:flex-row flex-col items-center py-4 p-6 gap-8">
            <div className="flex justify-center items-center ">
                <img
                    src="/images/ex3-bg.png"
                    className="h-100 object-contain filter transform transition-all ease-in-out duration-200 saturate-[1.4] reflect-img drop-shadow-2xl drop-shadow-white hover:drop-shadow-amber-400"
                    alt=""
                />
            </div>
            <div className="max-w-xl md:w-xl">
                <h2 className="text-2xl font-bold from-[#ADD824]/50 via-[white]/80 to-[#1C3603]/50 bg-gradient-to-br bg-clip-text text-transparent">About Us</h2>
                <p>
                    we’re passionate about transforming digital creativity into
                    real-world value. Our mission is to empower artists,
                    collectors, and visionaries by providing a secure and
                    transparent platform to create, trade, and own unique
                    digital assets. We believe NFTs are more than just tokens.
                </p>
                <ul className="list-disc ml-5 mt-4 space-y-2">
                    <li>
                        we turn digital art into valuable, collectible NFTs.
                    </li>
                    <li>
                        Our platform empowers creators and collectors to
                        connect, trade, and own unique assets securely.
                    </li>
                    <li>
                        We believe in a future where creativity and blockchain
                        technology come together seamlessly.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutSection;
