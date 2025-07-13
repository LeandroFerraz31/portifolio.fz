import React from "react";
import NavButton from "./NavButton";

interface MobileMenuProps {
  isMenuOpen: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const navItems = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

const MobileMenu = ({ isMenuOpen, activeSection, scrollToSection }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden mt-4 py-4 border-t border-gray-800/50 backdrop-blur-md">
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-left"
          />
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;