
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PeopleFiltersProps {
  allSkills: string[];
  selectedSkills: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSkillToggle: (skill: string) => void;
  onClearSkills: () => void;
}

const PeopleFilters = ({
  allSkills,
  selectedSkills,
  searchQuery,
  onSearchChange,
  onSkillToggle,
  onClearSkills,
}: PeopleFiltersProps) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 items-start">
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
        <Input
          type="search"
          placeholder="Search people..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex-1">
        <h3 className="text-sm font-medium mb-2">Filter by skill</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto justify-between">
              {selectedSkills.length === 0 
                ? "Select skills" 
                : `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected`}
              <CheckIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Skills</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {allSkills.map((skill) => (
              <DropdownMenuCheckboxItem
                key={skill}
                checked={selectedSkills.includes(skill)}
                onCheckedChange={() => onSkillToggle(skill)}
              >
                {skill}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        {selectedSkills.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {selectedSkills.map(skill => (
              <Badge 
                key={skill}
                variant="secondary"
                className="px-2 py-1 flex items-center gap-1"
              >
                {skill}
                <button 
                  onClick={() => onSkillToggle(skill)}
                  className="ml-1 rounded-full hover:bg-muted"
                >
                  ×
                </button>
              </Badge>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={onClearSkills}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PeopleFilters;
