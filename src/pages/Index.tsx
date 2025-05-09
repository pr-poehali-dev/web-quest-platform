import NavBar from "@/components/quest/NavBar";
import HeroSection from "@/components/quest/HeroSection";
import QuestsSection from "@/components/quest/QuestsSection";
import HowItWorksSection from "@/components/quest/HowItWorksSection";
import CTASection from "@/components/quest/CTASection";
import Footer from "@/components/quest/Footer";
import { quests, categories } from "@/data/quests";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Навигационное меню */}
      <NavBar />

      {/* Героический блок */}
      <HeroSection />

      {/* Секция с категориями и квестами */}
      <QuestsSection quests={quests} categories={categories} />

      {/* Как это работает */}
      <HowItWorksSection />

      {/* Призыв к действию */}
      <CTASection />

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
