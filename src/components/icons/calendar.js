export function CalendarIcon(props) {
  const size = props.size ?? 27;
  const strokeWidth = props.strokeWidth ?? 1.5;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 13.5C4.5 10.1059 4.5 8.40883 5.55442 7.35442C6.60883 6.3 8.30589 6.3 11.7 6.3H15.3C18.6941 6.3 20.3912 6.3 21.4456 7.35442C22.5 8.40883 22.5 10.1059 22.5 13.5V15.3C22.5 18.6941 22.5 20.3912 21.4456 21.4456C20.3912 22.5 18.6941 22.5 15.3 22.5H11.7C8.30589 22.5 6.60883 22.5 5.55442 21.4456C4.5 20.3912 4.5 18.6941 4.5 15.3V13.5Z"
        stroke="currentcolor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 6.3V4.95"
        stroke="currentcolor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 6.3V4.95"
        stroke="currentcolor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4.95 10.8H22.05"
        stroke="currentcolor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18.9 18C18.9 18.4971 18.4971 18.9 18 18.9C17.5029 18.9 17.1 18.4971 17.1 18C17.1 17.5029 17.5029 17.1 18 17.1C18.4971 17.1 18.9 17.5029 18.9 18Z"
        fill="currentcolor"
      />
      <path
        d="M18.9 14.4C18.9 14.8971 18.4971 15.3 18 15.3C17.5029 15.3 17.1 14.8971 17.1 14.4C17.1 13.9029 17.5029 13.5 18 13.5C18.4971 13.5 18.9 13.9029 18.9 14.4Z"
        fill="currentcolor"
      />
      <path
        d="M14.4 18C14.4 18.4971 13.9971 18.9 13.5 18.9C13.0029 18.9 12.6 18.4971 12.6 18C12.6 17.5029 13.0029 17.1 13.5 17.1C13.9971 17.1 14.4 17.5029 14.4 18Z"
        fill="currentcolor"
      />
      <path
        d="M14.4 14.4C14.4 14.8971 13.9971 15.3 13.5 15.3C13.0029 15.3 12.6 14.8971 12.6 14.4C12.6 13.9029 13.0029 13.5 13.5 13.5C13.9971 13.5 14.4 13.9029 14.4 14.4Z"
        fill="currentcolor"
      />
      <path
        d="M9.9 18C9.9 18.4971 9.49706 18.9 9 18.9C8.50294 18.9 8.1 18.4971 8.1 18C8.1 17.5029 8.50294 17.1 9 17.1C9.49706 17.1 9.9 17.5029 9.9 18Z"
        fill="currentcolor"
      />
      <path
        d="M9.9 14.4C9.9 14.8971 9.49706 15.3 9 15.3C8.50294 15.3 8.1 14.8971 8.1 14.4C8.1 13.9029 8.50294 13.5 9 13.5C9.49706 13.5 9.9 13.9029 9.9 14.4Z"
        fill="currentcolor"
      />
    </svg>
  );
}
