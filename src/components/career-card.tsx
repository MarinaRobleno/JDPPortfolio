import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Markdown from "react-markdown";
import { BorderBeam } from "./magicui/border-beam";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export function CareerCard({ title, description, icon }: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <BorderBeam />
      <CardHeader className="px-2 pb-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">
            {title} {icon}
          </CardTitle>

          <Markdown className="prose max-w-full text-pretty font-openSans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
    </Card>
  );
}
