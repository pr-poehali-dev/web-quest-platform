
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#9b87f5] rounded-md p-1">
            <Icon name="BookOpen" className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-semibold text-[#1A1F2C]">ОбразФорум</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/forum/linguistics" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Лингвистика
          </Link>
          <Link to="/forum/worldview" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Мировоззрение
          </Link>
          <Link to="/forum/culture" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Культурные навыки
          </Link>
          <Link to="/forum/emotional" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Эмоционально-поведенческие
          </Link>
        </div>
        <div>
          <Button className="bg-[#9b87f5] hover:bg-[#8574d8]">
            Войти
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
