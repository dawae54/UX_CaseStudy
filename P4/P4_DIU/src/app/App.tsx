import { useState } from "react";
import MenuApp from "./components/MenuApp";
import HomePage from "./components/HomePage";
import ReservaPage from "./components/ReservaPage";
import ContactoPage from "./components/ContactoPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (currentPage === "home") {
    return <HomePage onNavigate={handleNavigate} />;
  }

  if (currentPage === "carta") {
    return <MenuApp onNavigate={handleNavigate} />;
  }

  if (currentPage === "reserva") {
    return <ReservaPage onNavigate={handleNavigate} />;
  }

  if (currentPage === "contacto") {
    return <ContactoPage onNavigate={handleNavigate} />;
  }

  return <div>Página en construcción</div>;
}