import { useState } from "react";
import PrincipalDesktop from "../../imports/PrincipalDesktop/PrincipalDesktop";
import svgPaths from "../../imports/PrincipalDesktop/svg-0jui3ia9n8";
import svgPathsMobile from "../../imports/PrincipalMovil/svg-yffjhl8tfx";
import imgMainContent from "../../imports/PrincipalDesktop/879f0c9dee554256184c0cd9d2c78cc4e35391b9.png";
import imgCardImage from "../../imports/PrincipalDesktop/28eceb3392da1b9ae3833739d7dddd4bd2a28a88.png";
import imgCardImage1 from "../../imports/PrincipalDesktop/e4bbb22083a2ee59cfdf892d970865ef748f848e.png";
import imgCardImage2 from "../../imports/PrincipalDesktop/0b189f33e451e00ecf83342fb2846feb2bad0b10.png";
import imgImage1 from "../../imports/PrincipalDesktop/217dbac49d10b3fa1d30ee58b1d50e3061ce808b.png";
import imgLogo1 from "../../imports/PrincipalDesktop/4723f2994500379cd16539830c4075a18dbfd25e.png";
import SideMenu from "./SideMenu";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

function Frame({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] py-[40px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#fefbe5] text-[49px] w-full" style={{ textShadow: '0px 10px 20px rgba(0,0,0,0.3), 0px 4px 12px rgba(0,0,0,0.4), 0px 2px 4px rgba(0,0,0,0.5)' }}>
        <p className="leading-[60px] mb-0">¡Bienvenido al Mundo Gourmet más</p>
        <p className="leading-[60px]">Kawaii de Pokémon!</p>
      </div>
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[25px] text-[rgba(255,255,255,0.95)] w-full" style={{ textShadow: '1px 1px 4px black' }}>
        <p className="leading-[32px] mb-0">Descubre una aventura culinaria llena de magia y ternura. Nuestros chefs</p>
        <p className="leading-[32px] mb-0">crean platos adorables inspirados en tus Pokémon favoritos para una</p>
        <p className="leading-[32px]">experiencia única y deliciosa.</p>
      </div>
    </div>
  );
}

function Botones({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[20px] items-center justify-center px-[10px] relative size-full">
          <button onClick={() => onNavigate("reserva")} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0 cursor-pointer">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">Reserva tu mesa</p>
          </button>
          <button onClick={() => onNavigate("carta")} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0 cursor-pointer">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Ver menú</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function MainContent({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="col-[1/span_12] h-[1036.125px] justify-self-stretch relative row-2 self-center shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none mix-blend-darken object-cover size-full" src={imgMainContent} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[20px] relative size-full">
          <Frame onNavigate={onNavigate} />
          <Botones onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] pb-[32px] px-[16px] relative size-full text-center">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[25px] text-black w-full">
            <p className="leading-[32px]">Llamarada de Charmander</p>
          </div>
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#524344] text-[16px] w-full">
            <p className="leading-[24px] mb-0">Un exquisito curry rojo picante de</p>
            <p className="leading-[24px] mb-0">autor con estética de tipo fuego y</p>
            <p className="leading-[24px]">toques de especias aromáticas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] pb-[32px] px-[16px] relative size-full text-center">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[25px] text-black w-full">
            <p className="leading-[32px]">Capricho de Sylveon</p>
          </div>
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#524344] text-[16px] w-full">
            <p className="leading-[24px] mb-0">Un postre mágico y delicado de</p>
            <p className="leading-[24px] mb-0">muselina de fresas silvestres y cintas</p>
            <p className="leading-[24px]">de azúcar artesanal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center leading-[0] pb-[32px] px-[16px] relative size-full text-center">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1d1c0b] text-[25px] w-full">
            <p className="leading-[32px]">Bol de Hierba Bulbasaur</p>
          </div>
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#524344] text-[16px] w-full">
            <p className="leading-[24px] mb-0">Fideos de matcha y vegetales</p>
            <p className="leading-[24px] mb-0">crujientes, una opción fresca y 100%</p>
            <p className="leading-[24px]">vegana inspirada en la naturaleza.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-[1/span_12] content-stretch flex flex-col gap-[64px] items-center justify-center justify-self-stretch overflow-clip py-[64px] relative row-3 self-start shrink-0">
      <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[31px] text-black text-center whitespace-nowrap">
        <p className="leading-[40px]">Platos de autor</p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-center flex flex-wrap gap-[32px] items-center justify-center px-[16px] relative size-full">
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                </div>
                <Container />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            </div>
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                </div>
                <Container1 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            </div>
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                </div>
                <Container2 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icono() {
  return (
    <div className="h-[22px] relative shrink-0 w-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 22">
        <g>
          <path d={svgPaths.p4f09bc8} fill="#516D56" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0b0d10] text-[25px] w-full">
          <p className="leading-[32px]">Ambiente</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#344838] text-[16px] w-full">
          <p className="leading-[24px] mb-0">Entorno relajante, luminoso y</p>
          <p className="leading-[24px]">sereno.</p>
        </div>
      </div>
    </div>
  );
}

function Icono1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 20">
        <g>
          <path d={svgPaths.p2ef76100} fill="#795153" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0b0d10] text-[25px] w-full">
          <p className="leading-[32px]">Diseño</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#524344] text-[16px] w-full">
          <p className="leading-[24px] mb-0">Paletas de colores pastel y</p>
          <p className="leading-[24px]">formas orgánicas suaves.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-center overflow-clip relative shrink-0 w-full">
      <div className="bg-[#edf8ef] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]">
        <div aria-hidden="true" className="absolute border border-[#a6dbaf] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icono />
        <Heading />
        <Container3 />
      </div>
      <div className="bg-[#feeded] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]">
        <div aria-hidden="true" className="absolute border border-[#f2a5a9] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icono1 />
        <Heading1 />
        <Container4 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center p-[32px] relative size-full">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1c0b] text-[31px] w-full">
            <p className="leading-[40px] mb-0">Un Rincón Lleno de Ternura y</p>
            <p className="leading-[40px]">Magia</p>
          </div>
          <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#524344] text-[16px] w-full">
            <p className="leading-[24px] mb-0">Nuestro espacio está diseñado como una extensión viva de</p>
            <p className="leading-[24px] mb-0">nuestro menú. Imagine un santuario lleno de luz bañado en</p>
            <p className="leading-[24px] mb-0">suaves tonos pastel, donde el minimalismo moderno se</p>
            <p className="leading-[24px]">encuentra con detalles arquitectónicos lúdicos.</p>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <div className="relative shrink-0 size-[624px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="col-[1/span_12] justify-self-stretch relative row-4 self-start shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center p-[64px] relative size-full">
          <Frame3 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Espacio() {
  return <div className="flex-[1_0_0] h-full min-w-px relative" />;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SideMenu isOpen={menuOpen} currentPage="home" onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />

      {/* Desktop view */}
      <div className="hidden md:grid bg-[#fffdf3] gap-x-[8px] grid-cols-[repeat(12,minmax(0,1fr))_fit-content(100%)] grid-rows-[repeat(4,fit-content(100%))] relative size-full">
        <MainContent onNavigate={onNavigate} />
        <Frame1 />
        <Frame2 />
        <div className="bg-[#fefadd] col-[1/span_12] content-stretch flex gap-[16px] h-[80px] items-center justify-self-stretch overflow-clip p-[16px] relative row-1 shrink-0">
          <button onClick={() => onNavigate("home")} className="aspect-[257/255] h-full relative shrink-0 cursor-pointer">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
            </div>
          </button>
          <button onClick={() => onNavigate("home")} className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2a5a9] text-[49px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">
            <p className="leading-[60px]">PokePoké</p>
          </button>
          <Espacio />
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
            <button onClick={() => onNavigate("contacto")} className="bg-[#fefbe5] hover:bg-[#f5f2d6] transition-colors content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative cursor-pointer">
              <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
                <p className="leading-[32px]">Contacto</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden bg-[#fffdf3] gap-x-[10px] grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[repeat(4,fit-content(100%))] relative size-full overflow-y-auto">
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
                    <path d={svgPathsMobile.p3bd073c0} fill="#F2A5A9" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-[1/span_3] justify-self-stretch relative row-2 self-center shrink-0">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none mix-blend-darken object-cover size-full" src={imgMainContent} />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0)]" />
          </div>
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[20px] py-[32px] relative size-full">
              <div className="content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] py-[32px] relative shrink-0 text-center w-full">
                <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#fefbe5] text-[49px] w-full" style={{ textShadow: '0px 10px 20px rgba(0,0,0,0.3), 0px 4px 12px rgba(0,0,0,0.4), 0px 2px 4px rgba(0,0,0,0.5)' }}>
                  <p className="leading-[60px] mb-0">¡Bienvenido al Mundo Gourmet más</p>
                  <p className="leading-[60px]">Kawaii de Pokémon!</p>
                </div>
                <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[25px] text-[rgba(255,255,255,0.95)] w-full" style={{ textShadow: '1px 1px 4px black' }}>
                  <p className="leading-[32px] mb-0">Descubre una aventura culinaria llena de magia y ternura. Nuestros chefs</p>
                  <p className="leading-[32px] mb-0">crean platos adorables inspirados en tus Pokémon favoritos para una</p>
                  <p className="leading-[32px]">experiencia única y deliciosa.</p>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-center justify-center px-[10px] relative size-full">
                    <button onClick={() => onNavigate("reserva")} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors relative rounded-[45px] shrink-0 w-full cursor-pointer">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">
                            Reserva tu mesa
                          </p>
                        </div>
                      </div>
                    </button>
                    <button onClick={() => onNavigate("carta")} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors relative rounded-[45px] shrink-0 w-full cursor-pointer">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                          <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">
                            Ver menú
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platos de autor */}
        <div className="col-[1/span_3] content-stretch flex flex-col gap-[32px] items-center justify-center justify-self-stretch overflow-clip py-[32px] relative row-3 self-start shrink-0">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[31px] text-black text-center whitespace-nowrap">
            <p className="leading-[40px]">Platos de autor</p>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[16px] relative size-full">
                <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                    <div className="h-[256px] relative shrink-0 w-full">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                    </div>
                    <Container />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                    <div className="h-[256px] relative shrink-0 w-full">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                    </div>
                    <Container1 />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                </div>
                <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                    <div className="h-[256px] relative shrink-0 w-full">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage2} />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                    </div>
                    <Container2 />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Un Rincón Lleno de Ternura y Magia */}
        <div className="col-[1/span_3] justify-self-stretch relative row-4 self-start shrink-0">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative size-full">
                    <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1d1c0b] text-[31px] w-full">
                      <p className="leading-[40px] mb-0">Un Rincón Lleno de Ternura y</p>
                      <p className="leading-[40px]">Magia</p>
                    </div>
                    <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#524344] text-[16px] w-full">
                      <p className="leading-[24px] mb-0">Nuestro espacio está diseñado como una extensión viva de</p>
                      <p className="leading-[24px] mb-0">nuestro menú. Imagine un santuario lleno de luz bañado en</p>
                      <p className="leading-[24px] mb-0">suaves tonos pastel, donde el minimalismo moderno se</p>
                      <p className="leading-[24px]">encuentra con detalles arquitectónicos lúdicos.</p>
                    </div>
                    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center overflow-clip relative shrink-0 w-full">
                      <div className="bg-[#edf8ef] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]">
                        <div aria-hidden="true" className="absolute border border-[#a6dbaf] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <Icono />
                        <Heading />
                        <Container3 />
                      </div>
                      <div className="bg-[#feeded] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]">
                        <div aria-hidden="true" className="absolute border border-[#f2a5a9] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <Icono1 />
                        <Heading1 />
                        <Container4 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                <div className="aspect-[1240/1240] relative shrink-0 w-full">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
