import svgPaths from "./svg-orz37unwco";
import imgLogo1 from "./4723f2994500379cd16539830c4075a18dbfd25e.png";

function Heading() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-px not-italic relative text-[#364153] text-[24px]">Seleccionar Fecha y Hora</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[90.875px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#f2a5a9] text-[20px] top-[-0.2px] tracking-[0.38px] whitespace-nowrap">May 2026</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[11.438px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6875 11.4375">
        <path d={svgPaths.p32fc3800} fill="var(--fill-0, #F2A5A9)" id="Vector" />
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.438px] items-start left-[98.88px] top-[6.27px] w-[6.688px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-[10px] w-[105.563px]" data-name="Container">
      <Paragraph />
      <Container2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-[17.313px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_0.33%_0_0.03%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
            <path d={svgPaths.p1575080} fill="var(--fill-0, #F2A5A9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonPreviousMonth() {
  return (
    <div className="h-[17.313px] relative shrink-0 w-[10px]" data-name="Button - Previous month">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex-[1_0_0] h-[17.313px] min-w-px relative" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_0.03%_0_0.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.96397 17.3125">
            <path d={svgPaths.p271d1f00} fill="var(--fill-0, #F2A5A9)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonNextMonth() {
  return (
    <div className="h-[17.313px] relative shrink-0 w-[10px]" data-name="Button - Next month">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[17.313px] items-center justify-between left-[281px] top-[13.34px] w-[30px]" data-name="Container">
      <ButtonPreviousMonth />
      <ButtonNextMonth />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[44px] left-[16px] top-[8px] w-[311px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[27.225px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[14px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">SUN</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[2.387px] pr-[2.388px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[30.1px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[15.5px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">MON</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[0.95px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[25.775px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[13px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">TUE</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[3.112px] pr-[3.113px] relative size-full">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[30.1px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[15.5px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">WED</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[0.95px] relative size-full">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[26.488px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[13.5px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">THU</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[2.75px] pr-[2.762px] relative size-full">
        <Paragraph5 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20.712px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[10.5px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">FRI</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[5.638px] pr-[5.65px] relative size-full">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[24.087px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[18px] left-[12.5px] text-[13px] text-[rgba(60,60,67,0.3)] text-center top-[-0.4px] tracking-[-0.078px] whitespace-nowrap">SAT</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[3.95px] pr-[3.962px] relative size-full">
        <Paragraph7 />
      </div>
    </div>
  );
}

function CalendarDayRow() {
  return (
    <div className="content-stretch flex gap-[9.163px] h-[18px] items-center relative shrink-0" data-name="CalendarDayRow">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-0 items-start left-[16px] px-[16px] top-[52px] w-[311px]" data-name="Container">
      <CalendarDayRow />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[30px] left-[258.74px] top-[85px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">1</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[30px] left-[305.24px] top-[85px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">2</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[30px] left-[26.24px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[30px] left-[72.74px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">4</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[30px] left-[119.24px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">5</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[30px] left-[165.74px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[30px] left-[212.24px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">7</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[30px] left-[258.74px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">8</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[30px] left-[305.24px] top-[131px] w-[11.512px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">9</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute left-0 size-[32px] top-[8px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[4.49px] text-[#f2a5a9] text-[20px] top-[0.2px] tracking-[0.38px] whitespace-nowrap">10</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[30px] left-[51.74px] top-[9px] w-[21.525px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[#f2a5a9] text-[20px] top-[-0.8px] tracking-[0.38px] whitespace-nowrap">11</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[168px] w-[311px]" data-name="Container">
      <Container22 />
      <Container23 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[97.49px] text-[#f2a5a9] text-[20px] top-[8.2px] tracking-[0.38px] whitespace-nowrap">12</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[143.99px] text-[#f2a5a9] text-[20px] top-[8.2px] tracking-[0.38px] whitespace-nowrap">13</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[190.49px] text-[#f2a5a9] text-[20px] top-[8.2px] tracking-[0.38px] whitespace-nowrap">14</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[236.99px] text-[#f2a5a9] text-[20px] top-[8.2px] tracking-[0.38px] whitespace-nowrap">15</p>
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[283.49px] text-[#f2a5a9] text-[20px] top-[8.2px] tracking-[0.38px] whitespace-nowrap">16</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[48px] leading-[30px] left-[16px] text-[#f2a5a9] text-[20px] top-[214px] tracking-[0.38px] w-[311px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-[4.49px] top-[8.2px]">17</p>
      <p className="absolute left-[50.99px] top-[8.2px]">18</p>
      <p className="absolute left-[97.49px] top-[8.2px]">19</p>
      <p className="absolute left-[143.99px] top-[8.2px]">20</p>
      <p className="absolute left-[190.49px] top-[8.2px]">21</p>
      <p className="absolute left-[236.99px] top-[8.2px]">22</p>
      <p className="absolute left-[283.49px] top-[8.2px]">23</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute font-['Arimo:Regular',sans-serif] font-normal h-[48px] leading-[30px] left-[16px] text-[#f2a5a9] text-[20px] top-[260px] tracking-[0.38px] w-[311px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-[4.49px] top-[8.2px]">24</p>
      <p className="absolute left-[50.99px] top-[8.2px]">25</p>
      <p className="absolute left-[97.49px] top-[8.2px]">26</p>
      <p className="absolute left-[143.99px] top-[8.2px]">27</p>
      <p className="absolute left-[190.49px] top-[8.2px]">28</p>
      <p className="absolute left-[236.99px] top-[8.2px]">29</p>
      <p className="absolute left-[283.49px] top-[8.2px]">30</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#f2a5a9] left-[16px] rounded-[100px] size-[32px] top-[314px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-[4.49px] text-[20px] text-white top-[0.2px] tracking-[0.38px] whitespace-nowrap">31</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24px] left-[16.5px] top-[394px] w-[45.225px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#a56f72] text-[20px] top-[-0.2px] tracking-[0.38px] whitespace-nowrap">Time</p>
    </div>
  );
}

function Option() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option3() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option4() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option5() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option6() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option7() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option8() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option9() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option10() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option11() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option12() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option13() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option14() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option15() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option16() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option17() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option18() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option19() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option20() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option21() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option22() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option23() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] h-[36px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Dropdown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[-310.538px] pr-[370.538px] pt-[-563.987px] relative size-full">
        <Option />
        <Option1 />
        <Option2 />
        <Option3 />
        <Option4 />
        <Option5 />
        <Option6 />
        <Option7 />
        <Option8 />
        <Option9 />
        <Option10 />
        <Option11 />
        <Option12 />
        <Option13 />
        <Option14 />
        <Option15 />
        <Option16 />
        <Option17 />
        <Option18 />
        <Option19 />
        <Option20 />
        <Option21 />
        <Option22 />
        <Option23 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[33px] relative shrink-0 w-[6.463px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[33px] left-0 text-[#a56f72] text-[22px] top-0 tracking-[0.35px] whitespace-nowrap">:</p>
      </div>
    </div>
  );
}

function Option24() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option25() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option26() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option27() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option28() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option29() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option30() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option31() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option32() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option33() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option34() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option35() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option36() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option37() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option38() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option39() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option40() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option41() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option42() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option43() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option44() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option45() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option46() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option47() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option48() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option49() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option50() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option51() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option52() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option53() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option54() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option55() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option56() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option57() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option58() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option59() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option60() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option61() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option62() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option63() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option64() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option65() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option66() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option67() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option68() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option69() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option70() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option71() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option72() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option73() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option74() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option75() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option76() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option77() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option78() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option79() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option80() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option81() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option82() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Option83() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] h-[36px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Dropdown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[-393px] pr-[453px] pt-[-563.987px] relative size-full">
        <Option24 />
        <Option25 />
        <Option26 />
        <Option27 />
        <Option28 />
        <Option29 />
        <Option30 />
        <Option31 />
        <Option32 />
        <Option33 />
        <Option34 />
        <Option35 />
        <Option36 />
        <Option37 />
        <Option38 />
        <Option39 />
        <Option40 />
        <Option41 />
        <Option42 />
        <Option43 />
        <Option44 />
        <Option45 />
        <Option46 />
        <Option47 />
        <Option48 />
        <Option49 />
        <Option50 />
        <Option51 />
        <Option52 />
        <Option53 />
        <Option54 />
        <Option55 />
        <Option56 />
        <Option57 />
        <Option58 />
        <Option59 />
        <Option60 />
        <Option61 />
        <Option62 />
        <Option63 />
        <Option64 />
        <Option65 />
        <Option66 />
        <Option67 />
        <Option68 />
        <Option69 />
        <Option70 />
        <Option71 />
        <Option72 />
        <Option73 />
        <Option74 />
        <Option75 />
        <Option76 />
        <Option77 />
        <Option78 />
        <Option79 />
        <Option80 />
        <Option81 />
        <Option82 />
        <Option83 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-[186.04px] top-[388px] w-[142.463px]" data-name="Container">
      <Dropdown />
      <Text />
      <Dropdown1 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-white drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] h-[440px] relative rounded-[13px] shrink-0 w-full" data-name="Calendar">
      <Container />
      <Container4 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Paragraph8 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f9fafb] drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] h-[116px] not-italic relative rounded-[10px] shrink-0 w-full whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#4a5565] text-[14px] top-[15.8px]">Fecha y hora seleccionada:</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[16px] text-[#1e2939] text-[18px] top-[42.6px]">domingo, 31 de mayo de 2026</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[16px] text-[#1e2939] text-[18px] top-[70.6px]">20:33</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[206px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <div className="bg-[#cc8b8e] content-stretch flex items-center justify-center p-[16px] relative rounded-[45px] shrink-0" data-name="Button">
        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Seleccioniar fecha</p>
      </div>
    </div>
  );
}

function Espacio() {
  return <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Espacio" />;
}

function TextArea() {
  return (
    <div className="content-stretch flex h-[92.4px] items-start overflow-clip relative shrink-0 w-full" data-name="Text Area">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[#909396] text-[16px] text-ellipsis whitespace-nowrap">Alergias, preferencias de mesa, etc.</p>
    </div>
  );
}

function Container30() {
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
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#333] text-[18px] w-[min-content]">Peticiones especiales (opcional)</p>
      <Container30 />
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

export default function ReservasDesktop() {
  return (
    <div className="bg-[#fffdf3] gap-x-[8px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[___fit-content(100%)_minmax(0,1fr)_minmax(0,1fr)] relative size-full" data-name="Reservas Desktop">
      <div className="col-[1/span_5] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] justify-self-stretch relative rounded-[14px] row-[2/span_2] self-stretch shrink-0" data-name="Seleccion fecha">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[18px] relative size-full">
            <Heading />
            <Calendar />
            <Container28 />
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
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6b9bb] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Reserva</p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />
          </div>
          <div className="bg-[#fefbe5] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative" data-name="NavTab">
            <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#516d56] text-[25px] text-center whitespace-nowrap">
              <p className="leading-[32px]">Contacto</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-[6/span_7] justify-self-stretch relative row-[2/span_2] self-stretch shrink-0" data-name="Formulario Reserva">
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
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Teléfono</p>
              <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                ​
              </p>
            </div>
            <div className="h-[96px] relative shrink-0 w-full" data-name="SelectGroup">
              <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]" data-name="Input">
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)]">​</p>
              </div>
              <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Número de personas</p>
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
    </div>
  );
}