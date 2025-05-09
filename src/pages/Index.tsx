
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const quests = [
  {
    id: 1,
    title: "Тайны кода",
    description: "Раскройте секреты веб-разработки, решая загадки и выполняя задания по HTML, CSS и JavaScript.",
    level: "Начинающий",
    tasks: 8,
    category: "Веб-разработка"
  },
  {
    id: 2,
    title: "Цифровой детектив",
    description: "Станьте детективом в цифровом мире. Ищите подсказки и решайте головоломки, используя логику и наблюдательность.",
    level: "Средний",
    tasks: 12,
    category: "Логика"
  },
  {
    id: 3,
    title: "Путешествие в космос данных",
    description: "Исследуйте вселенную данных. Визуализируйте, анализируйте и интерпретируйте информацию, чтобы спасти галактику.",
    level: "Продвинутый",
    tasks: 10,
    category: "Data Science"
  },
];

const categories = ["Все", "Веб-разработка", "Логика", "Data Science", "UX/UI", "Кибербезопасность"];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Навигационное меню */}
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

      {/* Героический блок */}
      <section className="relative bg-[#1A1F2C] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Создавайте и проходите увлекательные веб-квесты
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Платформа для создания интерактивных веб-квестов с заданиями разной сложности. 
              Обучайтесь играя, решайте головоломки и развивайте навыки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8574d8]">
                Начать свой квест
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#1A1F2C]">
                Смотреть квесты
              </Button>
            </div>
          </div>
        </div>
        {/* Декоративные элементы */}
        <div className="absolute right-0 bottom-0 w-1/3 h-3/4 bg-[#9b87f5] opacity-10 rounded-tl-full"></div>
        <div className="absolute right-10 top-10 w-24 h-24 bg-[#E5DEFF] opacity-20 rounded-full"></div>
      </section>

      {/* Секция с категориями */}
      <section className="py-16 container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">Популярные квесты</h2>
          <p className="text-[#8E9196]">Исследуйте интересные задания и головоломки</p>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              className={index === 0 ? "bg-[#9b87f5] hover:bg-[#8574d8]" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <Card key={quest.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-[#9b87f5] to-[#7e69ab] text-white p-4">
                <div className="flex justify-between items-start">
                  <CardTitle>{quest.title}</CardTitle>
                  <span className="text-xs bg-white text-[#1A1F2C] px-2 py-1 rounded-full">
                    {quest.level}
                  </span>
                </div>
                <CardDescription className="text-white opacity-90">
                  {quest.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-[#8E9196]">{quest.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-[#8E9196]">
                  <Icon name="ListChecks" className="h-4 w-4" />
                  <span>{quest.tasks} заданий</span>
                </div>
                <Button className="bg-[#9b87f5] hover:bg-[#8574d8]">
                  Начать квест
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF]">
            Показать больше квестов
          </Button>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-[#1A1F2C]">Как это работает</h2>
            <p className="text-[#8E9196] max-w-2xl mx-auto">
              Создавайте квесты с увлекательными заданиями или проходите квесты, созданные другими пользователями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#E5DEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Найдите квест</h3>
              <p className="text-[#8E9196]">
                Выбирайте из множества квестов разной тематики и уровня сложности
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#E5DEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Puzzle" className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Решайте задания</h3>
              <p className="text-[#8E9196]">
                Выполняйте увлекательные задания, решайте головоломки и загадки
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#E5DEFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A1F2C]">Получайте награды</h3>
              <p className="text-[#8E9196]">
                Зарабатывайте очки, разблокируйте достижения и соревнуйтесь с другими
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Присоединяйтесь */}
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

      {/* Футер */}
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
    </div>
  );
};

export default Index;
