import svgPaths from "./svg-qey9m0ewla";

export default function SideMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-end p-[10px] relative size-full" data-name="Side menu">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="close">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2404b080} fill="var(--fill-0, #F2A5A9)" id="Vector" />
          </svg>
        </div>
      </button>
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0" data-name="Menu Lateral">
        <div className="h-[40px] relative shrink-0 w-[244px]" data-name="Option">
          <div className="absolute bg-white inset-0" data-name="Background" />
          <div className="absolute bg-[#d1edd5] bottom-0 h-px left-[16px] right-0" data-name="Border" />
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[16px] text-[#344838] text-[25px] top-[calc(50%-16px)]">Inicio</p>
        </div>
        <div className="h-[40px] relative shrink-0 w-[244px]" data-name="Option">
          <div className="absolute bg-[#fcdfdf] inset-0" data-name="Background" />
          <div className="absolute bg-[#fcdfdf] bottom-0 h-px left-[16px] right-0" data-name="Border" />
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[16px] text-[#344838] text-[25px] top-[calc(50%-16px)]">Carta</p>
        </div>
        <div className="h-[40px] relative shrink-0 w-[244px]" data-name="Option">
          <div className="absolute bg-white inset-0" data-name="Background" />
          <div className="absolute bg-[#d1edd5] bottom-0 h-px left-[16px] right-0" data-name="Border" />
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[16px] text-[#344838] text-[25px] top-[calc(50%-16px)]">Reserva</p>
        </div>
        <div className="h-[40px] relative shrink-0 w-[244px]" data-name="Option">
          <div className="absolute bg-white inset-0" data-name="Background" />
          <div className="absolute bg-[#d1edd5] bottom-0 h-px left-[16px] right-0" data-name="Border" />
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[16px] text-[#344838] text-[25px] top-[calc(50%-16px)]">Contacto</p>
        </div>
      </div>
    </div>
  );
}