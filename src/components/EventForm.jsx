import { useEffect, useState } from "react";
import CheckIcon from "./icons/CheckIcon";
import CancelIcon from "./icons/CancelIcon";
import ColorIcon from "./icons/ColorIcon";
import { useSession } from "next-auth/react";

export default function EventForm() {
  const [color, setColor] = useState("#f70776");
  const [inicialDate, setInicialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [description, setDescription] = useState("");
  const { data: session } = useSession();
  console.log(session.user.email);

  const colors = [
    { label: "Rojo", value: "#155263" },
    { label: "Rosa", value: "#f70776" },
    { label: "Azul", value: "#9896f1" },
  ];

  const handleChangeInicialDate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInicialDate({ ...inicialDate, [name]: value });
  };

  const handleChangeFinalDate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFinalDate({ ...finalDate, [name]: value });
  };

  useEffect(() => {
    var e = new Date(inicialDate.date);
    e.setMonth(e.getMonth() + 2);
    if (e.getMonth() + 1 < 10 && e.getDate() < 10) {
      setMaxDate(
        e.getFullYear() + "-0" + (e.getMonth() + 1) + "-0" + e.getDate()
      );
    } else if (e.getMonth() + 1 < 10) {
      setMaxDate(
        e.getFullYear() + "-0" + (e.getMonth() + 1) + "-" + e.getDate()
      );
    } else if (e.getDate() < 10) {
      setMaxDate(
        e.getFullYear() + "-" + (e.getMonth() + 1) + "-0" + e.getDate()
      );
    } else {
      setMaxDate(
        e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
      );
    }
  }, [inicialDate]);

  const handleCheckedReminder = () => {
    setReminder(!reminder);
  };

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
        <div>
          <input
            type="date"
            value={inicialDate.date}
            name="date"
            onChange={handleChangeInicialDate}
          />
          <input
            type="time"
            name="time"
            value={inicialDate.time}
            onChange={handleChangeInicialDate}
          />
        </div>

        <div>
          <input
            type="date"
            value={finalDate.date}
            name="date"
            min={inicialDate.date}
            max={maxDate}
            onChange={handleChangeFinalDate}
          />
          <input
            type="time"
            name="time"
            value={finalDate.time}
            onChange={handleChangeFinalDate}
          />
        </div>

        <div class="flex flex-col">
          <label>Descripción</label>
          <textarea
            value={description}
            class="h-40 border border-2 rounded border-primary"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button>Repetir</button>

        <div>
          <input
            class="mr-2"
            type="checkbox"
            id="reminder"
            value="activeReminder"
            checked={reminder}
            onChange={handleCheckedReminder}
          />
          <label for="reminder">Activar Recordatorio</label>
        </div>
      </form>
    </div>
  );
}
