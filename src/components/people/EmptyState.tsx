
import React from "react";

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">No people found</h3>
      <p className="text-boulder-stone-500">
        Try adjusting your search or filters.
      </p>
    </div>
  );
};

export default EmptyState;
