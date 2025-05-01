
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for the P-P-P visualization
const mockNodes = [
  { id: 'person1', type: 'person', label: 'Jane Doe', x: 200, y: 100 },
  { id: 'person2', type: 'person', label: 'John Smith', x: 100, y: 200 },
  { id: 'person3', type: 'person', label: 'Alex Johnson', x: 300, y: 250 },
  { id: 'person4', type: 'person', label: 'Sam Wilson', x: 400, y: 150 },
  
  { id: 'problem1', type: 'problem', label: 'Transportation', x: 250, y: 180 },
  { id: 'problem2', type: 'problem', label: 'Housing', x: 150, y: 150 },
  { id: 'problem3', type: 'problem', label: 'Water', x: 350, y: 200 },
  
  { id: 'project1', type: 'project', label: 'Solar Gardens', x: 300, y: 120 },
  { id: 'project2', type: 'project', label: 'Rental App', x: 200, y: 220 },
];

const mockLinks = [
  { source: 'person1', target: 'problem1' },
  { source: 'person1', target: 'problem2' },
  { source: 'person2', target: 'problem2' },
  { source: 'person3', target: 'problem1' },
  { source: 'person3', target: 'problem3' },
  { source: 'person4', target: 'problem3' },
  { source: 'person4', target: 'project1' },
  { source: 'problem1', target: 'project2' },
  { source: 'problem2', target: 'project2' },
  { source: 'problem3', target: 'project1' },
];

const PPPMap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState("0 0 500 300");
  
  useEffect(() => {
    const handleResize = () => {
      // Adjust viewBox based on container size
      setViewBox("0 0 500 300");
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const getNodeColor = (type: string) => {
    switch (type) {
      case 'person':
        return '#219EBC'; // boulder-sky-500
      case 'problem':
        return '#E76F51'; // boulder-coral-500
      case 'project':
        return '#4D7C0F'; // boulder-green-600
      default:
        return '#A8A29E'; // boulder-stone-500
    }
  };
  
  const getNodeSize = (type: string) => {
    switch (type) {
      case 'person':
        return 8;
      case 'problem':
        return 10;
      case 'project':
        return 12;
      default:
        return 8;
    }
  };

  // Find connected nodes for highlighting
  const getConnectedNodeIds = (nodeId: string) => {
    return mockLinks
      .filter(link => link.source === nodeId || link.target === nodeId)
      .flatMap(link => [link.source, link.target]);
  };
  
  const connectedNodes = selectedNode ? getConnectedNodeIds(selectedNode) : [];

  return (
    <div className="relative h-[400px] w-full bg-white rounded-xl shadow-sm border border-boulder-stone-200 overflow-hidden">
      {/* Map Legend */}
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-boulder-stone-200 shadow-sm">
        <h4 className="text-sm font-medium mb-2">Map Legend</h4>
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-boulder-sky-500"></span>
            <span>People</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-boulder-coral-500"></span>
            <span>Problems</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-boulder-green-600"></span>
            <span>Projects</span>
          </div>
        </div>
      </div>
      
      {/* Node Info Card */}
      {selectedNode && (
        <div className="absolute bottom-4 left-4 z-10 w-64">
          <Card>
            <CardContent className="p-3 text-sm">
              <h4 className="font-medium">
                {mockNodes.find(node => node.id === selectedNode)?.label}
              </h4>
              <p className="text-xs text-boulder-stone-500 mt-1">
                Connected to {connectedNodes.length - 1} other nodes
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* SVG Visualization */}
      <svg className="h-full w-full" viewBox={viewBox}>
        {/* Links/Edges */}
        {mockLinks.map((link, index) => {
          const sourceNode = mockNodes.find(node => node.id === link.source);
          const targetNode = mockNodes.find(node => node.id === link.target);
          
          if (!sourceNode || !targetNode) return null;
          
          const isHighlighted = selectedNode && 
            (link.source === selectedNode || link.target === selectedNode);
          
          return (
            <line
              key={`link-${index}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke={isHighlighted ? "#2A9D8F" : "#E5E5E5"}
              strokeWidth={isHighlighted ? 2 : 1}
              strokeOpacity={isHighlighted ? 1 : 0.6}
            />
          );
        })}
        
        {/* Nodes */}
        {mockNodes.map((node) => {
          const isSelected = selectedNode === node.id;
          const isConnected = selectedNode && connectedNodes.includes(node.id);
          const opacity = !selectedNode || isSelected || isConnected ? 1 : 0.3;
          
          return (
            <g 
              key={node.id} 
              onClick={() => setSelectedNode(node.id)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeSize(node.type) + (isSelected ? 2 : 0)}
                fill={getNodeColor(node.type)}
                opacity={opacity}
                stroke={isSelected ? "#000" : "none"}
                strokeWidth={isSelected ? 1 : 0}
              />
              <text
                x={node.x}
                y={node.y + getNodeSize(node.type) + 10}
                textAnchor="middle"
                fontSize="8px"
                fill="#555"
                opacity={opacity}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PPPMap;
