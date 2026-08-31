import { ArrowUpRight } from "lucide-react";
import { FlexibleAssetImage } from "@/components/flexible-asset-image";
import { LogoImage } from "@/components/logo-image";

type Item = {
  title: string;
  client: string;
  image: string;
};

function ArtSurface({ image, label }: { image: string; label: string }) {
  return (
    <>
      <div className="fallback-art absolute inset-0">
        <span className="sr-only">{label}</span>
      </div>

      <FlexibleAssetImage
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </>
  );
}

export function AccordionGallery({ items }: { items: Item[] }) {
  return (
    <div className="hidden h-[620px] gap-2 overflow-hidden md:flex">
      {items.slice(0, 6).map((item, index) => (
        <article
          key={item.title}
          className={`group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 ${
            index === 0
              ? "flex-[3]"
              : "flex-1 grayscale hover:flex-[3] hover:grayscale-0"
          }`}
        >
          <ArtSurface image={item.image} label={item.title} />

          <div
            className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 ${
              index === 0 ? "opacity-100" : "opacity-0 transition group-hover:opacity-100"
            }`}
          >
            <p className="mono text-[10px] uppercase text-white/55">
              {item.client}
            </p>
            <p className="mt-1 text-lg">{item.title}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function MobileCreativeStack({ items }: { items: Item[] }) {
  return (
    <div className="space-y-3 md:hidden">
      {items.slice(0, 3).map((item, index) => (
        <article
          key={item.title}
          className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10"
          style={{ marginTop: index === 0 ? 0 : -20, zIndex: index + 1 }}
        >
          <ArtSurface image={item.image} label={item.title} />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-5 pt-24">
            <p className="mono text-[10px] uppercase text-white/55">
              {String(index + 1).padStart(2, "0")} / {item.client}
            </p>
            <p className="mt-1 text-xl">{item.title}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CreativeGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`art-card group relative min-h-72 overflow-hidden rounded-2xl border border-white/10 ${
            index % 7 === 0 ? "sm:col-span-2" : ""
          }`}
        >
          <ArtSurface image={item.image} label={item.title} />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent p-5">
            <div>
              <p className="mono text-[10px] uppercase text-white/50">
                {item.client}
              </p>
              <h3 className="mt-1 text-lg">{item.title}</h3>
            </div>
            <ArrowUpRight className="opacity-0 transition group-hover:opacity-100" />
          </div>
        </article>
      ))}
    </div>
  );
}

export function LogoGrid({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-4 md:gap-y-8">
      {items.map((title, index) => (
        <article key={title} className="group min-w-0">
          <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#131313] p-3 md:p-4">
            <div className="fallback-art relative flex h-full items-center justify-center overflow-hidden rounded-xl border border-white/10">
              <span className="display relative text-3xl text-white/70 md:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              <LogoImage index={index} title={title} />
            </div>
          </div>

          <p className="mt-3 truncate text-sm font-medium text-white/85">
            {title}
          </p>
          <p className="mono mt-1 text-[9px] uppercase text-white/40">
            Logo {String(index + 1).padStart(2, "0")}
          </p>
        </article>
      ))}
    </div>
  );
}