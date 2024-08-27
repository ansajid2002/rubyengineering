import React from 'react'

const data = [
  {
      id: 1,
      title: "Precision Engineering and Durability",
      description: "At Ruby Engineering, we manufacture high-performance pulverizers and grinders with precision engineering and durable materials.",
      img: ""
  },
  {
      id: 2,
      title: "Advanced Technology for Superior Efficiency",
      description: "Our equipment features energy-efficient motors and optimized mechanisms for higher productivity and lower operational costs.",
      img: ""
  },
  {
      id: 3,
      title: "Tailored Solutions for Your Unique Needs",
      description: "We offer customized solutions to meet your specific needs, ensuring our machinery aligns with your business goals.",
      img: ""
  },
  {
      id: 4,
      title: "Comprehensive After-Sales Support",
      description: "We provide after-sales support, including installation, training, and maintenance to keep your equipment in top condition.",
      img: ""
  },
 
];



const Whychooseus = () => {
  return (
    <div className='bg-gray-100 px-4 md:px-20 py-10'>
    
      <p className="text-base text-primary font-bold text-center">Our speciality</p>
      <h2 className="text-4xl font-[antonio] text-center mb-8">Why Choose us</h2>
    <div className=' md:flex gap-4 gap-x-12 items-center'>
   <div className='md:w-[40%] relative'>
  <img src="/about/grinding.png" alt="Background" className="w-full h-auto object-cover" />
  <div className="absolute inset-0 bg-gray-100 opacity-90"></div>
</div>
  <div className="flex flex-col justify-center md:w-[60%] ">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 duration-300">
      {data.map((item) => (
        <div
        key={item.id}
        className="flex flex-col p-4 items-start border-2 border-white shadow-xl bg-gradient-to-br from-white to-gray-200 transition-shadow  hover:shadow-inner duration-300"
        >
          <img src="/about/1.png" alt={item.title} className="w-24 h-24 rounded-full" />
          <h3 className="text-xl font-bold font-[antonio] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
  {item.title}
</h3>
          <p className="text-base text-gray-500 mt-4">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
       </div>
</div>


  
  )
}

export default Whychooseus
