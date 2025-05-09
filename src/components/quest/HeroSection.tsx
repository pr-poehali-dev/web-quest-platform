
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-[#1A1F2C] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Образовательные форумы для всестороннего развития
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Платформа с заданиями по четырем ключевым направлениям: лингвистика, 
            мировоззрение, культурные навыки и эмоционально-поведенческие характеристики.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8574d8]">
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1F2C]">
              Смотреть форумы
            </Button>
          </div>
        </div>
      </div>
      {/* Декоративные элементы */}
      <div className="absolute right-0 bottom-0 w-1/3 h-3/4 bg-[#9b87f5] opacity-10 rounded-tl-full"></div>
      <div className="absolute right-10 top-10 w-24 h-24 bg-[#E5DEFF] opacity-20 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
