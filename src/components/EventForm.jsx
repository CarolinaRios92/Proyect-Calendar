import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function EventForm() {
  const [color, setColor] = useState("#f70776");
  const colors = [
    { label: "Rojo", value: "#155263" },
    { label: "Rosa", value: "#f70776" },
    { label: "Azul", value: "#9896f1" },
  ];
  return (
    <div class="w-3/4 m-auto pt-3">
      <form>
        <div class="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-inner-shadow-top-right"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke={color}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
            <path d="M18 12a6 6 0 0 0 -6 -6" />
          </svg>

          <select
            class="p-1 rounded backdrop-blur-sm w-1/4"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {colors.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Titulo"
            class={`border border-[${color}] rounded border-2 px-1`}
          />
        </div>
      </form>
    </div>
  );
}
