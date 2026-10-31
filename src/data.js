export const profile = {
  name: 'Ashish Kumar',
  role: 'Full-Stack Developer | Java, MERN & GenAI',
  location: 'Odisha, India',
  email: '2309kumarashish@gmail.com',
  phone: '+91 9693110282',
  github: 'https://github.com/ashish07kumar',
  linkedin: 'https://www.linkedin.com/in/ashish07kumar',
  resume: '/Ashish_Kumar_Resume.pdf',
  availability: 'Open to internships and entry-level opportunities',
  intro:
    'I build full-stack web applications and AI-powered products using modern frontend technologies, reliable backend APIs, and generative AI integrations. I enjoy solving practical problems and turning ideas into useful software.',
  about:
    'I am a Computer Science undergraduate (B.Tech, 2023–2027) in the Software Technology domain at Centurion University of Technology and Management, Odisha. I focus on full-stack web engineering and applied Generative AI, building reliable backend APIs, intuitive user interfaces, and practical end-to-end software solutions.',
}

// Skill logo imports
import javaLogo from './skills/java.svg'
import jsLogo from './skills/javascript.svg'
import pythonLogo from './skills/python.svg'

import reactLogo from './skills/react.svg'
import htmlLogo from './skills/html.svg'
import cssLogo from './skills/css.svg'
import tailwindLogo from './skills/tailwind.svg'

import nodeLogo from './skills/nodejs.svg'
import expressLogo from './skills/express.svg'
import springLogo from './skills/springboot.svg'
import flaskLogo from './skills/flask.svg'
import fastapiLogo from './skills/fastapi.svg'
import restApiLogo from './skills/restapi.svg'
import jwtLogo from './skills/jwt.svg'

import mongoLogo from './skills/mongoDB.svg'
import mysqlLogo from './skills/mysql.svg'

import llmLogo from './skills/llm.svg'
import promptLogo from './skills/prompt.svg'
import openaiLogo from './skills/openai.svg'
import geminiLogo from './skills/gemini.svg'

import gitLogo from './skills/git.svg'
import githubLogo from './skills/github.svg'
import vscodeLogo from './skills/vscode.svg'
import postmanLogo from './skills/postman.svg'
import figmaLogo from './skills/figma.svg'
import atlasLogo from './skills/mongodbatlas.svg'
import viteLogo from './skills/vitejs.svg'
import npmLogo from './skills/npm.svg'
import vercelLogo from './skills/vercel.svg'
import renderLogo from './skills/render.svg'

export const skills = [
  {
    category: 'Programming Languages',
    iconType: 'code',
    items: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    category: 'Frontend Development',
    iconType: 'layout',
    items: [
      { name: 'React.js', logo: reactLogo },
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindLogo },
    ],
  },
  {
    category: 'Backend Development',
    iconType: 'server',
    items: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo },
      { name: 'Spring Boot', logo: springLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'REST APIs', logo: restApiLogo },
      { name: 'JWT Authentication', logo: jwtLogo },
    ],
  },
  {
    category: 'Databases',
    iconType: 'database',
    items: [
      { name: 'MongoDB', logo: mongoLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    category: 'AI & Generative AI',
    iconType: 'sparkles',
    items: [
      { name: 'Large Language Models (LLMs)', logo: llmLogo },
      { name: 'Prompt Engineering', logo: promptLogo },
      { name: 'OpenAI API', logo: openaiLogo },
      { name: 'Google Gemini API', logo: geminiLogo },
    ],
  },
  {
    category: 'Tools & Platforms',
    iconType: 'wrench',
    items: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'MongoDB Atlas', logo: atlasLogo },
      { name: 'Vite', logo: viteLogo },
      { name: 'npm', logo: npmLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
]

export const projects = [
  {
    number: '01',
    name: 'AI Expense Tracker',
    type: 'Full-stack · MERN & GenAI',
    summary: 'AI-assisted personal finance platform with natural-language expense extraction, automated budget modeling, and anomaly alerts.',
    description:
      'A full-stack MERN finance application engineered with JWT authentication, transaction tracking, automated budget recommendations, and an intelligent Finance Copilot for natural-language expense queries.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'GenAI', 'JWT', 'REST API'],
    link: 'https://github.com/ashish07kumar/AI-ExpenseTracker',
    problem:
      'Manual expense logging creates recording friction, while static spreadsheet trackers fail to provide actionable financial guidance or proactively detect irregular spending.',
    features: [
      'JWT authentication with bcrypt password hashing and user-isolated financial ledgers in MongoDB Atlas.',
      'Finance Copilot for natural-language queries and automated transaction extraction with confirmation workflows.',
      'Deterministic budget recommendation engine, savings milestone tracking, and monthly financial summaries.',
      'Proactive spending anomaly detection alerting users to atypical expenditure spikes across categories.',
      'React single-page application deployed on Vercel with Node.js/Express API hosted on Render.'
    ],
    architecture:
      'Decoupled MERN architecture: React client state communicates with authenticated Express REST endpoints. AI prompts are validated through strict JSON schema parsers before database persistence to prevent state anomalies.',
    challenge:
      'Ensuring unstructured conversational inputs reliably map into deterministic, typed financial records without ledger inconsistencies; solved with dual validation and user-confirmation steps.'
  },
  {
    number: '02',
    name: 'Smart Waste Management Portal',
    type: 'Full-stack · Python, Flask & MySQL',
    summary: 'Campus sanitation platform featuring QR-verified disposal logs, real-time dustbin monitoring, role-based workflows, and admin analytics.',
    description:
      'A campus sustainability platform providing QR-based waste tracking, dustbin status monitoring, role-based access control, gamified student incentives, and comprehensive administrative analytics.',
    stack: ['Python', 'Flask', 'MySQL', 'SQLAlchemy', 'JavaScript', 'JWT', 'REST API'],
    link: 'https://github.com/ashish07kumar/Smart-Waste-Management-Portal-main',
    problem:
      'Inefficient manual campus waste collection routines lead to overflowing dustbins and lack of student incentive for proper waste segregation and disposal.',
    features: [
      'QR-code verification for physical waste disposal logging and dynamic dustbin status tracking across campus nodes.',
      'JWT authentication, OTP verification, and role-based access control (Student, Sanitation Worker, Admin).',
      'Gamified incentive ecosystem awarding points, achievement badges, and live competitive leaderboards.',
      'Centralized administrative analytics dashboard with real-time waste metrics, dustbin capacity graphs, and CSV reporting.',
      'Relational schema engineered with MySQL and SQLAlchemy ORM ensuring ACID-compliant transaction integrity.'
    ],
    architecture:
      'Python/Flask backend exposing RESTful endpoints coupled with JavaScript-enhanced dashboards. Relational integrity guarantees accurate points ledger balances across all student activities.',
    challenge:
      'Preventing fraudulent QR scans and duplicate point claims; resolved by implementing timestamped, single-use disposal verification tokens.'
  },
  {
    number: '03',
    name: 'Nova AI Voice Assistant',
    type: 'AI · Gemini API & Voice Interaction',
    summary: 'Full-stack productivity assistant integrating Google Gemini conversational intelligence with Web Speech API for real-time hands-free interaction.',
    description:
      'A full-stack AI productivity assistant combining Google Gemini API with the Web Speech API for bidirectional voice recognition, speech synthesis, and persistent conversation context.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Gemini API', 'Web Speech API', 'Cloudinary'],
    link: 'https://github.com/ashish07kumar/VirtualAssNOVA',
    problem:
      'Standard text-based chat tools require constant manual typing and screen attention, creating accessibility and multitasking hurdles for voice-driven workflows.',
    features: [
      'Bidirectional voice interface utilizing the Web Speech API for speech recognition and synthesized voice responses.',
      'Google Gemini API integration delivering contextual answers, task automation, and intelligent summaries.',
      'Distinct state machine handling listening, processing, and speaking states with responsive audio visualizers.',
      'User-level data isolation, protected routes, and persistent session conversation history stored in MongoDB Atlas.',
      'Cloudinary integration for secure avatar handling, secured with environment-based configuration and CORS policies.'
    ],
    architecture:
      'React frontend manages microphone audio states and visual feedback queues, while Express API gateway orchestrates Gemini API communication and persists conversational turns to MongoDB Atlas.',
    challenge:
      'Handling browser-specific Web Speech recognition dropouts and asynchronous audio playback transitions; resolved with robust lifecycle cleanup and fallback text interactions.'
  },
  {
    number: '04',
    name: 'Smart Healthcare Management System',
    type: 'Full-stack · Spring Boot & Angular',
    summary: 'Modular hospital workflow system streamlining patient record management, appointment schedules, and secure clinical communications.',
    description:
      'A healthcare application architecture engineered with Java, Spring Boot, and MySQL to manage patient medical records, physician schedules, and consultation workflows through RESTful services.',
    stack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Hibernate', 'RESTful APIs'],
    link: 'https://github.com/ashish07kumar/smart-healthcare-management-',
    problem:
      'Manual hospital appointment coordination and fragmented patient files create administrative bottlenecks and increase scheduling conflicts.',
    features: [
      'Modular RESTful services developed with Java and Spring Boot following clean layered architecture principles.',
      'Role-based workflow segregation for patients, attending physicians, and administrative hospital staff.',
      'Relational database modeling in MySQL with Hibernate/JPA ensuring referential integrity and transaction security.',
      'Patient consultation records, medical history tracking, and appointment scheduling queues.',
      'Client-side form validation, route guards, and HTTP interceptors implemented in Angular.'
    ],
    architecture:
      'Spring Boot enterprise backend exposing RESTful endpoints connected to MySQL. Angular single-page application manages role-based component trees and asynchronous HTTP interceptors.',
    challenge:
      'Preventing simultaneous appointment double-booking across physician schedules; resolved using Spring `@Transactional` isolation and database-level constraints.'
  },
]

export const education = [
  {
    institution: 'Centurion University of Technology and Management, Odisha',
    degree: 'B.Tech in Computer Science and Engineering',
    domain: 'Software Technology',
    duration: '2023 – 2027',
    score: 'CGPA: 8.98',
    status: 'Current Program',
    logo: '/centurion-logo.png',
    activities: [
      'Smart India Hackathon 2025 Internal Qualifier (Team Syntax-Squad)',
      '100+ Solved DSA on GeeksforGeeks',
      'OCI 2025 Certified AI Foundations Associate',
    ],
    description:
      'Pursuing B.Tech in CSE (Software Technology domain) with an 8.98 CGPA. Core focus areas include Data Structures & Algorithms, Object-Oriented Programming with Java, Database Management Systems, and Full-Stack Web Development.',
    skills: ['Data Structures & Algorithms', 'Java', 'Full-Stack Web Development', 'DBMS', 'Generative AI'],
  },
  {
    institution: 'S.K. Secondary, Kumarpur, Dumar, Banka',
    degree: 'Higher Secondary (12th), Science',
    duration: '2021 – 2023',
    score: 'BSEB Board',
    status: 'Completed',
    logo: '/sk-secondary-logo.png',
    activities: ['Science Stream (BSEB)', 'Physics, Chemistry & Mathematics'],
    description:
      'Completed Higher Secondary education in the Science stream under the Bihar School Examination Board (BSEB), focusing on mathematics, analytical problem solving, and science fundamentals.',
    skills: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    institution: 'B.D. Academy, Amarpur, Banka, Bihar',
    degree: 'Secondary (10th), General',
    duration: '2019 – 2021',
    score: 'CBSE Board',
    status: 'Completed',
    logo: '/bd-academy-logo.png',
    activities: [
      'CBSE Board',
      'SOF Olympiads Participation',
      'Inter-School Competitions',
    ],
    description:
      'Completed secondary schooling under the Central Board of Secondary Education (CBSE), actively participating in Science Olympiads and inter-school academic competitions.',
    skills: ['Science', 'Mathematics', 'English'],
  },
]

export const experiences = [
  {
    id: 'infotact-solutions',
    position: 'UI/UX Design Intern',
    company: 'Infotact Solutions',
    workMode: 'Remote',
    duration: 'May 2025 – July 2025',
    supportingOrg: 'DevsIndia',
    description: [
      'Completed a UI/UX Design Internship supported by DevsIndia.',
      'Designed and improved user interfaces focusing on accessibility and user experience.',
      'Applied modern design principles to create intuitive, visually appealing layouts.',
      'Collaborated with the team to develop better solutions through creativity and problem-solving.',
    ],
    skills: [
      'UI/UX Design',
      'Figma',
      'Wireframing',
      'Prototyping',
      'User-Centered Design',
      'Responsive Design',
    ],
    theme: 'purple',
  },
  {
    id: 'cognifyz-technologies',
    position: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    workMode: 'Remote',
    duration: 'Apr 2025 – May 2025',
    supportingOrg: null,
    description: [
      'Completed a Web Development Internship, gaining hands-on experience in real-world web development.',
      'Contributed to projects with a focus on clean, functional, and responsive design.',
      'Showcased strong dedication, sincerity, and a willingness to learn new technologies.',
      'Demonstrated coordination skills and effective communication with the team.',
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Web Design',
      'Frontend Development',
    ],
    theme: 'blue',
  },
]

