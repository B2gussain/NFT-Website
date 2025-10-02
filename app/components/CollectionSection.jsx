import React from "react";

const CollectionSection = () => {
    const collection = [
        {
            img: "/images/rel5.jpg",
            title: "Bored Ape",
            floor: "$105.55",
            volume: "$202.87",
            inc: "+62.12%",
            dec: "-47.82%",
        },
        {
            img: "/images/rel6.jpg",
            title: "Pudgy Penguins",
            floor: "$351.02",
            volume: "$739.65",
            inc: "+88.58%",
            dec: "-37.82%",
        },
        {
            img: "/images/rel9.jpg",
            title: "Meebits",
            floor: "$396.84",
            volume: "$630.44",
            inc: "+96.12%",
            dec: "-81.86%",
        },
        {
            img: "/images/rel10.jpg",
            title: "Cool Dog NFT",
            floor: "$165.55",
            volume: "$272.87",
            inc: "+62.12%",
            dec: "-41.82%",
        },
        {
            img: "/images/rel11.jpg",
            title: "Doodles",
            floor: "$305.55",
            volume: "$602.87",
            inc: "+32.12%",
            dec: "-27.82%",
        },
        {
            img: "/images/rel12.jpg",
            title: "Azukl",
            floor: "$205.55",
            volume: "$402.87",
            inc: "+12.12%",
            dec: "-27.82%",
        },
        {
            img: "/images/rel13.jpg",
            title: "Pudgy Rabbit",
            floor: "$405.55",
            volume: "$502.87",
            inc: "+69.12%",
            dec: "-27.82%",
        },
        {
            img: "/images/rel14.jpg",
            title: "Meebits",
            floor: "$205.55",
            volume: "$232.87",
            inc: "+66.12%",
            dec: "-77.82%",
        },
        {
            img: "/images/rel15.jpg",
            title: "Bored Ape",
            floor: "$705.55",
            volume: "$802.87",
            inc: "+72.12%",
            dec: "-97.82%",
        },
    ];
    return (
        <div className="flex flex-col py-4  justify-center">
            <h2 className="text-2xl font-semibold px-10">Top Collection</h2>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 px-10 py-4">
                {collection.map((item, idx) => (
                    <div className="flex bg-white/5 rounded-xl gap-2 items-center p-2" key={idx}>
                        <div className="m-2">{idx + 1}</div>
                        <img
                            src={item.img}
                            className="h-15 rounded-xl w-15"
                            alt=""
                        />
                        <div className="flex flex-col w-full pr-2">
                            <h3 className="font-bold">{item.title}</h3>
                            <div className="flex justify-between w-full">
                                <div className="flex flex-col ">
                                    <p  className="font-[500]  text-sm">Floor:{item.floor}</p>
                                    <p  className="font-[500]  text-sm text-white/50">Volume:{item.volume}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p  className="font-semibold text-sm text-[green]">{item.inc}</p>
                                    <p  className="font-semibold text-sm text-[red]">{item.dec}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionSection;
