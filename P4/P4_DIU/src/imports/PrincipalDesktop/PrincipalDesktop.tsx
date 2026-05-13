import svgPaths from "./svg-0jui3ia9n8";
import imgMainContent from "./879f0c9dee554256184c0cd9d2c78cc4e35391b9.png";
import imgCardImage from "./28eceb3392da1b9ae3833739d7dddd4bd2a28a88.png";
import imgCardImage1 from "./e4bbb22083a2ee59cfdf892d970865ef748f848e.png";
import imgCardImage2 from "./0b189f33e451e00ecf83342fb2846feb2bad0b10.png";
import imgImage1 from "./217dbac49d10b3fa1d30ee58b1d50e3061ce808b.png";
import imgLogo1 from "./4723f2994500379cd16539830c4075a18dbfd25e.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center leading-[0] py-[40px] relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#fefbe5] text-[49px] text-shadow-[0px_10px_20px_rgba(0,0,0,0.3),0px_4px_12px_rgba(0,0,0,0.4),0px_2px_4px_rgba(0,0,0,0.5)] w-full">
        <p className="leading-[60px] mb-0">¡Bienvenido al Mundo Gourmet más</p>
        <p className="leading-[60px]">Kawaii de Pokémon!</p>
      </div>
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[25px] text-[rgba(255,255,255,0.95)] text-shadow-[1px_1px_4px_black] w-full">
        <p className="leading-[32px] mb-0">Descubre una aventura culinaria llena de magia y ternura. Nuestros chefs</p>
        <p className="leading-[32px] mb-0">crean platos adorables inspirados en tus Pokémon favoritos para una</p>
        <p className="leading-[32px]">experiencia única y deliciosa.</p>
      </div>
    </div>
  );
}

function Botones() {
  return (
    <div className="relative shrink-0 w-full" data-name="Botones">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[20px] items-center justify-center px-[10px] relative size-full">
          <div className="bg-[#dff2e2] content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0" data-name="Button">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">Reserva tu mesa</p>
          </div>
          <div className="bg-[#cc8b8e] content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0" data-name="Button">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Ver menú</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="col-[1/span_12] h-[1036.125px] justify-self-stretch relative row-2 self-center shrink-0" data-name="Main Content">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none mix-blend-darken object-cover size-full" src={imgMainContent} />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.2)] inset-0 to-[rgba(0,0,0,0)]" />
      </div>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[20px] relative size-full">
          <Frame />
          <Botones />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
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
    <div className="relative shrink-0 w-full" data-name="Container">
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
    <div className="relative shrink-0 w-full" data-name="Container">
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
      <div className="relative shrink-0 w-full" data-name="Carrusel">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-center flex flex-wrap gap-[32px] items-center justify-center px-[16px] relative size-full">
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]" data-name="Card">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full" data-name="Card Image">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage} />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                </div>
                <Container />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            </div>
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]" data-name="Card">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full" data-name="Card Image">
                  <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardImage1} />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
                </div>
                <Container1 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
            </div>
            <div className="bg-white max-w-[363px] relative rounded-[12px] shrink-0 w-[363px]" data-name="Card">
              <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[256px] relative shrink-0 w-full" data-name="Card Image">
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
    <div className="h-[22px] relative shrink-0 w-full" data-name="Icono">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 22">
        <g id="Icono">
          <path d={svgPaths.p4f09bc8} fill="var(--fill-0, #516D56)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
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
    <div className="relative shrink-0 w-full" data-name="Container">
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
    <div className="h-[20px] relative shrink-0 w-full" data-name="Icono">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 242 20">
        <g id="Icono">
          <path d={svgPaths.p2ef76100} fill="var(--fill-0, #795153)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
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
    <div className="relative shrink-0 w-full" data-name="Container">
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
      <div className="bg-[#edf8ef] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]" data-name="Description card">
        <div aria-hidden="true" className="absolute border border-[#a6dbaf] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Icono />
        <Heading />
        <Container3 />
      </div>
      <div className="bg-[#feeded] content-stretch flex flex-col gap-[4px] items-start px-[9px] py-[17px] relative rounded-[12px] shrink-0 w-[260px]" data-name="Description card">
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
      <div className="relative shrink-0 size-[624px]" data-name="image 1">
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
  return <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Espacio" />;
}

export default function PrincipalDesktop() {
  return (
    <div className="bg-[#fffdf3] gap-x-[8px] grid grid-cols-[_____________minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_fit-content(100%)] grid-rows-[repeat(4,fit-content(100%))] relative size-full" data-name="Principal Desktop">
      <MainContent />
      <Frame1 />
      <Frame2 />
      <div className="bg-[#e7e8e8] col-13 content-stretch flex flex-col items-start overflow-clip relative row-[2/span_3] self-stretch shrink-0 w-[20px]" data-name="Vertical Scrollbar">
        <div className="bg-[#807d6e] h-[100px] relative shrink-0 w-full" />
      </div>
      <div className="bg-[#fefadd] col-[1/span_12] content-stretch flex gap-[16px] h-[80px] items-center justify-center overflow-clip p-[16px] relative row-1 shrink-0 w-[1440px]" data-name="Navigation">
        <div className="aspect-[257/255] h-full relative shrink-0" data-name="logo 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
          </div>
        </div>
        <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f2a5a9] text-[49px] whitespace-nowrap">
          <p className="leading-[60px]">PokePoké</p>
        </div>
        <Espacio />
        <div className="bg-[#fefbe5] content-stretch flex h-[64px] items-center px-[10px] relative shrink-0 w-[386.75px]" data-name="NavBar">
          <div className="bg-[#fefbe5] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Carta</p>
            </div>
          </div>
          <div className="bg-[#fefbe5] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Reserva</p>
            </div>
          </div>
          <div className="bg-[#fefbe5] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Contacto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}