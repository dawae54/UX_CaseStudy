function Frame() {
  return <div className="flex-[1_0_0] min-h-px relative w-full" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <button className="bg-[#dff2e2] cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">Cancelar</p>
          </div>
        </div>
      </button>
      <div className="bg-[#cc8b8e] flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PagoMovil() {
  return (
    <div className="bg-[#fffdf3] content-stretch flex flex-col items-start p-[32px] relative size-full" data-name="Pago Movil">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Formulario Pago">
        <div className="h-[96px] relative shrink-0 w-full" data-name="InputGroup">
          <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4" data-name="Input">
            <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)]">​</p>
          </div>
          <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Nº tarjeta</p>
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#8e9e8b] text-[14px]">​</p>
        </div>
        <div className="h-[96px] relative shrink-0 w-full" data-name="InputGroup">
          <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4" data-name="Input">
            <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)]">​</p>
          </div>
          <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Fecha de caducidad</p>
          <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#8e9e8b] text-[14px]">​</p>
        </div>
        <div className="h-[96px] relative shrink-0 w-full" data-name="SelectGroup">
          <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]" data-name="Input">
            <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)]">​</p>
          </div>
          <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">CVV</p>
          <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal inset-[79.17%_0_0_0] leading-[20px] text-[#666] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            ​
          </p>
        </div>
        <Frame />
        <Frame1 />
      </div>
    </div>
  );
}