import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Scissors, 
  Calendar, 
  Gift, 
  MapPin, 
  Instagram, 
  Facebook 
} from 'lucide-react';

export default function LandingPage() {
  // Ganti dengan nomor WhatsApp Ustadz Haromain / Admin (format internasional tanpa +)
  const whatsappNumber = "6281234567890"; 
  
  const baseWaUrl = `https://wa.me/${whatsappNumber}?text=`;
  const textHero = encodeURIComponent("Halo Sablon Moslem Arttack, saya ingin konsultasi desain kaos.");
  const textQurban = encodeURIComponent("Assalamu'alaikum, saya ingin memesan Kaos Panitia Qurban 1447 H untuk masjid/komunitas kami.");

  const features = [
    {
      icon: <Layers className="w-8 h-8 text-emerald-600" />,
      title: "Sablon Premium",
      desc: "Menggunakan teknik DTF premium, Plastisol, dan Rubber berkualitas tinggi dengan warna tajam dan tahan lama."
    },
    {
      icon: <Scissors className="w-8 h-8 text-emerald-600" />,
      title: "Jahitan Standar Distro",
      desc: "Konstruksi kaos dengan jahitan rantai yang rapi, kuat, dan menggunakan bahan Cotton Combed 24s/30s yang adem."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Amanah & Profesional",
      desc: "Dikelola langsung secara profesional, transparan dalam progres, dan menjunjung tinggi nilai-nilai syariah."
    }
  ];

  const portfolio = [
    { id: 1, tag: "Project Qurban", title: "Kaos Panitia Qurban Al-Hidayah", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" },
    { id: 2, tag: "Kaos Dakwah", title: "Kaos Pemuda Hijrah", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80" },
    { id: 3, tag: "Project Qurban", title: "Seragam Idul Adha 1447 H", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
    { id: 4, tag: "Kaos Komunitas", title: "Kaos Majelis Ilmu", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-800 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Placeholder Logo - Jika sudah ada logo.png, ganti dengan komponen <Image /> */}
            <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider border border-emerald-600 shadow-inner">
              SMA
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-emerald-950 block leading-tight">MOSLEM ARTTACK</span>
              <span className="text-xs text-emerald-700 tracking-widest font-medium uppercase">Premium Screen Printing</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-emerald-800 transition-colors">Home</a>
            <a href="#keunggulan" className="hover:text-emerald-800 transition-colors">Keunggulan</a>
            <a href="#qurban" className="hover:text-emerald-800 transition-colors text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-100">Project Qurban</a>
            <a href="#portfolio" className="hover:text-emerald-800 transition-colors">Portfolio</a>
            <a href="#kontak" className="hover:text-emerald-800 transition-colors">Kontak</a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative bg-gradient-to-b from-emerald-950 to-emerald-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-800/50 border border-emerald-700/50 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              ✨ Dibawah Bimbingan Ustadz Haromain
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Sablon Kaos Muslim & <span className="text-emerald-400">Kaos Dakwah</span> Berkualitas Premium
            </h1>
            <p className="text-lg text-emerald-100/90 max-w-xl mx-auto lg:mx-0 font-medium">
              Spesialis pembuatan kaos konveksi dan sablon untuk Komunitas, Majelis Taklim, Pondok Pesantren, dan Event Keagamaan. 
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href={baseWaUrl + textHero}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <Phone className="w-5 h-5 fill-current" />
                Konsultasi Desain (WhatsApp)
              </a>
              <a 
                href="#qurban" 
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm border border-white/20 transition-colors text-base"
              >
                Lihat Paket Qurban
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-full filter blur-[80px] opacity-20"></div>
            {/* Menggunakan Unsplash placeholder untuk mockup kaos */}
            <div className="relative w-80 h-96 bg-white/5 rounded-2xl border border-white/10 p-4 shadow-2xl backdrop-blur-md transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-emerald-900/50 rounded-xl flex items-center justify-center border border-emerald-800 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80" 
                  alt="Mockup Sablon Moslem Arttack"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROMO KHUSUS - PROJECT QURBAN 1447 H */}
      <section id="qurban" className="py-20 bg-amber-50/60 border-y border-amber-100 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-amber-500/30 p-8 sm:p-12 shadow-xl shadow-amber-500/5 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-amber-500 text-white font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Slot Terbatas
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-amber-800 font-extrabold text-sm uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md border border-amber-200">
                Ramadhan & Dzulhijjah Special
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-amber-950 tracking-tight">
                Project Khusus: Kaos Panitia Qurban 1447 H
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Sambut pelaksanaan ibadah Qurban pada <span className="font-bold text-slate-900">9 Dzulhijjah 1447 H</span> dengan penuh kekompakan. Kami siap melayani pembuatan seragam kaos panitia Qurban untuk DKM Masjid, Laznas, RT/RW, maupun Komunitas dengan jaminan selesai tepat waktu sebelum Idul Adha.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6 max-w-2xl mx-auto">
                <div className="flex items-start gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <Gift className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Free Custom Desain</h4>
                    <p className="text-xs text-slate-500">Desain logo masjid & kepanitiaan sesuai request Anda.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Bahan Premium Adem</h4>
                    <p className="text-xs text-slate-500">Cotton Combed 30s/24s standar distro, nyaman saat bekerja.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <Calendar className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Garansi Tepat Waktu</h4>
                    <p className="text-xs text-slate-500">Produksi terjadwal ketat agar kaos siap pakai sebelum hari H.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-sm">Skema Harga Berkah</h4>
                    <p className="text-xs text-slate-500">Harga kompetitif bersahabat untuk operasional DKM/Sosial.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={baseWaUrl + textQurban}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-600/20 transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Booking Slot Produksi Qurban Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEUNGGULAN UTAMA */}
      <section id="keunggulan" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Mengapa Memilih Sablon Moslem Arttack?
          </h2>
          <p className="text-slate-500 text-base">
            Kami memadukan kualitas material terbaik dengan ketelitian pengerjaan demi kepuasan hasil sandang Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY / PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
              Hasil Produksi & Mockup Galeri
            </h2>
            <p className="text-slate-500 text-base">
              Beberapa dokumentasi hasil sablon baju pesanan konsumen dan konsep desain dakwah pilihan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm group">
                <div className="h-64 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-800 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 text-sm line-clamp-2">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER & KONTAK */}
      <footer id="kontak" className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-900">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-700 rounded flex items-center justify-center text-white font-bold text-xs">
                SMA
              </div>
              <span className="font-bold text-white text-lg tracking-wide">Sablon Moslem Arttack</span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Layanan sablon premium amanah di bawah asuhan Ustadz Haromain. Menyediakan kebutuhan sandang dakwah, seragam panitia hari besar Islam, dan kaos komunitas muslim terpercaya.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Workshop & Kontak</h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Pebayuran, Kabupaten Bekasi, Jawa Indonesia</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+62 812-3456-7890 (Ustadz Haromain)</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Media Sosial</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-500 transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors p-2 bg-slate-900 rounded-lg border border-slate-800">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Ikuti kami untuk mendapatkan update info desain kaos dakwah terbaru setiap pekan.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} baju.jamia.id — Sablon Moslem Arttack. All rights reserved.</p>
          <p className="text-slate-600">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

    </div>
  );
} 
