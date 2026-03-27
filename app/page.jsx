'use client';

import React, { useState } from 'react';
import { 
  Menu, X, MapPin, Phone, Mail, Award, BookOpen, 
  Users, Heart, ChevronRight, CheckCircle, FileText, Image as ImageIcon
} from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('beranda');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      {/* Top Bar */}
      <div className="bg-green-800 text-yellow-50 text-sm py-2 px-4 md:px-8 flex justify-between items-center hidden md:flex">
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><MapPin size={14} className="mr-1" /> Binjai, Sumatera Utara</span>
          <span className="flex items-center"><Phone size={14} className="mr-1" /> 0856 6826 9882</span>
        </div>
        <div>
          <span>Buka: Senin - Sabtu, 07:15 - 14:00 WIB</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('beranda')}>
              <div className="bg-green-700 text-white p-2 rounded-lg mr-3 shadow-sm">
                <BookOpen size={28} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-green-700 leading-tight">SDN 050577 KW. BEGUMIT</h1>
                <p className="text-xs text-gray-500 font-semibold tracking-wider">KABUPATEN LANGKAT</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <NavLink label="Beranda" isActive={activeTab === 'beranda'} onClick={() => navigateTo('beranda')} />
              <NavLink label="Profil" isActive={activeTab === 'profil'} onClick={() => navigateTo('profil')} />
              <NavLink label="Galeri" isActive={activeTab === 'galeri'} onClick={() => navigateTo('galeri')} />
              <NavLink label="Kontak" isActive={activeTab === 'kontak'} onClick={() => navigateTo('kontak')} />
              <button 
                onClick={() => navigateTo('ppdb')}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-2.5 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
              >
                PPDB Online
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-green-700 hover:text-green-900 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-green-50 border-t border-green-100 px-4 pt-2 pb-6 space-y-1 shadow-inner absolute w-full left-0 z-50">
            <MobileNavLink label="Beranda" onClick={() => navigateTo('beranda')} isActive={activeTab === 'beranda'} />
            <MobileNavLink label="Profil Sekolah" onClick={() => navigateTo('profil')} isActive={activeTab === 'profil'} />
            <MobileNavLink label="Galeri" onClick={() => navigateTo('galeri')} isActive={activeTab === 'galeri'} />
            <MobileNavLink label="Kontak" onClick={() => navigateTo('kontak')} isActive={activeTab === 'kontak'} />
            <button 
              onClick={() => navigateTo('ppdb')}
              className="w-full mt-4 bg-yellow-400 text-green-900 font-bold py-3 px-4 rounded-xl shadow-md"
            >
              Daftar PPDB Online
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'beranda' && <Beranda navigateTo={navigateTo} />}
        {activeTab === 'profil' && <Profil />}
        {activeTab === 'ppdb' && <PPDB />}
        {activeTab === 'galeri' && <Galeri />}
        {activeTab === 'kontak' && <Kontak />}
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-50 pt-12 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white text-green-800 p-1.5 rounded-lg mr-3">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold">SDN 050577 Kw. Begumit</h2>
              </div>
              <p className="text-green-200 mb-4 text-sm leading-relaxed">
                Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi melalui lingkungan belajar yang nyaman dan guru yang profesional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 border-b border-green-700 pb-2 inline-block">Alamat Sekolah</h3>
              <p className="flex items-start text-sm text-green-200 mb-2">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span>JLN. P. KEMERDEKAAN, Kecamatan Binjai,<br/>Kabupaten Langkat, Provinsi Sumatera Utara,<br/>Indonesia.</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 mb-4 border-b border-green-700 pb-2 inline-block">Hubungi Kami</h3>
              <p className="flex items-center text-sm text-green-200 mb-3">
                <Phone size={18} className="mr-2 text-yellow-400" />
                0856 6826 9882 (WhatsApp)
              </p>
              <a 
                href="https://wa.me/6285668269882" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center bg-green-700 hover:bg-green-600 border border-green-500 text-white text-sm py-2 px-4 rounded-full transition"
              >
                Chat WhatsApp Sekolah
              </a>
            </div>
          </div>
          <div className="border-t border-green-800 pt-8 text-center text-sm text-green-400">
            <p>© {new Date().getFullYear()} SD Negeri 050577 Kw.Begumit. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function NavLink({ label, isActive, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`font-semibold text-sm uppercase tracking-wide transition-colors duration-200 ${
        isActive ? 'text-green-700 border-b-2 border-green-600 pb-1' : 'text-gray-600 hover:text-green-600'
      }`}
    >
      {label}
    </button>
  );
}

function MobileNavLink({ label, isActive, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
        isActive ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
      }`}
    >
      {label}
    </button>
  );
}

/* ================= PAGES ================= */

function Beranda({ navigateTo }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#15803d" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-200 text-yellow-800 font-bold text-xs tracking-wider mb-4 border border-yellow-300 shadow-sm">
                TAHUN AJARAN BARU
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-800 leading-tight mb-6">
                Selamat Datang di <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
                  SD NEGERI 050577 KW. BEGUMIT
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 border-l-4 border-yellow-400 pl-4">
                "Mewujudkan Generasi Cerdas, Berkarakter, dan Berprestasi."
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => navigateTo('ppdb')}
                  className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Daftar Siswa Baru <ChevronRight size={20} className="ml-2" />
                </button>
                <button 
                  onClick={() => navigateTo('kontak')}
                  className="bg-white hover:bg-gray-50 text-green-700 border-2 border-green-600 font-bold py-4 px-8 rounded-full shadow-sm transition flex items-center justify-center"
                >
                  Hubungi Sekolah
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-yellow-300 rounded-3xl transform rotate-3 opacity-30"></div>
              <img 
                src="https://i.postimg.cc/9M0LxDQ1/IMG-20250802-111254.jpg" 
                alt="Tampilan Depan Kantor Sekolah" 
                className="relative rounded-3xl shadow-2xl object-cover h-[400px] w-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Sekolah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Keunggulan Sekolah Kami</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users size={40} className="text-green-600" />}
              title="Guru Profesional"
              desc="Tenaga pendidik yang kompeten, berpengalaman, dan berdedikasi tinggi dalam mendidik siswa."
            />
            <FeatureCard 
              icon={<CheckCircle size={40} className="text-green-600" />}
              title="Lingkungan Belajar Nyaman"
              desc="Fasilitas yang memadai dengan lingkungan hijau yang mendukung konsentrasi belajar."
            />
            <FeatureCard 
              icon={<Heart size={40} className="text-green-600" />}
              title="Pendidikan Karakter"
              desc="Fokus pada pembentukan akhlak, kedisiplinan, dan etika siswa sedini mungkin."
            />
            <FeatureCard 
              icon={<Award size={40} className="text-green-600" />}
              title="Prestasi Siswa"
              desc="Mendukung dan memfasilitasi siswa untuk meraih prestasi di bidang akademik maupun non-akademik."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Mini */}
      <section className="bg-green-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Penerimaan Peserta Didik Baru Telah Dibuka!</h2>
          <p className="text-green-100 mb-8">Segera daftarkan putra/putri Anda dan bergabung bersama keluarga besar SD Negeri 050577.</p>
          <button 
            onClick={() => navigateTo('ppdb')}
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-3 px-10 rounded-full shadow-lg transition text-lg"
          >
            Daftar Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
      <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-green-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Profil() {
  return (
    <div className="animate-fade-in bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Profil Sekolah</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 border border-gray-100">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center">
              <BookOpen className="mr-3 text-yellow-500" /> Sejarah Singkat
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              SD NEGERI 050577 Kw.Begumit berdiri dengan tujuan mulia untuk mencerdaskan anak bangsa di wilayah Kecamatan Binjai, Kabupaten Langkat. Sejak didirikan, sekolah ini terus berkomitmen memberikan layanan pendidikan dasar terbaik yang tidak hanya berfokus pada kecerdasan akademik, tetapi juga pembangunan karakter yang kuat berlandaskan nilai-nilai luhur budaya bangsa.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-800 mb-3">Visi</h3>
                <p className="text-gray-700 italic">"Terwujudnya peserta didik yang religius, cerdas, terampil, berkarakter, dan peduli lingkungan."</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">Misi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                  <li>Menanamkan keimanan dan ketakwaan melalui pengamalan ajaran agama.</li>
                  <li>Mengoptimalkan proses pembelajaran yang aktif, inovatif, kreatif, dan menyenangkan.</li>
                  <li>Mengembangkan potensi bakat dan minat siswa melalui kegiatan ekstrakurikuler.</li>
                  <li>Membiasakan perilaku disiplin, jujur, sopan santun, dan berbudi pekerti luhur.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <Award className="mr-3 text-yellow-500" /> Program Unggulan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Tahfidz Qur\'an (Ekstrakurikuler)', 'Literasi Sekolah', 'Pramuka', 'Seni Tari Daerah', 'Olahraga Prestasi'].map((item, i) => (
                  <div key={i} className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <MapPin className="mr-3 text-yellow-500" /> Fasilitas Sekolah
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Ruang Kelas Nyaman', 'Perpustakaan Lengkap', 'UKS', 'Lapangan Olahraga', 'Mushola', 'Kantin Sehat', 'Taman Hijau'].map((item, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PPDB() {
  return (
    <div className="animate-fade-in bg-gray-50 py-16 min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 text-center p-8 md:p-12 relative">
          {/* Latar belakang hiasan */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-500 to-yellow-400"></div>
          
          <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <FileText size={48} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Pendaftaran Siswa Baru</h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Untuk menjaga keamanan data privasi calon siswa dan orang tua (termasuk berkas Kartu Keluarga dan Akta Kelahiran), proses pengisian formulir Penerimaan Peserta Didik Baru (PPDB) SD Negeri 050577 dilakukan melalui sistem resmi Google Form sekolah.
          </p>
          
          {/* GANTI LINK DI BAWAH INI DENGAN LINK GOOGLE FORM ANDA */}
          <a 
            href="https://forms.gle/jbyz3J4N9ptpYDms6" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 text-lg group"
          >
            Isi Formulir PPDB Di Sini 
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </a>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Jika Anda mengalami kesulitan saat mendaftar, silakan hubungi panitia melalui menu <strong className="text-green-700">Kontak</strong> atau chat WhatsApp resmi sekolah.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function Galeri() {
  const photos = [
    "https://i.postimg.cc/3RMcwgjp/IMG-20250817-083536.jpg",
    "https://i.postimg.cc/63smQdVH/IMG-20250814-095208.jpg",
    "https://i.postimg.cc/WzJXvxr3/IMG-20250910-WA0010.jpg",
    "https://i.postimg.cc/B6zMRJ84/IMG-20250910-WA0016.jpg",
    "https://i.postimg.cc/LXbhf8X3/IMG-20250904-WA0060.jpg",
    "https://i.postimg.cc/qqCjTWn0/IMG-20260117-WA0003(1).jpg"
  ];

  return (
    <div className="animate-fade-in py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Galeri Kegiatan</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Dokumentasi momen-momen berharga dan kegiatan siswa/i SD Negeri 050577.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-100">
              <img 
                src={src} 
                alt={`Kegiatan Sekolah ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white w-full">
                  <ImageIcon className="mb-2 text-yellow-400" size={24} />
                  <p className="font-semibold text-lg drop-shadow-md">Momen Pembelajaran</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Kontak() {
  return (
    <div className="animate-fade-in bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Lokasi & Kontak</h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          
          <div className="md:col-span-2 bg-green-800 p-8 md:p-12 text-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8 text-yellow-400">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Alamat</h4>
                  <p className="text-green-100 text-sm leading-relaxed">
                    SD NEGERI 050577 Kw.Begumit<br/>
                    JLN. P. KEMERDEKAAN<br/>
                    Kecamatan Binjai, Kabupaten Langkat<br/>
                    Provinsi Sumatera Utara, Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telepon / WhatsApp</h4>
                  <p className="text-green-100 text-sm">0856 6826 9882</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-green-100 text-sm">info@sdn050577.sch.id</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/6285668269882" 
                target="_blank" 
                rel="noreferrer"
                className="w-full block text-center bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold py-4 rounded-xl shadow transition transform hover:-translate-y-1"
              >
                Chat WhatsApp Sekolah
              </a>
            </div>
          </div>

          <div className="md:col-span-3 min-h-[400px]">
            <iframe 
              title="Peta Lokasi SD Negeri 050577"
              src="Https://maps.google.com/maps?q=SD+NEGERI+050577+KW+BEGUMIT,+Suka+Makmur,+Kec.+Binjai,+Kabupaten+Langkat,+Sumatera+Utara&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
