
import { QuestProps } from "@/components/quest/QuestCard";

export const quests: QuestProps[] = [
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

export const categories: string[] = ["Все", "Веб-разработка", "Логика", "Data Science", "UX/UI", "Кибербезопасность"];
