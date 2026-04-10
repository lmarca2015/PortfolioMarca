export default function CompanyLogo({ src, alt = "", size = 32 }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{ width: size * 2, height: size }}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}
