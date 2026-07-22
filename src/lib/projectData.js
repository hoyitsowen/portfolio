import ProjectOne from '../assets/tigerroutes.png';
import ProjectTwo from '../assets/park-finder.png';
import ProjectThree from '../assets/austins-cafe-pos.png';
import ProjectFour from '../assets/Project4.png';
import TigerRoutesHeader from '../assets/tigerroutes-header.png';
import AustinsHeader from '../assets/austins-header.png'

const projectData = [
  {
    id: 1,
    title: 'TigerRoutes',
    slug: 'tiger-routes',
    category: 'Development',
    year: '2026',
    image: ProjectOne,
    imageHeader: TigerRoutesHeader,
    accent: 'bg-[#fef3c7]',
    liveUrl: 'https://tigerroutes.org/',
    description:
      'TigerRoutes is a responsive career navigation platform designed to help UST Senior High School students discover university degree programs tailored to their unique profiles. Moving beyond standard quiz-based guides, the application utilizes a custom mathematical framework that evaluates personality traits, interests, and academic backgrounds to generate highly accurate, data-driven program recommendations. Built in collaboration with a certified guidance counselor, the platform empowers students to make informed academic decisions while providing an administrative dashboard for counselors to monitor student analytics and offer personalized advising.',
    screenshots: [ProjectOne, ProjectOne],
    tech: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MySQL', 'AWS'],
    contributions: [
      'Designed intuitive user interfaces and responsive high-fidelity mockups for both student and counselor portals',
      'Developed the interactive client-side application using React, ensuring cross-device compatibility',
      'Built the frontend architecture for the counselor analytics dashboard to visualize student assessment data',
      'Authored use cases, testing scenarios, and documentation for User Acceptance Testing (UAT)',
      'Implemented the UI for dynamic student profiling and the generation of exportable PDF results'],
    features: [
      { title: 'Psychometric Scoring Engine',
        description: 'A rule-based system integrating RIASEC and Big Five assessments to calculate personalized program recommendations.',
      },
      { title: 'Administrative Dashboard',
        description: 'A dedicated interface for guidance counselors to monitor student metrics, manage accounts, and provide direct feedback.',
      },
      { title: 'Student Profiling',
        description: 'Dynamic retrieval of academic profiles and longitudinal tracking of student career trajectories.',
      },
      { title: 'PDF Report Generation',
        description: 'Generates downloadable PDF summaries of assessment results and program matches.',
      },
      { title: 'Cross-Platform Accessibility',
        description: 'Fully responsive web and mobile interfaces.',
      }],
    github: 'https://github.com/codingwith-ry/tigerroutes#',
  },
  {
    id: 2,
    title: 'Park Finder',
    slug: 'park-finder',
    category: 'Design',
    year: '2026',
    image: ProjectTwo,
    accent: 'bg-[#fbcfe8]',
    description:
      'A mobile-first experience for finding nearby parks, with curated photos, accessibility info, and route previews.',
    screenshots: [ProjectTwo, ProjectTwo],
    tech: ['Figma', 'React', 'Accessibility'],
    features: ['Design system', 'High-fidelity prototypes', 'User flows', 'Accessibility considerations'],
    github: 'https://github.com'
  },
  {
    id: 3,
    title: "Austin's Cafe POS",
    slug: 'austins-cafe-pos',
    category: 'Development',
    year: '2025',
    image: ProjectThree,
    imageHeader: AustinsHeader,
    accent: 'bg-[#e0e7ff]',
    description:
      "Designed and developed a comprehensive Point of Sale (POS) and Inventory Management System tailored for Austin's Cafe and Gastro Pub. This end-to-end solution modernized their daily operations by integrating real-time stock tracking, seamless transaction processing, and automated reporting. Ultimately, the system empowered the business to optimize inventory levels, accelerate daily sales, and leverage data for strategic decision-making.",
    screenshots: [ProjectThree, ProjectThree],
    tech: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'HTML5', 'JavaScript'],
    contributions: [
      'Conducted workflow analysis to design a low-friction, high-speed POS interface tailored specifically for fast-paced cafe environments.',
      'Designed clean, scannable administrative dashboards that make complex inventory data and sales reports easy to digest at a glance.',
      'Translated UI mockups into fully responsive, interactive web pages using HTML, CSS, and Bootstrap, ensuring seamless operation across different devices (tablets for POS, desktops for admin).',
      'Leveraged JavaScript to build dynamic frontend features—such as real-time cart updates, interactive modal popups, and instant search filtering—without requiring page reloads.'],
    features: [
      { title: 'Streamlined POS Interface',
        description: 'A highly optimized, touch-friendly checkout screen designed to minimize clicks and accelerate order processing during peak cafe hours.',
      },
      { title: 'Interactive Inventory Dashboard',
        description: 'A visual tracking hub that displays real-time stock levels, featuring dynamic color-coded alerts for low-stock items to prevent shortages.',
      },
      { title: 'Dynamic Sales Reporting',
        description: 'Clean, interactive tables and data summaries that allow management to filter historical sales data and extract actionable insights for better decision-making.',
      },
      { title: 'Responsive Admin Panel',
        description: 'A mobile-friendly management portal allowing the owners to oversee operations, update menus, and check inventory on the go.',
      }],
    github: 'https://github.com/hoyitsowen/Austin-sIMS-POS'
  },
  {
    id: 4,
    title: 'Roar Call',
    slug: 'roar-call',
    category: 'Design',
    year: '2025',
    image: '',
    accent: 'bg-[#d1fae5]',
    description:
      'A concept app for community voice messaging with playful branding and simple onboarding flows.',
    screenshots: [ProjectFour, ProjectFour],
    tech: ['Figma', 'Illustration', 'React Native'],
    features: ['Onboarding', 'Voice messages', 'Branded UI'],
    github: 'https://github.com/hoyitsowen/roarcall'
  }
];

export default projectData;
