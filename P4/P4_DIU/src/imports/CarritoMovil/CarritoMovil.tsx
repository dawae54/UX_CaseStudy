import svgPaths from "./svg-8hab727cu5";

function Scrollbar({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#e7e8e8] content-stretch flex flex-col h-[315px] items-start overflow-clip relative w-[20px]"} data-name="Scrollbar">
      <div className="bg-[#807d6e] h-[100px] relative shrink-0 w-full" />
    </div>
  );
}
type AddButtonProps = {
  className?: string;
  state?: "Default" | "Hover" | "Active" | "Disabled";
  type?: "Default" | "Secondary" | "Danger";
};

function AddButton({ className, state = "Default", type = "Default" }: AddButtonProps) {
  const isDangerAndDefault = type === "Danger" && state === "Default";
  const isDangerAndHover = type === "Danger" && state === "Hover";
  const isDefaultAndHover = type === "Default" && state === "Hover";
  const isSecondaryAndDefault = type === "Secondary" && state === "Default";
  const isSecondaryAndHover = type === "Secondary" && state === "Hover";
  return (
    <div className={className || `content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] size-[40px] ${type === "Danger" && state === "Disabled" ? "bg-[#ffd1c9] opacity-25" : type === "Secondary" && state === "Disabled" ? "bg-[#dff2e2] opacity-25" : type === "Default" && state === "Disabled" ? "bg-[#f2a5a9] opacity-25" : type === "Danger" && state === "Active" ? "bg-[#ffbbb0]" : type === "Secondary" && state === "Active" ? "bg-[#d1edd5]" : type === "Default" && state === "Active" ? "bg-[#f2a5a9]" : isDangerAndHover ? "bg-[#ffe6e1] cursor-pointer" : isSecondaryAndHover ? "bg-[#edf8ef] cursor-pointer" : isDefaultAndHover ? "bg-[#fad0d2] cursor-pointer" : isDangerAndDefault ? "bg-[#ffd1c9]" : isSecondaryAndDefault ? "bg-[#dff2e2]" : "bg-[#f6b9bb]"}`}>
      {["Default", "Hover"].includes(state) && <div aria-hidden="true" className={`absolute border-0 border-solid inset-0 pointer-events-none rounded-[20px] ${isDangerAndHover ? "border-[#ffe6e1]" : isSecondaryAndHover ? "border-white" : isDefaultAndHover ? "border-[#fad0d2]" : isDangerAndDefault ? "border-[#ffd1c9]" : isSecondaryAndDefault ? "border-[#dff2e2]" : "border-[#f6b9bb]"}`} />}
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p38adf480} fill={isSecondaryAndDefault || isDangerAndDefault || state === "Hover" || state === "Active" || state === "Disabled" ? "var(--fill-0, #F2A5A9)" : "var(--fill-0, white)"} id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FilaPlato({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[10px] items-center justify-end overflow-clip p-[10px] relative w-[604px]"} data-name="fila plato">
      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Llamarada de Charmander</p>
      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
    </div>
  );
}

function Close({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="close">
      <div className="absolute inset-[20.83%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p2404b080} fill="var(--fill-0, #F2A5A9)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type CloseButtonProps = {
  className?: string;
  state?: "Predeterminada" | "Selected";
};

function CloseButton({ className, state = "Predeterminada" }: CloseButtonProps) {
  if (state === "Selected") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="State=Selected">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
          <Close className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
        <div aria-hidden="true" className="absolute border border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    );
  }
  return (
    <button className={className || "content-stretch cursor-pointer flex flex-col items-start overflow-clip relative"} data-name="State=Predeterminada">
      <Close className="overflow-clip relative shrink-0 size-[24px]" />
    </button>
  );
}

export default function CarritoMovil({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#fffdf3] content-stretch flex flex-col gap-[10px] h-[640px] items-center justify-center overflow-clip p-[10px] relative w-[402px]"} data-name="Carrito Movil">
      <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-full">
        <CloseButton className="content-stretch cursor-pointer flex flex-col items-start overflow-clip relative shrink-0" />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start justify-center min-h-px relative w-full">
        <div className="bg-[#dff2e2] flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Pedido">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
              <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[39px] text-black whitespace-nowrap">Pedido</p>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-x-clip overflow-y-auto relative rounded-[12px] w-full">
                <FilaPlato className="relative shrink-0 w-full" />
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Bol de hierba de Bulbasaur</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Capricho de Sylveon</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Carpaccio de Bosque de Oddish</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Sashimi Oceánico de Squirtle</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Udon Ígneo de Flareon</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Ensalada de Frutas de Togepi</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Tarta de Bayas de Eevee</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Sopa Mística de Alakazam</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Tacos de Arena de Sandshrew</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Pizza Dragón de Dragonite</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Batido Eléctrico de Pikachu</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Curry de Camino de Gyarados</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="fila plato">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <div className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" data-name="RemoveButton">
                        <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove">
                          <div className="absolute inset-[45.83%_20.83%]" data-name="Vector">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                              <path d="M0 2H14V0H0V2Z" fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">1</p>
                      <AddButton className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px]" />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">Risotto de Niebla de Gastly</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">00,00€</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scrollbar className="bg-[#e7e8e8] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[20px]" />
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative shrink-0 w-[382px]" data-name="Confirmar pedido">
        <div className="relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[10px] items-start p-[10px] relative size-full">
              <p className="font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[48px] relative shrink-0 text-[39px] text-black whitespace-nowrap">Total:</p>
              <div className="flex-[1_0_0] min-w-px relative self-stretch" />
              <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[48px] relative shrink-0 text-[39px] text-black whitespace-nowrap">00,00€</p>
            </div>
          </div>
        </div>
        <div className="bg-[#cc8b8e] relative rounded-[45px] shrink-0 w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
              <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Confirmar pedido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}