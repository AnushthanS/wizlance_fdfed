import AdvancedTable from "./helpers/AdvancedTable";

const ProjectsContent = () => {
  const headings = [
    "Project Name",
    "Sub Category",
    "Price",
    "Description",
    "Status",
  ];
  const rows = [
    [
      "Web Development",
      "Web Design",
      "1999",
      "I offer the most efficient web page creation for multiple businesses.",
      "Active",
    ],
    [
      "Mobile App Development",
      "iOS Development",
      "2499",
      "Creating innovative and user-friendly mobile applications for iOS devices.",
      "Pending",
    ],
    [
      "Graphic Design",
      "Logo Design",
      "799",
      "Crafting unique and memorable logos to enhance brand identity.",
      "Completed",
    ],
    [
      "SEO Optimization",
      "On-Page SEO",
      "599",
      "Optimizing website content and structure for better search engine visibility.",
      "Active",
    ],
    [
      "Content Writing",
      "Blog Posts",
      "399",
      "Producing high-quality and engaging content for various blog topics.",
      "Pending",
    ],
    [
      "Social Media Management",
      "Content Creation",
      "1199",
      "Managing social media accounts and creating compelling content for increased engagement.",
      "Completed",
    ],
    [
      "UI/UX Design",
      "User Interface Design",
      "1799",
      "Designing intuitive and visually appealing user interfaces for applications.",
      "Active",
    ],
    [
      "Photography Services",
      "Product Photography",
      "499",
      "Capturing professional and eye-catching photographs for product catalogues.",
      "Pending",
    ],
    [
      "Data Analysis",
      "Statistical Analysis",
      "899",
      "Providing in-depth statistical analysis and insights from data sets.",
      "Completed",
    ],
    [
      "Virtual Assistant",
      "Administrative Tasks",
      "349",
      "Offering virtual assistance for various administrative and organizational tasks.",
      "Active",
    ],
    [
      "E-commerce Development",
      "Magento Development",
      "2999",
      "Building robust and scalable e-commerce platforms using Magento.",
      "Pending",
    ],
    [
      "Digital Marketing",
      "Social Media Campaigns",
      "1299",
      "Executing effective social media campaigns to boost online presence.",
      "Completed",
    ],
    [
      "Video Editing",
      "Promotional Videos",
      "699",
      "Editing and producing engaging promotional videos for businesses.",
      "Active",
    ],
    [
      "App Design Consultation",
      "User Experience Review",
      "499",
      "Providing expert advice on improving user experience in mobile app design.",
      "Pending",
    ],
    [
      "IT Support",
      "Technical Troubleshooting",
      "799",
      "Offering technical support and troubleshooting for IT-related issues.",
      "Completed",
    ],
    [
      "Blockchain Development",
      "Smart Contract Development",
      "2499",
      "Developing secure and efficient smart contracts for blockchain applications.",
      "Active",
    ],
    [
      "Copywriting",
      "Ad Copy",
      "449",
      "Crafting persuasive ad copy to enhance marketing and advertising efforts.",
      "Pending",
    ],
    [
      "Event Planning",
      "Corporate Events",
      "1199",
      "Planning and organizing memorable corporate events with attention to detail.",
      "Completed",
    ],
    [
      "WordPress Development",
      "Theme Customization",
      "899",
      "Customizing WordPress themes to create unique and functional websites.",
      "Active",
    ],
    [
      "Cybersecurity Services",
      "Vulnerability Assessment",
      "1599",
      "Ensuring the security of online systems through comprehensive vulnerability assessments.",
      "Pending",
    ],
  ];

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-bold p-4">Your Projects</h1>
      <div className="flex justify-center p-6  overflow-y-scroll h-[35rem] ">
        <AdvancedTable rows={rows} headings={headings} />
      </div>
    </div>
  );
};

export default ProjectsContent;
