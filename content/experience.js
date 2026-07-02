const experience = [
  {
    role: 'Junior AI Engineer',
    company: 'Trustie Technology',
    period: 'Oct 2025 – Present',
    current: true,
    stack: ['AWS', 'Python', 'RAG', 'React Native', 'React'],
    summary:
      'Currently working on the Trustie application and building the infrastructure around it.',
    points: [
      'Designed and implemented the ingestion layer for the company\u2019s RAG pipeline, processing 300+ books into an AWS RDS database with preprocessing, chunking, and storage logic for downstream LLM query and retrieval.',
      'Automated cloud provisioning and deployment with AWS CDK, CI/CD pipelines, and GitHub Actions, improving infrastructure consistency and cutting manual deployment effort.',
      'Enhanced backend onboarding logic by optimizing algorithms that detect salary payments and internal transfers, improving accuracy and reliability of AI-assisted financial classification.',
      'Contributed to a React frontend and resolved technical tickets around AWS deployment and environment stability.'
    ]
  },
  {
    role: 'Automation Engineer',
    company: 'Atradius',
    period: 'Jul 2024 – Sep 2025',
    stack: ['Playwright', 'Python', 'ELK Stack', 'Azure DevOps'],
    summary:
      'Worked in the Production Readiness team, contributing to multiple projects, one of them being a COBOL-based job tracking system.',
    points: [
      'Built and managed an automated ETL pipeline integrated with the ELK Stack, enabling real-time observability of 100+ COBOL job executions with dynamic Kibana dashboards for tracking and root-cause analysis.',
      'Led the design of test automation frameworks using Playwright and TypeScript, integrated with Azure Test Plans and CI/CD to reduce manual test effort and accelerate delivery.',
      'Developed SQL queries and data-profiling scripts to surface anomalies and data-quality gaps in production pipelines.',
      'Delivered performance insights and test metrics to 50+ stakeholders through structured presentations and QA documentation.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Capillary Technologies',
    period: 'Jan 2023 – Jul 2023',
    stack: ['Spring Boot', 'Java', 'JUnit', 'MySQL'],
    summary:
      'Hardened core customer loyalty modules with integration testing and new backend endpoints.',
    points: [
      'Built integration testing tools and automated deployment validations for core customer loyalty modules, achieving a 100% success rate on regression testing.',
      'Developed and integrated new backend endpoints and provided on-call support to resolve critical production issues.'
    ]
  },
  {
    role: 'Python Developer Intern',
    company: 'Olympiad Success',
    period: 'Apr 2022 – Aug 2022',
    stack: ['Python', 'MySQL', 'Streamlit'],
    summary:
      'Automated results and certificate generation, and built internal data tooling.',
    points: [
      'Led end-to-end development of applications for automated results and certificate generation, improving document accuracy and reducing manual errors.',
      'Designed internal tools for efficient data handling and storage, streamlining data-management processes.'
    ]
  },
  {
    role: 'Python Developer Intern',
    company: 'Conzura Soft Solutions',
    period: 'Mar 2022 – Apr 2022',
    stack: ['Python', 'Machine Learning', 'Streamlit', 'React'],
    summary:
      'Delivered a client project across Python, machine learning, and Streamlit.',
    points: [
      'Worked on a client project requiring an extensive understanding of Python, machine learning, and Streamlit.',
      'Communicated directly with clients to gather requirements and keep them updated throughout the process.'
    ]
  }
]

export default experience
