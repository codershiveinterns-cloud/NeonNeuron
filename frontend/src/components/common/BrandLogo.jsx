const sizeClasses = {
  sm: 'w-8 h-8 text-[10px]',
  md: 'w-9 h-9 text-[11px]',
};

const BrandLogo = ({ size = 'sm', className = '' }) => (
  <div
    aria-hidden="true"
    className={`${sizeClasses[size] || sizeClasses.sm} relative rounded-lg bg-gradient-to-br from-cyan-400 via-indigo-600 to-fuchsia-600 flex items-center justify-center font-black tracking-[-0.18em] pr-[0.18em] text-white shadow-md shadow-cyan-500/30 overflow-hidden ${className}`}
  >
    <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_28%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.35),transparent_30%)]" />
    <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 36 36" fill="none">
      <path d="M10 23L18 12L26 23" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="23" r="2" fill="white" />
      <circle cx="18" cy="12" r="2" fill="white" />
      <circle cx="26" cy="23" r="2" fill="white" />
    </svg>
    <span className="relative drop-shadow-sm">NN</span>
  </div>
);

export default BrandLogo;
