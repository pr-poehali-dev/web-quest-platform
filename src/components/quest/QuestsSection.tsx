
import { Button } from "@/components/ui/button";
import QuestCard, { QuestProps } from "./QuestCard";
import { useState } from "react";

interface QuestsSectionProps {
  quests: QuestProps[];
  categories: string[];
}

const QuestsSection = ({ quests, categories }: QuestsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const [visibleQuests, setVisibleQuests] = useState<QuestProps[]>(quests);

  const filterQuests = (category: string) => {
    setActiveCategory(category);
    if (category === "Все") {
      setVisibleQuests(quests);
    } else {
      setVisibleQuests(quests.filter(quest => quest.category === category));
    }
  };

  return (
    <section className="py-16 container mx-auto px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">Образовательные форумы</h2>
        <p className="text-[#8E9196]">Выберите направление обучения и развивайте свои навыки</p>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            variant={category === activeCategory ? "default" : "outline"} 
            className={category === activeCategory ? "bg-[#9b87f5] hover:bg-[#8574d8]" : ""}
            onClick={() => filterQuests(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleQuests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </section>
  );
};

export default QuestsSection;
