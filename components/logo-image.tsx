import { FlexibleAssetImage } from "@/components/flexible-asset-image";

export function LogoImage({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  const name = String(index + 1).padStart(2, "0");

  return (
    <FlexibleAssetImage
      src={`/assets/logos/logo-${name}.png`}
      alt={title}
      className="absolute inset-0 h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
    />
  );
}