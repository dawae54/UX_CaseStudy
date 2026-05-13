import { useState } from "react";
import imgLogo1 from "../../imports/ReservasDesktop/4723f2994500379cd16539830c4075a18dbfd25e.png";
import svgPaths from "../../imports/ReservasDesktop-3/svg-orz37unwco";
import svgPathsMobile from "../../imports/ReservasMovil/svg-ctbuizq18s";
import svgPathsCartaMobile from "../../imports/CartaMovil/svg-1euphc6qmp";
import SideMenu from "./SideMenu";

interface ReservaPageProps {
  onNavigate: (page: string) => void;
}

export default function ReservaPage({ onNavigate }: ReservaPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4, 1));
  const [selectedDay, setSelectedDay] = useState<number>(31);
  const [selectedHour, setSelectedHour] = useState<number>(20);
  const [selectedMinute, setSelectedMinute] = useState<number>(33);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [numPersonas, setNumPersonas] = useState("");
  const [peticiones, setPeticiones] = useState("");

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNamesEs = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const dayNames = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-[32px] h-[30px]" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDay;
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={`w-[32px] h-[30px] flex items-center justify-center ${
            isSelected ? "bg-[#f2a5a9] rounded-[100px]" : ""
          } hover:bg-[#f2a5a9] hover:bg-opacity-50 rounded-[100px] transition-colors cursor-pointer`}
        >
          <p className={`font-['Arimo:Regular',sans-serif] font-normal leading-[30px] text-[20px] tracking-[0.38px] ${
            isSelected ? "text-white" : "text-[#f2a5a9]"
          }`}>
            {day}
          </p>
        </button>
      );
    }

    return days;
  };

  const getFormattedDate = () => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDay);
    const dayName = dayNames[date.getDay()];
    const monthName = monthNamesEs[currentMonth.getMonth()];
    return `${dayName}, ${selectedDay} de ${monthName} de ${currentMonth.getFullYear()}`;
  };

  const handleSubmit = () => {
    if (!nombre || !email || !telefono || !numPersonas) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    alert("¡Reserva confirmada! Te hemos enviado un email de confirmación.");
  };

  return (
    <>
      <SideMenu isOpen={menuOpen} currentPage="reserva" onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />

      {/* Desktop view */}
      <div className="hidden md:grid bg-[#fffdf3] gap-x-[8px] grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[fit-content(100%)_minmax(0,1fr)_minmax(0,1fr)] relative size-full">
      {/* Navigation */}
      <div className="bg-[#fefadd] col-[1/span_12] content-stretch flex gap-[10px] h-[80px] items-center overflow-clip p-[10px] relative row-1 shrink-0 w-full">
        <button onClick={() => onNavigate("home")} className="aspect-[257/255] h-full relative shrink-0 cursor-pointer">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
          </div>
        </button>
        <button onClick={() => onNavigate("home")} className="font-['Quicksand:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#f2a5a9] text-[49px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
          PokePoké
        </button>
        <div className="flex-[1_0_0] h-full min-w-px relative" />
        <div className="bg-[#fefbe5] content-stretch flex h-[64px] items-center px-[10px] relative shrink-0 w-[386.75px]">
          <button onClick={() => onNavigate("carta")} className="bg-[#fefbe5] hover:bg-[#f5f2d6] transition-colors content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative cursor-pointer">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Carta</p>
            </div>
          </button>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative">
            <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6b9bb] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Reserva</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />
          </div>
          <button onClick={() => onNavigate("contacto")} className="bg-[#fefbe5] hover:bg-[#f5f2d6] transition-colors content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative cursor-pointer">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Contacto</p>
            </div>
          </button>
        </div>
      </div>

      {/* Seleccion fecha */}
      <div className="col-[1/span_5] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] justify-self-stretch relative rounded-[14px] row-[2/span_2] self-stretch shrink-0">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[18px] relative size-full">
            <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-px not-italic relative text-[#364153] text-[24px]">
                Seleccionar Fecha y Hora
              </p>
            </div>

            {/* Calendar */}
            <div className="bg-white drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] h-[440px] relative rounded-[13px] shrink-0 w-full">
              {/* Month header */}
              <div className="absolute h-[44px] left-[16px] top-[8px] w-[311px]">
                <div className="absolute h-[24px] left-0 top-[10px] w-[105.563px]">
                  <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#f2a5a9] text-[20px] top-[-0.2px] tracking-[0.38px] whitespace-nowrap">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </p>
                </div>
                <div className="absolute content-stretch flex h-[17.313px] items-center justify-between left-[281px] top-[13.34px] w-[30px]">
                  <button onClick={previousMonth} className="h-[17.313px] relative shrink-0 w-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
                      <path d={svgPaths.p1575080} fill="#F2A5A9" />
                    </svg>
                  </button>
                  <button onClick={nextMonth} className="h-[17.313px] relative shrink-0 w-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
                      <path d={svgPaths.p271d1f00} fill="#F2A5A9" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Day names */}
              <div className="absolute content-stretch flex gap-[9.163px] h-[18px] items-center left-[16px] px-[16px] top-[52px] w-[311px]">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                  <div key={day} className="h-[18px] relative shrink-0 w-[32px]">
                    <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-1/2 -translate-x-1/2 text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">
                      {day}
                    </p>
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="absolute left-[16px] top-[85px] w-[311px] grid grid-cols-7 gap-y-[15px] gap-x-[9.163px]">
                {renderCalendarDays()}
              </div>

              {/* Time selector */}
              <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[16.5px] text-[#a56f72] text-[20px] top-[394px] tracking-[0.38px] whitespace-nowrap">
                Time
              </p>
              <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-[186.04px] top-[388px] w-[142.463px]">
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(Number(e.target.value))}
                  className="bg-[rgba(118,118,128,0.12)] h-[36px] rounded-[6px] w-[60px] text-center font-['Arimo:Regular',sans-serif] text-[#a56f72] text-[18px] outline-none cursor-pointer"
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                      {i.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[33px] text-[#a56f72] text-[22px] tracking-[0.35px]">:</p>
                <select
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(Number(e.target.value))}
                  className="bg-[rgba(118,118,128,0.12)] h-[36px] rounded-[6px] w-[60px] text-center font-['Arimo:Regular',sans-serif] text-[#a56f72] text-[18px] outline-none cursor-pointer"
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {i.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected date display */}
            <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-center relative shrink-0 w-full">
              <div className="bg-[#f9fafb] drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] h-[116px] not-italic relative rounded-[10px] shrink-0 w-full whitespace-nowrap">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#4a5565] text-[14px] top-[15.8px]">
                  Fecha y hora seleccionada:
                </p>
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[16px] text-[#1e2939] text-[18px] top-[42.6px]">
                  {getFormattedDate()}
                </p>
                <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[16px] text-[#1e2939] text-[18px] top-[70.6px]">
                  {selectedHour.toString().padStart(2, "0")}:{selectedMinute.toString().padStart(2, "0")}
                </p>
              </div>
              <button className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0 cursor-pointer">
                <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">
                  Seleccionar fecha
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario Reserva */}
      <div className="col-[6/span_7] justify-self-stretch relative row-[2/span_2] self-stretch shrink-0">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
            <div className="h-[96px] relative shrink-0 w-full">
              <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                />
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                Nombre completo
              </p>
            </div>

            <div className="h-[96px] relative shrink-0 w-full">
              <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                />
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                Email
              </p>
            </div>

            <div className="h-[96px] relative shrink-0 w-full">
              <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]">
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                />
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                Teléfono
              </p>
            </div>

            <div className="h-[96px] relative shrink-0 w-full">
              <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]">
                <input
                  type="number"
                  value={numPersonas}
                  onChange={(e) => setNumPersonas(e.target.value)}
                  className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                />
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                Número de personas
              </p>
            </div>

            <div className="content-stretch flex flex-col h-[124px] items-center relative shrink-0 w-full">
              <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
                Peticiones especiales (opcional)
              </p>
              <div className="bg-[#edf8ef] flex-[1_0_0] min-h-px relative rounded-[25px] w-full">
                <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
                <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[15.8px] pr-[13.8px] pt-[12.8px] relative size-full">
                  <textarea
                    value={peticiones}
                    onChange={(e) => setPeticiones(e.target.value)}
                    placeholder="Alergias, preferencias de mesa, etc."
                    className="content-stretch flex h-[92.4px] items-start overflow-auto relative shrink-0 w-full font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#909396] text-[16px] bg-transparent outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="h-[35px] relative shrink-0 w-full" />

            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <button
                onClick={handleSubmit}
                className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px] cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                    <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">
                      Enviar
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile view */}
      <div className="md:hidden bg-[#fffdf3] gap-x-[10px] grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[fit-content(100%)_fit-content(100%)_minmax(0,1fr)_minmax(0,1fr)] relative size-full">
        {/* Navigation */}
        <div className="bg-[#fefadd] col-[1/span_3] h-[50px] justify-self-stretch relative row-1 shrink-0">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
              <button onClick={() => onNavigate("home")} className="aspect-[257/255] h-full relative shrink-0 cursor-pointer">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
                </div>
              </button>
              <button onClick={() => onNavigate("home")} className="font-['Quicksand:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#f2a5a9] text-[31px] whitespace-nowrap cursor-pointer">
                PokePoké
              </button>
              <div className="flex-[1_0_0] h-full min-w-px relative" />
              <button onClick={() => setMenuOpen(true)} className="overflow-clip relative shrink-0 size-[32px] cursor-pointer hover:opacity-70 transition-opacity">
                <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 16">
                    <path d={svgPathsCartaMobile.p3bd073c0} fill="#F2A5A9" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Seleccion fecha */}
        <div className="col-[1/span_3] justify-self-stretch relative row-2 self-start shrink-0 p-[18px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic text-[#364153] text-[24px] mb-[16px]">
            Seleccionar Fecha y Hora
          </p>

          {/* Calendar */}
          <div className="bg-white drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-[13px] w-full p-[16px] flex flex-col gap-[12px] mb-[16px]">
                {/* Month header */}
                <div className="flex items-center justify-between w-full">
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#f2a5a9] text-[20px] tracking-[0.38px] whitespace-nowrap">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </p>
                  <div className="flex items-center gap-[10px]">
                    <button onClick={previousMonth} className="h-[17.313px] w-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
                        <path d={svgPathsMobile.p1575080} fill="#F2A5A9" />
                      </svg>
                    </button>
                    <button onClick={nextMonth} className="h-[17.313px] w-[10px] cursor-pointer hover:opacity-70 transition-opacity">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
                        <path d={svgPathsMobile.p271d1f00} fill="#F2A5A9" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-[9.163px] w-full">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                    <div key={day} className="flex items-center justify-center">
                      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[18px] text-[13px] text-[rgba(60,60,67,0.3)] text-center tracking-[-0.078px] whitespace-nowrap">
                        {day}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-y-[15px] gap-x-[9.163px] w-full">
                  {renderCalendarDays()}
                </div>

                {/* Time selector */}
                <div className="flex items-center justify-between w-full mt-[16px]">
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#a56f72] text-[20px] tracking-[0.38px] whitespace-nowrap">
                    Time
                  </p>
                  <div className="flex gap-[8px] items-center">
                    <select
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(Number(e.target.value))}
                      className="bg-[rgba(118,118,128,0.12)] h-[36px] rounded-[6px] w-[60px] text-center font-['Arimo:Regular',sans-serif] text-[#a56f72] text-[18px] outline-none cursor-pointer"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[33px] text-[#a56f72] text-[22px] tracking-[0.35px]">:</p>
                    <select
                      value={selectedMinute}
                      onChange={(e) => setSelectedMinute(Number(e.target.value))}
                      className="bg-[rgba(118,118,128,0.12)] h-[36px] rounded-[6px] w-[60px] text-center font-['Arimo:Regular',sans-serif] text-[#a56f72] text-[18px] outline-none cursor-pointer"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
          </div>

          {/* Selected date display */}
          <div className="bg-[#f9fafb] h-[116px] relative rounded-[10px] w-full mb-[16px] p-[16px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px] mb-[8px]">
              Fecha y hora seleccionada:
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#1e2939] text-[18px] mb-[4px]">
              {getFormattedDate()}
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#1e2939] text-[18px]">
              {selectedHour.toString().padStart(2, "0")}:{selectedMinute.toString().padStart(2, "0")}
            </p>
          </div>

          <button className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors flex items-center justify-center p-[16px] rounded-[45px] w-full cursor-pointer">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[25px] text-center text-white whitespace-nowrap">
              Seleccionar fecha
            </p>
          </button>
        </div>

        {/* Formulario Reserva */}
        <div className="col-[1/span_3] justify-self-stretch relative row-[3/span_2] self-stretch shrink-0 px-[32px] py-[16px] flex flex-col gap-0">
          <div className="mb-[16px]">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] text-[#333] text-[18px] mb-[8px]">
              Nombre completo
            </p>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none"
            />
          </div>

          <div className="mb-[16px]">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] text-[#333] text-[18px] mb-[8px]">
              Email
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none"
            />
          </div>

          <div className="mb-[16px]">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] text-[#333] text-[18px] mb-[8px]">
              Teléfono
            </p>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#333] outline-none"
            />
          </div>

          <div className="mb-[16px]">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] text-[#333] text-[18px] mb-[8px]">
              Número de personas
            </p>
            <input
              type="number"
              value={numPersonas}
              onChange={(e) => setNumPersonas(e.target.value)}
              className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#333] outline-none"
            />
          </div>

          <div className="mb-[16px]">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] text-[#333] text-[18px] mb-[8px]">
              Peticiones especiales (opcional)
            </p>
            <div className="bg-[#edf8ef] border border-[#d1edd5] rounded-[25px] w-full p-[15px]">
              <textarea
                value={peticiones}
                onChange={(e) => setPeticiones(e.target.value)}
                placeholder="Alergias, preferencias de mesa, etc."
                className="w-full h-[92px] font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#909396] text-[16px] bg-transparent outline-none resize-none"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors h-[48px] w-full rounded-[45px] cursor-pointer flex items-center justify-center p-[16px] mt-[20px]"
          >
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[25px] text-center text-white whitespace-nowrap">
              Enviar
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
