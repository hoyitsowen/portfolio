import ProjectOne from '../assets/tigerroutes.png';
import ProjectTwo from '../assets/park-finder.png';
import ProjectThree from '../assets/austins-cafe-pos.png';
import ProjectFour from '../assets/roarcall.png';
import ProjectSeven from '../assets/baon.png';
import TigerRoutesHeader from '../assets/tigerroutes-header.png';
import TigerRoutesLanding from '../assets/tigerroutes-landing-page-preview.png';
import TigerRoutesRegister from '../assets/tigerroutes-register-preview.png';
import TigerRoutesHome from '../assets/tigerroutes-home-preview.png';
import TigerRoutesTest from '../assets/tigerroutes-test-preview.png';
import TigerRoutesDashboard from '../assets/tigerroutes-dashboard-preview.png';
import TigerRoutesAnalytics from '../assets/tigerroutes-analytics-preview.png';
import AustinsHeader from '../assets/austins-header.png'
import AustinsMenu from '../assets/austins-menu-preview.png'
import AustinsOrders from '../assets/austins-orders-preview.png'
import AustinsReceipt from '../assets/austins-receipt-pos.png'
import AustinsOrderHistory from '../assets/austins-order-history-preview.png'
import AustinsQueue from '../assets/austins-queue-preview.png'
import ParkFinderHeader from '../assets/parkfinder-header.png';
import RoarCallHeader from '../assets/roarcall-header.png';
import RoarCallPreview from '../assets/roarcall-landing-page.png';
import BaonHeader from '../assets/baon-header.png';
import BaonEarlyBird from '../assets/baon-early-bird-promo.jpg';
import BaonCast from '../assets/baon-cast-erick.jpg';
import BaonCastSched from '../assets/baon-cast-sched.jpg';
import BaonTatlongAraw from '../assets/baon-tatlong-araw.jpg';
import BaonBukasNa from '../assets/baon-bukas-na.jpg';
import BaonSalamat from '../assets/baon-salamat.jpg';
import PosterHeader from '../assets/poster-collection/poster-collection-header.png';
import PosterPreview from '../assets/poster-collection/poster-collection-preview.jpg';
import PosterOne from '../assets/poster-collection/01.jpg';
import PosterTwo from '../assets/poster-collection/02.jpg';
import PosterThree from '../assets/poster-collection/03.jpg';
import PosterFour from '../assets/poster-collection/04.jpg';
import PosterFive from '../assets/poster-collection/05.jpg';
import PosterSix from '../assets/poster-collection/06.jpg';
import PosterSeven from '../assets/poster-collection/07.jpg';
import PosterEight from '../assets/poster-collection/08.jpg';
import PosterNine from '../assets/poster-collection/09.jpg';
import PosterTen from '../assets/poster-collection/10.jpg';
import PosterEleven from '../assets/poster-collection/11.jpg';
import PosterTwelve from '../assets/poster-collection/12.jpg';
import PosterThirteen from '../assets/poster-collection/13.jpg';
import PosterFourteen from '../assets/poster-collection/14.jpg';
import PosterFifteen from '../assets/poster-collection/15.jpg';
import PosterSixteen from '../assets/poster-collection/16.jpg';
import PosterSeventeen from '../assets/poster-collection/17.jpg';
import PosterEighteen from '../assets/poster-collection/18.jpg';
import PosterNineteen from '../assets/poster-collection/19.jpg';
import PosterTwenty from '../assets/poster-collection/20.jpg';
import PosterTwentyOne from '../assets/poster-collection/21.jpg';
import PosterTwentyTwo from '../assets/poster-collection/22.jpg';

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
    screenshots: [TigerRoutesLanding, TigerRoutesRegister, TigerRoutesHome, TigerRoutesTest, TigerRoutesDashboard, TigerRoutesAnalytics],
    tech: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MySQL', 'AWS'],
    contributions: [
      'Designed intuitive user interfaces and responsive high-fidelity mockups for both student and counselor portals',
      'Integrated AI-assisted conversational features using an LLM-powered chatbot and Retrieval-Augmented Generation (RAG) to provide contextual responses based on project knowledge and program criteria. ',
      'Developed the interactive client-side application using React, ensuring cross-device compatibility',
      'Built the frontend architecture for the counselor analytics dashboard to visualize student assessment data',
      'Authored use cases, testing scenarios, and documentation for User Acceptance Testing (UAT)'],
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
    screenshots: [],
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
    screenshots: [AustinsMenu, AustinsOrders, AustinsReceipt, AustinsOrderHistory, AustinsQueue],
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
    image: ProjectFour,
    imageHeader: RoarCallHeader,
    accent: 'bg-[#d1fae5]',
    description:
      'Led the website redesign for Roar Call, the official online advocacy campaign of the UST College of Science Student Council. The revamped platform was strategically designed to foster community discussions, enhance student collaboration, and strengthen the push for an official organization dedicated to the care of campus cats and other animals.',
    screenshots: [RoarCallPreview],
    screenshotGridClass: 'grid-cols-1',
    tech: ['Figma', 'TailwindCSS', 'React Native', 'React bits'],
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
  },
  {
    id: 5,
    title: 'Poster Collection',
    slug: 'poster-collection',
    category: 'Design',
    year: '2022',
    image: ProjectFive,
    imageHeader: PosterHeader,
    accent: 'bg-[#d1fae5]',
    description:
      'A self-initiated creative challenge to push my boundaries as a Graphic Designer by creating weekly posters that explore new visual styles, bold typography, and experimental compositions. Each piece gives me the freedom to express ideas, challenge my creativity, and continuously refine my skills as a Multimedia Artist.',
    screenshots: [PosterPreview, PosterOne, PosterTwo, PosterThree, PosterFour, PosterFive, PosterSix, PosterSeven, PosterEight, PosterNine, PosterTen, PosterEleven, PosterTwelve, PosterThirteen, PosterFourteen, PosterFifteen, PosterSixteen, PosterSeventeen, PosterEighteen, PosterNineteen, PosterTwenty, PosterTwentyOne, PosterTwentyTwo],
    tech: ['Adobe Photoshop', 'Adobe Illustrator'],
    contributions: [
      'Explored diverse themes and creative directions to give each weekly poster a unique identity.',
      'Created original poster layouts using thoughtful typography, color palettes, and visual composition.',
      'Experimented with different styles, textures, and design techniques to expand my creative range.',
      'Independently transformed ideas into engaging visuals through intentional design choices.',
      'Strengthened my graphic design skills through consistent practice, experimentation, and continuous refinement.',
    ],
    features: []
  },
  {
    id: 7,
    title: 'Baon - A Musical Production',
    slug: 'baon',
    category: 'Design',
    year: '2026',
    image: ProjectSeven,
    imageHeader: BaonHeader,
    accent: 'bg-[#d1fae5]',
    description:
      'BAON is an original musical production by Mediartrix-UST that explores themes of family, grief, memories, and healing. As part of the Marketing Staff, I contributed to the production\'s promotional efforts by creating publication materials, supporting marketing initiatives, and maintaining visual consistency across promotional platforms.',
    screenshots: [BaonEarlyBird, BaonCast, BaonCastSched, BaonTatlongAraw, BaonBukasNa, BaonSalamat],
    tech: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Canva'],
    contributions: [
      'Designed publication materials and promotional graphics to drive audience engagement for the musical production.',
      'Assisted in developing and executing marketing initiatives across various promotional platforms.',
      'Maintained visual consistency and branding across digital promotional materials.',
      'Collaborated with the marketing team to develop creative assets and support the overall promotional campaign.',
    ],
    features: []
  }
];

export default projectData;
