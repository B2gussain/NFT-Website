import React from "react";

const Services = () => {
    return (
        <div className="flex justify-center  md:flex-row flex-col-reverse items-center py-6 p-6 gap-8">
            <div className="max-w-xl md:w-xl">
                <h2 className="text-2xl font-bold">Our Services</h2>
                <p>
                    Innovation meets creativity to deliver a seamless NFT
                    experience. Our services include minting and showcasing
                    digital artworks, enabling secure trading, and ensuring
                    transparent ownership on the blockchain. With powerful
                    tools, valuable insights, and an active community, we help
                    artists grow their reach and collectors discover rare,
                    high-value assets — making every step of the NFT journey
                    smooth, rewarding, and future-ready.
                </p>
                <ul className="list-disc ml-5 mt-4 space-y-2">
                    <li>
                        Empowering creators to mint and showcase unique digital art.
                    </li>
                    <li>
                       Enabling secure, transparent trading and ownership on the blockchain.
                    </li>
                    <li>
                        Connecting artists and collectors through a vibrant NFT community.
                    </li>
                </ul>
            </div>
            <div className="flex justify-center items-center ">
                <img
                    src="/images/ex4-bg.png"
                    className="h-100 object-contain filter transform transition-all ease-in-out duration-200 saturate-[1.4] reflect-img drop-shadow-2xl drop-shadow-white hover:drop-shadow-amber-400"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Services;
