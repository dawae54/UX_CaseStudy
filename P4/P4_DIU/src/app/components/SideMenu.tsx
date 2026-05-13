import { createPortal } from "react-dom";
import svgPaths from "../../imports/SideMenu/svg-qey9m0ewla";

interface SideMenuProps {
  isOpen: boolean;
  currentPage: string;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export default function SideMenu({ isOpen, currentPage, onClose, onNavigate }: SideMenuProps) {
  if (!isOpen) return null;

  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  const menuItems = [
    { id: "home", label: "Inicio" },
    { id: "carta", label: "Carta" },
    { id: "reserva", label: "Reserva" },
    { id: "contacto", label: "Contacto" },
  ];

  const menuContent = (
    <div className="fixed inset-0 z-[9999] flex justify-end transition-opacity duration-300" style={{ position: 'fixed', pointerEvents: 'none' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', pointerEvents: 'auto' }} onClick={onClose} />
      <div className="bg-white content-stretch flex flex-col gap-[10px] items-end p-[10px] relative h-full w-[264px] shadow-2xl z-10 transform transition-transform duration-300 ease-out" style={{ pointerEvents: 'auto' }}>
        <button onClick={onClose} className="block cursor-pointer overflow-clip relative shrink-0 size-[24px] hover:opacity-70 transition-opacity">
          <div className="absolute inset-[20.83%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2404b080} fill="#F2A5A9" />
            </svg>
          </div>
        </button>
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="h-[40px] relative w-[244px] cursor-pointer hover:bg-[#fcdfdf] transition-colors"
              >
                <div className={`absolute inset-0 ${isActive ? "bg-[#fcdfdf]" : "bg-white"}`} />
                <div className={`absolute bottom-0 h-px left-[16px] right-0 ${isActive ? "bg-[#fcdfdf]" : "bg-[#d1edd5]"}`} />
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[16px] text-[#344838] text-[25px] top-[calc(50%-16px)] text-left">
                  {item.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(menuContent, document.body);
}
