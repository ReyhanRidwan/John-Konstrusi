import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { StaticContactMap } from './InteractiveMap';

export default function ContactView() {
  const [formData, setFormData] = useState({
    nama: '',
    phone: '',
    luas: '',
    tipe: 'Bangun Rumah Baru',
    pesan: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nama: '',
      phone: '',
      luas: '',
      tipe: 'Bangun Rumah Baru',
      pesan: ''
    });
    setSubmitted(false);
  };

  const waStringDirect = `Halo JohnKonstruksi, saya mengisis data formulir kontak:
- Nama: ${formData.nama}
- Whatsapp: ${formData.phone}
- Kategori Proyek: ${formData.tipe}
- Luas Bangunan Kasar: ${formData.luas || 'Belum tahu'} m²
- Deskripsi: ${formData.pesan || 'Konsultasi umum'}

Mohon konfirmasi konsultasi gratis dari insinyur.`;

  return (
    <div className="flex flex-col w-full bg-zinc-950 text-white font-sans">
      
      {/* 1. Page Header */}
      <section className="relative bg-orange-600 py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 mb-3">
            HUBUNGI INYUR LAPANGAN
          </span>
          <h1 className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
            KONTAK RESMI PERUSAHAAN
          </h1>
          <p className="text-white/95 max-w-2xl mx-auto text-xs md:text-sm font-medium italic leading-relaxed">
            “Kirimkan denah kasar tanah Anda, diskusikan budget konstruksinya bersama mandor lapangan kami secara gratis.”
          </p>
        </div>
      </section>

      {/* 2. Main Columns Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Info Kontak dalam kotak Zinc-900 yang elegan */}
          <div className="bg-zinc-900 border border-zinc-850 p-6 md:p-8 rounded-2xl md:sticky md:top-36 space-y-6">
            <h2 className="font-sans font-black text-xl text-white uppercase tracking-wide border-b border-zinc-800 pb-4">
              INFORMASI KORESPONDENSI
            </h2>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600/10 p-3 rounded-xl border border-orange-600/20 text-orange-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">ALAMAT WORKSHOP KANTOR</span>
                <p className="text-zinc-200 text-xs md:text-sm leading-relaxed font-semibold">
                  GG. Gamelan, RT.01/RW.07, Dusun I, Ceporan, Kec. Gantiwarno, Kabupaten Klaten, Jawa Tengah 57455
                </p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600/10 p-3 rounded-xl border border-orange-600/20 text-orange-500 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">NOMOR WHATSAPP CHAT</span>
                <a 
                  href="https://wa.me/6287734891477" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-orange-500 text-sm md:text-base font-black uppercase tracking-wider block hover:text-orange-600 hover:underline transition"
                >
                  +62 877-3489-1477
                </a>
                <span className="text-[10px] text-zinc-500 font-medium block">Respon konsultasi sipil aktif 24 jam</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600/10 p-3 rounded-xl border border-orange-600/20 text-orange-500 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">SURAT EMAIL RESMI</span>
                <p className="text-zinc-200 text-xs md:text-sm font-semibold">
                  info@johnkonstruksi.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="bg-orange-600/10 p-3 rounded-xl border border-orange-600/20 text-orange-500 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block font-mono">JAM OPERASIONAL SURVEI</span>
                <p className="text-zinc-200 text-xs md:text-sm font-semibold">
                  Senin - Sabtu: 08:00 WIB - 17:00 WIB
                </p>
                <p className="text-[10px] text-zinc-500 italic">Survey lapangan diatur minimal H-1 sebelum peninjauan</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak dengan Input Bersih */}
          <div className="bg-zinc-900 border border-zinc-850 p-6 md:p-8 rounded-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-zinc-805 pb-3">
                    <h2 className="font-sans font-black text-lg text-white uppercase tracking-wide">
                      PENGAJUAN KONSULTASI DETIL
                    </h2>
                    <p className="text-zinc-400 text-xs font-semibold block mt-1">Lengkapi data agar insinyur kami paham keinginan Anda.</p>
                  </div>

                  {/* Nama Lengkap */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Nama Lengkap *</label>
                    <input 
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Contoh: Bambang Kusuma"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-600 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
                    />
                  </div>

                  {/* Nomor WA */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Nomor HP / WhatsApp *</label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: +62 812-3456-7890"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-600 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Luas Bangunan perkiraan */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Est. Luas Bangunan (m²)</label>
                      <input 
                        type="number"
                        value={formData.luas}
                        onChange={(e) => setFormData({ ...formData, luas: e.target.value })}
                        placeholder="Contoh: 120"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-600 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
                      />
                    </div>

                    {/* Tipe Kategori */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Kategori Pekerjaan</label>
                      <select
                        value={formData.tipe}
                        onChange={(e) => setFormData({ ...formData, tipe: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-600 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-600 transition"
                        style={{ height: "46px" }}
                      >
                        <option value="Bangun Rumah Baru">Bangun Rumah Baru</option>
                        <option value="Renovasi Rumah Total">Renovasi Rumah Total</option>
                        <option value="Desain Arsitektur & Interior">Desain Arsitektur & Interior</option>
                        <option value="Konstruksi Komersial & Ruko">Konstruksi Komersial & Ruko</option>
                        <option value="Konsultasi Struktur Tambahan">Konsultasi Struktur Tambahan</option>
                      </select>
                    </div>
                  </div>

                  {/* Deskripsi pesan */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Tantangan / Detail Keinginan Anda</label>
                    <textarea 
                      rows={4}
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      placeholder="Sebutkan kendala Anda, jumlah kamar yang diinginkan, ketersediaan bahan, pondasi, dll..."
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-orange-600 rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-600 transition resize-none"
                    />
                  </div>

                  {/* Submission button */}
                  <button
                    type="submit"
                    className="flex justify-center items-center space-x-2 w-full py-4 bg-orange-600 hover:bg-orange-700 font-extrabold text-[11px] md:text-xs text-white uppercase tracking-widest rounded-xl transition shadow active:scale-98"
                  >
                    <Send className="w-4 h-4 text-white" />
                    <span>KIRIM DATA SAYA DAN HUBUNGI TIM ENGINYUR</span>
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-orange-500 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xl text-white uppercase tracking-wider">
                      FORMULIR TERSALURKAN!
                    </h3>
                    <p className="text-zinc-350 text-xs md:text-sm leading-relaxed max-w-sm mx-auto font-medium">
                      Terima kasih <span className="text-white font-bold">{formData.nama}</span>! Data pengajuan Anda untuk kategori <span className="text-orange-500 font-semibold">{formData.tipe}</span> berhasil dikirim.
                    </p>
                  </div>

                  <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-850 max-w-sm mx-auto text-left text-xs text-zinc-400 space-y-2.5">
                    <p>
                      <strong>Kontak WA Terdaftar:</strong> {formData.phone}
                    </p>
                    <p className="leading-normal">
                      Tim administrasi JohnKonstruksi akan mengkonfirmasi data Anda untuk mengatur survey lokasi dalam <strong>maksimal 2 jam kerja</strong>.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col space-y-3 max-w-xs mx-auto">
                    <a
                      href={`https://wa.me/6287734891477?text=${encodeURIComponent(waStringDirect)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center space-x-2 py-3 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>HUBUNGI SEGERA VIA WHATSAPP</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="text-zinc-500 hover:text-zinc-300 text-xs font-bold uppercase tracking-wider transition"
                    >
                      Isi Kembali Formulir Baru
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 3. Bottom Google Map Iframe Placeholder Section (As requested) */}
      <section className="py-16 border-t border-zinc-900 bg-zinc-900/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-md mx-auto mb-10">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">INTERACTIVE RADAR PIN</span>
            <h2 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-tight">
              PETA LOKASI CEPORAN
            </h2>
            <div className="w-12 h-0.5 bg-orange-600 mx-auto mt-2"></div>
            <p className="text-zinc-500 text-xs font-medium block mt-2">
              Klik peta di bawah untuk menampilkan radar pin penunjuk gang gamelan Klaten kami.
            </p>
          </div>

          <StaticContactMap />
        </div>
      </section>

    </div>
  );
}
