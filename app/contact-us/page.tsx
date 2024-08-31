import Banner from '@/components/Banner'
import ContactForm from '@/components/Contact/Contactform'
import React from 'react'

const Page = () => {
  return (
    <div>
      
    <Banner
      title="Contact Us"
      bgImg="https://img.freepik.com/premium-photo/industrial-equipment-production-food-mixer-liquids-stainless-steel-big-shaker_89816-2390.jpg?ga=GA1.1.1856381827.1724408266&semt=ais_hybrid"
      page="Contact"
      />
    



  

        <div>
            <ContactForm/>
        </div>
        <div className="flex-1 mx-auto relative z-0 p-4 md:p-8 md:pt-0">
        <iframe
          className="w-full h-[40vh] md:h-[70vh] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2095603001135!2d72.82651847394058!3d18.96635028221573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3f9cf9147b%3A0x13414ea556463e57!2sRUBY%20ENGINEERING%20WORKS%20MUMBAI!5e0!3m2!1sen!2sin!4v1724848051150!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Page
