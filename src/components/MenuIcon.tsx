interface Props {
  isMenuOpen: boolean;
}

export default function MenuIcon({ isMenuOpen }: Props) {
  if (isMenuOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="32px"
        height="32px"
        viewBox="0 0 50 50"
        className="close-button"
      >
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="open-button"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    );
  }
}
