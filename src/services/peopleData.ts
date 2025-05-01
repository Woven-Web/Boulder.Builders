
// Mock data for people
export const peopleData = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Contributor",
    avatar: "JD",
    bio: "Urban planning enthusiast with a focus on sustainable transportation solutions.",
    skills: ["Research", "Policy Analysis", "Community Outreach"],
    connections: {
      problems: [
        { id: 1, title: "Urban Mobility & Transportation Access" },
        { id: 2, title: "Affordable Housing Solutions" }
      ],
      projects: [
        { id: 2, name: "Rental Rights App" }
      ]
    }
  },
  {
    id: 2,
    name: "John Smith",
    role: "Contributor",
    avatar: "JS",
    bio: "Software developer focused on civic tech and public data accessibility.",
    skills: ["Programming", "Web Development", "Data Visualization"],
    connections: {
      problems: [
        { id: 2, title: "Affordable Housing Solutions" }
      ],
      projects: []
    }
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Curator",
    avatar: "AJ",
    bio: "Environmental scientist working on water conservation and climate resilience.",
    skills: ["Data Analysis", "Environmental Science", "Project Management"],
    connections: {
      problems: [
        { id: 1, title: "Urban Mobility & Transportation Access" },
        { id: 3, title: "Sustainable Water Management" }
      ],
      projects: [
        { id: 3, name: "Boulder Creek Watershed Monitoring" }
      ]
    }
  },
  {
    id: 4,
    name: "Sam Wilson",
    role: "Contributor",
    avatar: "SW",
    bio: "Community organizer with experience in food justice initiatives.",
    skills: ["Event Planning", "Grant Writing", "Community Engagement"],
    connections: {
      problems: [
        { id: 3, title: "Sustainable Water Management" },
        { id: 4, title: "Food Security for Low-Income Residents" }
      ],
      projects: [
        { id: 1, name: "Community Solar Gardens" }
      ]
    }
  }
];

export default peopleData;
