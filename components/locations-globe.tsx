const locations = [
  { name: "USA", x: "20.5%", y: "43%" },
  { name: "India", x: "68%", y: "53%" },
  { name: "Australia", x: "79%", y: "73%" },
];

function FlatWorldMap() {
  return <div className="flat-map" aria-label="Flat world map showing Leon's markets"><svg viewBox="0 0 1000 500" role="img" aria-hidden="true"><defs><pattern id="world-dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2.5" cy="2.5" r="1.6" fill="#89939a"/></pattern></defs><g fill="url(#world-dots)"><path d="M76 137 96 112 136 106 159 82 209 78 231 99 267 102 284 129 270 153 242 155 230 180 201 175 184 197 158 183 141 195 121 176 90 174Z"/><path d="M258 205 280 214 294 242 282 268 294 294 279 326 264 358 247 382 235 363 240 329 228 301 238 274 224 243Z"/><path d="M463 131 481 112 511 109 527 126 549 130 556 148 540 160 514 157 499 171 477 160Z"/><path d="M475 177 504 170 530 187 543 212 531 237 516 261 509 294 494 318 478 301 481 270 467 247 469 219 455 197Z"/><path d="M535 125 567 106 606 99 633 110 672 104 709 118 755 117 788 132 835 128 871 146 916 151 946 172 927 190 891 184 872 199 838 187 810 203 774 195 743 211 706 198 681 211 647 200 620 213 590 199 567 207 545 192 558 168Z"/><path d="M682 232 712 221 741 231 758 256 747 278 725 286 709 271 687 276 671 256Z"/><path d="M774 320 802 309 835 315 865 333 895 342 911 363 892 378 857 374 838 389 808 379 786 360 760 351Z"/></g></svg>{locations.map((location) => <div className="flat-map-pin" key={location.name} style={{ left: location.x, top: location.y }}><span className="flat-map-pulse"/><span className="flat-map-label">{location.name}</span></div>)}</div>;
}

export function LocationsGlobe({ compact = false }: { compact?: boolean }) {
  if (compact) return <div className="locations-compact"><FlatWorldMap/><p className="locations-compact-caption mono">Markets reached / USA · India · Australia</p></div>;
  return <section className="locations-section px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1440px]"><p className="mono text-[10px] uppercase tracking-[.16em] text-white/45">05 / Global footprint</p><h2 className="display mt-4 text-5xl md:text-7xl">Ideas that travel.</h2><div className="mt-12"><FlatWorldMap/></div></div></section>;
}
