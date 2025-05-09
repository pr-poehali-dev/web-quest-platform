
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#9b87f5] rounded-md p-1">
                <Icon name="Layout" className="text-white h-5 w-5" />
              </div>
              <span className="text-lg font-semibold text-[#1A1F2C]">КвестМастер</span>
            </Link>
            <p className="text-[#8E9196] mt-2">
              Платформа для создания и прохождения веб-квестов
            </p>
          </div>
          
          <div className="flex gap-6 text-[#8E9196]">
            <Link to="/terms" className="hover:text-[#9b87f5]">
              Условия
            </Link>
            <Link to="/privacy" className="hover:text-[#9b87f5]">
              Конфиденциальность
            </Link>
            <Link to="/contact" className="hover:text-[#9b87f5]">
              Контакты
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-[#8E9196]">
          <p>© 2025 КвестМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
