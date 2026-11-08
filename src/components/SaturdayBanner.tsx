import { useEffect, useState } from "react";
import { X } from "lucide-react";

const DISMISS_KEY = "mh-saturday-banner-dismissed";
const BODY_CLASS = "banner-visible";

const SaturdayBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(DISMISS_KEY)) {
      setVisible(true);
      document.body.classList.add(BODY_CLASS);
    }
    return () => document.body.classList.remove(BODY_CLASS);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    document.body.classList.remove(BODY_CLASS);
    setVisible(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-primary text-primary-foreground">
      <div className="relative flex h-full items-center justify-center gap-4 px-10 text-center">
        <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.2em]">
          Now open Saturdays, 10am — 6pm
        </p>
        <a
          href="https://app.acuityscheduling.com/schedule/43920a3f"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block border-b border-primary-foreground/50 pb-0.5 font-body text-[11px] md:text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
        >
          Book now
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 transition-opacity hover:opacity-100"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

export default SaturdayBanner;
