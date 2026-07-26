export function PotatoMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M20.5 4.2c3.6.6 6.9 3.8 7.8 7.7 1 4.4-.8 8.3-3.6 12-2.6 3.4-5.5 6.6-9.8 7.4-4 .7-8.2-1-10.5-4.4-2.4-3.6-2.3-8.3-.4-12.2C6.1 10.2 9.4 6.4 13.6 4.7c2.2-.9 4.6-.9 6.9-.5Z"
        fill="#C79A5B"
      />
      <circle cx="12" cy="13" r="1.3" fill="#6B4E28" />
      <circle cx="19.5" cy="17" r="1.3" fill="#6B4E28" />
      <circle cx="14.5" cy="21.5" r="1.1" fill="#6B4E28" />
      <path
        d="M18 4.6c.4-1.6 1.7-2.9 3.4-3.2"
        stroke="#6FA84B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
