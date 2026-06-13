import { useState, useMemo } from 'react';
import { HelpCircle, FileText, CheckCircle2, MessageSquare } from 'lucide-react';

export default function CostCalculator() {
  const [luas, setLuas] = useState<number>(100);
  const [lantai, setLantai] = useState<number>(1);
  const [kualitas, setKualitas] = useState<'standar' | 'medium' | 'premium'>('medium');

  // Rates definition (Rupiah per m2)
  const rates = {
    standar: 3500000,
    medium: 4800000,
    premium: 6500000
  };

  const currentRateBase = rates[kualitas];

  // Complexity multiplier based on floors count
  const multiplier = useMemo(() => {
    if (lantai === 1) return 1.0;
    if (lantai === 2) return 1.15; // 15% increase for upper structure scaffolding and plate casting
    return 1.30; // 30% increase for 3-story complex framing
  }, [lantai]);

  const biayaPerM2 = useMemo(() => {
    return Math.round(currentRateBase * multiplier);
  }, [currentRateBase, multiplier]);

  const totalBiaya = useMemo(() => {
    return biayaPerM2 * luas;
  }, [biayaPerM2, luas]);

  // Breakdown of construction budget
  const breakdown = useMemo(() => {
    return [
      { name: "Pondasi & Tanah (15%)", value: totalBiaya * 0.15, desc: "Pondasi batu kali, footplate, atau cakar ayam + galian urug." },
      { name: "Struktur Balok & Beton (30%)", value: totalBiaya * 0.30, desc: "Slof, kolom beton bertulang, ringbalk, plat lantai cor (jika bertingkat)." },
      { name: "Dinding, Kusen & Cat (20%)", value: totalBiaya * 0.20, desc: "Pasangan batu bata merah/hebel, plesteran, kusen aluminium/kayu + cat tembok." },
      { name: "Atap & Plafon (15%)", value: totalBiaya * 0.15, desc: "Rangka baja ringan galvalum, genteng flat beton/keramik, rangka gypsum plafon." },
      { name: "Sanitasi, Keramik & Finishing (20%)", value: totalBiaya * 0.20, desc: "Pekerjaan lantai granit/keramik, instalasi pipa air bersih-kotor, fixtures kloset/shower." }
    ];
  }, [totalBiaya]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Pre-formatted Whatsapp message
  const waString = useMemo(() => {
    const text = `Halo JohnKonstruksi, saya tertarik berkonsultasi mengenai pembangunan rumah saya. Berikut hasil perhitungan RAB Kasar awal saya:
- Luas Bangunan: ${luas} m²
- Jumlah Lantai: ${lantai} Lantai
- Kualitas Material: ${kualitas.toUpperCase()}
- Estimasi Biaya/m²: ${formatRupiah(biayaPerM2)}
- Estimasi Total RAB: ${formatRupiah(totalBiaya)}

Apakah saya bisa mendapatkan survey lokasi dan konsultasi detail lebih lanjut?`;
    return encodeURIComponent(text);
  }, [luas, lantai, kualitas, biayaPerM2, totalBiaya]);

  return (
    <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 md:p-8 shadow-xl max-w-4xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Input Parameters */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <div className="border-b border-zinc-900 pb-3 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-orange-600" />
            <h3 className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-wider">
              INPUT PARAMETER FAB
            </h3>
          </div>

          {/* Luas Bangunan Slider */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-zinc-300">Luas Bangunan (m²)</label>
              <div className="flex items-center bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                <input 
                  type="number"
                  value={luas}
                  min={10}
                  max={2000}
                  step={5}
                  onChange={(e) => setLuas(Math.max(10, parseInt(e.target.value) || 0))}
                  className="bg-transparent text-white font-bold w-16 text-right focus:outline-none focus:ring-0 text-sm"
                />
                <span className="text-zinc-500 font-mono text-xs ml-1">m²</span>
              </div>
            </div>
            <input 
              type="range"
              min="20"
              max="500"
              step="5"
              value={luas}
              onChange={(e) => setLuas(parseInt(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-600 focus:outline-none"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>20 m²</span>
              <span>150 m²</span>
              <span>300 m²</span>
              <span>500 m²</span>
            </div>
          </div>

          {/* Jumlah Lantai Selector */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-zinc-300">Jumlah Lantai</label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setLantai(num)}
                  className={`py-2 px-3 rounded-xl border text-sm font-bold transition duration-200 ${
                    lantai === num 
                      ? 'bg-orange-600/10 border-orange-600 text-orange-500' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  {num} Lantai
                </button>
              ))}
            </div>
          </div>

          {/* Kualitas Material Selector */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-zinc-300">Klasifikasi Material</label>
            <div className="flex flex-col space-y-22">
              {[
                { key: 'standar', title: 'Hemat & Kokoh', min: 'Rp 3.5jt ~ 4jt /m²', desc: 'Bata merah pleteran standart, atap genteng beton, keramik mulia 40x40.' },
                { key: 'medium', title: 'Proporsional (Rekomendasi)', min: 'Rp 4.7jt ~ 5.5jt /m²', desc: 'Bata hebel, kusen aluminium, lantai granit 60x60, cat jotun/dulux.' },
                { key: 'premium', title: 'Eksklusif & Mewah', min: 'Rp 6.5jt ~ 8.5jt /m²', desc: 'Baja IWF, sanitasi TOTO premium, lantai marmer/granit besar 80x80, pilar beton.' }
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setKualitas(item.key as any)}
                  className={`w-full text-left p-3.5 rounded-xl border flex flex-col transition duration-200 mb-2.5 ${
                    kualitas === item.key 
                      ? 'bg-orange-600/10 border-orange-600 text-white' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`font-bold text-sm ${kualitas === item.key ? 'text-orange-500' : 'text-zinc-200'}`}>
                      Kelas {item.title}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">{item.min}</span>
                  </div>
                  <span className="text-xs text-zinc-400 mt-1 font-medium italic leading-relaxed">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Results Display */}
        <div className="w-full md:w-1/2 bg-zinc-900/40 rounded-xl border border-zinc-850 p-6 flex flex-col justify-between">
          <div>
            <div className="border-b border-zinc-800 pb-3 mb-5 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-orange-600" />
              <h3 className="font-sans font-bold text-lg text-white uppercase tracking-wider">
                ESTIMASI BIAYA PROYEK
              </h3>
            </div>

            {/* Headline Cost stats */}
            <div className="flex flex-col items-center bg-zinc-950 p-4 rounded-xl border border-zinc-850 text-center mb-6">
              <span className="text-xs font-semibold uppercase text-zinc-400 tracking-wider">Estimasi Total Investasi</span>
              <span className="text-2xl md:text-3xl font-black text-orange-500 font-sans tracking-tight mt-1">
                {formatRupiah(totalBiaya)}
              </span>
              <div className="w-full border-t border-zinc-900 my-2.5"></div>
              <div className="flex justify-between w-full text-xs text-zinc-400 tracking-wide font-mono px-2">
                <span>Rata-rata Biaya / m²:</span>
                <span className="text-white font-bold">{formatRupiah(biayaPerM2)}</span>
              </div>
            </div>

            {/* Cost Breakdowns */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">Rencana Segmentasi Biaya</span>
              {breakdown.map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="text-white font-mono">{formatRupiah(item.value)}</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="bg-orange-600 h-full" 
                      style={{ width: item.name.includes("30") ? "30%" : item.name.includes("20") ? "20%" : "15%" }}
                    ></div>
                  </div>
                  <span className="text-[10px] text-zinc-500 italic mt-0.5 leading-tight">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/6287734891477?text=${waString}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition duration-300 shadow-lg active:scale-95 group"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition duration-200" />
              <span>KIRIM RAB KASAR KE WHATSAPP</span>
            </a>
            <span className="block text-[10px] text-zinc-500 font-medium italic text-center mt-2.5">
              *RAB di atas adalah estimasi awal. Harga riil dapat bervariasi mengikuti gambar DED arsitek.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
