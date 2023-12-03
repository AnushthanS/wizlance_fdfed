import AdvancedTable from "./helpers/AdvancedTable";

const OrdersContent = () => {
  const headings = ["User Name", "Service Name", "Price", "Description"];
  const rows = [
    [
      "Nishant",
      "Web Development",
      "1999",
      "I want to make a dashboard for my website. It should be modern and should have animations.",
    ],
    [
      "Emma",
      "Graphic Design",
      "899",
      "Looking for a logo design for my new business venture.",
    ],
    [
      "Alex",
      "Mobile App Development",
      "2499",
      "Building a cross-platform mobile app for my e-commerce store.",
    ],
    [
      "Sophia",
      "SEO Optimization",
      "599",
      "Need assistance in improving my website's search engine ranking.",
    ],
    [
      "William",
      "Content Writing",
      "299",
      "Creating engaging content for my blog on technology and innovation.",
    ],
    [
      "Olivia",
      "Social Media Management",
      "1299",
      "Managing social media accounts for my small business.",
    ],
    [
      "James",
      "UI/UX Design",
      "1799",
      "Designing a user-friendly interface for my new software application.",
    ],
    [
      "Ava",
      "Photography Services",
      "499",
      "Capturing professional photos for my upcoming product launch.",
    ],
    [
      "Liam",
      "Data Analysis",
      "899",
      "Analyzing data trends and patterns for my research project.",
    ],
    [
      "Mia",
      "Virtual Assistant",
      "349",
      "Hiring a virtual assistant to manage administrative tasks.",
    ],
    [
      "Ethan",
      "E-commerce Development",
      "2999",
      "Building an online store with advanced e-commerce features.",
    ],
    [
      "Isabella",
      "Digital Marketing",
      "1199",
      "Creating and executing a comprehensive digital marketing strategy.",
    ],
    [
      "Jackson",
      "Video Editing",
      "699",
      "Editing promotional videos for my YouTube channel.",
    ],
    [
      "Sophie",
      "App Design Consultation",
      "499",
      "Seeking advice on improving the design of my existing mobile app.",
    ],
    [
      "Lucas",
      "IT Support",
      "799",
      "Resolving technical issues and providing IT support for my business.",
    ],
    [
      "Aria",
      "Blockchain Development",
      "2499",
      "Developing a blockchain solution for secure transactions.",
    ],
    [
      "Henry",
      "Copywriting",
      "449",
      "Crafting persuasive copy for my product descriptions and marketing materials.",
    ],
    [
      "Charlotte",
      "Event Planning",
      "1199",
      "Organizing a corporate event with attention to detail and creativity.",
    ],
    [
      "Mason",
      "WordPress Development",
      "899",
      "Customizing and enhancing the functionality of my WordPress website.",
    ],
    [
      "Amelia",
      "Cybersecurity Services",
      "1599",
      "Ensuring the security and integrity of my online business.",
    ],
  ];

  return (
    <div className="flex flex-1 flex-col">
      <h1 className="text-3xl font-bold p-4">Orders Received</h1>
      <div className="flex justify-center p-6  overflow-y-scroll h-[35rem] ">
        <AdvancedTable rows={rows} headings={headings} />
      </div>
    </div>
  );
};

export default OrdersContent;
