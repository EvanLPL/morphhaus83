import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: any;
    initMorphHausMap?: () => void;
  }
}

// Suite 118, 40 Yeo Street, Neutral Bay NSW 2089
const STUDIO = { lat: -33.8319571, lng: 151.221439 };

// Morph Haus brand palette: warm brown #9A7868, cream #EDE4D8
const BRAND_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#EDE4D8" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#6B5244" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#EDE4D8" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#E0D2C2" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#D3C1AE" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#D9C7B3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#CBB59E" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#C9AE98" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#8A6E5C" }] },
  { featureType: "landscape.natural", elementType: "geometry", stylers: [{ color: "#E7DAC9" }] },
  { featureType: "transit", stylers: [{ visibility: "simplified" }] },
];

const BrandMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const buildMap = () => {
      if (!mapRef.current || !window.google?.maps) return;
      const map = new window.google.maps.Map(mapRef.current, {
        center: STUDIO,
        zoom: 16,
        styles: BRAND_STYLES,
        clickableIcons: false,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
      });
      new window.google.maps.Marker({
        position: STUDIO,
        map,
        title: "Morph Haus — Suite 118, 40 Yeo Street, Neutral Bay",
      });
    };

    const loadScript = (key: string) => {
      if (cancelled) return;
      window.initMorphHausMap = buildMap;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=initMorphHausMap`;
      script.async = true;
      document.head.appendChild(script);
    };

    if (window.google?.maps) {
      buildMap();
      return;
    }

    // Fetch the site's own Google Maps key from the backend so it works
    // on the custom domain (the managed key only works on lovable.app).
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
    fetch(`${supabaseUrl}/functions/v1/maps-key`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then(({ key }) => key && loadScript(key))
      .catch((err) => console.error("Could not load map key:", err));

    return () => {
      cancelled = true;
      window.initMorphHausMap = undefined;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-[320px] w-full md:h-[420px]"
      role="img"
      aria-label="Map showing Morph Haus at Suite 118, 40 Yeo Street, Neutral Bay NSW 2089"
    />
  );
};

export default BrandMap;
