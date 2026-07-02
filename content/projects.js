const projects = [
  {
    title: 'ALAC-a-zam – NHS Referral Decision Support Tool',
    date: 'Mar 2026',
    role: '2nd Place Overall, NHS Hack Day #30',
    link: 'https://github.com/HALP-Cardiff/NHS_Referral_Management',
    post: '/posts/alac_a_zam',
    description: [
      'Built at NHS Hack Day #30 with a multidisciplinary team: a clinical decision support tool that streamlines the wheelchair referral process for 45,000+ users in South Wales by flagging incomplete forms and providing evidence-based recommendations in ~20 seconds.',
      'Designed the system architecture and built the backend, LLM integration, and parts of the frontend across a Next.js frontend, Express backend, and FastAPI Bayesian network service. Won 2nd Place Overall and 3rd Place in the Community Vote.'
    ]
  },
  {
    title: 'Rugby Discover Cymru',
    date: 'Feb 2026',
    role: 'Best Conceptual Award, Hack the Diff',
    link: 'https://github.com/HALP-Cardiff/rugby-discover-cymru',
    post: '/posts/hack_the_diff',
    description: [
      'Built during the Hack the Diff hackathon for the Welsh Rugby Union: a platform that helps people discover and connect with Welsh rugby clubs by location, interest, ability level, and availability.',
      'Won the Best Conceptual Award. Built with Next.js and the Google Maps API, with caching for a fast, map-driven club discovery experience.'
    ]
  },
  {
    title: 'Roz & Kirsty Photography Platform',
    date: 'Jul 2025 – Sep 2025',
    role: 'MSc Dissertation, Cardiff University',
    link: '',
    description: [
      'Designed and built a three-application platform (Photographer App, Parent App, and Admin Panel) using Node.js, Express, PostgreSQL, and React Native.',
      'Replaced manual QR workflows with automated metadata-based photo matching, backed by CI/CD and GDPR-compliant data handling.'
    ]
  },
  {
    title: 'COMSC Assessment Tracking',
    date: 'Nov 2023 – Dec 2023',
    role: 'Student, Cardiff University',
    link: 'https://github.com/tenserebel/Assessment-Tracking',
    description: [
      "Collaborated on a web-based platform to oversee and administer all of the university's ongoing assessments. Through the portal, modules can be evaluated, authorized, and sent back for review for any necessary corrections by roles.",
      'Specifically developed a security system with a hierarchy that let different roles access different areas of the portal only.'
    ]
  },
  {
    title: 'Damagic',
    date: 'Apr 2022 – May 2023',
    role: 'Student, MIT ADT University',
    link: 'https://github.com/tenserebel/Damagic',
    description: [
      'Created a web application for car damage detection, utilizing computer vision techniques to automatically identify and generate bounding boxes around damaged areas in given images. We had used Django for the backend.',
      'Won Best Presentation Award for the project at the 5th National Level Conference on Innovative Global Technology Trends.'
    ]
  },
  {
    title: 'Carbon FP',
    date: 'Mar 2022',
    role: '',
    link: 'https://github.com/tenserebel/CO2-emission',
    description: [
      'Developed Carbon FP, a website dedicated to providing information and calculations related to carbon emissions.',
      'Built a mobile-responsive webpage using Flask, HTML, CSS, and JavaScript, establishing accessibility across different devices.'
    ]
  },
  {
    title: 'Product-based-recommendation-system',
    date: 'May 2022',
    role: '',
    link: 'https://github.com/tenserebel/Product-based-recommendation-system',
    description: [
      'Implemented a high-efficiency product recommendation system using machine learning algorithms (KNN, cosine similarity) with MongoDB for storing user data and semi-collaborative filtering. Achieved 92.5% efficiency measured by NDCG.'
    ]
  },
  {
    title: 'Robocon Portfolio Website',
    date: '',
    role: 'Associated with Team Volta',
    link: 'https://robocon-team.netlify.app',
    description: [
      'A portfolio website for the team which would display our achievements and potential members would be able to contact us through it.',
      'Skills: Cascading Style Sheets (CSS) · Cloud · JavaScript · Sass · HTML5'
    ]
  },
  {
    title: 'Uber Analysis',
    date: '',
    role: '',
    link: 'https://github.com/tenserebel/uber-analysis',
    description: [
      'This is exploratory data analysis (EDA) on Uber data. Exploratory data analysis is an approach of analyzing data sets to summarize their main characteristics, often using statistical graphics and other data visualization methods.',
      'In this project we explore the data to answer certain questions regarding the data as well as using dashboards to represent the data properly.',
      'Skills: Python (Programming Language) · Flask · Cascading Style Sheets (CSS) · Data Analysis · JavaScript · Google Data Studio · HTML'
    ]
  }
]

export default projects
