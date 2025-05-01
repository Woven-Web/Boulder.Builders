
import { Link } from "react-router-dom";
import { FileText, ListChecks } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface PersonConnection {
  problems: Array<{ id: number; title: string }>;
  projects: Array<{ id: number; name: string }>;
}

export interface PersonData {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  connections: PersonConnection;
}

interface PersonCardProps {
  person: PersonData;
}

const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Card key={person.id} className="boulder-card">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center font-medium text-xl">
            {person.avatar}
          </div>
          <div>
            <h3 className="text-lg font-medium">{person.name}</h3>
            <Badge className={
              person.role === "Curator"
                ? "bg-boulder-coral-100 text-boulder-coral-700 border-boulder-coral-200"
                : "bg-boulder-sky-100 text-boulder-sky-700 border-boulder-sky-200"
            }>
              {person.role}
            </Badge>
          </div>
        </div>
        
        <p className="text-boulder-stone-600 mb-4">
          {person.bio}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {person.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-boulder-stone-100 text-boulder-stone-700 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Connections</h4>
          <div className="space-y-2">
            {person.connections.problems.length > 0 && (
              <div className="flex items-center gap-2">
                <FileText className="text-boulder-coral-500" size={16} />
                <span className="text-sm">{person.connections.problems.length} Problems</span>
              </div>
            )}
            
            {person.connections.projects.length > 0 && (
              <div className="flex items-center gap-2">
                <ListChecks className="text-boulder-green-600" size={16} />
                <span className="text-sm">{person.connections.projects.length} Projects</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-boulder-stone-200 flex justify-end">
          <Link
            to={`/people/${person.id}`}
            className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
          >
            View profile →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
