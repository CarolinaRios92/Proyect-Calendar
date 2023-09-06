export default function CreateIcon({ classname }) {
  return (
    <svg
      class={classname}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.5v15m7.5-7.5h-15"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
}
