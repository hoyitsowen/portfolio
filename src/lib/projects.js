import ProjectOne from '../assets/Project1.png';
import ProjectTwo from '../assets/Project2.png';
import ProjectThree from '../assets/Project3.png';
import ProjectFour from '../assets/Project4.png';

const projectData = [
  {
    id: 1,
    title: 'TigerRoutes',
    slug: 'tiger-routes',
    category: 'Development',
    year: '2025',
    image: ProjectOne,
    accent: 'bg-[#fef3c7]',
    liveUrl: 'https://tigerroutes.org/',
    description:
      'TigerRoutes is a responsive career navigation platform designed to help UST Senior High School students discover university degree programs tailored to their unique profiles. Moving beyond standard quiz-based guides, the application utilizes a custom mathematical framework that evaluates personality traits, interests, and academic backgrounds to generate highly accurate, data-driven program recommendations. Built in collaboration with a certified guidance counselor, the platform empowers students to make informed academic decisions while providing an administrative dashboard for counselors to monitor student analytics and offer personalized advising.',
    screenshots: [ProjectOne, ProjectOne],
    tech: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MySQL', 'AWS'],
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
    contributions: [
      'Designed intuitive user interfaces and responsive high-fidelity mockups for both student and counselor portals',
      'Developed the interactive client-side application using React, ensuring cross-device compatibility',
      'Built the frontend architecture for the counselor analytics dashboard to visualize student assessment data',
      'Authored use cases, testing scenarios, and documentation for User Acceptance Testing (UAT)',
      'Implemented the UI for dynamic student profiling and the generation of exportable PDF results']
  },
  {
    id: 2,
    title: 'ParkFinder',
    slug: 'park-finder',
    category: 'Design',
    year: '2025',
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
    year: '2024',
    image: ProjectThree,
    accent: 'bg-[#e0e7ff]',
    description:
      "A point-of-sale system tailored for small cafes: order management, receipts, and simple inventory tracking.",
    screenshots: [ProjectThree, ProjectThree],
    tech: ['React', 'SQLite', 'Electron'],
    features: ['Order flow', 'Receipt printing', 'Inventory alerts'],
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Roar Call',
    slug: 'roar-call',
    category: 'Design',
    year: '2025',
    image: ProjectFour,
    accent: 'bg-[#d1fae5]',
    description:
      'A concept app for community voice messaging with playful branding and simple onboarding flows.',
    screenshots: [ProjectFour, ProjectFour],
    tech: ['Figma', 'Illustration', 'React Native'],
    features: ['Onboarding', 'Voice messages', 'Branded UI']
  }
];

export default projectData;
