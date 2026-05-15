import React from 'react';
export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-3 text-white" aria-label="Futurexa.ai Social">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="30" height="30" rx="9" fill="#612BD3" />
        <path d="M9 9H23V12.5H18V23H14V12.5H9V9Z" fill="white" />
        <circle cx="24.5" cy="24.5" r="2.5" fill="#FC69FF" />
      </svg>
      <div className="leading-none">
        <div className="text-[18px] font-[700] tracking-[-0.02em]">
          Futurexa.ai
        </div>
        <div className="text-[11px] font-[600] uppercase tracking-[0.24em] text-white/70">
          Social
        </div>
      </div>
    </div>
  );
};
