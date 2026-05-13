import { useState } from "react";
import imgLogo1 from "../../imports/ContactoMovil/4723f2994500379cd16539830c4075a18dbfd25e.png";
import svgPathsMobile from "../../imports/ContactoMovil/svg-i325dn4yt9";
import svgPathsCartaMobile from "../../imports/CartaMovil/svg-1euphc6qmp";
import SideMenu from "./SideMenu";

interface ContactoPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactoPage({ onNavigate }: ContactoPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    if (!nombre || !email || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("¡Mensaje enviado! Te responderemos pronto.");
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <>
      <SideMenu isOpen={menuOpen} currentPage="contacto" onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />

      {/* Desktop view */}
      <div className="hidden md:grid bg-[#fffdf3] gap-x-[8px] grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[fit-content(100%)_minmax(0,1fr)] relative size-full">
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
            <button onClick={() => onNavigate("reserva")} className="bg-[#fefbe5] hover:bg-[#f5f2d6] transition-colors content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative cursor-pointer">
              <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
                <p className="leading-[32px]">Reserva</p>
              </div>
            </button>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative">
              <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />
              <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6b9bb] text-[25px] text-center whitespace-nowrap">
                <p className="leading-[32px]">Contacto</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />
            </div>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="col-[1/span_5] justify-self-stretch relative row-2 self-start shrink-0 p-[24px]">
          <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[24px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
                <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#f2a5a9] text-[25px] text-center whitespace-nowrap">
                  Poke Poke - Restaurante
                </p>

                {/* Contact sections */}
                <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
                  {/* Dirección */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsMobile.p27c543b0} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPathsMobile.p2d59bff0} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] min-w-px relative">
                          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                            Dirección
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                        <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#516d56] text-[16px] w-full">
                          <p className="leading-[24px] mb-0">Calle Palmera 123</p>
                          <p className="leading-[24px]">28001 Madrid, España</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsMobile.p375d9e80} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] min-w-px relative">
                          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                            Teléfono
                          </p>
                        </div>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                        +34 912 345 678
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsMobile.p2bf8f980} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d={svgPathsMobile.p311e6900} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] min-w-px relative">
                          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                            Email
                          </p>
                        </div>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                        hola@pokepoke.es
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horario y Síguenos */}
                <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
                  {/* Horario */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={svgPathsMobile.pace200} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M12 6V12L16 14" stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] min-w-px relative">
                          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                            Horario
                          </p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                          Lunes - Viernes: 12:00 - 23:00
                        </p>
                        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                          Sábados: 13:00 - 00:00
                        </p>
                        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                          Domingos: 13:00 - 22:00
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Síguenos */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                      Síguenos
                    </p>
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                      <div className="bg-[#f2a5a9] hover:bg-[#e89397] transition-colors relative rounded-[26843500px] shrink-0 size-[48px] cursor-pointer">
                        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.p4fdb300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPathsMobile.p39557800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d="M17.5 6.5H17.51" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f2a5a9] hover:bg-[#e89397] transition-colors relative rounded-[26843500px] shrink-0 size-[48px] cursor-pointer">
                        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.p3d19f300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#d1edd5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                  <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#516d56] text-[16px] w-full">
                    ¿Tienes alguna pregunta? Completa el formulario de contacto y te responderemos lo antes posible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario Contacto */}
        <div className="col-[6/span_7] justify-self-stretch relative row-2 self-stretch shrink-0">
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
                    type="text"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                  />
                </div>
                <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                  Asunto
                </p>
              </div>

              <div className="content-stretch flex flex-col h-[124px] items-center relative shrink-0 w-full">
                <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
                  Mensaje
                </p>
                <div className="bg-[#edf8ef] flex-[1_0_0] min-h-px relative rounded-[25px] w-full">
                  <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
                  <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[15.8px] pr-[13.8px] pt-[12.8px] relative size-full">
                    <textarea
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
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
      <div className="md:hidden bg-[#fffdf3] gap-x-[10px] grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] relative size-full">
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

        {/* RestaurantInfo */}
        <div className="col-[1/span_3] justify-self-stretch relative row-2 self-start shrink-0">
          <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative size-full">
            <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[24px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[24px]" />
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
                  <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#f2a5a9] text-[25px] text-center whitespace-nowrap">
                    Poke Poke - Restaurante
                  </p>

                  <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
                    {/* Dirección */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.p27c543b0} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPathsMobile.p2d59bff0} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-[1_0_0] min-w-px relative">
                            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                              Dirección
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                          <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#516d56] text-[16px] w-full">
                            <p className="leading-[24px] mb-0">Calle Palmera 123</p>
                            <p className="leading-[24px]">28001 Madrid, España</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Teléfono */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.p375d9e80} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-[1_0_0] min-w-px relative">
                            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                              Teléfono
                            </p>
                          </div>
                        </div>
                        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                          +34 912 345 678
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.p2bf8f980} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPathsMobile.p311e6900} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-[1_0_0] min-w-px relative">
                            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                              Email
                            </p>
                          </div>
                        </div>
                        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                          hola@pokepoke.es
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
                    {/* Horario */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <path d={svgPathsMobile.pace200} stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d="M12 6V12L16 14" stroke="#F2A5A9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex-[1_0_0] min-w-px relative">
                            <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                              Horario
                            </p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                            Lunes - Viernes: 12:00 - 23:00
                          </p>
                          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                            Sábados: 13:00 - 00:00
                          </p>
                          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] text-[#516d56] text-[16px] whitespace-nowrap">
                            Domingos: 13:00 - 22:00
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Síguenos */}
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] text-[#333] text-[16px] whitespace-nowrap">
                        Síguenos
                      </p>
                      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                        <div className="bg-[#f2a5a9] hover:bg-[#e89397] transition-colors relative rounded-[26843500px] shrink-0 size-[48px] cursor-pointer">
                          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPathsMobile.p4fdb300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d={svgPathsMobile.p39557800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path d="M17.5 6.5H17.51" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f2a5a9] hover:bg-[#e89397] transition-colors relative rounded-[26843500px] shrink-0 size-[48px] cursor-pointer">
                          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
                            <div className="relative shrink-0 size-[24px]">
                              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d={svgPathsMobile.p3d19f300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d1edd5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
                    <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#516d56] text-[16px] w-full">
                      ¿Tienes alguna pregunta? Completa el formulario de contacto y te responderemos lo antes posible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario Contacto */}
        <div className="col-[1/span_3] justify-self-stretch relative row-3 shrink-0">
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
                    type="text"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
                  />
                </div>
                <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">
                  Asunto
                </p>
              </div>

              <div className="content-stretch flex flex-col h-[124px] items-center relative shrink-0 w-full">
                <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">
                  Mensaje
                </p>
                <div className="bg-[#edf8ef] flex-[1_0_0] min-h-px relative rounded-[25px] w-full">
                  <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
                  <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[15.8px] pr-[13.8px] pt-[12.8px] relative size-full">
                    <textarea
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
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
    </>
  );
}
