import svgPaths from "./svg-4nocnyvb43";
import imgLogo1 from "./4723f2994500379cd16539830c4075a18dbfd25e.png";

function TextArea() {
  return <div className="h-[92.4px] relative shrink-0 w-full" data-name="Text Area" />;
}

function Container() {
  return (
    <div className="bg-[#edf8ef] flex-[1_0_0] min-h-px relative rounded-[25px] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[25px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[15.8px] pr-[13.8px] pt-[12.8px] relative size-full">
        <TextArea />
      </div>
    </div>
  );
}

function SelectGroup() {
  return (
    <div className="content-stretch flex flex-col h-[124px] items-center relative shrink-0 w-full" data-name="SelectGroup">
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">Mensaje</p>
      <Container />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_0_4.7%_0] leading-[20px] text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ​
      </p>
    </div>
  );
}

function Frame() {
  return <div className="h-[35px] relative shrink-0 w-full" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="bg-[#cc8b8e] flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Enviar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-w-px relative" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#333] text-[16px] top-[0.2px] whitespace-nowrap">Dirección</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Icon />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#516d56] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Calle Palmera 123</p>
        <p className="leading-[24px]">28001 Madrid, España</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[79px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame3 />
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-w-px relative" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#333] text-[16px] top-[0.2px] whitespace-nowrap">Teléfono</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Icon1 />
      <Heading1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#516d56] text-[16px] top-[-0.4px] whitespace-nowrap">+34 912 345 678</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[55px] items-start relative shrink-0 w-[113.863px]" data-name="Container">
      <Frame4 />
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2bf8f980} id="Vector" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p311e6900} id="Vector_2" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-w-px relative" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#333] text-[16px] top-[0.2px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Icon2 />
      <Heading2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#516d56] text-[16px] top-[-0.4px] whitespace-nowrap">hola@pokepoke.es</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[55px] items-start relative shrink-0 w-[140.338px]" data-name="Container">
      <Frame5 />
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[237px] items-start relative shrink-0 w-[327.2px]" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, #F2A5A9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-w-px relative" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#333] text-[16px] top-[0.2px] whitespace-nowrap">Horario</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Icon3 />
      <Heading3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#516d56] text-[16px] top-[-0.4px] whitespace-nowrap">Lunes - Viernes: 12:00 - 23:00</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#516d56] text-[16px] top-[-0.4px] whitespace-nowrap">Sábados: 13:00 - 00:00</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#516d56] text-[16px] top-[-0.4px] whitespace-nowrap">Domingos: 13:00 - 22:00</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[115px] items-start relative shrink-0 w-[211.875px]" data-name="Container">
      <Frame2 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#333] text-[16px] top-[0.2px] whitespace-nowrap">Síguenos</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4fdb300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39557800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.5 6.5H17.51" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="bg-[#f2a5a9] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Link - Instagram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d19f300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="bg-[#f2a5a9] relative rounded-[26843500px] shrink-0 size-[48px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkInstagram />
      <LinkFacebook />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[87px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[237px] items-start relative shrink-0 w-[327.2px]" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[72.8px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1edd5] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#516d56] text-[16px] w-full">¿Tienes alguna pregunta? Completa el formulario de contacto y te responderemos lo antes posible.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[487.4px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1edd5] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[32px] py-[16px] relative size-full">
          <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[40px] relative shrink-0 text-[#f2a5a9] text-[31px] text-center whitespace-nowrap">Poke Poke - Restaurante</p>
          <Container2 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Espacio() {
  return <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Espacio" />;
}

export default function ContactoDesktop() {
  return (
    <div className="bg-[#fffdf3] gap-x-[8px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[__fit-content(100%)_minmax(0,3fr)] relative size-full" data-name="Contacto Desktop">
      <div className="col-[7/span_6] justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Formulario Contacto">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[32px] relative size-full">
            <div className="h-[96px] relative shrink-0 w-full" data-name="InputGroup">
              <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4" data-name="Input">
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)]">​</p>
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">{` Nombre completo`}</p>
              <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#8e9e8b] text-[14px]">​</p>
            </div>
            <div className="h-[96px] relative shrink-0 w-full" data-name="InputGroup">
              <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4" data-name="Input">
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)]">​</p>
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Email</p>
              <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#8e9e8b] text-[14px]">​</p>
            </div>
            <div className="h-[96px] relative shrink-0 w-full" data-name="SelectGroup">
              <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]" data-name="Input">
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)]">​</p>
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Asunto</p>
              <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                ​
              </p>
            </div>
            <SelectGroup />
            <Frame />
            <Frame1 />
          </div>
        </div>
      </div>
      <div className="col-[1/span_6] justify-self-stretch relative row-2 self-stretch shrink-0" data-name="RestaurantInfo">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pt-[48px] px-[24px] relative size-full">
            <Container1 />
          </div>
        </div>
      </div>
      <div className="bg-[#fefadd] col-[1/span_12] content-stretch flex gap-[10px] h-[80px] items-center overflow-clip p-[10px] relative row-1 shrink-0 w-[1440px]" data-name="Navigation">
        <div className="aspect-[257/255] h-full relative shrink-0" data-name="logo 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
          </div>
        </div>
        <p className="font-['Quicksand:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#f2a5a9] text-[49px] whitespace-nowrap">PokePoké</p>
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
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6b9bb] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Contacto</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />
          </div>
        </div>
      </div>
    </div>
  );
}