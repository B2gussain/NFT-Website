import React from "react";

const TopCreator = () => {
    const creators=[
        {
            img:"/images/rel1.jpg",
            name:"Robert Fox",
            price:"$5,000,000+"
        },
          {
            img:"/images/rel7.jpg",
            name:"Kunfu Fox",
            price:"$9,000,000+"
        },
        
         {
            img:"/images/rel2.jpg",
            name:"Darlene Robertson",
            price:"$2,000,000+"
        },
       
         {
            img:"/images/rel3.jpg",
            name:"Cameron Williamson",
            price:"$7,000,000+"
        },
         {
            img:"/images/rel4.jpg",
            name:"Ralph Edwards",
            price:"$1,000,000+"
        },
        
         {
            img:"/images/rel8.jpg",
            name:"Panda-x",
            price:"$3,000,000+"
        },
    ]
    return (
        <div className="flex flex-col justify-center items-center py-8">
            <h2 className="text-2xl font-bold">
                Top Creator
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4  flex-row px-6 w-[90%] py-4">
                {creators.map((item,idx)=>(
                    <div className="flex flex-col p-4 hover:shadow-[#ADD824]/30 shadow-lg justify-center items-center bg-[white]/5 rounded-2xl " key={idx}>
                        <img src={item.img} className="h-80 filter saturate-[1.4] object-cover aspect-square rounded-2xl" alt="" />
                        <h3 className="font-bold mt-2 ">{item.name}</h3>
                        <p className="font-semibold text-[#ADD824]">{item.price}</p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default TopCreator;
