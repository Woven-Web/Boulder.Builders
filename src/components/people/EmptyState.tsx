
import React from "react";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState = ({ 
  title = "No people found", 
  message = "Try adjusting your search or filters."
}: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-boulder-stone-500">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
