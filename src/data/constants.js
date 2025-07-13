import vaultofcodes from "../assets/vaultofcodes.jpg";
import MVJ from "../assets/MVJ.jpg";
import AJS from "../assets/AJS.jpg";

export const Bio = {
  name: "Joshitha K V",
  roles: [
    "Full Stack Developer",
    "Web Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Joshitha021",
  resume:
    "https://docs.google.com/document/d/1o9tHAcjijevUdZJzIRbDFfSuww59mp0qAHklQs2xPdc/edit?tab=t.0",
  linkedin: "https://www.linkedin.com/in/joshitha-k-v-b17083259/",
  twitter: "error",
  insta: "https://www.instagram.com/joshitha_kv/",
  facebook: "error",
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
        name: "Tailwind CSS",
        image: "https://static.cdnlogo.com/logos/t/34/tailwind-css.svg"


      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },

      {
        name: "Springboot",
        image:
            "https://cdn.worldvectorlogo.com/logos/spring-3.svg"

      },
      

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      

    ],
  },

  

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "IntelliJ IDE",
        image:
             "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg"
      },
      
      
      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: vaultofcodes,
    role: "Web Development Intern",
    company: "Vault of Codes",
    date: "Aug 2025 - Present",
    desc: "Working on real-world web development projects using HTML, CSS, JavaScript, and React. Collaborating with developers and gaining hands-on experience with frontend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"]
  },

  
]; 

export const education = [
  {
    id: 0,
    img: MVJ,
    school: "MVJ College of Engineering, Banglore",
    date: "Nov 2022 - Apr 2026",
    grade: "8.06 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at MVJ College of Engineering, Banglore. I have completed 6 semesters and have a CGPA of 8.06. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Engineering - BE, Computer Science and Engineering",
  },
  {
    id: 1,
    img: AJS,
    school: "Amara Jyothi PU College, Mulbagal",
    date: "June 2020 - June 2022",
    grade: "76%",
    desc: "I completed my class 12 high school education at Amara Jyothi PU College, Mulbagal, where I studied Science with Biology.",
    degree: "KSEEB(XII), Science with Biology",
  },
  {
    id: 2,
    img: AJS,
    school: "Amara Jyothi School,Mulbagal",
    date: "May 2019 - May 2020",
    grade: "89.9%",
    desc: "I completed my class 10 education at Amara Jyothi School, Mulbagal , where I studied Science with Computer Application.",
    degree: "KSEEB, Science with Computer",
  },
];

export const projects = [
  
  {
    id: 4,
    title: "Nike Stores",
    date: "Jan 2025",
    description:
      "A responsive, visually appealing Nike store landing page built using HTML, CSS, and JavaScript. It features interactive animations, modern product showcases, and smooth user experience design. The website is designed to resemble an actual e-commerce site, highlighting Nike's brand style with custom sections for featured products, categories, and promotional banners.",
    image:
      "",
    tags: ["React Js", "Firebase", "Firestore", "Node JS"],
    category: "web app",
    github: "https://github.com/Joshitha021/Nike_Stores",
    /* webapp: "https://whatsapp-clone-rishav.web.app",*/
  },
  
  
  
  
];
