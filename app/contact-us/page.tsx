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
    



  <div className="flex-1 mx-auto relative z-0 p-4 md:p-8 md:pt-0">
        <iframe
          className="w-full h-[40vh] md:h-[70vh] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.189042763229!2d73.13160357500699!3d19.23059124710157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79597397b3de9%3A0x9350891ea4e8ef49!2sBhagyashree%20apartment!5e0!3m2!1sen!2sin!4v1724321664278!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

        <div>
            <ContactForm/>
        </div>
        
    </div>
  )
}

export default Page
