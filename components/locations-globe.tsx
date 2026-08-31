const locations = [
  { name: "USA", detail: "North America", x: "22%", y: "39%" },
  { name: "UK", detail: "Europe", x: "48%", y: "27%" },
  { name: "UAE", detail: "Middle East", x: "61%", y: "49%" },
  { name: "India", detail: "South Asia", x: "68%", y: "56%" },
];

function GlobeVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`locations-globe-card ${compact ? "locations-globe-card--compact" : ""}`}><div className="locations-globe" aria-label="Globe showing Leon's markets"><div className="locations-globe-surface"><div className="locations-globe-grid"/><div className="locations-continent locations-continent-one"/><div className="locations-continent locations-continent-two"/><div className="locations-continent locations-continent-three"/>{locations.map((location) => <div className="locations-marker" key={location.name} style={{ left: location.x, top: location.y }}><span className="locations-marker-dot"/><span className="locations-marker-label">{location.name}</span></div>)}</div></div><div className="locations-orbit"/></div>;
}

export function LocationsGlobe({ compact = false }: { compact?: boolean }) {
  if (compact) return <div className="locations-compact"><GlobeVisual compact/><p className="locations-compact-caption mono">Markets reached / USA · UK · UAE · India</p></div>;
  return <section className="locations-section px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1440px]"><div className="locations-heading"><div><p className="mono text-[10px] uppercase tracking-[.16em] text-white/45">05 / Global footprint</p><h2 className="display mt-4 text-5xl md:text-7xl">Ideas that travel.</h2></div><p className="max-w-sm text-sm leading-7 text-white/55">A practice shaped across markets, cultures, and time zones — from Kerala to the world.</p></div><div className="locations-layout mt-12"><GlobeVisual/><div className="locations-copy"><p className="mono text-[10px] uppercase tracking-[.16em] text-white/35">Markets reached</p><ul className="locations-list">{locations.map((location) => <li key={location.name}><span className="locations-list-icon"><span aria-hidden="true">•</span></span><span><strong>{location.name}</strong><small>{location.detail}</small></span></li>)}</ul><p className="mt-8 text-sm leading-7 text-white/50">Strategy stays grounded in local context while the work moves globally.</p></div></div></div></section>;
}
