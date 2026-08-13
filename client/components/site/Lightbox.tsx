import { useEffect } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
        style={{ fontSize: "20px", lineHeight: 1 }}
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "95vw",
          maxHeight: "90vh",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>,
    document.body,
  );
}
