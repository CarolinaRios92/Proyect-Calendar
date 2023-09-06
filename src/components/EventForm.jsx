import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import CheckIcon from "./icons/CheckIcon";
import CancelIcon from "./icons/CancelIcon";
import ColorIcon from "./icons/ColorIcon";

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
        <div class="flex gap-2 justify-end pb-2">
          <button class="border border-green-500 rounded-full w-7 h-7">
            <CheckIcon width={24} height={24} classname={"m-auto"} />
          </button>
          <button class="border border-red-500 rounded-full w-7 h-7">
            <CancelIcon classname={"text-red-500 h-5 w-5 m-auto"} />
          </button>
        </div>

        <div class="flex gap-2 items-center">
          <ColorIcon color={color} />
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
