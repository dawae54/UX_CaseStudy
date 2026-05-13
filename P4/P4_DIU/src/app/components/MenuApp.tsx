import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../../imports/CartaDesktop/svg-hub6bkrphw";
import svgPathsMobile from "../../imports/CartaMovil/svg-1euphc6qmp";
import svgPathsCart from "../../imports/CarritoMovil/svg-8hab727cu5";
import imgLogo1 from "../../imports/CartaDesktop/4723f2994500379cd16539830c4075a18dbfd25e.png";
import imgCardImage from "../../imports/CartaDesktop/e754ccaa31011052c45553c04f0e5e21d2e3a02b.png";
import imgCardImage1 from "../../imports/CartaDesktop/df78de3e908799f9cbe5fb78bc755588f8f95328.png";
import imgCardImage2 from "../../imports/CartaDesktop/73ca68e88c389190f3aa6d5657cdb5b1f12f9370.png";
import imgCardImage3 from "../../imports/CartaDesktop/dbc29382eadfa6c502c274b6b97f6c78b0da0c44.png";
import imgCardImage4 from "../../imports/CartaDesktop/538f917c96832b3c75482c7d04c1909cb82a36a6.png";
import imgCardImage5 from "../../imports/CartaDesktop/1e26ef7a573a5fa601ddb8c0dc5325acd8e50696.png";
import imgCardImage6 from "../../imports/CartaDesktop/501ecf1f471b861969e50f6d5d157f1c4b5cbe85.png";
import imgCardImage7 from "../../imports/CartaDesktop/cba8fb2f85a2652e76b6c182d547f43702c649d9.png";
import imgCardImage8 from "../../imports/CartaDesktop/6ac293fc2f35f3fdb5e720a5a8753dc8badd79b2.png";
import imgCardImage9 from "../../imports/CartaDesktop/1d303cf78b55a5ca58d2d96d47a6cb720834dcc3.png";
import imgCardImage10 from "../../imports/CartaDesktop/78a2f414e08eb1cc2933052f853b20739009cfe1.png";
import imgCardImage11 from "../../imports/CartaDesktop/75e74c631549c687f60c5de6dcb22e8f811cb65f.png";
import SideMenu from "./SideMenu";

type Section = "Fuego" | "Planta" | "Agua" | "Hada";

interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CartItem extends Dish {
  quantity: number;
}

const menuData: Record<Section, Dish[]> = {
  Fuego: [
    {
      name: "Llamarada de Charmander",
      description: "Un exquisito curry rojo picante de autor con estética de tipo fuego. Elaborado con pollo de corral marinado en especias orientales, servido sobre arroz basmati aromático y decorado con chips crujientes de chile rojo. El equilibrio perfecto entre picante y sabor que despertará tus sentidos.",
      price: "18,00€",
      image: imgCardImage,
    },
    {
      name: "Udon Ígneo de Flareon",
      description: "Fideos gruesos udon artesanales en un caldo picante infusionado con chile habanero, jengibre fresco y citronela. Coronado con tempura crujiente de vegetales, huevo mollet y crujientes de fuego. Una experiencia intensa que calienta el alma con cada sorbo.",
      price: "20,00€",
      image: imgCardImage1,
    },
    {
      name: "Bocados de Magby",
      description: "Pequeños aperitivos de tempura picante elaborados con langostinos tigre y vegetales frescos. Bañados en una salsa reducida de sriracha artesanal y miel de flores silvestres. Explosivos, elegantes y adictivos. Perfectos para compartir... o no.",
      price: "14,00€",
      image: imgCardImage2,
    },
  ],
  Planta: [
    {
      name: "Bol de Hierba de Bulbasaur",
      description: "Un bowl vibrante y nutritivo repleto de quinoa orgánica, edamame, aguacate cremoso, espinacas baby, pepino, rábano watermelon y semillas de sésamo tostado. Aderezado con nuestra exclusiva vinagreta de jengibre y lima que aporta frescura y vitalidad en cada bocado.",
      price: "15,00€",
      image: imgCardImage3,
    },
    {
      name: "Onigiri de Leafeon",
      description: "Un refinado conjunto de onigiris vegetales que rinden homenaje a la armonía de la naturaleza. Arroz premium japonés con rellenos de aguacate, pepino, espárragos salteados y pickles tradicionales. Coronado con brotes tiernos de microgreens y algas nori crujientes.",
      price: "16,00€",
      image: imgCardImage4,
    },
    {
      name: "Carpaccio de Bosque de Oddish",
      description: "Finas láminas de remolacha golden y candy infusionadas en aceites aromáticos de hierbas del jardín. Acompañadas de rábanos multicolor en espiral, rúcula fresca, queso de cabra suave y reducción de vinagre balsámico. Una presentación artística que celebra los sabores puros de la tierra.",
      price: "14,00€",
      image: imgCardImage5,
    },
  ],
  Agua: [
    {
      name: "Sashimi Oceánico de Squirtle",
      description: "Selección premium de pescados del día cortados por nuestro maestro sushiman. Incluye atún rojo, salmón salvaje noruego, lubina mediterránea y hamachi. Servido con wasabi fresco rallado, jengibre encurtido artesanal y salsas de soja de alta calidad. La pureza del océano en tu mesa.",
      price: "22,00€",
      image: imgCardImage6,
    },
    {
      name: "Pasta Cristalina de Vaporeon",
      description: "Pasta artesanal elaborada en casa con una delicada salsa ligera de mariscos frescos, almejas, mejillones y gambas. Perfumada con flores comestibles azules de borraja y pétalos de malva. Refrescante, sofisticada y visualmente impactante como las aguas cristalinas del mar.",
      price: "19,00€",
      image: imgCardImage7,
    },
    {
      name: "Risotto de Algas de Lapras",
      description: "Arroz carnaroli meloso cocinado lentamente con caldo de pescado casero. Incorpora algas wakame, espirulina y nori, creando notas profundas de umami marino. Finalizado con una emulsión de plancton azul comestible que evoca la paz y misterio de los mares profundos.",
      price: "24,00€",
      image: imgCardImage8,
    },
  ],
  Hada: [
    {
      name: "Mousse de Nube de Jigglypuff",
      description: "Un adorable mousse esculpido con la forma de Jigglypuff, elaborado con una mousse de fresa ultraligera y suave como una nube. Cubierto de fondant rosa pastel y decorado con detalles comestibles que brillan. Tan esponjoso y dulce que te hará cantar de felicidad con cada bocado.",
      price: "10,00€",
      image: imgCardImage9,
    },
    {
      name: "Capricho de Sylveon",
      description: "Un postre de cintas de azúcar artesanal y crema de vainilla con tonos pastel y esencia de rosas. Decorado con pétalos de flores comestibles y acabado con un delicado brillo perlado. Cada bocado es una experiencia mágica que evoca la dulzura y elegancia de las hadas.",
      price: "12,00€",
      image: imgCardImage10,
    },
    {
      name: "Domo de Fantasía de Togepi",
      description: "Un domo de chocolate blanco con patrones pastel que oculta un corazón de frutos rojos y flores silvestres. Al romperlo, libera un aroma encantador y revela una sorpresa de mousse de fresa, frambuesa y lavanda. Una obra de arte comestible llena de alegría y magia.",
      price: "13,00€",
      image: imgCardImage11,
    },
  ],
};

function AddButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f2a5a9] transition-colors">
      <div aria-hidden="true" className="absolute border-0 border-[#f6b9bb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[20.83%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p38adf480} fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RemoveButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#f6b9bb] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[20px] shrink-0 size-[40px] cursor-pointer hover:bg-[#f2a5a9] transition-colors">
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[45.83%_20.83%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M0 2H14V0H0V2Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DishCard({ name, description, price, image, onAdd, onClick }: { name: string; description: string; price: string; image: string; onAdd: () => void; onClick: () => void }) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[320px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div onClick={onClick} className="h-[256px] relative shrink-0 w-full cursor-pointer">
          <img alt={name} className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={image} />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full" />
        </div>
        <div className="h-[228px] relative shrink-0 w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center pb-[16px] px-[16px] relative size-full">
              <div onClick={onClick} className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[25px] text-black w-full cursor-pointer hover:text-[#f6b9bb] transition-colors">
                <p className="leading-[32px]">{name}</p>
              </div>
              <div onClick={onClick} className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[24px] overflow-hidden relative shrink-0 text-[#524344] text-[16px] w-full cursor-pointer" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' } as React.CSSProperties}>
                <p className="leading-[24px]">{description}</p>
              </div>
              <div className="flex-[1_0_0] min-h-px relative w-full">
                <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[10px] items-end justify-center pt-[16px] px-[16px] relative size-full">
                    <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[25px] text-black w-[84px]">
                      <p className="leading-[32px]">{price}</p>
                    </div>
                    <div className="flex-[1_0_0] h-full min-w-px relative" />
                    <AddButton onClick={onAdd} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2e9cd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

interface MenuAppProps {
  onNavigate?: (page: string) => void;
}

function MobileAddressOverlay({ onClose, onContinue }: { onClose: () => void; onContinue: () => void }) {
  const [calle, setCalle] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");

  const overlay = (
    <div className="fixed inset-0 z-[9999] flex items-end" style={{ position: 'fixed' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onClick={onClose} />
      <div className="bg-[#fffdf3] content-stretch flex flex-col items-start p-[32px] relative w-full rounded-t-[24px] shadow-2xl animate-slide-up min-h-[70vh] max-h-[90vh] overflow-y-auto" style={{ pointerEvents: 'auto', animation: 'slideUp 0.3s ease-out' }}>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full">
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
              <input
                type="text"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Calle</p>
          </div>
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
              <input
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Número</p>
          </div>
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]">
              <input
                type="text"
                value={piso}
                onChange={(e) => setPiso(e.target.value)}
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Piso</p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-full" />
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <button onClick={onClose} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">Cancelar</p>
                </div>
              </div>
            </button>
            <button onClick={onContinue} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Continuar</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}

function MobilePaymentOverlay({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");

  const overlay = (
    <div className="fixed inset-0 z-[9999] flex items-end" style={{ position: 'fixed' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onClick={onClose} />
      <div className="bg-[#fffdf3] content-stretch flex flex-col items-start p-[32px] relative w-full rounded-t-[24px] shadow-2xl min-h-[70vh] max-h-[90vh] overflow-y-auto" style={{ pointerEvents: 'auto', animation: 'slideUp 0.3s ease-out' }}>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full">
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
              <input
                type="text"
                value={tarjeta}
                onChange={(e) => setTarjeta(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Nº tarjeta</p>
          </div>
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="absolute bg-[#edf8ef] border border-[#d1edd5] border-solid bottom-[33.33%] left-0 right-0 rounded-[45px] top-1/4">
              <input
                type="text"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                placeholder="MM/AA"
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#0b0d10] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">Fecha de caducidad</p>
          </div>
          <div className="h-[96px] relative shrink-0 w-full">
            <div className="-translate-y-1/2 absolute bg-[#edf8ef] border border-[#d1edd5] border-solid h-[48px] left-0 right-0 rounded-[45px] top-[calc(50%+4px)]">
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[15px] right-[13px] text-[#333] text-[25px] top-[calc(50%-16px)] bg-transparent outline-none w-[calc(100%-28px)]"
              />
            </div>
            <p className="absolute bottom-3/4 font-['Quicksand:Regular',sans-serif] font-normal leading-[24px] left-0 right-0 text-[#333] text-[18px] top-0">CVV</p>
          </div>
          <div className="flex-[1_0_0] min-h-px relative w-full" />
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <button onClick={onClose} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#344838] text-[25px] text-center whitespace-nowrap">Cancelar</p>
                </div>
              </div>
            </button>
            <button onClick={onConfirm} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors cursor-pointer flex-[1_0_0] h-[48px] min-w-px relative rounded-[45px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Confirmar</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}

function MobileCartOverlay({ cart, onClose, onConfirm, onAdd, onRemove }: { cart: CartItem[]; onClose: () => void; onConfirm: () => void; onAdd: (item: CartItem) => void; onRemove: (dishName: string) => void }) {
  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(",", ".").replace("€", ""));
  };

  const calculateTotal = (): string => {
    const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
    return total.toFixed(2).replace(".", ",") + "€";
  };

  const overlay = (
    <div className="fixed inset-0 z-[9999] flex items-end" style={{ position: 'fixed' }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onClick={onClose} />
      <div className="bg-[#fffdf3] content-stretch flex flex-col items-start p-[32px] relative w-full rounded-t-[24px] shadow-2xl min-h-[70vh] max-h-[90vh] overflow-y-auto" style={{ pointerEvents: 'auto', animation: 'slideUp 0.3s ease-out' }}>
        <button onClick={onClose} className="absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center z-10 cursor-pointer">
          <svg className="w-[14px] h-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPathsCart.p2404b080} fill="#524344" />
          </svg>
        </button>

        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full">
          <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] mb-[24px] relative shrink-0 text-[40px] text-black whitespace-nowrap">
            <p className="leading-[56px]">Pedido</p>
          </div>

          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-x-clip overflow-y-auto relative w-full mb-[24px]">
            {cart.length === 0 ? (
              <div className="flex items-center justify-center w-full h-full">
                <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[#524344] text-[20px] text-center">
                  No hay platos en el pedido
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.name} className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                      <RemoveButton onClick={() => onRemove(item.name)} />
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">{item.quantity}</p>
                      <AddButton onClick={() => onAdd(item)} />
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">{item.name}</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">{(parsePrice(item.price) * item.quantity).toFixed(2).replace(".", ",")}€</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="relative shrink-0 w-full mb-[16px]">
            <div className="flex flex-row items-start justify-center relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[56px] min-w-px relative text-[40px] text-black whitespace-nowrap">Total:</p>
              <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[56px] relative shrink-0 text-[40px] text-black whitespace-nowrap">{calculateTotal()}</p>
            </div>
          </div>

          <button onClick={onConfirm} disabled={cart.length === 0} className={`${cart.length > 0 ? 'bg-[#cc8b8e] hover:bg-[#b87b7e] cursor-pointer' : 'bg-[#e0c5c6] cursor-not-allowed'} transition-colors relative rounded-[45px] shrink-0 w-full h-[48px]`}>
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Confirmar pedido</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}

export default function MenuApp({ onNavigate }: MenuAppProps) {
  const [activeSection, setActiveSection] = useState<Section>("Fuego");
  const [activeTopNav, setActiveTopNav] = useState<"Carta" | "Reserva" | "Contacto">("Carta");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<"none" | "address" | "payment">("none");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileCart, setShowMobileCart] = useState(false);
  const desktopScrollRef = useRef<HTMLDivElement | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const desktopSectionRefs = useRef<Record<Section, HTMLDivElement | null>>({
    Fuego: null,
    Planta: null,
    Agua: null,
    Hada: null,
  });
  const mobileSectionRefs = useRef<Record<Section, HTMLDivElement | null>>({
    Fuego: null,
    Planta: null,
    Agua: null,
    Hada: null,
  });

  const scrollToSection = (section: Section) => {
    setActiveSection(section);

    // Check if mobile or desktop
    const isMobile = window.innerWidth < 768;
    const scrollContainer = isMobile ? mobileScrollRef.current : desktopScrollRef.current;
    const sectionElement = isMobile ? mobileSectionRefs.current[section] : desktopSectionRefs.current[section];

    if (scrollContainer && sectionElement) {
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const sectionTop = sectionElement.getBoundingClientRect().top;
      const scrollOffset = sectionTop - containerTop + scrollContainer.scrollTop;

      scrollContainer.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const addToCart = (dish: Dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dish.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dish.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishName: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dishName);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.name === dishName ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.name !== dishName);
    });
  };

  const parsePrice = (price: string): number => {
    return parseFloat(price.replace(",", ".").replace("€", ""));
  };

  const calculateTotal = (): string => {
    const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
    return total.toFixed(2).replace(".", ",") + "€";
  };

  const sections: Section[] = ["Fuego", "Planta", "Agua", "Hada"];

  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <SideMenu isOpen={menuOpen} currentPage="carta" onClose={() => setMenuOpen(false)} onNavigate={onNavigate || (() => {})} />

      {showMobileCart && isMobile && (
        <MobileCartOverlay
          cart={cart}
          onClose={() => setShowMobileCart(false)}
          onConfirm={() => {
            setShowMobileCart(false);
            setCheckoutStep("address");
          }}
          onAdd={(item) => addToCart(item)}
          onRemove={(dishName) => removeFromCart(dishName)}
        />
      )}

      {checkoutStep === "address" && isMobile && (
        <MobileAddressOverlay
          onClose={() => setCheckoutStep("none")}
          onContinue={() => setCheckoutStep("payment")}
        />
      )}

      {checkoutStep === "payment" && isMobile && (
        <MobilePaymentOverlay
          onClose={() => setCheckoutStep("none")}
          onConfirm={() => {
            alert('¡Pedido confirmado! Gracias por tu compra.');
            setCheckoutStep("none");
            setCart([]);
          }}
        />
      )}

      {checkoutStep !== "none" && !isMobile && (
        <div onClick={() => setCheckoutStep("none")} className="fixed inset-0 flex items-center justify-center z-50 p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
          <div onClick={(e) => e.stopPropagation()} className="bg-[#fffdf3] rounded-[24px] max-w-[600px] w-full relative shadow-2xl p-8">
            <button onClick={() => setCheckoutStep("none")} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#f6b9bb] hover:bg-[#f2a5a9] transition-colors text-white text-2xl z-10">
              ×
            </button>

            {checkoutStep === "address" ? (
              <div className="flex flex-col gap-6">
                <h2 className="font-['Quicksand:SemiBold',sans-serif] font-semibold text-[31px] leading-[40px] text-black">Dirección de entrega</h2>

                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Calle</label>
                    <input type="text" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>

                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Número</label>
                    <input type="text" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>

                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Piso</label>
                    <input type="text" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>
                </div>

                <div className="flex gap-[10px] mt-4">
                  <button onClick={() => setCheckoutStep("none")} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors flex-1 h-[48px] rounded-[45px] cursor-pointer">
                    <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[#344838] text-[25px] text-center">Cancelar</p>
                  </button>
                  <button onClick={() => setCheckoutStep("payment")} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors flex-1 h-[48px] rounded-[45px] cursor-pointer">
                    <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[25px] text-center text-white">Continuar</p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <h2 className="font-['Quicksand:SemiBold',sans-serif] font-semibold text-[31px] leading-[40px] text-black">Datos de pago</h2>

                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Nº tarjeta</label>
                    <input type="text" placeholder="1234 5678 9012 3456" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>

                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">Fecha de caducidad</label>
                    <input type="text" placeholder="MM/AA" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>

                  <div className="relative">
                    <label className="font-['Quicksand:Regular',sans-serif] font-normal text-[18px] leading-[24px] text-[#333] mb-2 block">CVV</label>
                    <input type="text" placeholder="123" className="bg-[#edf8ef] border border-[#d1edd5] rounded-[45px] w-full h-[48px] px-[15px] font-['Quicksand:Regular',sans-serif] font-normal text-[25px] text-[#0b0d10] outline-none focus:border-[#a6dbaf]" />
                  </div>
                </div>

                <div className="flex gap-[10px] mt-4">
                  <button onClick={() => setCheckoutStep("none")} className="bg-[#dff2e2] hover:bg-[#cee8d1] transition-colors flex-1 h-[48px] rounded-[45px] cursor-pointer">
                    <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[#344838] text-[25px] text-center">Cancelar</p>
                  </button>
                  <button onClick={() => {
                    alert('¡Pedido confirmado! Gracias por tu compra.');
                    setCheckoutStep("none");
                    setCart([]);
                  }} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors flex-1 h-[48px] rounded-[45px] cursor-pointer">
                    <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] text-[25px] text-center text-white">Confirmar</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedDish && (
        <div onClick={() => setSelectedDish(null)} className="fixed inset-0 flex items-center justify-center z-50 p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white bg-opacity-90 rounded-[24px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#f6b9bb] hover:bg-[#f2a5a9] transition-colors text-white text-2xl z-10">
              ×
            </button>
            <div className="flex flex-col gap-6">
              <div className="h-[400px] relative w-full overflow-hidden rounded-t-[24px]">
                <img alt={selectedDish.name} className="w-full h-full object-cover" src={selectedDish.image} />
              </div>
              <div className="px-8 pb-8 flex flex-col gap-4">
                <h2 className="font-['Quicksand:Bold',sans-serif] font-bold text-[40px] leading-[48px] text-black">{selectedDish.name}</h2>
                <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[20px] leading-[32px] text-[#524344]">{selectedDish.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#d2e9cd]">
                  <span className="font-['Quicksand:SemiBold',sans-serif] font-semibold text-[35px] leading-[42px] text-black">{selectedDish.price}</span>
                  <button onClick={() => { addToCart(selectedDish); setSelectedDish(null); }} className="bg-[#cc8b8e] hover:bg-[#b87b7e] transition-colors px-8 py-4 rounded-[45px] font-['Quicksand:Regular',sans-serif] font-normal text-[20px] text-white">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Desktop view */}
      <div className="hidden md:grid bg-[#fffdf3] gap-x-[8px] grid-cols-[repeat(12,minmax(0,1fr))_fit-content(100%)] grid-rows-[fit-content(100%)_fit-content(100%)_minmax(0,1fr)] relative size-full">
      <div className="bg-[#fefadd] col-[1/span_13] h-[80px] justify-self-stretch relative row-1 shrink-0">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[10px] relative size-full">
            <button onClick={() => onNavigate && onNavigate("home")} className="aspect-[257/255] h-full relative shrink-0 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
              </div>
            </button>
            <button onClick={() => onNavigate && onNavigate("home")} className="font-['Quicksand:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#f2a5a9] text-[49px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity">PokePoké</button>
            <div className="flex-[1_0_0] h-full min-w-px relative" />
            <div className="bg-[#fefbe5] content-stretch flex h-[64px] items-center px-[10px] relative shrink-0 w-[386.75px]">
              {(["Carta", "Reserva", "Contacto"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTopNav(tab);
                    if (onNavigate && tab !== "Carta") {
                      onNavigate(tab.toLowerCase());
                    }
                  }}
                  className={`content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative ${activeTopNav === tab ? "" : "bg-[#fefbe5]"}`}
                >
                  {activeTopNav === tab && <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />}
                  <div className={`flex flex-col font-['Quicksand:${activeTopNav === tab ? "Bold" : "Regular"}',sans-serif] font-${activeTopNav === tab ? "bold" : "normal"} justify-center leading-[0] relative shrink-0 text-[${activeTopNav === tab ? "#f6b9bb" : "#516d56"}] text-[25px] text-center whitespace-nowrap`}>
                    <p className="leading-[32px]">{tab}</p>
                  </div>
                  {activeTopNav === tab && <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fefbe5] col-[1/span_13] h-[64px] justify-self-stretch relative row-2 shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch cursor-pointer flex items-center px-[10px] relative size-full">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px py-[8px] relative ${activeSection === section ? "" : "bg-[#fefbe5]"}`}
              >
                {activeSection === section && <div aria-hidden="true" className="absolute bg-[#fefbe5] inset-0 pointer-events-none" />}
                <div className={`flex flex-col font-['Quicksand:${activeSection === section ? "Bold" : "Regular"}',sans-serif] font-${activeSection === section ? "bold" : "normal"} justify-center leading-[0] relative shrink-0 text-[${activeSection === section ? "#f6b9bb" : "#516d56"}] text-[25px] text-center whitespace-nowrap`}>
                  <p className="leading-[32px]">{section}</p>
                </div>
                {activeSection === section && <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_#f2a5a9]" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="col-[1/span_8] justify-self-stretch relative row-3 self-stretch shrink-0">
        <div ref={desktopScrollRef} className="overflow-x-clip overflow-y-auto size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start px-[48px] py-[10px] relative size-full">
            {sections.map((section) => (
              <div key={section} ref={(el) => (desktopSectionRefs.current[section] = el)} className="relative shrink-0 w-full">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[10px] relative size-full">
                    <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[56px] relative shrink-0 text-[40px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {section}
                    </p>
                    <div className="content-start flex flex-wrap gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full">
                      {menuData[section].map((dish, index) => (
                        <DishCard key={index} {...dish} onAdd={() => addToCart(dish)} onClick={() => setSelectedDish(dish)} />
                      ))}
                      <div className="h-0 relative shrink-0 w-[320px]" />
                      <div className="h-0 relative shrink-0 w-[320px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-[10/span_4] justify-self-stretch relative row-3 self-stretch shrink-0">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <div className="bg-[#fafae0] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px overflow-clip p-[10px] relative rounded-[12px] w-full">
            <div className="flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-black whitespace-nowrap">
              <p className="leading-[56px]">Pedido</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px overflow-x-clip overflow-y-auto relative rounded-[12px] w-full">
              {cart.length === 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="font-['Montserrat:Regular',sans-serif] font-normal text-[#524344] text-[20px] text-center">
                    No hay platos en el pedido
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.name} className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[10px] items-center justify-end p-[10px] relative size-full">
                        <RemoveButton onClick={() => removeFromCart(item.name)} />
                        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">{item.quantity}</p>
                        <AddButton onClick={() => addToCart(item)} />
                        <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[32px] min-w-px overflow-hidden relative text-[25px] text-black text-ellipsis whitespace-nowrap">{item.name}</p>
                        <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-black whitespace-nowrap">{(parsePrice(item.price) * item.quantity).toFixed(2).replace(".", ",")}€</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
                <div className="flex flex-row items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-row items-start justify-center relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[56px] min-w-px relative text-[40px] text-black whitespace-nowrap">Total:</p>
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[56px] relative shrink-0 text-[40px] text-black whitespace-nowrap">{calculateTotal()}</p>
                    </div>
                  </div>
                </div>
                <button onClick={() => cart.length > 0 && setCheckoutStep("address")} disabled={cart.length === 0} className={`${cart.length > 0 ? 'bg-[#cc8b8e] hover:bg-[#b87b7e] cursor-pointer' : 'bg-[#e0c5c6] cursor-not-allowed'} transition-colors relative rounded-[45px] shrink-0 w-full`}>
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                      <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">Confirmar pedido</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile view */}
      <div className="md:hidden bg-[#fffdf3] gap-x-[10px] grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[fit-content(100%)_fit-content(100%)_minmax(0,1fr)_fit-content(100%)] relative size-full">
        {/* Navigation */}
        <div className="bg-[#fefadd] col-[1/span_3] h-[50px] justify-self-stretch relative row-1 shrink-0">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative size-full">
              <button onClick={() => onNavigate && onNavigate("home")} className="aspect-[257/255] h-full relative shrink-0 cursor-pointer">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[147.84%] left-[-24.12%] max-w-none top-[-25.49%] w-[146.69%]" src={imgLogo1} />
                </div>
              </button>
              <button onClick={() => onNavigate && onNavigate("home")} className="font-['Quicksand:Bold',sans-serif] font-bold leading-[40px] relative shrink-0 text-[#f2a5a9] text-[31px] whitespace-nowrap cursor-pointer">
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

        {/* Sections */}
        <button className="col-[1/span_3] cursor-pointer justify-self-stretch relative row-2 self-start shrink-0">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[10px] items-center p-[8px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4">
                  <div className="absolute inset-[-8.33%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                      <path d="M1 13H17M1 1H17H1ZM1 7H9H1Z" stroke="#3F3F46" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[25px] text-black text-left whitespace-nowrap">
                <p className="leading-[32px]">Secciones</p>
              </div>
              <div className="bg-[#edf8ef] flex-[1_0_0] h-[40px] min-w-px relative rounded-[8px]">
                <div aria-hidden="true" className="absolute border border-[#d1edd5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] left-[16px] right-[14px] text-[#0b0d10] text-[25px] text-left top-[calc(50%-16px)]">
                  Buscar...
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Main Content */}
        <div className="col-[1/span_3] justify-self-stretch relative row-3 self-stretch shrink-0">
          <div ref={mobileScrollRef} className="overflow-x-clip overflow-y-auto size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[10px] relative size-full">
              {sections.map((section) => (
                <div key={section} ref={(el) => (mobileSectionRefs.current[section] = el)} className="relative shrink-0 w-full">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-start px-[16px] py-[10px] relative size-full">
                      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[56px] relative shrink-0 text-[40px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {section}
                      </p>
                      <div className="content-start flex flex-wrap gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full">
                        {menuData[section].map((dish, index) => (
                          <DishCard key={index} {...dish} onAdd={() => addToCart(dish)} onClick={() => setSelectedDish(dish)} />
                        ))}
                        <div className="h-0 relative shrink-0 w-[320px]" />
                        <div className="h-0 relative shrink-0 w-[320px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carrito button */}
        <div className="col-[1/span_3] justify-self-stretch relative row-4 self-end shrink-0">
          <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
            <button onClick={() => setShowMobileCart(true)} className="bg-[#cc8b8e] hover:bg-[#b87b7e] cursor-pointer transition-colors relative rounded-[45px] shrink-0 w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
                  <p className="font-['Quicksand:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[25px] text-center text-white whitespace-nowrap">
                    Carrito {cart.length > 0 && `(${cart.length})`}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
