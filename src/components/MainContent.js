import React from 'react';
import backgroundImage from './background.jpg';
import first from "./1.png"
import second from "./2.png"
import third from "./3.png"
import fourth from "./4.png"
import fifth from "./5.png"
import sixth from "./6.png"



const MainContent = () => {
  return (
    <main className="container mx-auto p-4">
      <section className="relative text-center my-8">
        <img src={backgroundImage} alt="Background" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-60">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold">Are You a Supplier?</h1>
            <p className="text-5xl">Explore Matching Opportunities.</p>
          </div>
          <div className="flex mt-5 flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl mb-4">
            <input
              type="text"
              placeholder="💼 Search your required service here"
              className="w-full md:w-1/2 p-2 border rounded bg-white text-gray-800"
            />
            <input
              type="text"
              placeholder="❗ Search your desired location here"
              className="w-full md:w-1/2 p-2 border rounded bg-white text-gray-800"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto">Search</button>
          </div>
          <p className="text-lg mt-5 font-bold">
            Are you a buyer? <a href="#post-requirements" className="font-normal underline">Click here if you are looking to post a requirement</a>
          </p>
        </div>
      </section>

      <section className="p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
          <h2 className="text-3xl font-extrabold text-black mb-6">Ready to dive into <span className="text-purple-900">HABOT?</span></h2>
            <p className="text-lg text-black w-[600px] mb-6">
              Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
            </p>
            <div className="">
              <button className="bg-green-500 text-white font-bold text-xl px-6 py-3 rounded-lg hover:bg-green-600">Sign up Today! →</button>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg text-center">
              <span className="border  border-orange-500 p-2 w-64 rounded-md">Abu Dhabi</span>
              <span className="border w-64 rounded-md border-orange-500 p-2 ">Dubai</span>
              <span className="border w-64 rounded-md border-orange-500 p-2 ">Sharjah & Ajman</span>
              <span className="border w-64 rounded-md border-orange-500 p-2 ">Fujairah</span>
              <span className="border w-64 rounded-md border-orange-500 p-2 ">Ras Al Khaimah</span>
              <span className="border w-64 rounded-md border-orange-500 p-2 ">Umm Al Quwain</span>
            </div>
          </div>
        </div>
      </section>  
      <section className="grid h-[500px] grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-800  text-white">
        <div className=" mt-14 video-wrapper">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex -mt-44 ml-20 flex-col justify-center">
         <h3 className="text-3xl font-bold mb-4">
            <span className="relative ml-10 text-orange-500 mr-28">Buyer          
             <div className="absolute left-0 -ml-9  right-0 mx-auto mt-1 h-1 bg-orange-500" style={{width: '200%', top: '100%'}}></div></span> 
 <span className="text-white">Supplier</span>
          </h3>
          <p className="text-xl mt-5 mb-2">✅Post your requirements.</p>
          <p className="text-xl mb-2">✅Sit back for multiple suppliers to contact you.</p>
          <p className="text-xl">✅Choose among the suppliers based on the ratings and reviews.</p>
        </div>
      </section> 
       <section className="bg-green-100 h-[150px] mt-10 text-center p-8">
        <div className="flex mt-5 items-center justify-center space-x-4">
          <h2 className="text-4xl mr-[780px] font-bold mb-4 relative">
            Let Suppliers <span className="relative">Find You
              <div className="absolute left-0 right-0 mx-auto mt-1 h-1 bg-orange-500" style={{width: '100%', top: '100%'}}></div>
            </span>
          </h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-orange-600">Get Verified</button>
        </div>
      </section>
      <header className="text-center p-8 mt-10 text-black">
        <h2 className="text-3xl font-bold mb-4">How it works?</h2>
        <p className="text-lg ml-96 w-[800px]">Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      </header>

      <section className="grid text-black font-semibold text-lg ml-32 grid-cols-1 md:grid-cols-3 p-8">
        <div className="flex flex-col items-center">
          <div className="mb-8 mr-4 bg-green-100  h-52 w-80 flex flex-col items-center justify-center">
            <img src={first} alt="Select Your Role and Sign Up" className="mb-4   w-20 h-20" />
            <p className='text-center'>Select Your Role and<br/> Sign Up</p>
          </div>
          <div  className="mb-8  -mt-8 h-52 w-80 flex flex-col items-center justify-center">
            <img src={second} alt="Suppliers Complete your profile and get notified for opportunities" className="mb-4 w-20 h-20" />
            <p className='text-center '>Suppliers Complete your <br/>profile and get notified for <br/> opportunities</p>
          </div>
          </div>
          <div className="flex mr-60 flex-col items-center">
          <div  className="mb-8   h-52 w-96 flex flex-col items-center justify-center">
            <img src={fifth} alt="Buyers Post Your Requirements" className="mb-4 w-20 h-20" />
            <p className='text-center'>Buyers<br/> Post Your Requirements</p>
          </div>
        
        <div  className="mb-8 bg-green-100 -mt-8 ml-5 mr-2 h-52 w-[350px] flex flex-col items-center justify-center">
        <img src={fourth} alt="Contact to Buyers and Share your Quote for the service" className="mb-4 w-20 h-20" />
            <p className='text-center'>Contact to Buyers and Share<br/> your Quote for the service</p>
            
          </div>
          </div>
          <div className="flex mr-[750px] flex-col items-center">
          <div  className="mb-8 bg-green-100  h-52 w-80 flex flex-col items-center justify-center">
          <img src={third} alt="Review, Select, and Contact the Best Suppliers" className="mb-4 w-20 h-20" />
            <p className='text-center'>Review, Select, and <br/> Contact the Best Suppliers</p>
            
          </div>
       
        <div className="mb-8  -mt-8 h-52 w-80 flex flex-col items-center justify-center">
        
            <img src={sixth} alt="Both the Parties can Connect and Make Business Leave a Feedback" className="mb-4  w-20 h-20" />
            <p className='text-center'>Both the Parties can Connect <br/> and Make Business Leave a <br/> Feedback</p>
          </div>
          
        </div>
      </section>

 </main>
  );
};

export default MainContent;
