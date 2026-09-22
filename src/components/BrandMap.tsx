const ADDRESS = "Morph Haus, Suite 118, 40 Yeo Street, Neutral Bay NSW 2089";

const EMBED_SRC =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&z=16&output=embed";

const BrandMap = () => (
  <div className="relative w-full overflow-hidden bg-accent">
    <iframe
      title="Map showing Morph Haus in Neutral Bay"
      src={EMBED_SRC}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[320px] w-full border-0 md:h-[420px]"
      style={{ filter: "sepia(0.9) saturate(0.5) hue-rotate(-16deg) brightness(1.05) contrast(0.88)" }}
    />
    <div className="pointer-events-none absolute inset-0 bg-primary/10" />
  </div>
);

export default BrandMap;
