import ProjectOne from '../assets/tigerroutes.png';
import ProjectTwo from '../assets/park-finder.png';
import ProjectThree from '../assets/austins-cafe-pos.png';
import ProjectFour from '../assets/Project4.png';
import TigerRoutesHeader from '../assets/tigerroutes-header.png';
import AustinsHeader from '../assets/austins-header.png'
import ParkFinderHeader from '../assets/parkfinder-header.png';

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
    imageHeader: ParkFinderHeader,
    accent: 'bg-[#fbcfe8]',
    description:
      'ParkFinder is a mobile application that aims to offer real-time parking availability within an establishment to drivers, and provide establishments the ability to manage their parking lots in an organized and efficient manner by leveraging IoT sensor technology to monitor and display the number of occupied and vacant spaces in a parking lot.',
    screenshots: [ProjectTwo, ProjectTwo],
    tech: ['Figma'],
    contributions: [
      'Designed an intuitive, mobile-first interface for drivers to instantly view real-time parking availability and navigate to open spaces with minimal friction.',
      'Created clean, data-rich web dashboard layouts for establishment managers to easily monitor live capacity, peak-hour reports, and vehicle flow insights at a glance.',
      'Developed detailed visual mockups and interactive prototypes to map out the complete user journey for both the driver-facing application and the facility management portal.',
      'Established a cohesive color palette, typography system, and clear visual hierarchy focused on high readability—reducing cognitive load for drivers on the go and simplifying complex data visualization for administrators.',],
    features: [
      { title: 'Real-Time Availability',
        description: 'Displays live parking availability within specific establishments.',
      },
      { title: 'Optimized Commutes',
        description: 'Reduces stress, time, and fuel wasted while searching for a parking spot.',
      },
      { title: 'Eco-Friendly Impact',
        description: 'Promotes greener driving by minimizing idle time and reducing traffic buildup within parking lots.',
      },
      { title: 'Advanced Analytics',
        description: 'Provides detailed insights into parking trends and usage patterns.',
      },
      { title: 'Enhanced Customer Experience',
        description: 'Improves overall visitor satisfaction by seamlessly streamlining parking operations.',
      },
      { title: 'Data-Driven Decision Making',
        description: 'Empowers management with actionable insights for strategic planning and operational improvements.',
      }],
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
      'Led the website redesign for Roar Call, the official online advocacy campaign of the UST College of Science Student Council. The revamped platform was strategically designed to foster community discussions, enhance student collaboration, and strengthen the push for an official organization dedicated to the care of campus cats and other animals.',
    screenshots: [ProjectFour, ProjectFour],
    tech: ['Figma', 'TailwindCSS', 'React Native', 'React bits'],
    features: ['Onboarding', 'Voice messages', 'Branded UI'],
    contributions: [
      'Transformed the existing campaign page into a visually engaging, modern website that effectively communicates the advocacy’s core mission and highlights the stories of campus animals.',
      'Restructured the site’s navigation to seamlessly guide visitors through ongoing discussions, collaborative initiatives, and clear calls-to-action for students looking to get involved.',
      'Established a warm, welcoming, and compassionate design system—including a cohesive color palette and typography—that resonates emotionally with the student body and animal welfare advocates.',
      'Ensured the user interface is fully fluid and mobile-friendly, providing an accessible and smooth browsing experience for students accessing campaign updates on their phones.'],
    features: [
      { title: 'Donation Portal',
        description: 'Enables users to easily contribute ROAR Call animal welfare initiatives through a secure and user-friendly donation interface.',
      },
      { title: 'Volunteer Sign-up Forms',
        description: 'Allows interested students and supporters to register for upcoming activities, events, and outreach programs.',
      },
      { title: 'Admin Dashboard',
        description: 'A dedicated backend interface for organizers to manage content, view submissions, track donations, and post announcements efficiently.',
      }],
    github: 'https://github.com/hoyitsowen/roarcall'
  }
];

export default projectData;
