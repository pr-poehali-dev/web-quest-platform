
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface QuestProps {
  id: number;
  title: string;
  description: string;
  level: string;
  tasks: number;
  category: string;
}

const QuestCard = ({ quest }: { quest: QuestProps }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
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
  );
};

export default QuestCard;
