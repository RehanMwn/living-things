import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative">
        <img
          src="aboutbg.png"
          alt="About Us Background"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-center mt-2 max-w-md text-white">
            Lorem ipsum dolor sit amet consectetur. Diam cursus ullamcorper
            nulla posuere justo id sit quis.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur. Egestas urna morbi egestas
          bibendum sagittis. Vitae sed bibendum a eget feugiat est sed amet.
          Mus amet blandit nam sit quis aliquam pellentesque eu. Ipsum mattis
          scelerisque semper urna.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <img
            src="/path-to-image1.jpg"
            alt="Image 1"
            className="rounded-lg object-cover h-48"
          />
          <img
            src="/path-to-image2.jpg"
            alt="Image 2"
            className="rounded-lg object-cover h-48"
          />
          <img
            src="/path-to-image3.jpg"
            alt="Image 3"
            className="rounded-lg object-cover h-48"
          />
          <img
            src="/path-to-image4.jpg"
            alt="Image 4"
            className="rounded-lg object-cover h-48"
          />
        </div>
      </section>

      {/* Meet Our Group */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Meet Our Group</h2>
        <p className="text-center text-black mb-6">
          Mengedepankan kesadaran bahwa kesehatan yang baik bukan hanya untuk
          manusia, tetapi juga mencakup semua makhluk hidup.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Example member cards */}
          <div className="text-center">
            <img
              src=""
              alt="Raihan"
              className="w-24 h-24 rounded-full mx-auto "
            />
            <h3 className="font-bold text-black">Raihan</h3>
            <p className="text-gray-600">FrontEnd</p>
          </div>
          <div className="text-center">
            <img
              src=""
              alt="Kenji"
              className="w-24 h-24 rounded-full mx-auto "
            />
            <h3 className="font-bold text-black">Kenji</h3>
            <p className="text-gray-600">FrontEnd 2</p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-person1.jpg"
              alt="Anisa"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="font-bold text-black">Anisa</h3>
            <p className="text-gray-600">System Analyst</p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-person2.jpg"
              alt="Laily"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="font-bold text-black">Laily</h3>
            <p className="text-gray-600">UI/UX</p>
          </div>
          <div className="text-center">
            <img
              src="/path-to-person3.jpg"
              alt="Malika"
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="font-bold text-black">Malika</h3>
            <p className="text-gray-600">QC</p>
          </div>
        </div>
      </section>

      {/* Task Results Section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Task Results</h2>
        <p className="text-center text-black mb-6">
          Following are the results of the work we have carried out.
        </p>
        <div className="space-y-4">
          {/* Task Cards */}
          <div className="flex justify-between items-center border border-[#86B6F6] rounded-2xl p-4">
            <div>
              <h3 className="font-bold text-black">QC</h3>
              <p className="text-black">Ide Website, Timeline Planner</p>
            </div>
            <button className="text-[#176B87] border border-[#86B6F6] rounded-md px-4 py-2 bg-white">
              Apply
            </button>
          </div>
          <div className="flex justify-between items-center border border-[#86B6F6] rounded-2xl p-4">
            <div>
              <h3 className="font-bold text-black">UI/UX</h3>
              <p className="text-black">Desain UI Website</p>
            </div>
            <button className="text-[#176B87] border border-[#86B6F6] rounded-md px-4 py-2 bg-white">
              Apply
            </button>
          </div>
          <div className="flex justify-between items-center border border-[#86B6F6] rounded-2xl p-4">
            <div>
              <h3 className="font-bold text-black">Back End and System Analyst</h3>
              <p className="text-black">Database, API</p>
            </div>
            <button className="text-[#176B87] border border-[#86B6F6] rounded-md px-4 py-2 bg-white">
              Apply
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#86B6F6] text-white text-center py-6">
        <div className="flex justify-center space-x-4">
          <a href="/home" className="hover:underline">
            Home
          </a>
          <a href="/articles" className="hover:underline">
            Articles
          </a>
          <a href="/hospital" className="hover:underline">
            Hospital
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
        </div>
        <p className="mt-4">Copyright © 2024. Living Things Health. All rights reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;
