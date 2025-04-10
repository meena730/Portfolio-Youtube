import { Grade } from "@mui/icons-material";
import Food from '../images/food.png'
import Crud from '../images/crud.png'
import Progress from '../images/progress.png';
import Movie from '../images/movie.png';
import Portfolio from '../images/portfolio.png';
import Ecommerce from '../images/ecommerce.png';
import Yume from '../images/yume.png';
import factobi from '../images/factobi_icon.ico';
import factobi1 from '../images/factobi1.png'
export const Bio = {
  name: "Meena Dhakad",
  roles: ["Frontend Developer", "Design-Driven Frontend Enthusiast"],
  description:
    "I am an ambitious learner with a focus on growth, quality, and delivering results that make a difference.",
  github: "https://github.com/meena730",
  resume:
    "https://drive.google.com/file/d/1XlpHWqxT3z527ijTNUzzsgi9GDipsekW/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/meena-dhakad-9b225a202/",
  twitter: "https://x.com/DhakadMeena",
  insta: "https://www.instagram.com/smile_or_code/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "TailwindCSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Technical writing",
        image:
          "https://imgs.search.brave.com/hB5NKRNm9YbPhBydj9hrmqqUq0rOSSQtWMNtnYRCcOM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzUwLzM4Lzc5/LzM2MF9GXzg1MDM4/NzkzM19uMm81bnl0/bHM0cTg2QmZBdnpr/cDdoVWdZa29DdTRS/Vy5qcGc",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },

      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
      {
        name: "Adobe XD",
        image:
          "https://camo.githubusercontent.com/c205ecbe12500177d102169d97bc1c17c545155fdf5ec78c08d54ac53e5b38c1/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61646f62652d78642e737667",
      },
      {
        name: "Figma",
        image:
          "https://camo.githubusercontent.com/ed93c2b000a76ceaad1503e7eb9356591b885227e82a36a005b9d3498b303ba5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: factobi,
    role: "React developer and Tester",
    company: "Factobi",
    date: "June 2024 - Present",
    desc: "At Factobi, I'm diving into complex development tasks, learning the ins and outs of testing, and exploring Appwrite for backend development. It's been a great experience, with plenty of opportunities to broaden my skills and knowledge in different areas.",
    skills: [
      "Complex development",
      "Appwrite",
      "Technical writer",
      "Testing",
      "Automation",
      "Backend Development",
      "Multiple Task",
      "Team-collaboration",
      "Organizational skills",
    ],
  },
  

  {
    id: 0,
    img: "https://tse1.mm.bing.net/th?id=OIP.a-xsEGAbhHWNO-DhOoTcFQHaEK&pid=Api&P=0&h=220",
    role: "Frontend Developer Intern",
    company: "Primathon",
    date: "June 2023 - Present",
    desc: "Working on the frontend of the web application using ReactJS, Redux, and Material UI.",
    skills: ["ReactJS", "Redux", "TailwindCSS", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 0,
    img: "https://tse1.mm.bing.net/th?id=OIP.xgQlxJAf0L3Wo5z4uwYVhAHaHb&pid=Api&P=0&h=220",
    role: "Academic-Coordinator",
    company: "Universal Private Academy",
    date: "Nov 2021 - Dec 2022",
    desc: "Coordinated and managed multiple academic programs, ensuring seamless execution from planning to evaluation",
    skills: [
      "Program Management",
      "Administrative Skill",
      "Communications",
      "Student Support",
      "Problem-Solving",
      "Team-collaboration",
      "Organizational skills",
    ],
  },
  {
    id: 0,
    img: "https://imgs.search.brave.com/sU0x2e2tBZTY-WXPD4Cr4yu0hU53Xp70KMUeN4WXnSs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3VjY2Vzc3N0/b3J5LmNvbS9pbWdf/Y29tcGFueS9LaWEt/TW90b3JzXzE0ODM5/NTc4NzMuanBn",
    role: "Telecaller ",
    company: "KIA Motors",
    date: "May 2023 - Dec-2023",
    desc: "Experienced Telecaller skilled in customer service, sales, and lead generation, with a proven ability to effectively communicate and close deals over the phone.",
  },

  {
    id: 2,
    img: "https://imgs.search.brave.com/fthq4aElfVQi9ZBcXLXfuf8ReNixsCBCK53-006sKus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/MjU5NzU2MTU3L2Fi/NTE0YzAwLThlNmUt/MTFlYS04YjEzLTM2/NThiMTBjYTQ2Zg.jpeg",
    role: "Learner ",
    company: "Geeks for Geeks",
    date: "May 2023 - Present",
    desc: "Contributing to solve 40+ Problems and learn from industry experts",
  },
];

export const education = [
  {
    id: 0,
    img: "https://tse1.mm.bing.net/th?id=OIP.a-xsEGAbhHWNO-DhOoTcFQHaEK&pid=Api&P=0&h=220",
    school: "Primathon Academy",
    date: "Aug 2023 - Present",
    grade:"InternShip",
    desc: "Completed a certificate course in React Development, gaining proficiency in building dynamic web applications using React.js. Developed hands-on experience with components, state management, and hooks.",
    degree: "React Development Certification course ",
  },
  {
    id: 1,
    img: "https://imgs.search.brave.com/dczg9pl3VuE_gg0ySEUrqxxy9ZqsyGVnd2-UhMnlm2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYXZv/ZGF5YS5nb3YuaW4v/bnZzL3N5c3RlbS9t/b2R1bGVzL05WUy5X/RUIvcmVzb3VyY2Vz/L2ltYWdlcy9udnNf/bG9nb19jb2xvcjEu/cG5n",
    school: "Jawahar Navodaya Vidyalaya Mandsaur",
    date: "Apr 2017 - Apr 2018",
    grade: "80%",
    desc: "I completed my class 12 high school education at Residential  JNV Mandsaur .",
    degree: "CBSE(XII), Science ",
  },
  {
    id: 2,
    img: "https://imgs.search.brave.com/dczg9pl3VuE_gg0ySEUrqxxy9ZqsyGVnd2-UhMnlm2Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9uYXZv/ZGF5YS5nb3YuaW4v/bnZzL3N5c3RlbS9t/b2R1bGVzL05WUy5X/RUIvcmVzb3VyY2Vz/L2ltYWdlcy9udnNf/bG9nb19jb2xvcjEu/cG5n",
    school: "Jawahar Navodaya vidyalaya Mandsaur",
    date: "Apr 2015 - Apr 2016",
    Grade:"8.6 CGPA",
    desc: "I completed my class 10 education at JNV Mandsaur.",
    degree: "CBSE(X), Science ,Maths, Social.Science ",
  },
  {
    id: 3,
    img: "https://imgs.search.brave.com/RQ4cag7IBgkeZNpiYc6ELM4uCLdAlMfnqws5qft1rrw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vOC84My9W/aWtyYW1fVW5pdmVy/c2l0eV9sb2dvLmpw/Zw",
    school: "Vikram University, Ujjain",
    date: "Aug 2018 - Sep 2021",
    grade: "65%",
    desc:"Graduated with a Bachelor of Science in Chemistry (Honors),Conducted extensive research and completed projects in analytical and organic chemistry. Demonstrated strong problem-solving and analytical skills through practical and theoretical coursework.",
    degree: "Bachelor of Science - Chemistry Hon.",
  },
];

export const projects = [
  {
    id: 9,
    title: "Factobi",
    date: "Apr-2024-25",
    description:
      "Successfully launched my first live design at the production level, ensuring robust functionality and user-friendly interface. Overcame deployment challenges and optimized performance for a seamless user experience.",
    image: factobi1,
    Food,
    tags: ["React Js", "Router", "Tailwind", "Redux", "Next.js"],

    github: "https://github.com/meena730",
    webapp: "https://www.factobi.com/",
    

  },
  {
    id: 9,
    title: "Yume-Labs",
    date: "Apr-2024",
    description:
      "Successfully launched my first live design at the production level, ensuring robust functionality and user-friendly interface. Overcame deployment challenges and optimized performance for a seamless user experience.",
    image: Yume,
    Food,
    tags: ["React Js", "Router", "Tailwind", "Redux", "G-Sap", "Next.js"],

    github: "https://github.com/meena730",
    webapp: "https://yumlabs.vercel.app/",
  },
  {
    id: 9,
    title: "Food-Recipe",
    date: "Jun 2024 - Feb 2024",
    description:
      "Developed a Food Kitchen app using React, featuring intuitive user interfaces for recipe browsing, meal planning, and ingredient management. Implemented state management and dynamic components to enhance user experience and functionality.",
    image: Food,
    tags: ["React Js", "Router", "Tailwind", "Redux"],

    github: "https://github.com/meena730",
    webapp: "https://food-app-project-01.netlify.app/",
  },
  {
    id: 0,
    title: "Crud Application",
    date: "Apr 2024 ",
    description:
      "Created a CRUD application using React, enabling seamless creation, reading, updating, and deletion of data entries. Implemented state management and RESTful APIs for efficient data handling and real-time updates. Ensured a user-friendly interface with responsive design for optimal usability across devices.",
    image: Crud,
    tags: ["React Js", "Routing", "Tailwind CSS", " JavaScript"],
    github: "https://github.com/meena730",
    webapp: "https://crud-application01.netlify.app/",
  },
  {
    id: 1,
    title: "Progress-Bar",
    date: "Nov 2023",
    description:
      "Implemented a dynamic progress bar in React, visually representing task completion and data processing status in real-time. Ensured smooth animations and responsiveness for an enhanced user experience across devices.",
    image: Progress,
    tags: ["Javascript", "css", "HTML", "TailwindCSS"],
    github: "https://github.com/meena730",
    webapp: "https://progress-bar-01.netlify.app/",
  },

  {
    id: 3,
    title: "Movie-App",
    date: "Jan-2024",
    description:
      "Developed a Movie App using React, providing features for searching, browsing, and reviewing movies. Integrated third-party APIs to fetch real-time data and implemented a sleek, responsive design for enhanced user experience.",
    image: Movie,
    tags: ["Javascript", "css", "HTML", "TailwindCSS"],
    github: "https://github.com/meena730",
    webapp: "https://movie-01.netlify.app/",
  },
  {
    id: 10,
    title: "Portfolio",
    date: "Jan-2024",
    description:
      "Implemented a dynamic progress bar in React, visually representing task completion and data processing status in real-time. Ensured smooth animations and responsiveness for an enhanced user experience across devices.",
    image: Portfolio,
    tags: ["React Js", "JavaScript", "Routing", "Tailwind"],
    github: "https://github.com/meena730",
    webapp: "https://portfolio-meena02.netlify.app/",
  },

  {
    id: 10,
    title: "E-commerce",
    date: "Mar-2024",
    description:
      "Implemented a dynamic E-commerce website in React using redux, visually representing task completion and data processing status in real-time. Ensured smooth animations and responsiveness for an enhanced user experience across devices.",
    image: Ecommerce,
    tags: ["React Js", "Redux", "JavaScript", "Routing", "Tailwind"],
    github: "https://github.com/meena730",
    webapp: "https://e-commerce-using-redux.netlify.app/",
  },
];


