import InfiniteSpiral from "@/components/infinite-spiral";
import DriftWall from "@/components/drift-wall";

const images = Array.from({ length: 8 }, (_, index) => ({ src: `/assets/spiral_image_${index + 1}.jpg`, alt: `Creative archive image ${index + 1}` }));
const driftItems = images.map((image) => ({ image: image.src, title: image.alt }));

export function CreativeMotion({ className = "" }: { className?: string }) {
  return <div className={`creative-motion ${className}`}><div className="creative-motion-desktop"><InfiniteSpiral items={images} animationMode="all" speed={.22} radius={150} cardWidth={116} cardHeight={116} verticalSpacing={60} perspective={1000} cardRadius={10} centerScale={1.2} edgeBlur={2.5} cardsPerTurn={7} pauseOnHover /></div><div className="creative-motion-mobile"><DriftWall items={driftItems} columns={3} tileWidth={145} tileHeight={96} gap={10} tilt={10} turn={-8} perspective={900} depth={80} speed={54} direction="up" variance={.25} parallax={.3} lift={28} fade={.45} dim={.72} overlayColor="#121b21" /></div></div>;
}
