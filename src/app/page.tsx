// @ts-ignore
import { Camera, ChevronRight, Info, MapPin, Share2, Star, Zap, Quote, Heart, ShieldCheck, Milestone, Play, Sparkles, Layers, Scissors, Calendar, Gift } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import RealtimeClock from "./components/RealtimeClock";

// --- DATA KATALOG LOKAL (GAYA ARCHITECTURE LA CROSTA) ---
const katalogLokal = [
  { id: 1, nama: "Kaos Panitia Qurban Premium", harga: 55000, deskripsi: "Bahan Cotton Combed 24s tebal adem, sablon Rubber/Plastisol anti pecah, free custom logo nama DKM Masjid.", imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80", kategori: "KAOS QURBAN" },
  { id: 2, nama: "Kaos Dakwah Madani", harga: 65000, deskripsi: "Sablon DTF premium finishing hot press, warna tajam solid, bahan premium standard clothing distro lokal.", imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80", kategori: "KAOS DAKWAH" },
  { id: 3, nama: "Kemeja Kerja / PDL Komunitas", harga: 110000, deskripsi: "Bahan American Drill premium, bordir komputer presisi tinggi, jahitan kuat standar seragam korporat.", imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80", kategori: "SERAGAM PDL" },
  { id: 4, nama: "Jaket Bomber Dakwah", harga: 145000, deskripsi: "Bahan Taslan waterproof windbreaker, furing dalam adem, aksen bordir solid rapi di dada dan punggung.", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80", kategori: "JAKET OUTDOOR" },
];

const galeriFasilitas = [
  { id: 1, nama: "MEJA SABLON REVOLVER", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80" },
  { id: 2, nama: "MESIN PRESS DTF INDUSTRI", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80" },
  { id: 3, nama: "WORKSHOP AMANAH PEBAYURAN", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80" },
  { id: 4, nama: "QUALITY CONTROL KETAT", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80" },
];

const testimoni = [
  { nama: "Dkm Masjid Al-Hidayah", ulasan: "Alhamdulillah pengerjaan kaos panitia Qurban tepat waktu sebelum hari H. Sablonannya rapi dan bahannya sangat adem dipakai kerja.", bintang: 5 },
  { nama: "Kang Ahmad", ulasan: "Kombinasi warna sablon DTF-nya luar biasa keluar. Sangat merekomendasikan Moslem Arttack untuk vendor baju majelis taklim.", bintang: 5 },
  { nama: "Alif Rezky", ulasan: "Manajemen produksi yang transparan dan amanah di bawah asuhan Ustadz Haromain. Hasil sablonan mantap bergaransi.", bintang: 5 }
];

const galeriVideo = [
  { id: 1, src: "v1.mp4", label: "PROSES CETAK PRESISI" },
  { id: 2, src: "v2.mp4", label: "FINISHING QUALITY CHECK" },
];

export default function LandingPage() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WA aktif
  const textHero = encodeURIComponent("Halo Sablon Moslem Arttack, saya ingin konsultasi pengerjaan sablon.");
  const textQurban = encodeURIComponent("Assalamu'alaikum Ustadz Haromain, kami tertarik memesan slot produksi Kaos Panitia Qurban 1447 H.");

  return (
    <div className="bg-[#F4F1EA] text-[#0B2F1D] font-sans selection:bg-[#C5925E] selection:text-white relative">
      
      {/* --- 1. HEADER FIXED (LA CROSTA STYLE) --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0B2F1D] text-white shadow-2xl border-b-4 border-[#C5925E] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 bg-white rounded-2xl p-0.5 shadow-lg overflow-hidden flex-shrink-0">
              <Image src="/images/logo.jpeg" alt="Logo" fill className="object-cover rounded-xl" />
            </div>
            <div className="text-left text-white">
              <h2 className="text-2xl font-black italic tracking-tighter leading-none uppercase text-white">MOSLEM ARTTACK</h2>
              <p className="text-[9px] font-bold text-[#C5925E] uppercase tracking-widest mt-1">Premium Screen Printing & Clothing</p>
            </div>
          </div>
          <div className="bg-black/20 px-6 py-2 rounded-3xl border border-white/5 shadow-inner">
             <RealtimeClock />
          </div>
          <div className="hidden lg:flex gap-4">
            <a href={`https://wa.me/${whatsappNumber}?text=${textHero}`} target="_blank" rel="noopener noreferrer" className="bg-[#C5925E] px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg italic text-white">
              KONSULTASI VIA WA
            </a>
          </div>
        </div>
      </nav>

      <div className="h-[140px] md:h-[100px] bg-[#0B2F1D]"></div>

      {/* --- 2. HERO SECTION --- */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative p-6 bg-[#0B2F1D] text-white rounded-b-[4rem] sm:rounded-b-[5rem] shadow-2xl overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-[#C5925E] mb-4 drop-shadow-2xl">
              CREATIVE SCREEN <br/> PRINTING ART
            </h1>
            <p className="text-sm font-bold opacity-70 uppercase tracking-[0.5em] mb-8 text-white">SABLON MOSLEM ARTTACK • SENI CETAK KREATIF</p>
            <div className="flex items-center gap-4 bg-emerald-950/80 border border-emerald-800 px-6 py-3 rounded-full">
                <Heart className="text-[#C5925E] fill-[#C5925E] animate-pulse" />
                <span className="font-bold italic text-white uppercase tracking-wider text-xs">Amanah, Rapi, Bergaransi Waktu</span>
            </div>
        </div>
      </section>

      {/* --- 3. CERITA KAMI (Trust Building) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 text-[#C5925E]">
               <Milestone size={32} />
               <span className="font-black uppercase tracking-widest text-sm italic">SEJARAH KAMI</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-none text-[#0B2F1D] text-center md:text-left uppercase">
              MENGAPA <br/> <span className="text-[#C5925E] underline decoration-8 underline-offset-4">MOSLEM ARTTACK?</span>
            </h2>
            <p className="text-lg leading-relaxed opacity-90 italic text-justify">
              <span className="font-black text-[#0B2F1D]">Sablon Moslem Arttack</span> merupakan sebuah perpaduan kata kerja, seni, dan entitas <span className="font-black text-[#C5925E]">Muslimpreneur</span>. Kami mendedikasikan bakat dalam ekosistem seni cetak kreatif di bidang manual screen printing serta sablon DTF modern.
            </p>
            <div className="bg-white p-8 rounded-[3rem] border-l-8 border-[#C5925E] shadow-xl italic relative text-center md:text-left">
               <Quote className="absolute top-4 right-8 opacity-10 text-[#0B2F1D]" size={60} />
               <p className="text-xl font-bold leading-relaxed mb-4 text-[#0B2F1D]">
                 "Berdiri sejak awal 2020 di masa pandemi. Berawal dari spesialis menerima pesanan sablon kaos panitia Qurban Nusantara, kini berkembang pesat melayani kaos event, kemeja kerja, hingga jaket."
               </p>
               <span className="font-black uppercase text-xs tracking-widest text-[#C5925E]">— Vendor Sandang Amanah Syariah</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-[#0B2F1D] text-white p-10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform text-white"><ShieldCheck size={100} /></div>
               <p className="opacity-90 leading-relaxed font-bold text-lg italic text-left">
                 "Di bawah bimbingan langsung Ustadz Haromain, komitmen kami adalah menghadirkan ketepatan bahan sandang, hasil cetakan tajam presisi, serta integritas akad bisnis syariah terpercaya."
               </p>
            </div>
            <div className="bg-white p-10 rounded-[4rem] shadow-xl border border-slate-200/50 relative overflow-hidden group text-left">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><MapPin size={100} /></div>
               <h4 className="text-sm font-black uppercase text-[#C5925E] tracking-widest mb-2">Lokasi Workshop</h4>
               <p className="text-lg font-black text-[#0B2F1D] leading-tight mb-4 uppercase italic">
                 Pebayuran, Kabupaten Bekasi, Jawa Barat
               </p>
               <p className="opacity-80 text-sm leading-relaxed font-medium text-slate-600">
                 Workshop sentral kami siap memproses pengiriman dalam jumlah partai besar ke seluruh DKM Masjid di wilayah Jabodetabek hingga luar pulau Jawa.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXTRA HIGHLIGHT: PROJECT QURBAN 1447 H --- */}
      <section id="qurban" className="py-16 bg-amber-50/60 border-y-4 border-amber-200/60 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] p-8 sm:p-12 shadow-xl border-2 border-amber-500/20 text-center space-y-6">
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest bg-amber-100 px-4 py-1.5 rounded-md border border-amber-200 inline-block">
             SLOT PRODUKSI TERBATAS MENJELANG 9 ZULHIJJAH 1447 H
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tighter uppercase italic leading-none">
             KAOS SERAGAM PANITIA QURBAN NUSANTARA
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
             Sambut kekompakan panitia Idul Adha Anda dengan kualitas sandang terbaik. Free custom desain mockup, pengerjaan terjadwal disiplin, bahan katun sejuk anti gerah saat bertugas.
          </p>
          <div className="pt-4">
            <a href={`https://wa.me/${whatsappNumber}?text=${textQurban}`} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-500 text-white font-black px-8 py-4 rounded-full shadow-lg transition-all text-xs tracking-widest uppercase inline-flex items-center gap-2">
               BOOKING ANTRIAN PRODUKSI QURBAN NOW
            </a>
          </div>
        </div>
      </section>

      {/* --- 4. KATALOG LAYANAN CETAK (GAYA LA CROSTA MENU) --- */}
      <section id="katalog" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-[#0B2F1D] text-center md:text-left">LAYANAN<br/>PRODUKSI</h2>
          <div className="bg-white px-8 py-4 rounded-3xl shadow-xl border-l-8 border-[#C5925E]">
            <p className="text-[10px] font-black opacity-40 uppercase mb-1">CATEGORIES</p>
            <p className="text-3xl font-black">{katalogLokal.length} DIVISI</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {katalogLokal.map((item) => (
            <div key={item.id} className="group bg-white p-4 rounded-[3.5rem] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-transparent hover:border-[#C5925E]/20">
              <div className="aspect-square rounded-[3rem] overflow-hidden mb-6 relative border-4 border-[#F4F1EA] bg-[#F4F1EA] flex items-center justify-center">
                <img src={item.imageUrl} alt={item.nama} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 object-center" />
                <div className="absolute top-4 right-4 bg-[#0B2F1D] text-white font-black px-4 py-2 rounded-2xl shadow-lg text-xs italic border border-[#C5925E]/40">
                  {`Mulai Rp${item.harga.toLocaleString('id-ID')}`}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#0B2F1D] font-black w-10 h-10 flex items-center justify-center rounded-full text-xs shadow-md border border-[#0B2F1D]/10">{item.id}</div>
              </div>
              <div className="px-4 pb-4 flex-grow text-center md:text-left">
                <h3 className="text-lg font-black uppercase tracking-tighter mb-2 group-hover:text-[#C5925E] transition-colors leading-tight text-[#0B2F1D]">{item.nama}</h3>
                <p className="text-[11px] font-bold opacity-70 leading-relaxed italic mb-6 text-slate-600">{item.deskripsi}</p>
              </div>
              <div className="px-4 mt-auto border-t border-dashed border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase opacity-50 tracking-widest text-[#0B2F1D]">{item.kategori}</span>
                    <div className="flex gap-0.5 text-amber-500">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} fill="currentColor" />)}
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. FASILITAS WORKSHOP (SUDUT KENYAMANAN) --- */}
      <section className="py-24 bg-[#0B2F1D] text-white rounded-[5rem] shadow-inner mt-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-16">
             <Sparkles size={32} className="text-[#C5925E] animate-pulse" />
             <div>
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter underline decoration-[#C5925E] decoration-8 underline-offset-8 leading-none text-white">INFRASTRUKTUR</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-300 mt-4 italic">KAPASITAS ALAT INDUSTRI CETAK KAMI</p>
             </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galeriFasilitas.map((foto) => (
              <div key={foto.id} className="group bg-white p-3 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-100">
                  <img src={foto.img} alt={foto.nama} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <p className="text-[#0B2F1D] text-[10px] font-black uppercase tracking-tighter text-center mt-3 opacity-80 italic">{foto.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. JELAJAH PRODUKSI (2 VIDEO DENGAN LABEL ASLI) --- */}
      <section className="py-24 bg-white rounded-[5rem] shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <div className="flex justify-center mb-4 text-[#C5925E] animate-bounce"><Play fill="currentColor" size={32} /></div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-[#0B2F1D]">JELAJAH PRODUKSI VIDEO</h2>
          <p className="text-xs text-slate-400 font-bold tracking-widest mt-2 uppercase">Dokumentasi Real-Time Studio Cetak Sablon</p>
        </div>
        
        {/* Mengunci layout Grid pas untuk 2 File Video Pendek */}
        <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galeriVideo.map((v) => (
            <div key={v.id} className="relative aspect-[9/16] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-[#F4F1EA]">
              <video src={`/images/${v.src}`} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F1D]/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-white font-black uppercase text-[10px] tracking-[0.3em] bg-[#C5925E] px-5 py-2 rounded-full italic shadow-md border border-amber-300/30">{v.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. REVIU KONSUMEN (TESTIMONI) --- */}
      <section className="py-24 bg-white rounded-[5rem] shadow-inner mb-24">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-[#0B2F1D]">ULASAN KLEM <span className="text-[#C5925E]">MITRA AMANAH</span></h2>
              <div className="w-24 h-2 bg-[#C5925E] mx-auto mt-4 rounded-full"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimoni.map((t, i) => (
                <div key={i} className="bg-[#F4F1EA] p-8 rounded-[3.5rem] relative shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#C5925E]/20 flex flex-col h-full">
                   <div className="flex justify-center md:justify-start gap-1 mb-4 text-amber-500">
                      {[...Array(t.bintang)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="italic font-medium mb-6 opacity-90 leading-relaxed text-[#0B2F1D] flex-grow">"{t.ulasan}"</p>
                   <div className="flex items-center justify-center md:justify-start gap-3">
                      <div className="w-10 h-10 bg-[#0B2F1D] rounded-full flex items-center justify-center text-white font-black text-xs uppercase">
                         {t.nama.charAt(0)}
                      </div>
                      <span className="font-black uppercase text-[10px] tracking-widest text-[#0B2F1D]">{t.nama}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 8. FOOTER KREATIF AMANAH --- */}
      <footer className="bg-[#0B2F1D] text-white p-20 rounded-t-[5rem] text-center relative border-t-8 border-[#C5925E] overflow-hidden flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <div className="flex justify-center gap-6 mb-12">
             <a href={`https://wa.me/${whatsappNumber}?text=${textHero}`} target="_blank" rel="noopener noreferrer" className="p-6 bg-white/5 rounded-3xl hover:bg-[#C5925E] hover:scale-110 transition-all text-white shadow-lg"><Zap size={24} /></a>
          </div>
          <p className="opacity-40 text-[9px] font-black tracking-[0.6em] uppercase italic text-center text-white">
             DIKEMBANGKAN OLEH AL ALIFY TECH 🄯 2026 • SABLON MOSLEM ARTTACK • BAJU.JAMIA.ID
          </p>
        </div>
      </footer>
    </div>
  );
}
