import { useState } from 'react'; // Import useState hook to manage component state
import footer_logo from '../assets/img/logo_big.png';
import insta_icon from '../assets/img/instagram_icon.png';
import wp_icon from '../assets/img/whatsapp_icon.png';

const Footer = () => {
  const [showHistory, setShowHistory] = useState(false); // State to control showing history
  const [showOffices, setShowOffices] = useState(false); // State to control showing offices
  const [showContact, setShowContact] = useState(false); // State to control showing contact

  return (
    <footer className='flex flex-col items-center w-[99vw] overflow-hidden'>
      <div className="flex md:my-5 my-1 items-center justify-center">
        <img src={footer_logo} className='h-10 w-10 md:h-20 md:w-20' alt="footer logo" />
        <p className='font-bold text-lg md:text-3xl'>ShoppyGlobe</p>
      </div>

      {/* Footer Links */}
      <ul className='flex space-x-5 text-sm md:text-2xl'>
        <li>
          <button 
            onClick={() => setShowHistory(!showHistory)} // Toggle the history section on click
            className='hover:underline'
          >
            Company's History
          </button>
        </li>
        <li>
          <button 
            onClick={() => setShowOffices(!showOffices)} // Toggle the offices section on click
            className='hover:underline'
          >
            Offices
          </button>
        </li>
        <li>
          <button 
            onClick={() => setShowContact(!showContact)} // Toggle the contact section on click
            className='hover:underline'
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Company's History Section */}
      {showHistory && (
        <div className='my-3'>
          <p className='text-center'><h3>History of Shoppy Globe:</h3>

Founding and Early Vision (January 2024 - May 2024)
Shoppy Globe was founded in January 2024 by visionary entrepreneur Sujoy Ghosal. The initial idea stemmed from Ghosal’s desire to create a platform that broke down the barriers of international commerce, empowering small businesses to reach a global audience. Based in [Location], Shoppy Globe's mission was clear: build an accessible, transparent, and inclusive marketplace where diverse products from different regions could be easily available to customers worldwide.

Recognizing the untapped potential of global markets, Ghosal began building the technological and logistical infrastructure necessary to support international sales while ensuring fair pricing and efficient delivery for both consumers and sellers. Early development focused on attracting vendors from emerging markets like Southeast Asia, South America, and Africa, giving them a platform to access larger markets in Europe and North America.

Launch and Initial Growth (June 2024 - December 2024)
On June 15, 2024, Shoppy Globe officially launched its e-commerce platform with an array of product categories, including electronics, fashion, home decor, and specialty goods from different regions. The platform’s distinguishing feature was its cross-border selling capabilities, which allowed local artisans and small businesses to easily sell internationally through a streamlined logistics system.

Within the first six months, Shoppy Globe signed partnerships with over 1,000 small businesses globally, quickly expanding its product offering to include health and beauty products, toys, and sustainable goods. To ensure that sellers could meet growing international demand, Shoppy Globe also integrated real-time inventory management tools and shipping calculators for seamless order fulfillment.

By the end of 2024, the platform had attracted over 100,000 active users, setting the foundation for accelerated growth in the years to come.

Expansion and Technological Innovation (January 2025 - December 2025)
In January 2025, Shoppy Globe introduced its proprietary logistics service, "GlobeWare," a fulfillment system that allowed third-party sellers to store their inventory in regional warehouses. This move allowed Shoppy Globe to ensure faster and more reliable shipping, improving customer satisfaction and supporting sellers with complex international shipping processes.

February 2025 marked the company's first major investment in technology, launching an artificial intelligence (AI)-powered product recommendation system that enhanced user experience. The AI algorithm analyzed customer behavior and trends to provide personalized shopping recommendations, increasing the average order value by 20% within the first quarter.

By April 2025, Shoppy Globe expanded its seller base to include 5,000 vendors from over 50 countries. The company’s logistics network also grew, with major fulfillment hubs established in Europe, North America, and Asia. In July 2025, Shoppy Globe launched its first mobile app, which became an instant hit with users, allowing them to shop and track orders seamlessly from their smartphones.Sustainability and Further Expansion (January 2026 - December 2026)
In early 2026, Shoppy Globe adopted a strong focus on sustainability by partnering with eco-friendly brands and local artisans producing sustainable products. The company launched the "Green Globe Initiative" in March 2026, which focused on promoting sustainable business practices, reducing packaging waste, and supporting fair trade businesses.pril 2026 marked Shoppy Globe's entry into the European market with a localized version of the website for the UK, Germany, and France. These localized platforms featured region-specific products and services, further tailoring the shopping experience for European customers.
In August 2026, the platform achieved a major milestone by reaching 1 million active users globally. To cater to the growing demand, the company opened new fulfillment centers in South America and Australia, improving its global shipping times. By December 2026, Shoppy Globe had grown to    over 10,000 active sellers and reached 2 million global customers.Technological Advancements and Market Leadership (January 2027 - December 2027)
          In January 2027, Shoppy Globe introduced its first augmented reality (AR) feature, allowing customers to view products in 3D and virtually "place" them in their homes before making a purchase. This innovation was a key driver in increasing customer engagement, particularly for home goods and furniture categories.In May 2027, Shoppy Globe announced its partnership with global payment providers to simplify cross-border transactions, integrating multiple payment gateways to handle currencies from over 100 countries. The platform's robust security features, including AI-powered fraud detection, boosted customer confidence, leading to higher conversion rates.October 2027 saw the launch of "Globe Prime," a premium membership program offering benefits like faster shipping, exclusive discounts, and early access to new products. The program attracted over 250,000 subscribers within the first two months of its launch, significantly increasing customer retention.By the end of 2027, Shoppy Globe solidified its position as a major global e-commerce player, with operations spanning over 150 countries, a seller base of more than 20,000, and over 5 million active users worldwide.

          </p>
        </div>
      )}

      {/* Offices Section */}
      {showOffices && (
        <div className='my-3'>
          <ul className='text-center'>
            <li><a href="https://maps.google.com/?q=Mumbai" target='_blank' rel="noopener noreferrer" className='hover:underline'>Mumbai</a></li>
            <li><a href="https://maps.google.com/?q=Bengaluru" target='_blank' rel="noopener noreferrer" className='hover:underline'>Bengaluru</a></li>
            <li><a href="https://maps.google.com/?q=Delhi" target='_blank' rel="noopener noreferrer" className='hover:underline'>Delhi</a></li>
            <li><a href="https://maps.google.com/?q=Asansol" target='_blank' rel="noopener noreferrer" className='hover:underline'>Asansol</a></li>
            <li><a href="https://maps.google.com/?q=Bhubaneswar" target='_blank' rel="noopener noreferrer" className='hover:underline'>Bhubaneswar</a></li>
            <li><a href="https://maps.google.com/?q=Kolkata" target='_blank' rel="noopener noreferrer" className='hover:underline'>Kolkata</a></li>
          </ul>
        </div>
      )}

      {/* Contact Section */}
      {showContact && (
        <div className='my-3'>
          <ul className='text-center'>
            <li>Email: <a href="mailto:sujoyghosal445@gmail.com" className='hover:underline'>sujoyghosal445@gmail.com</a></li>
            <li>Phone: <a href="tel:+917718340355" className='hover:underline'>+91 77183 40355</a></li>
            <li>WhatsApp: <a href="https://wa.me/917718340355" target='_blank' rel="noopener noreferrer" className='hover:underline'>Chat on WhatsApp</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/sujoy-ghosal-739928222/?originalSubdomain=in" target='_blank' rel="noopener noreferrer" className='hover:underline'>Sujoy Ghosal's LinkedIn</a></li>
          </ul>
        </div>
      )}

      {/* Social Media Links */}
      <ul className='flex my-3 space-x-5'>
        <li>
          <a 
            href="https://www.linkedin.com/in/sujoy-ghosal-739928222/?originalSubdomain=in" 
            target='_blank' 
            rel="noopener noreferrer"
          >
            <img 
              src="https://th.bing.com/th/id/OIP.XNEN6jSbEm4S1_eEP31mTwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" 
              className='w-7 h-7 md:h-12 md:w-12' 
              alt="LinkedIn profile link" 
            />
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/its_sujoy_35/" target='_blank'>
            <img src={insta_icon} className='w-7 h-7 md:h-12 md:w-12' alt="instagram social link" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/917718340355" target='_blank' rel="noopener noreferrer">
            <img src={wp_icon} className='w-7 h-7 md:h-12 md:w-12' alt="WhatsApp link" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/sujoy.gosal" target='_blank'>
            <img alt="svgImg"  className='w-7 h-7 md:h-12 md:w-12' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gOSA0IEMgNi4yNTA0ODM5IDQgNCA2LjI1MDQ4MzkgNCA5IEwgNCA0MSBDIDQgNDMuNzQ5NTE2IDYuMjUwNDgzOSA0NiA5IDQ2IEwgMjUuODMyMDMxIDQ2IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAyNi4xNTgyMDMgNDYgTCAzMS44MzIwMzEgNDYgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDMyLjE1ODIwMyA0NiBMIDQxIDQ2IEMgNDMuNzQ5NTE2IDQ2IDQ2IDQzLjc0OTUxNiA0NiA0MSBMIDQ2IDkgQyA0NiA2LjI1MDQ4MzkgNDMuNzQ5NTE2IDQgNDEgNCBMIDkgNCB6IE0gOSA2IEwgNDEgNiBDIDQyLjY2ODQ4NCA2IDQ0IDcuMzMxNTE2MSA0NCA5IEwgNDQgNDEgQyA0NCA0Mi42Njg0ODQgNDIuNjY4NDg0IDQ0IDQxIDQ0IEwgMzMgNDQgTCAzMyAzMCBMIDM2LjgyMDMxMiAzMCBMIDM4LjIyMDcwMyAyMyBMIDMzIDIzIEwgMzMgMjEgQyAzMyAyMC40NDI1MDggMzMuMDUzMDUgMjAuMzk4OTI5IDMzLjI0MDIzNCAyMC4yNzczNDQgQyAzMy40Mjc0MTkgMjAuMTU1NzU4IDM0LjAwNTgyMiAyMCAzNSAyMCBMIDM4IDIwIEwgMzggMTQuMzY5MTQxIEwgMzcuNDI5Njg4IDE0LjA5NzY1NiBDIDM3LjQyOTY4OCAxNC4wOTc2NTYgMzUuMTMyNjQ3IDEzIDMyIDEzIEMgMjkuNzUgMTMgMjcuOTAxNTg4IDEzLjg5NjQ1MyAyNi43MTg3NSAxNS4zNzUgQyAyNS41MzU5MTIgMTYuODUzNTQ3IDI1IDE4LjgzMzMzMyAyNSAyMSBMIDI1IDIzIEwgMjIgMjMgTCAyMiAzMCBMIDI1IDMwIEwgMjUgNDQgTCA5IDQ0IEMgNy4zMzE1MTYxIDQ0IDYgNDIuNjY4NDg0IDYgNDEgTCA2IDkgQyA2IDcuMzMxNTE2MSA3LjMzMTUxNjEgNiA5IDYgeiBNIDMyIDE1IEMgMzQuMDc5MDYyIDE1IDM1LjM4NzM2IDE1LjQ1ODQ1NSAzNiAxNS43MDExNzIgTCAzNiAxOCBMIDM1IDE4IEMgMzMuODQ5MTc4IDE4IDMyLjkyNjk1NiAxOC4wOTUyIDMyLjE1MDM5MSAxOC41OTk2MDkgQyAzMS4zNzM4MjYgMTkuMTA0MDI0IDMxIDIwLjA2MjUgMzEgMjEgQyAzMSAyMyAzMSAyMyAzMSAyMyBMIDMxIDIzIEwgMzEgMjMgWiIvPgo8L3N2Zz4=" />
          </a>
        </li>
      </ul>
      <p>SHOPPYGLOBE, An E-commerce app || Designed by <a  href="https://www.linkedin.com/in/sujoy-ghosal-739928222/?originalSubdomain=in" 
            target='_blank'>@sujoyghosal || All Rights Reserved</a></p>
    </footer>
  );
};

export default Footer;
