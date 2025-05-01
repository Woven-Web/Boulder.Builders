
import { useState } from "react";
import Layout from "@/components/Layout";
import PeopleFilters from "@/components/people/PeopleFilters";
import PeopleList from "@/components/people/PeopleList";
import JoinCTA from "@/components/people/JoinCTA";
import peopleData from "@/services/peopleData";

const People = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Get unique skills across all people
  const allSkills = Array.from(
    new Set(
      peopleData.flatMap(person => person.skills)
    )
  ).sort();
  
  // Filter people based on search query and selected skills
  const filteredPeople = peopleData.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.some(skill => person.skills.includes(skill));
    
    return matchesSearch && matchesSkills;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearSkills = () => {
    setSelectedSkills([]);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">People</h1>
            <p className="text-boulder-stone-600">
              Connect with contributors and curators in the Boulder community who are actively working on local problems and projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* People List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <PeopleFilters 
            allSkills={allSkills}
            selectedSkills={selectedSkills}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSkillToggle={toggleSkill}
            onClearSkills={clearSkills}
          />
          
          {/* People Grid */}
          <PeopleList people={filteredPeople} />
          
          {/* Join CTA */}
          <JoinCTA />
        </div>
      </section>
    </Layout>
  );
};

export default People;
