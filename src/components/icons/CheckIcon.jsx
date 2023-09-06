export default function CheckIcon({ width = 32, height = 32, classname }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={`icon icon-tabler icon-tabler-check ${classname}`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#00b341"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}
