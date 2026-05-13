import svgPaths from "../../imports/ContactoDesktop/svg-4nocnyvb43";
import imgLogo1 from "../../imports/ContactoDesktop/4723f2994500379cd16539830c4075a18dbfd25e.png";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="bg-[#fffdf3] gap-x-[8px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[fit-content(100%)_minmax(0,3fr)] relative size-full">
      {/* Navigation */}
      <div className="bg-[#fefadd] col-[1/span_12] content-stretch flex gap-[10px] h-[80px] items-center justify-self-stretch overflow-clip px-[10px] relative row-1 shrink-0">
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
      <div className="col-[1/span_6] justify-self-stretch relative row-2 self-stretch shrink-0">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pt-[48px] px-[24px] relative size-full">
            <div className="bg-white border border-[#d1edd5] rounded-[24px] p-8 shadow-lg w-full">
              <h2 className="font-['Quicksand:SemiBold',sans-serif] font-semibold text-[31px] leading-[40px] text-[#f2a5a9] text-center mb-8">
                Poke Poke - Restaurante
              </h2>

              <div className="flex justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-4">
                    <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[16px] text-[#333] mb-1">Dirección</h3>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[16px] text-[#516d56] leading-[24px]">
                        Calle Palmera 123<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.65162C2.82196 2.44658 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 1.99997H7.10999C7.5953 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23945 9.10999 3.71997C9.23662 4.68004 9.47144 5.6227 9.80999 6.52997C9.94454 6.88581 9.97366 7.27427 9.8939 7.64705C9.81415 8.01984 9.62886 8.36178 9.35999 8.62997L8.08999 9.89997C9.51355 12.4135 11.5864 14.4864 14.1 15.91L15.37 14.64C15.6382 14.3711 15.9801 14.1858 16.3529 14.1061C16.7257 14.0263 17.1142 14.0554 17.47 14.19C18.3773 14.5285 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[16px] text-[#333] mb-1">Teléfono</h3>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[16px] text-[#516d56]">+34 912 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6L12 13L2 6" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[16px] text-[#333] mb-1">Email</h3>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[16px] text-[#516d56]">hola@pokepoke.es</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-6">
                    <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 6V12L16 14" stroke="#F2A5A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[16px] text-[#333] mb-2">Horario</h3>
                      <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[16px] text-[#516d56] leading-[24px]">
                        Lunes - Viernes: 12:00 - 23:00<br />
                        Sábados: 13:00 - 00:00<br />
                        Domingos: 13:00 - 22:00
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] font-bold text-[16px] text-[#333] mb-3">Síguenos</h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-[#f2a5a9] hover:bg-[#f6b9bb] transition-colors rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5923C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a href="#" className="bg-[#f2a5a9] hover:bg-[#f6b9bb] transition-colors rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#d1edd5] pt-6">
                <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-[#516d56]">
                  ¿Tienes alguna pregunta? Completa el formulario de contacto y te responderemos lo antes posible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-[7/span_6] justify-self-stretch relative row-2 self-stretch shrink-0">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
            <div className="relative w-full mb-6">
              <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Nombre completo</label>
              <input type="text" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
            </div>

            <div className="relative w-full mb-6">
              <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Email</label>
              <input type="email" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
            </div>

            <div className="relative w-full mb-6">
              <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Asunto</label>
              <input type="text" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#333] outline-none focus:border-[#a6dbaf]" />
            </div>

            <div className="relative w-full mb-6">
              <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Mensaje</label>
              <textarea rows={4} className="bg-[#edf8ef] border border-[#d1edd5] rounded-[25px] w-full px-[15px] py-[12px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf] resize-none" />
            </div>

            <div className="h-[35px]" />

            <button onClick={() => alert('Mensaje enviado!')} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors w-full h-[48px] rounded-[45px] cursor-pointer">
              <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[25px] text-center text-white">Enviar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
