import React from 'react';
import Image from 'next/image';
// @ts-ignore
import { Phone, CheckCircle2, ShieldCheck, Layers, Scissors, Calendar, Gift, MapPin, Share2, Star, Zap, Quote, Heart, Milestone, Play, Sparkles } from 'lucide-react';
import RealtimeClock from "./components/RealtimeClock";

export default function LandingPage() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor Ustadz Haromain
  
  const baseWaUrl = `https://wa.me/${whatsappNumber}?text=`;
  const textHero = encodeURIComponent("Halo Sablon Moslem Arttack, saya ingin konsultasi desain kaos.");
  const textQurban = encodeURIComponent("Assalamu'alaikum, saya ingin memesan Kaos Panitia Qurban 1447 H untuk masjid/komunitas kami.");

  const keunggulanLokal = [
    { id: 1, title: "SABLON PREMIUM DTF/PLASTISOL", desc: "Hasil cetakan warna tajam, solid, serat detail super rapi, dan daya tahan cuci sangat tinggi.", icon: <Layers size={32} /> },
    { id: 2, title: "KAOS STANDAR DISTRO", desc: "Menggunakan kain Cotton Combed premium (24s/30s) asli yang adem, menyerap keringat, jahitan rantai kuat.", icon: <Scissors size={32} /> },
    { id: 3, title: "MANUFAKTUR AMANAH SHARIAH", desc: "Dipantau langsung agar proses transaksi, ketepatan bahan, dan tenggat waktu pengiriman amanah bergaransi.", icon: <ShieldCheck size={32} /> }
  ];

  const galeriVideo = [
    { id: 1, src: "v1.mp4", label: "WORKSHOP PRODUKSI" },
    { id: 2, src: "v2.mp4", label: "PREMIUM FINISHING" },
  ];

  const portfolioMockup = [
    { id: 1, tag: "PROJECT QURBAN", title: "Kaos Panitia Qurban Masjid Al-Hidayah", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" },
    { id: 2, tag: "KAOS DAKWAH", title: "Artikel Kaos Pemuda Hijrah Shift", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80" },
    { id: 3, tag: "PROJECT QURBAN", title: "Seragam Idul Adha 1447 H Komunitas", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
    { id: 4, tag: "KAOS MAJELIS", title: "Kaos Polo Majelis Ilmu & Dzikir", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80" },
  ];

  return (
    <div className="bg-[#F4F6F4] text-[#0f2d1e] font-sans selection:bg-emerald-600 relative">
      
      {/* --- 1. HEADER FIXED STYLED --- */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0c2317] text-white shadow-2xl border-b-4 border-emerald-500 px-4 py-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden p-0.5 shadow-md">
              <Image src="/images/logo.jpeg" alt="Logo Sablon Moslem Arttack" fill className="object-cover" />
            </div>
            <div className="text-left text-white">
              <h2 className="text-xl sm:text-2xl font-black italic tracking-tighter leading-none uppercase">MOSLEM ARTTACK</h2>
              <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Premium Islam Screen Printing</p>
            </div>
          </div>
          
          {/* Realtime Jam & Kalender Hijriah otomatis */}
          <div className="bg-black/30 px-5 py-2 rounded-2xl border border-white/5 shadow-inner">
             <RealtimeClock />
          </div>

          <div className="hidden lg:flex gap-4">
            <a href={baseWaUrl + textHero} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg italic text-emerald-950">
              KONSULTASI DESAIN
            </a>
          </div>
        </div>
      </nav>

      <div className="h-[145px] md:h-[95px] bg-[#0c2317]"></div>

      {/* --- 2. HERO SECTION --- */}
      <section className="min-h-[55vh] flex flex-col items-center justify-center relative p-6 bg-[#0c2317] text-white rounded-b-[4rem] sm:rounded-b-[5rem] shadow-2xl overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl">
            <h1 className="text-4xl sm:text-7xl font-black italic tracking-tighter uppercase leading-none text-emerald-400 mb-4 drop-shadow-2xl">
              PREMIUM CLOTHING <br/> & DAKWAH ART
            </h1>
            <p className="text-xs font-bold opacity-70 uppercase tracking-[0.4em] mb-8 text-white">USTADZ HAROMAIN WORKSHOP • PEBAYURAN BEKASI</p>
            <div className="flex gap-3 bg-emerald-900/50 px-4 py-2 rounded-full border border-emerald-800">
                <Heart className="text-emerald-400 fill-emerald-400 animate-pulse" size={18} />
                <span className="font-bold text-xs italic text-emerald-200 uppercase tracking-wider">Amanah, Rapi, Cetakan Tajam, Garansi Waktu</span>
            </div>
        </div>
      </section>

      {/* --- 3. CERITA KAMI (Trust Building) --- */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-emerald-600">
               <Milestone size={28} />
               <span className="font-black uppercase tracking-widest text-xs italic">PROFIL WORKSHOP</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-none text-[#0c2317]">
              MENGAPA <br/> <span className="text-emerald-600 underline decoration-8 underline-offset-4 uppercase">MOSLEM ARTTACK?</span>
            </h2>
            <p className="text-base leading-relaxed opacity-90 text-justify">
              Kami memproduksi pakaian santri, majelis taklim, dan panitia event keagamaan dengan mengedepankan kualitas sandang premium distro. Setiap helai kain dan tinta sablon dipilih ketat demi kenyamanan dakwah Anda.
            </p>
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] sm:rounded-[3.5rem] border-l-8 border-emerald-600 shadow-xl italic relative">
               <Quote className="absolute top-4 right-6 opacity-5 text-emerald-950" size={50} />
               <p className="text-lg font-bold leading-relaxed mb-4 text-[#0c2317]">
                 "Pakaian penyeru kebaikan haruslah rapi dan kokoh. Kami memastikan setiap kaos jamaah dan panitia diproduksi dengan integritas syariah yang jujur dan amanah."
               </p>
               <span className="font-black uppercase text-[10px] tracking-widest text-emerald-600">— Bimbingan Ustadz Haromain</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="bg-[#0c2317] text-white p-8 rounded-[3rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-5 text-white"><ShieldCheck size={90} /></div>
               <p className="opacity-90 leading-relaxed font-bold text-base italic">
                 "Kami paham bahwa seragam panitia Qurban wajib selesai sebelum Idul Adha. Oleh karena itu, skema antrean slot produksi kami dikunci dengan kedisplinan jadwal yang transparan."
               </p>
            </div>
            <div className="bg-white p-8 rounded-[3rem] sm:rounded-[4rem] shadow-xl border border-slate-100 relative overflow-hidden text-left">
               <div className="absolute top-0 right-0 p-6 opacity-5"><MapPin size={90} /></div>
               <h4 className="text-xs font-black uppercase text-emerald-600 tracking-widest mb-1">Lokasi Workshop</h4>
               <p className="text-lg font-black text-[#0c2317] leading-tight mb-3 uppercase italic">
                 Pebayuran, Kabupaten Bekasi, Jawa Barat
               </p>
               <p className="opacity-80 text-sm font-medium text-slate-600">
                 Siap melayani pesanan kilat dari wilayah Bekasi, Jakarta, Karawang, hingga pengiriman cargo ke seluruh penjuru Nusantara.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. HIGHLIGHT PROMO KHUSUS - PROJECT QURBAN 1447 H --- */}
      <section id="qurban" className="py-16 bg-amber-50 border-y-4 border-amber-200 relative px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] p-6 sm:p-12 shadow-xl border-2 border-amber-500/20 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-white font-black text-[9px] uppercase tracking-widest px-5 py-2 rounded-bl-2xl">
             DEADLINE 9 ZULHIJJAH 1447 H
          </div>
          <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-md border border-amber-200 inline-block">
            URGENT CALL FOR DKM & PANITIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tighter uppercase italic leading-none">
            PROJECT KHUSUS <br/><span className="text-emerald-700">KAOS PANITIA QURBAN 1447 H</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Pastikan tim panitia qurban masjid Anda tampil kompak, syar'i, dan rapi saat hari penyembelihan tanggal <strong>9 Zulhijjah 1447 H</strong>. Kami membuka slot produksi khusus kuota DKM dengan benefit istimewa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto pt-2">
            <div className="flex items-center gap-3 text-slate-700 font-bold text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Gift className="text-emerald-600 shrink-0" size={16} /> Free Custom Desain Logo Masjid
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-bold text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <Calendar className="text-emerald-600 shrink-0" size={16} /> Garansi Distribusi Selesai H-5
            </div>
          </div>

          <div className="pt-4">
            <a href={baseWaUrl + textQurban} target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-500 text-white font-black px-8 py-4 rounded-full shadow-lg shadow-amber-600/30 transition-all text-xs tracking-widest uppercase inline-flex items-center gap-2">
              <Zap size={14} fill="currentColor" /> BOOKING SLOT PANITIA QURBAN VIA WA
            </a>
          </div>
        </div>
      </section>

      {/* --- 5. FITUR / KEUNGGULAN UTAMA --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <h2 className="text-4xl font-black text-[#0c2317] tracking-tight italic uppercase">KEUNGGULAN CETAK KAMI</h2>
          <div className="w-16 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keunggulanLokal.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all flex flex-col text-center items-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 text-emerald-700">
                {item.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-[#0c2317]">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. VIDEO JELAJAH PRODUKSI (2 VIDEO PRODUKSI BARU) --- */}
      <section className="py-20 bg-white rounded-[4rem] sm:rounded-[5rem] shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
          <div className="flex justify-center mb-3 text-emerald-600 animate-bounce">
            <Play fill="currentColor" size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-[#0c2317]">JELAJAH PRODUKSI VIDEO</h2>
          <p className="text-xs text-slate-400 font-bold tracking-widest mt-2 uppercase">Intip Langsung Dokumentasi Hasil Sablon Kami</p>
        </div>
        
        {/* Render Grid Responsif untuk 2 File Video Pendek Anda */}
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {galeriVideo.map((v) => (
            <div key={v.id} className="relative aspect-[9/16] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl group border-4 border-[#F4F6F4]">
              <video 
                src={`/images/${v.src}`} 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2317]/80 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-white font-black uppercase text-[9px] tracking-[0.25em] bg-emerald-600 px-4 py-1.5 rounded-full italic shadow-md">
                  {v.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 7. MOCKUP GALERI PRODUKSI --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 gap-4 text-center sm:text-left">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#0c2317]">KATALOG MOCKUP & HASIL</h2>
          <span className="bg-white px-5 py-2 rounded-2xl shadow-md text-xs font-black border-l-4 border-emerald-600">ITEMS: 4 TEMPLATE</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioMockup.map((item) => (
            <div key={item.id} className="group bg-white p-3 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all flex flex-col h-full border border-slate-100">
              <div className="aspect-square rounded-[2rem] overflow-hidden mb-4 relative bg-slate-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-[#0c2317] text-white font-black px-2.5 py-1 rounded-lg text-[9px] tracking-wider uppercase">
                  {item.tag}
                </div>
              </div>
              <div className="px-2 pb-3 flex-grow">
                <h3 className="text-sm font-black uppercase tracking-tight text-[#0c2317] leading-snug">{item.title}</h3>
              </div>
              <div className="px-2 pt-2 border-t border-dashed border-slate-100 flex items-center justify-between text-slate-400">
                <span className="text-[8px] font-black tracking-widest uppercase">Premium Quality</span>
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={9} fill="currentColor" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 8. FOOTER METADATA STYLED --- */}
      <footer className="bg-[#0c2317] text-white p-12 sm:p-20 rounded-t-[4rem] sm:rounded-t-[5rem] text-center relative border-t-8 border-emerald-500 overflow-hidden flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl space-y-6">
          <div className="flex justify-center gap-4">
             <a href={baseWaUrl + textHero} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 rounded-2xl hover:bg-emerald-600 hover:text-emerald-950 transition-all text-white shadow-lg">
               <Zap size={20} />
             </a>
             <a href="#qurban" className="p-5 bg-white/5 rounded-2xl hover:bg-amber-500 transition-all text-white shadow-lg">
               <Share2 size={20} />
             </a>
          </div>
          <p className="opacity-50 text-[9px] font-black tracking-[0.5em] uppercase italic text-center text-white leading-loose">
            DIKEMBANGKAN OLEH AL ALIFY TECH 🄯 2026 • SABLON MOSLEM ARTTACK • BAJU.JAMIA.ID SUBDOMAIN
          </p>
        </div>
      </footer>

    </div>
  );
}
