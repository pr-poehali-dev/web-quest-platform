
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать свой путь развития?</h2>
          <p className="text-gray-300 mb-8">
            Присоединяйтесь к нашему образовательному сообществу. Развивайте лингвистические, 
            мировоззренческие, культурные и эмоционально-поведенческие навыки вместе с нами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8574d8]">
              Зарегистрироваться
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1F2C]">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
