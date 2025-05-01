
import React from "react";
import PersonCard, { PersonData } from "./PersonCard";
import EmptyState from "./EmptyState";

interface PeopleListProps {
  people: PersonData[];
}

const PeopleList = ({ people }: PeopleListProps) => {
  return (
    <>
      {people.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default PeopleList;
