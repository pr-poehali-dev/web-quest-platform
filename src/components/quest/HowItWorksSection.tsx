
import Icon from "@/components/ui/icon";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center">
      <div className="bg-[#E5DEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} className="h-6 w-6 text-[#9b87f5]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">{title}</h3>
      <p className="text-[#8E9196]">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const features: FeatureProps[] = [
    {
      icon: "BookText",
      title: "Выберите форум",
      description: "Определите направление развития, которое интересует вас больше всего"
    },
    {
      icon: "MessageSquare",
      title: "Участвуйте в обсуждениях",
      description: "Выполняйте задания, делитесь мнением и получайте обратную связь от сообщества"
    },
    {
      icon: "GraduationCap",
      title: "Развивайте навыки",
      description: "Отслеживайте свой прогресс и совершенствуйте ключевые компетенции"
    },
    {
      icon: "Users",
      title: "Сообщество единомышленников",
      description: "Общайтесь с людьми, заинтересованными в саморазвитии и обучении"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">Как это работает</h2>
          <p className="text-[#8E9196] max-w-2xl mx-auto">
            Участвуйте в образовательных форумах и развивайте свои навыки через выполнение заданий и взаимодействие с сообществом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
