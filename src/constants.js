// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import futureinternsLogo from './assets/company_logo/futureinterns_logo.png'; // You'll need to add this image

// Education Section Logo's
import kmacollegeLogo from './assets/education_logo/kma_logo.png'; // You'll need to add this image
import siesLogo from './assets/education_logo/sies_logo.png'; // You'll need to add this image

// Project Section Logo's
import robotLogo from './assets/work_logo/robot.png'; // You'll need to add this image
import smsLogo from './assets/work_logo/sms.png'; // You'll need to add this image
import faceDetectionLogo from './assets/work_logo/face_detection.png'; // You'll need to add this image


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: futureinternsLogo,
      role: "Web Developer",
      company: "Future Interns",
      date: "December 2025 - January 2026",
      desc: "I am currently doing a Full Stack Web Development Internship at Future Interns, where I work on hands-on, task-based projects focused on real-world web development. This internship helps me strengthen my frontend skills, understand full stack concepts, and build a professional portfolio using modern web technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Web Design",
        "Frontend Development",
        "Basic React Concepts",
        "UI/UX Design Principles",
        "Git & GitHub",
        "Project Structuring",
        "SEO Basics",
        "Problem Solving",
        "Self-learning & Time Management"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: siesLogo,
      school: "S.I.E.S Graduate School of Technology",
      date: "2024 - 2028",
      desc: "I am a Computer Engineering student with a strong foundation in programming, data structures, and web development. My academic journey has involved building practical projects using Java and Python, working with databases, and applying core concepts of software development through hands-on coursework and projects.",
      degree: "B.E / B.Tech in Electronics and Computer Science",
    },
    {
      id: 1,
      img: kmacollegeLogo,
      school: "K.M. Agrawal College of Arts, Commerce and Science",
      date: "2022 - 2024",
      desc: "I completed my Higher Secondary Certificate (HSC) with a focus on science subjects, where I developed a strong foundation in mathematics, logical thinking, and basic programming concepts. This academic experience helped build my analytical skills and interest in engineering and technology.",
      degree: "HSC (Higher Secondary School)",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Autonomous Security Patrolling Robot with Motion Detection and Machine Learning",
      description:
        "An autonomous security robot designed for continuous patrolling using line following and obstacle avoidance. The system detects motion using sensors and applies a cloud-based machine learning model to distinguish between humans and animals. When a human is detected, the robot triggers alerts, records video, and streams live footage to a web interface.",
      image: robotLogo,
      tags: ["Arduino Uno", "ESP32-CAM", "IR Sensors", "Ultrasonic Sensor", "PIR Sensor", "Python", "Flask", "Machine Learning", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Student Management System using Java",
      description:
        "A desktop-based application built using Java Swing that allows users to add, view, update, and delete student records. The system stores data locally in a CSV file, making it lightweight and suitable for academic use without database dependency.",
      image: smsLogo,
      tags: ["Java", "Java Swing", "OOP Concepts", "File Handling", "CSV", "ArrayList"],
      github: "https://github.com/prit-esh-20/Student-Management-System",
      webapp: "",
    },
    {
      id: 2,
      title: "Face Detection Attendance Recognition System using Python",
      description:
        "A real-time face detection application that uses a webcam to detect human faces using OpenCV and Haar Cascade classifiers. The system highlights detected faces in live video and demonstrates practical use of computer vision techniques for surveillance and attendance systems.",
      image: faceDetectionLogo,
      tags: ["Python", "OpenCV", "Haar Cascade Classifier", "Computer Vision"],
      github: "https://github.com/prit-esh-20/python-major-projects/blob/main/face_detection.py",
      webapp: "",
    }
  ];  