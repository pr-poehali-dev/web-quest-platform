
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
      icon: "Search",
      title: "Найдите квест",
      description: "Выбирайте из множества квестов разной тематики и уровня сложности"
    },
    {
      icon: "Puzzle",
      title: "Решайте задания",
      description: "Выполняйте увлекательные задания, решайте головоломки и загадки"
    },
    {
      icon: "Trophy",
      title: "Получайте награды",
      description: "Зарабатывайте очки, разблокируйте достижения и соревнуйтесь с другими"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">Как это работает</h2>
          <p className="text-[#8E9196] max-w-2xl mx-auto">
            Создавайте квесты с увлекательными заданиями или проходите квесты, созданные другими пользователями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
