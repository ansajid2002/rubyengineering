import React from 'react'

import { FaCogs, FaSeedling, FaShieldAlt, FaGem, FaTools, FaHandshake } from 'react-icons/fa';

const data = [
    {
        id: 1,
        title: "Precision Engineering",
        description: "Our machinery is built with cutting-edge precision, ensuring consistent and high-quality performance across all operations.",
        icon: <FaCogs />
    },
    {
        id: 2,
        title: "Sustainable Practices",
        description: "We prioritize sustainability in our manufacturing processes, minimizing environmental impact while maximizing efficiency.",
        icon: <FaSeedling />
    },
    {
        id: 3,
        title: "Reliability and Durability",
        description: "Our products are designed to be robust and reliable, providing long-lasting service with minimal maintenance requirements.",
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: "Superior Craftsmanship",
        description: "With a focus on excellence, our skilled craftsmen use high-quality materials to produce machines that stand the test of time.",
        icon: <FaGem />
    },
    {
        id: 5,
        title: "Innovative Technology",
        description: "We leverage the latest technology to deliver advanced solutions that enhance productivity and operational efficiency.",
        icon: <FaTools />
    },
    {
        id: 6,
        title: "Comprehensive Support",
        description: "We offer comprehensive after-sales support, including installation, training, and maintenance services to ensure your success.",
        icon: <FaHandshake />
    }
];


const Ourservices = () => {
    return (
        <div className=' px-4 md:px-20 bg-gray-100 py-14'>
            <p className="text-base text-primary font-bold text-center">Why Ruby Engineering Works</p>
            <h2 className=" text-3xl md:text-5xl font-[antonio] text-center mb-8">We Have Best Service for Succeed Quality</h2>
            <div className="w-60 mx-auto -mt-4  mb-3 h-0.5 bg-primary rounded-full"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
            {data.map((item) => (
    <div 
        key={item.id} 
        className="flex flex-col border-primary items-center group p-2 md:p-4 border bg-white shadow-md rounded-sm transform transition-transform duration-200 hover:rotate-1 hover:scale-105"
    >
        <div className="text-5xl text-primary mb-4">
            {item.icon}
        </div>
        <h3 className=" text-xl md:text-2xl text-primary font-bold mb-2">{item.title}</h3>
        <p className="text-gray-500  group-hover:text-gray-800 text-base text-center">{item.description}</p>
    </div>
))}
            </div>
        </div>
    )
}

export default Ourservices
