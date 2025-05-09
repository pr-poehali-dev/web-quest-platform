
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать свое приключение?</h2>
          <p className="text-gray-300 mb-8">
            Присоединяйтесь к сообществу квесторов и создателей. Учитесь, исследуйте и развивайтесь вместе с нами.
          </p>
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8574d8]">
            Создать аккаунт бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
