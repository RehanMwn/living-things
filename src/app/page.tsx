"use client";

import React, { useState, useEffect } from "react";
import Head from 'next/head'; // Impor Head
import Link from 'next/link';
import ReactDOM from 'react-dom/client';
import { useRouter } from 'next/router';
//import { BrowserRouter } from 'react-router-dom';
import Image from 'next/image'; // Import Image from next/image


<head>
  
</head>

// Mock data for articles (gunakan data yang sama dengan `mockArticles` di `ArticlesSection`)
const mockArticles = [
  {
    id: 1,
    title: "Henti Jantung",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi nunc suspendisse ornare tellus enim volutpat.",
    date: "Wednesday, November 1 2024",
    author: "dr. Tompi SpJP-RE",
    image: "article1.png",
    content: "Ini adalah konten lengkap artikel tentang Henti Jantung...",
  },
  {
    id: 2,
    title: "Gerd",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu velit ut urna diam scelerisque egestas.",
    date: "Wednesday, November 1 2024",
    author: "Dr. Yita",
    image: "article2.png",
    content: "Ini adalah konten lengkap artikel tentang Gerd...",
  },
  {
    id: 3,
    title: "Impaksi Gigi Bungsu",
    description:
      "Aliquet vel facilisis pellentesque in facilisis. Sit enim vel semper.",
    date: "Wednesday, November 1 2024",
    author: "drg. Siska Yanti SpBM",
    image: "article3.png",
    content: "Ini adalah konten lengkap artikel tentang Impaksi Gigi Bungsu...",
  },
  {
    id: 4,
    title: "Penyebab dan Penanganan Infeksi Telinga pada Anak",
    description:
      "Infeksi telinga sering terjadi pada anak-anak. Cari tahu penyebab dan cara mengatasinya.",
    date: "Wednesday, November 1 2024",
    author: "dr. Lestari Putri SpTHT",
    image: "article4.png",
    content: "Infeksi telinga pada anak, terutama otitis media, adalah masalah kesehatan umum. Penyebabnya meliputi bakteri, virus, atau alergi. Tanda-tanda meliputi rasa sakit di telinga, demam, dan sulit tidur. Penanganannya dapat berupa pemberian antibiotik atau terapi sesuai petunjuk dokter. Langkah pencegahan termasuk menjaga kebersihan, imunisasi, dan menghindari paparan asap rokok."
  },
  {
    id: 5,
    title: "Mengenali Gejala Diabetes di Usia Muda",
    description:
      "Diabetes tipe 2 kini semakin banyak ditemukan pada usia muda. Kenali gejalanya sejak dini.",
    date: "Wednesday, November 1 2024",
    author: "dr. Andi Pranoto SpPD",
    image: "article5.png",
    content: "Diabetes tipe 2 tidak hanya menyerang orang dewasa, tetapi juga remaja. Gejala termasuk sering haus, buang air kecil berlebih, penurunan berat badan yang tidak wajar, dan kelelahan. Gaya hidup tidak sehat seperti konsumsi gula berlebih dan kurangnya aktivitas fisik menjadi faktor risiko utama. Perubahan gaya hidup, termasuk diet sehat dan olahraga teratur, penting untuk pencegahan dan pengelolaan."
  },
  {
    id: 6,
    title: "Manfaat Berolahraga untuk Kesehatan Mental",
    description:
      "Olahraga tidak hanya baik untuk tubuh, tetapi juga untuk kesehatan mental Anda.",
    date: "Wednesday, November 1 2024",
    author: "dr. Fitri Ananda SpKO",
    image: "article6.png",
    content: "Olahraga memiliki banyak manfaat untuk kesehatan mental, seperti mengurangi stres, meningkatkan mood, dan membantu mengatasi depresi ringan. Aktivitas fisik seperti berjalan kaki, yoga, atau berlari dapat meningkatkan produksi endorfin, hormon yang membuat Anda merasa bahagia. Rutin berolahraga juga meningkatkan kualitas tidur dan rasa percaya diri."
  }
];

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Cari artikel berdasarkan slug
  const article = mockArticles.find(
    (item) => `artikel-${item.title.toLowerCase().replace(/\s+/g, "-")}` === slug
  );

  if (!article) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-red-500">Article Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-black mb-4">{article.title}</h1>
      <p className="text-gray-500">{article.date}</p>
      <p className="text-black font-medium mb-4">By {article.author}</p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-72 object-cover mb-6"
      />
      <p className="text-lg text-gray-700">{article.content}</p>
    </div>
  );
};


// Articles Section Component
const ArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState(mockArticles.slice(0, 6));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreArticles = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newArticles = mockArticles.slice(page * 6, nextPage * 6);
      setArticles((prev) => [...prev, ...newArticles]);
      setPage(nextPage);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        loadMoreArticles();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, loading]);

  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6" id="articles">
  <h1 className="text-3xl font-bold text-black text-center mb-3">
    Articles
  </h1>
  <p style={{ 
    color: 'gray', 
    fontSize: '16px', 
    margin: '0', 
    textAlign: 'center', 
    marginBottom: '15px'
  }}>
    Find articles about human and animal health
  </p>

      
      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for Article"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center border border-gray-400 px-4 py-2 rounded-r-full text-gray-700 hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Search
        </button>
      </div>

      {filteredArticles.length === 0 && searchTerm && (
        <div className="text-center text-red-500 mb-4">
          <p>No articles found matching your search criteria.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Link key={article.id} href={`/artikel/artikel-${article.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                <h2 className="text-lg font-bold mb-1 text-black">{article.title}</h2>
                <p className="text-sm text-gray-700">{article.description}</p>
                <p className="mt-4 text-sm text-black font-medium">{article.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {loading && (
        <div className="mt-6 text-center">
          <p className="text-black">Loading more articles...</p>
        </div>
      )}
    </div>
  );
};

// Hospital Section Compoent
const mockHospitals = [
  {
    id: 1,
    name: "RS Arafah Anwar Medika Sukodono",
    location: "Jl. Sawo No. 2, Desa Sukodono, Kecamatan Sukodono, Kabupaten Sidoarjo, Jawa Timur 61258",
    image: "hospital1.png",
  },
  {
    id: 2,
    name: "RSU Daerah Raden Tumanggung Notopuro Sidoarjo",
    location: "Jl. Mojopahit No. 667, Kelurahan Celep, Kecamatan Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61215",
    image: "hospital2.png",
  },
  {
    id: 3,
    name: "RS Umum Bunda",
    location: "Jl. Raya Kundi No. 70, Desa Kepuhkiriman, Kecamatan Waru, Kabupaten Sidoarjo, Jawa Timur 61256",
    image: "hospital5.png",
  },
  {
    id: 4,
    name: "RSI Siti Hajar Sidoarjo",
    location: "Jl. Raden Patah № 70 - 72, Kelurahan Bulusidokare, Kecamatan Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61234",
    image: "hospital4.png",
  },
  {
    id: 5,
    name: "RSUP dr. Soeradji Tirtonegoro",
    location: "Jalan KRT Jl. Dr. Soeradji Tirtonegoro No.1, Dusun 1, Tegalyoso, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57424",
    image: "hospital6.png",
  },
  {
    id: 6,
    name: "RSU Rahman Rahim",
    location: "Jl. Raya Saimbang No.10, Kebonagung, Kec. Sukodono, Kabupaten Sidoarjo, Jawa Timur 61258",
    image: "hospital7.png",
  },
];

const HospitalSection: React.FC = () => {
  const [hospitals, setHospitals] = useState(mockHospitals.slice(0, 6));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreHospitals = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const newHospitals = mockHospitals.slice(page * 3, nextPage * 3);
      setHospitals((prev) => [...prev, ...newHospitals]);
      setPage(nextPage);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        loadMoreHospitals();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, loading]);

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6" id="hospital">
      <h1 className="text-3xl font-bold mb-6 text-black text-center mb-3">Hospitals</h1>

      <p style={{ 
    color: 'gray', 
    fontSize: '16px', 
    margin: '0', 
    textAlign: 'center', 
    marginBottom: '15px'
  }}>
    Look For The Nearest Hospital Around You
  </p>
      
      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for Hospital"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center border border-gray-400 px-4 py-2 rounded-r-full text-gray-700 hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Search
        </button>
      </div>

      {filteredHospitals.length === 0 && searchTerm && (
        <div className="text-center text-red-500 mb-4">
          <p>No hospitals found matching your search criteria.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-1 text-black">{hospital.name}</h2>
              <p className="text-sm text-gray-700">{hospital.location}</p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="mt-6 text-center">
          <p className="text-black">Loading more hospitals...</p>
        </div>
      )}
    </div>
  );
};

// Video Section Component
const VideoSection: React.FC = () => {
  return (
    <div className="p-6" id="video">
      <h1 className="text-3xl font-bold mb-6 text-black text-center mb-3">Video</h1>

      <p style={{ 
    color: 'gray', 
    fontSize: '16px', 
    margin: '0', 
    textAlign: 'center', 
    marginBottom: '15px'
  }}>
    Tips and Tutorials
  </p>

      <div className="flex justify-center items-center mb-4">
        {/* Embed YouTube video */}
        <iframe
          width="900"
          height="500"
          src="https://www.youtube.com/embed/SixmTdLBuZE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

const RegisterNowBanner = () => {
  return (
    <div className="bg-blue-300 p-10 flex justify-between items-center">
      {/* Teks Kiri */}
      <p className="text-lg font-bold text-white">
        Register Now for News <br />
        and Special Offer
      </p>

      {/* Tombol Register */}
      <button
        className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
        onClick={() => window.location.href = '/register'}
      >
        Register Now
      </button>
    </div>
  );
};

// Footer Component (Updated UI)
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          {/* Left: Navigation */}
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            <li>
              <a href="#home" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#articles" className="hover:text-blue-500">
                Articles
              </a>
            </li>
            <li>
              <a href="#hospital" className="hover:text-blue-500">
                Hospital
              </a>
            </li>
            <li>
  <Link href="about" className="hover:text-blue-500">
    About us
  </Link>
</li>
          </ul>
          {/* Center: Copyright */}
          <div className="text-center mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Living Things Health. All rights reserved.</p>
          </div>
          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v14.91c0 1.77-1.43 3.2-3.2 3.2H3.2C1.43 22.67 0 21.24 0 19.47V4.56C0 2.79 1.43 1.36 3.2 1.36h17.61c1.77 0 3.2 1.43 3.2 3.2zM7.18 10.75H4.87V19h2.31v-8.25zm-1.15-3.67c-.7 0-1.26.56-1.26 1.26s.56 1.26 1.26 1.26 1.26-.56 1.26-1.26-.56-1.26-1.26-1.26zm10.39 3.67H12.7v1.33h1.92v.01h-1.91v3.34H11.5v-3.34h-1.25V10.8H11.5V9.34c0-1.17.96-2.12 2.13-2.12h1.84v2.29H13.7c-.29 0-.5.21-.5.5v1.08h2.52v2.29z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.45-9.96 9.96 0 4.39 2.84 8.1 6.74 9.4-.09-.72-.17-1.82.03-2.61.18-.74 1.16-4.74 1.16-4.74s-.29-.58-.29-1.44c0-1.36.79-2.38 1.78-2.38.84 0 1.25.63 1.25 1.38 0 .84-.53 2.1-.81 3.27-.23.96.47 1.75 1.4 1.75 1.67 0 2.96-1.76 2.96-4.28 0-2.24-1.61-3.82-3.91-3.82-2.66 0-4.22 1.98-4.22 4.04 0 .8.31 1.66.7 2.12.08.09.09.18.07.28-.08.32-.25 1.04-.28 1.19-.05.23-.19.29-.43.18-1.65-.79-2.67-3.26-2.67-5.25 0-3.03 2.21-5.81 6.39-5.81 3.35 0 5.96 2.39 5.96 5.58 0 3.32-2.09 6.01-5 6.01-1.02 0-1.98-.53-2.3-1.16l-.62 2.36c-.22.82-.82 1.85-1.22 2.47.91.28 1.87.44 2.88.44 5.5 0 9.96-4.45 9.96-9.96s-4.45-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v14.91c0 1.77-1.43 3.2-3.2 3.2H3.2C1.43 22.67 0 21.24 0 19.47V4.56C0 2.79 1.43 1.36 3.2 1.36h17.61c1.77 0 3.2 1.43 3.2 3.2zM7.18 10.75H4.87V19h2.31v-8.25zm-1.15-3.67c-.7 0-1.26.56-1.26 1.26s.56 1.26 1.26 1.26 1.26-.56 1.26-1.26-.56-1.26-1.26-1.26zm10.39 3.67H12.7v1.33h1.92v.01h-1.91v3.34H11.5v-3.34h-1.25V10.8H11.5V9.34c0-1.17.96-2.12 2.13-2.12h1.84v2.29H13.7c-.29 0-.5.21-.5.5v1.08h2.52v2.29z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Mock data untuk artikel hewan
const mockAnimalArticles = [
  {
    id: 1,
    title: "Penyakit Kulit pada Anjing",
    description: "Bagaimana cara mengatasi masalah kulit pada anjing.",
    date: "Tuesday, December 12 2024",
    author: "drh. Indah Permata",
    image: "hewan1.png",
    content: "Ini adalah konten lengkap artikel tentang Penyakit Kulit pada Anjing...",
  },
  {
    id: 2,
    title: "Perawatan Kucing Tua",
    description: "Tips merawat kucing berusia lanjut agar tetap sehat.",
    date: "Tuesday, December 12 2024",
    author: "drh. Budi Santoso",
    image: "hewan2.png",
    content: "Ini adalah konten lengkap artikel tentang Perawatan Kucing Tua...",
  },
  {
    id: 3,
    title: "Gejala Penyakit Flu Burung",
    description: "Mengenali gejala flu burung pada unggas dan pencegahannya.",
    date: "Tuesday, December 12 2024",
    author: "drh. Dian Anggraini",
    image: "hewan3.png",
    content: "Ini adalah konten lengkap artikel tentang Gejala Penyakit Flu Burung...",
  },
  {
    id: 4,
    title: "Manajemen Kandang Sapi",
    description: "Panduan merawat sapi di kandang untuk kesehatan optimal.",
    date: "Tuesday, December 12 2024",
    author: "drh. Ahmad Setiawan",
    image: "hewan4.png",
    content: "Ini adalah konten lengkap artikel tentang Manajemen Kandang Sapi...",
  },
  {
    id: 5,
    title: "Mengatasi Stres pada Hewan Peliharaan",
    description: "Cara mengurangi stres pada hewan kesayangan Anda.",
    date: "Tuesday, December 12 2024",
    author: "drh. Citra Lestari",
    image: "hewan5.png",
    content: "Ini adalah konten lengkap artikel tentang Mengatasi Stres pada Hewan Peliharaan...",
  },
  {
    id: 6,
    title: "Pentingnya Vaksinasi pada Hewan",
    description: "Mengapa vaksinasi penting untuk hewan peliharaan.",
    date: "Tuesday, December 12 2024",
    author: "drh. Erika Saputra",
    image: "hewan6.png",
    content: "Ini adalah konten lengkap artikel tentang Pentingnya Vaksinasi pada Hewan...",
  },
];

// Komponen AnimalArticlesSection dengan fitur pencarian
const AnimalArticlesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan kata kunci pencarian

  // Filter artikel berdasarkan search term
  const filteredArticles = mockAnimalArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6" id="animal-articles">
      <h1 className="text-3xl font-bold text-black text-center mb-3">
        Animal Articles
      </h1>
      <p
        style={{
          color: "gray",
          fontSize: "16px",
          margin: "0",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Discover tips and insights on animal health and care.
      </p>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search for Animal Article"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="flex items-center border border-gray-400 px-4 py-2 rounded-r-full text-gray-700 hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Search
        </button>
      </div>

      {/* Jika tidak ditemukan artikel */}
      {filteredArticles.length === 0 && searchTerm && (
        <div className="text-center text-red-500 mb-4">
          <p>No articles found matching your search criteria.</p>
        </div>
      )}

      {/* Daftar Artikel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            href={`/animal-artikel/artikel-${article.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{article.date}</p>
                <h2 className="text-lg font-bold mb-1 text-black">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-700">{article.description}</p>
                <p className="mt-4 text-sm text-black font-medium">
                  {article.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const BootcampSection = () => {
  return (
    <div className="py-10 bg-white">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-black mb-2">
        Online Bootcamp
      </h2>
      <p className="text-gray-500 text-center text-lg mb-10">
        With competent specialist doctors
      </p>

      {/* Flexbox Container for 2 Images */}
      <div className="flex flex-col md:flex-row justify-center items-center px-4">
        {/* Bootcamp 1 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img
            src="bootcamp1.png" // Ganti dengan path gambar asli
            alt="Seminar Online Suicide Prevention"
            className="w-full h-auto"
          />
        </div>

        {/* Bootcamp 2 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <img
            src="bootcamp2.png" // Ganti dengan path gambar asli
            alt="Seminar Edukasi Penularan Darah"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

// Main Landing Page Component
const LandingPage: React.FC = () => {
  return (
    <div className="font-sans">
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md">
  <div className="text-xl font-bold">
    <span className="text-black">Living Things</span>{" "}
    <span className="text-[#176B87]">Health</span>
  </div>
  <ul className="flex space-x-6 text-gray-700">
    <li>
      <a href="#home" className="hover:text-blue-500">
        Home
      </a>
    </li>
    <li>
      <a href="#articles" className="hover:text-blue-500">
        Articles
      </a>
    </li>
    <li>
      <a href="#animal-articles" className="hover:text-blue-500">
        Animal Articles
      </a>
    </li>
    <li>
      <a href="#hospital" className="hover:text-blue-500">
        Hospital
      </a>
    </li>
    <li>
      <a href="#video" className="hover:text-blue-500">
        Video
      </a>
    </li>
    <li>
      <a href="/about" className="hover:text-blue-500">
        About us
      </a>
    </li>
  </ul>
  <div className="flex items-center">
    <img
      src="account.png"
      alt="Account"
      className="ml-2 cursor-pointer"
      style={{ width: '50px', height: '48px' }}
    />
  </div>
</nav>


      <header className="relative w-full h-[545px]">
        <img
          src="ewe.png"
          alt="Hero"
          className="w-full h-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-start px-12 text-white">
          <h1 className="text-4xl font-bold">
            Living Things <span className="text-[#176B87]">Health</span>
          </h1>
          <h2 className="text-2xl mt-2">Kabupaten Sidoarjo</h2>
          <p className="mt-4 text-lg">
            Mengedepankan kesadaran bahwa kesehatan yang baik bukan hanya untuk
            manusia, tetapi juga mencakup semua makhluk hidup, dan didukung oleh
            lingkungan yang sehat.
          </p>
          <div className="mt-6 flex space-x-4">
          <a href="register">
  <button 
    className="bg-white text-[#176B87] px-4 py-2 rounded-md">
    Register Now
  </button>
</a>

            <a href="login">
            <button className="bg-[#176B87] text-white border border-[#176B87] px-7 py-2 rounded-md">Login</button>
            </a>
          </div>
        </div>
      </header>


      <ArticlesSection />
      <AnimalArticlesSection />
      <HospitalSection />
      <VideoSection />
      <BootcampSection />
      <RegisterNowBanner />
      <Footer />
    </div>
  );
};

export default LandingPage;
