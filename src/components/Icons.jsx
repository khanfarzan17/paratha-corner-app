const FILLED = ['star', 'crown', 'heart'];
const PATHS = {
  chef: <path d="M7 14a4 4 0 0 1-1-7.7 4.5 4.5 0 0 1 8.5-1A4 4 0 0 1 17 14v5H7zM7 17h10" />,
  wheat: <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14zM5 19l8-8" />,
  paratha: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /></>,
  bowl: <path d="M4 12h16a8 8 0 0 1-16 0zM9 8c0-2 2-2 3-4M12 12V9" />,
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.6l6.2-.9z" />,
  crown: <path d="M4 18h16l1-10-5 4-4-7-4 7-5-4z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  group: <><circle cx="12" cy="8" r="3" /><circle cx="5.5" cy="10" r="2.2" /><circle cx="18.5" cy="10" r="2.2" /><path d="M6.5 20a5.5 5.5 0 0 1 11 0zM1.5 18a4 4 0 0 1 4-4M22.5 18a4 4 0 0 0-4-4" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z" />,
  pin: <><path d="M12 21c-6-6-7-10-7-12a7 7 0 0 1 14 0c0 2-1 6-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  scooter: <><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M8.5 17h6l2-7h-3M6 12h4M14 10l-2-4H9" /></>,
  share: <><circle cx="18" cy="5" r="2.6" /><circle cx="6" cy="12" r="2.6" /><circle cx="18" cy="19" r="2.6" /><path d="M8.3 10.8l7.4-4.6M8.3 13.2l7.4 4.6" /></>,
  chat: <path d="M4 5h16v11H10l-4 4v-4H4z" />,
  heart: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z" />,
};

export function Icon({ name, size = 24, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
      fill={FILLED.includes(name) ? 'currentColor' : 'none'} stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  );
}
