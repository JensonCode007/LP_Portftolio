export function LanyardCard() {
 return <div className="group relative mx-auto hidden h-[470px] w-[350px] md:block [perspective:1000px]">
   <div className="absolute left-1/2 top-0 h-44 w-[13px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#333] via-[#d4d0c6] to-[#333] shadow-[0_0_20px_rgba(255,255,255,.25)]" />
   <div className="absolute left-1/2 top-[135px] h-32 w-12 -translate-x-1/2 rounded-b-[30px] border-x border-b border-white/25 bg-[#191919]" />
   <div className="absolute bottom-2 left-1/2 h-[286px] w-[220px] -translate-x-1/2 rounded-[18px] border border-white/30 bg-[#e9e5dc] p-3 shadow-2xl transition duration-500 group-hover:[transform:translateX(-50%)_rotateX(5deg)_rotateY(-7deg)] [transform-style:preserve-3d]">
     <div className="relative h-full overflow-hidden rounded-[10px] bg-[#101010] bg-cover bg-center" style={{ backgroundImage: 'url("/assets/leon_profile.jpg"), url("/assets/leon-paulo-logo.png")' }}><div className="absolute inset-x-0 bottom-0 bg-black/75 p-3"><p className="mono text-[8px] uppercase tracking-[.16em] text-white/45">Marketing specialist</p><p className="mt-1 text-sm text-white">Leon Paulo</p></div></div>
   </div>
 </div>;
}
