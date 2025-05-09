
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#9b87f5] rounded-md p-1">
            <Icon name="Layout" className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-semibold text-[#1A1F2C]">КвестМастер</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Главная
          </Link>
          <Link to="/quests" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Квесты
          </Link>
          <Link to="/create" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            Создать
          </Link>
          <Link to="/about" className="text-[#1A1F2C] font-medium hover:text-[#9b87f5] transition-colors">
            О проекте
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
