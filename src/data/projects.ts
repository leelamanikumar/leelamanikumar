export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  content: string;
};

export const projects: Project[] = [
   {
    slug: "Fully Ready search engine optimized Ecommerce store",
    title: "Fully Ready search engine optimized Ecommerce store",
    description: "Developed a full-stack e-commerce web application using Next.js (React framework) with Server-Side Rendering (SSR) to improve SEO and performance. Integrated MongoDB Atlas for scalable cloud-based data storage and efficient product, user, and order management. Implemented Cloudinary CDN for optimized product image storage, transformation, and faster delivery. Built responsive UI/UX with Tailwind CSS/Next.js, ensuring cross-device compatibility.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudinary"],
    image: "",
    githubUrl: "https://github.com/leelamanikumar/ecom",
    liveUrl: "https://ecomstore-9bc2.onrender.com/",
    content: "Fully Ready search engine optimized Ecommerce store",
  },
  {
    slug: "Multi player Sudoku game",
    title: "Multi player Sudoku game",
    description: "Designed and implemented a modified backtracking algorithm to generate unique Sudoku puzzles in real-time for each user who creates a game room, ensuring fairness and variety in a multiplayer environment – Utilized Socket.IO to establish real-time bidirectional communication between the server and multiple clients, efficiently managing game events and synchronizing gameplay across participants using WebSocket connections. – Developed a dynamic and responsive single-page application (SPA) in React, leveraging conditional rendering to create an intuitive and streamlined user interface.",
    tags: ["Data Structures", "Node.js", "Socket.IO", "Backtracking algorithm"],
    image: "",
    githubUrl: "https://github.com/HareeshDhruva/sudoku",
    liveUrl: "https://sudoku-pn4c.onrender.com/",
    content: "This project helps the peopleto play the sudoku game with their friends",
  },
  {
    slug: "Scapping tool",
    title: "Scapping tool",
    description: "A full-stack web application that scrapes business data from Google Maps and saves it to Google Sheets. Built using Node.js, Express, Puppeteer, and React. Features 🔍 Search for any location or business on Google Maps 🤖 Scrapes business details automatically: Name Rating Price Range Address 📄 Saves data to Google Sheets 💻 Modern, responsive frontend (React + Vite) ⚡ Real-time search results display",
    tags: ["React", "Node.js", "Puppeteer", "Google Sheets API"],
    image: "",
    githubUrl: "https://github.com/leelamanikumar/hotelmanagement",
    liveUrl: "https://drive.google.com/file/d/1Jpq8Lc5iul10i0ldYn0Wtr6tGLqPaHsj/view?usp=sharing",
    content: "This project helps the people to scrap the business data from the google maps and save it to the google sheets",
  },
   {
    slug: "Education learning management system",
    title: "Education learning management system",
    description: "Developed a full-stack web application enabling users to sign up, sign in, and access a personalized dashboard with subject-wise materials. – Integrated Cloudinary and Telegram Bot API to upload, store, and securely deliver course materials in the LMS app, enabling both cloud-based and chat-based file access and storage. – Built a responsive React front-end with React Router for smooth and component-based navigation.",
    tags: ["React", "Node.js", "MongoDB","Express", "Cloudinary", "Telegram Bot API"],
    image: "",
    githubUrl: "https://github.com/leelamanikumar/materialmate",
    liveUrl: "https://materialmate-1.onrender.com/",
    content: "This project helps the students to access the course materials and also the teachers to upload the materials to the cloud and also to the telegram bot.",
   }
];

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}


