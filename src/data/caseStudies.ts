import { Project } from '../components/ProjectCard';

interface CaseStudyDetail {
  title: string;
  body: string;
}

interface CaseStudyContext {
  role: string;
  team: string;
  timeline: string;
  toolkit: string;
}

export interface CaseStudy extends Project {
  hook: string;
  context: CaseStudyContext;
  problem: CaseStudyDetail;
  investigation: CaseStudyDetail;
  solution: CaseStudyDetail;
  results: CaseStudyDetail;
  reflection: CaseStudyDetail;
  category?: string;
}

export const caseStudies: { [key: string]: CaseStudy } = {



  'project-4': {
    id: 'project-4',
    title: 'Designing a Scalable EHS Platform',
    hook: 'How we built a scalable EHS platform that cut audit prep time by 40%.',
    imageUrl: 'https://placehold.co/800x400/06b6d4/ffffff?text=EHS+Platform+Dashboard',
    description: 'How we built a scalable EHS platform that cut audit prep time by 40%.',
    caseStudy: 'View Case Study →',
    caption: 'This one was a beast. Proud of it.',
    context: {
      role: "Business Analyst",
      team: "Cross-functional team of 10",
      timeline: "12 months",
      toolkit: "Jira, Gherkin, Figma, Power BI"
    },
    problem: {
      title: "ACT I: The Problem (Regulatory Labyrinth)",
      body: "Our client, a global manufacturing giant, was drowning in EHS (Environmental, Health, and Safety) compliance. Manual data collection, disparate systems, and a lack of real-time visibility led to inefficient audits, increased risk, and potential regulatory fines. They needed a unified, scalable platform."
    },
    investigation: {
      title: "ACT II: The Process (Blueprint for Compliance)",
      body: "I led extensive stakeholder interviews across multiple departments and regions to gather requirements. We mapped existing processes, identified pain points, and translated complex regulatory frameworks (GRI, SASB, OSHA) into actionable user stories. Prototyping in Figma was crucial for visualizing workflows and getting early feedback."
    },
    solution: {
      title: "ACT III: The Solution (The Integrated Ecosystem)",
      body: "We designed and implemented a modular EHS platform, integrating incident management, audit scheduling, risk assessment, and compliance reporting. Key features included automated data validation, real-time dashboards, and a centralized document repository. The platform was built with scalability in mind, allowing for future expansion and integration with other enterprise systems."
    },
    results: {
      title: "EPILOGUE: The Impact (Efficiency Unleashed)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Reduced audit preparation time by <strong>40%</strong>, saving hundreds of man-hours annually.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Improved data accuracy and real-time visibility, leading to proactive risk mitigation.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Mastered the art of translating complex regulatory requirements into user-friendly software features.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was a testament to the power of meticulous business analysis in complex domains. It reinforced my belief that technology, when guided by clear requirements and user empathy, can solve even the most daunting business challenges. Seeing the client's relief and improved efficiency was incredibly rewarding."
    }
  },
  'project-5': {
    id: 'project-5',
    title: 'Enterprise QMS Modules',
    hook: 'Streamlining complex lab test data workflows for global industry leaders.',
    imageUrl: 'https://placehold.co/800x400/3b82f6/ffffff?text=QMS+Workflow',
    description: 'Streamlining complex lab test data workflows for global industry leaders.',
    caseStudy: 'View Case Study →',
    caption: 'Making Gherkin a love language.',
    context: {
      role: "Business Analyst",
      team: "Product team of 8",
      timeline: "9 months",
      toolkit: "Azure DevOps, Gherkin, Postman, SQL"
    },
    problem: {
      title: "ACT I: The Problem (Data Deluge)",
      body: "A leading pharmaceutical company struggled with managing vast amounts of lab test data within their existing Quality Management System (QMS). Manual data entry, inconsistent reporting, and a lack of integration with testing equipment led to bottlenecks, errors, and delayed product releases. They needed a robust solution for PPAP and Non-Conformity modules."
    },
    investigation: {
      title: "ACT II: The Process (Precision Engineering)",
      body: "I collaborated closely with lab technicians, quality assurance specialists, and regulatory experts to understand their intricate workflows. We utilized Gherkin to define precise acceptance criteria for each feature, ensuring alignment between business needs and technical implementation. API documentation and validation with Postman were critical for seamless integration with external systems."
    },
    solution: {
      title: "ACT III: The Solution (The Quality Catalyst)",
      body: "We developed and deployed new QMS modules for PPAP (Production Part Approval Process) and Non-Conformity management. The solution featured automated data ingestion from lab equipment, configurable workflow approvals, and dynamic reporting capabilities. This significantly reduced manual effort and improved data integrity across the quality lifecycle."
    },
    results: {
      title: "EPILOGUE: The Impact (Accelerated Compliance)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Reduced data entry errors by <strong>60%</strong> and accelerated product release cycles.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Enhanced compliance with industry regulations through standardized data capture and reporting.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Gained deep expertise in QMS processes and the challenges of data management in highly regulated industries.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was a masterclass in precision and collaboration. It highlighted the importance of clear communication and meticulous documentation when dealing with critical data in regulated environments. Turning complex lab processes into intuitive digital workflows was a significant achievement."
    }
  },
  'project-6': {
    id: 'project-6',
    title: 'AI/ML in Compliance',
    hook: 'Spearheading an AI initiative to improve early risk detection by 20%.',
    imageUrl: 'https://placehold.co/800x400/a855f7/ffffff?text=Predictive+Risk+Model',
    description: 'Spearheading an AI initiative to improve early risk detection by 20%.',
    caseStudy: 'View Case Study →',
    caption: 'Data science 🤝 user empathy.',
    context: {
      role: "Business Analyst / AI Strategist",
      team: "Data Science and Compliance team of 7",
      timeline: "6 months (initial phase)",
      toolkit: "SQL, Power BI, Jira, Predictive Analytics"
    },
    problem: {
      title: "ACT I: The Problem (Reactive Compliance)",
      body: "Our client, a financial services firm, was struggling with reactive compliance. They could identify issues after they occurred, but lacked the ability to predict and prevent potential compliance breaches. This led to costly remediation efforts and reputational risk. They needed a proactive solution."
    },
    investigation: {
      title: "ACT II: The Process (Predictive Pathways)",
      body: "I worked closely with data scientists to identify key risk indicators from vast datasets, including transaction logs, employee activity, and external market data. We explored various machine learning models suitable for anomaly detection and predictive analytics. My role was to bridge the gap between the technical capabilities of AI/ML and the practical needs of the compliance department, ensuring the models were interpretable and actionable."
    },
    solution: {
      title: "ACT III: The Solution (The Early Warning System)",
      body: "We developed a proof-of-concept for an AI-powered predictive compliance risk model. The model analyzed historical data to identify patterns indicative of potential breaches, flagging high-risk activities for early intervention. Power BI dashboards were created to visualize the model's predictions and provide actionable insights to compliance officers."
    },
    results: {
      title: "EPILOGUE: The Impact (Proactive Protection)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Initial analysis demonstrated a <strong>20%</strong> improvement in early risk detection, allowing for proactive mitigation strategies.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Empowered compliance teams with data-driven insights, shifting from reactive to proactive risk management.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Gained invaluable experience in the application of AI/ML in a critical business domain, emphasizing ethical considerations and model interpretability.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was at the cutting edge of compliance technology. It underscored the importance of a strong business analyst to translate complex AI capabilities into tangible business value. It was exciting to be at the forefront of using data science to create a more secure and compliant financial environment."
    }
  },
  'pokedex-app': {
    id: 'pokedex-app',
    title: 'The Kanto Codex',
    hook: 'Gotta analyze \'em all! A Pokedex app for the modern trainer.',
    imageUrl: 'images/pokedex-app.gif',
    description: 'A web-based Pokedex application to catalog and analyze Pokémon data.',
    caseStudy: 'View Case Study →',
    caption: 'Who\'s that Pokémon? It\'s... a Case Study!',
    context: {
      role: "Trainer / Developer",
      team: "Solo",
      timeline: "2 weeks",
      toolkit: "React, TypeScript, PokeAPI"
    },
    problem: {
      title: "ACT I: The Problem (Gotta Catch 'Em All... Data)",
      body: "As a dedicated Pokémon trainer, I found existing Pokedex apps lacked the specific data visualizations, often resulting in <a href='https://archives.f90.dev/cdn/missingno.webp' target='_blank' rel='noopener noreferrer'>Missing</a> data and analysis tools I craved. I wanted a personalized way to explore Pokémon stats, types, and evolutions, beyond just basic entries."
    },
    investigation: {
      title: "ACT II: The Process (Into the Tall Grass)",
      body: "I began by exploring the PokeAPI, understanding its structure and data limitations. I sketched out UI ideas focusing on clear data presentation and interactive elements. The 'Aha!' moment was realizing I could leverage modern web technologies to create a smooth, responsive experience that felt almost native."
    },
    solution: {
      title: "ACT III: The Solution (Evolution!)",
      body: "I developed a React-based Pokedex application with TypeScript for type safety. It features dynamic filtering, detailed Pokémon profiles, and interactive charts for stat comparisons. Users can search by name, filter by type, and view comprehensive data on each Pokémon, including abilities, moves, and evolution chains."
    },
    results: {
      title: "EPILOGUE: The Impact (Master Ball Achievement)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> A highly interactive and data-rich Pokedex application that enhances the Pokémon data exploration experience.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Deepened my understanding of API integration, state management in React, and efficient data rendering for large datasets.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was a nostalgic journey combined with a modern development challenge. It reinforced the idea that passion projects can be incredibly effective learning vehicles, pushing you to explore new technologies and solve interesting problems. Plus, now I always know who that Pokémon is!"
    }
  },
  'auto-dashboard': {
    id: 'auto-dashboard',
    title: 'Project Vroom',
    hook: 'Rev Up Your Data: A Real-time Auto Dashboard',
    imageUrl: 'images/auto-dashboard-sweep.gif',
    description: 'A real-time automobile dashboard display for vehicle diagnostics and performance.',
    caseStudy: 'View Case Study →',
    caption: '0 to 60 in 4.2 seconds (of data loading).',
    context: {
      role: "Automotive Enthusiast / Engineer",
      team: "Solo",
      timeline: "3 weeks",
      toolkit: "React, D3.js, WebSockets"
    },
    problem: {
      title: "ACT I: The Problem (Blind Spots on the Dashboard)",
      body: "Modern car dashboards often lack customization and real-time, granular data. I wanted a way to visualize my vehicle's performance metrics (speed, RPM, fuel efficiency, engine diagnostics) in a more dynamic and personalized way, beyond what the factory dash offered."
    },
    investigation: {
      title: "ACT II: The Process (Under the Hood)",
      body: "I researched OBD-II (On-Board Diagnostics) interfaces and how to extract data from a vehicle's ECU. I explored various data visualization libraries, settling on D3.js for its flexibility. The 'Aha!' moment was realizing I could simulate real-time data streams using WebSockets for development, then integrate with a physical OBD-II reader."
    },
    solution: {
      title: "ACT III: The Solution (Full Throttle)",
      body: "I built a React application featuring a customizable dashboard with various gauges and displays powered by D3.js. It connects to a simulated (and eventually real) data source via WebSockets, providing real-time updates for speed, RPM, temperature, and other diagnostic information. Users can select which metrics to display and customize the layout."
    },
    results: {
      title: "EPILOGUE: The Impact (The Open Road)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> A functional, real-time automobile dashboard that provides deeper insights into vehicle performance.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Gained experience with real-time data streaming, advanced data visualization with D3.js, and hardware integration concepts.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was a thrilling ride, combining my love for cars with my passion for coding. It presented unique challenges in data handling and visualization, pushing me to learn new libraries and architectural patterns. It's a testament to how technology can enhance even our most everyday experiences."
    }
  },
  'f1-data-analytics': {
    id: 'f1-data-analytics',
    title: 'DRS (Data Reporting System)',
    category: 'After-Hours Atelier',
    hook: 'It\'s lights out and away we go... to the case study! F1 data analysis.',
    imageUrl: 'images/auto-dashboard-sweep.gif',
    description: 'An application for analyzing Formula 1 race data and performance metrics.',
    caseStudy: 'View Case Study →',
    caption: 'It\'s lights out and away we go... to the case study!',
    context: {
      role: "Strategist / Data Analyst",
      team: "Solo",
      timeline: "4 weeks",
      toolkit: "Python, Pandas, React, Chart.js"
    },
    problem: {
      title: "ACT I: The Problem (The Unseen Lap Times)",
      body: "As an F1 fan, I always wanted to dive deeper into race data than what official broadcasts offered. Analyzing lap times, sector performance, tire degradation, and driver strategies required sifting through disparate data sources, which was time-consuming and inefficient."
    },
    investigation: {
      title: "ACT II: The Process (The Pitwall Strategy)",
      body: "I started by identifying publicly available F1 data sources (e.g., Ergast API, F1 official data archives). I then planned a data pipeline using Python and Pandas for cleaning and structuring the data. For the frontend, I envisioned interactive charts and tables to visualize key metrics. The 'Aha!' moment was realizing the power of combining historical data with real-time (simulated) race data for predictive insights."
    },
    solution: {
      title: "ACT III: The Solution (Chequered Flag)",
      body: "I developed a full-stack application. The backend, built with Python, handles data ingestion, processing, and serves it via a simple API. The frontend, a React application, uses Chart.js to display interactive visualizations of lap times, speed traps, tire strategies, and driver comparisons. Users can select races, drivers, and view various performance graphs."
    },
    results: {
      title: "EPILOGUE: The Impact (Pole Position Insights)",
      body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> A comprehensive F1 data analytics platform providing fans with in-depth race insights.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Enhanced my skills in data engineering, API development, and complex data visualization, all while indulging my passion for F1.</li></ul>"
    },
    reflection: {
      title: "The Reflection",
      body: "This project was a fantastic blend of my interests in data, development, and Formula 1. It demonstrated how powerful data analysis can be in uncovering hidden narratives and providing deeper understanding, even in a fast-paced, high-stakes environment like F1. It was truly 'lights out and away we go' into a new realm of learning!"
    }
  }
};
