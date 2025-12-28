/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shivam Mittal",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "A passionate Software Developer 🚀 with experience in building scalable web applications using JavaScript, React.js, Node.js, and modern frameworks. Proficient in AI/ML development, including working with Large Language Models (LLMs), training and fine-tuning neural networks, and designing AI-driven solutions. Strong understanding of RAG pipelines, transformers, diffusion models, and other core ML concepts."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VEAb2QELHD_7hoD3Ha8KkHtthEykbI0w/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mittalshivam2709",
  linkedin: "https://www.linkedin.com/in/shivam-mittal-488338227/",
  gmail: "mittalshivam279@gmail.com",
  gitlab: "https://gitlab.com/mittalshivam2709",
  // facebook: "",
  medium: "https://medium.com/@mittalboy800",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
    ),
    emoji("⚡ Use AI/ML to build efficient solutions to real world problems"),
    emoji(
      "⚡ Solve complex problems and optimize solutions for better performance and usability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIIT Hyderabad",
      logo: require("./assets/images/iiitlogo.png"),
      subHeader: "Bachelors of Technology in Computer Science",
      duration: "October 2022 - July 2026",
      desc: "Working towards my B.Tech degree in Computer Science while learning new technologies and frameworks including Data Structures, Algorithms, DBMS, Operating Systems, ...",
      descBullets: [
        "Worked on several projects based on React, Node.js, and Python.",
        "Was a competitive programmer and participated in various coding contests.",
        "Did various internships and online courses to enhance my skills."
      ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "LLM/AI",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Atlassian",
      companylogo: require("./assets/images/atlassianLogo.png"),
      date: "May 2025 – July 2025",
      desc: "Worked as a Summer Intern in the Software Inventory Team of the Dev Infra Org at Atlassian.",
      descBullets: [
        "Worked on a project involving improving the performance and reliability of the internal tools used by Atlassian developers.",
        "The Project involved working with large-scale data processing systems and detecting anaomalies in the data present.",
        "Technologies used include python, Kubernetes, Docker, and SQL."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Worldref.co",
      companylogo: require("./assets/images/worldreflogo.png"),
      date: "August 2025 – December 2025",
      desc: "Worked as a Front-End Developer at Worldref.co, a platform that connects businesses with service providers worldwide.",
      descBullets: [
        "Developed and maintained the front-end of the web application using React.js.",
        "Integrated RESTful APIs to fetch and display data dynamically.",
        "Also worked on a few UI/UX improvements to enhance user experience.",
        "Worked on a few RAG systems to improve the performance of the application. Implemented the evaluation metrics to measure the performance of the system."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Maker's Lab IIITH",
      companylogo: require("./assets/images/makerslabLogo.png"),
      date: "Jan 2024 – April 2024",
      desc: "Worked as a Full Stack Developer Intern at Maker's Lab IIITH, to build a web application for Doctors.",
      descBullets: [
        "Developed a web application that helps doctors view all the detials of the patients registered with them.",
        "Implemented a chat feature between Doctor and the EMT assistants sitting in the ambulance to help them provide better care to the patients.",
        "Used GraphQL as the backend query language and ReactJS at frontend."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Zency",
      companylogo: require("./assets/images/icon.png"),
      date: "September 2024 – November 2024",
      desc: "Worked as a Frontend Developer Intern at Zency, a quick commerce startup for fashion products.",
      descBullets: [
        "Developed and maintained the front-end of the web application using React.js.",
        "Collaborated with the design team to implement responsive UI designs.",
        "Created Seller onboarding and Seller Dashboard screens from scratch."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/vlabslogo.png"),
      projectName: "Virtual Labs",
      projectDesc:
        "Worked as a Software Developer (PHP to JS Migration). Worked on all the 9 experiments of the Image Processing Lab.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cse19-iiith.vlabs.ac.in/List%20of%20experiments.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/worldreflogo.png"),
      projectName: "Worldref.co",
      projectDesc: "Worked as a Front-End Developer integrating RESTful APIs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://testdms.worldref.co/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Secured AIR 455 in JEE Mains 2022",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/jeemainsLogo.png"),
      imageAlt: "JEE Mains Logo",
      footerLink: [
        {
          name: "Result Link",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Rated Specialist on Codeforces",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/codeforcesLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Visit Profile",
          url: "https://codeforces.com/profile/mittalshivam_2709"
        }
      ]
    },

    {
      title: "Rated 1738 (3-star) on CodeChef",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/codechefLogo.png"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Visit Profile",
          url: "https://www.codechef.com/users/mittalshivam08"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
