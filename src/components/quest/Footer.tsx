
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[#9b87f5] rounded-md p-1">
                <Icon name="BookOpen" className="text-white h-5 w-5" />
              </div>
              <span className="text-lg font-semibold text-[#1A1F2C]">ОбразФорум</span>
            </Link>
            <p className="text-[#8E9196]">
              Платформа образовательных форумов для всестороннего развития
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#1A1F2C]">Форумы</h3>
            <ul className="space-y-2">
              <li><Link to="/forum/linguistics" className="text-[#8E9196] hover:text-[#9b87f5]">Лингвистика</Link></li>
              <li><Link to="/forum/worldview" className="text-[#8E9196] hover:text-[#9b87f5]">Мировоззрение</Link></li>
              <li><Link to="/forum/culture" className="text-[#8E9196] hover:text-[#9b87f5]">Культурные навыки</Link></li>
              <li><Link to="/forum/emotional" className="text-[#8E9196] hover:text-[#9b87f5]">Эмоционально-поведенческие</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#1A1F2C]">О нас</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#8E9196] hover:text-[#9b87f5]">О проекте</Link></li>
              <li><Link to="/team" className="text-[#8E9196] hover:text-[#9b87f5]">Команда</Link></li>
              <li><Link to="/methodology" className="text-[#8E9196] hover:text-[#9b87f5]">Методология</Link></li>
              <li><Link to="/contact" className="text-[#8E9196] hover:text-[#9b87f5]">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#1A1F2C]">Правовая информация</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-[#8E9196] hover:text-[#9b87f5]">Условия использования</Link></li>
              <li><Link to="/privacy" className="text-[#8E9196] hover:text-[#9b87f5]">Политика конфиденциальности</Link></li>
              <li><Link to="/cookies" className="text-[#8E9196] hover:text-[#9b87f5]">Политика cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center text-[#8E9196]">
          <p>© 2025 ОбразФорум. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
