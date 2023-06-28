
export const me = {
  name: "Vinícius M. Lopes",
  nationality: "Brazilian",
  photo: "https://avatars.githubusercontent.com/u/15662268?v=4",
  contact: {
    email: "vlopes45@gmail.com",
    phone: "+55 11 9 9999-9999",
    github: ""
  },
  about: {
    description: "",
//     description: `Olá, my name is Vinícius Lopes, i love to create things and solve problems.
//                   My life in the digital world started really soon, at the age of 11 I found my self studying PHP, JavaScript, SQL and HTML. 
//                   No much later I got really interested into CyberSecurity and Game development and found my path towards IT.
//                   My professional career started at the age of 16, when I got my first job as a freelancer website developer, after that 
// i have been in many projects as consultant and developer, working with many different technologies and languages.`,
    skills: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Golang",
      "Python",
      "Terraform"
    ]
  },
  experience: [
    {
      title: "Freelance Website Developer",
      company: "Freelance",
      achievements: ["Created websites and integrations with PHP, MySQL and WordPress"],
      startDate: "July/2012",
      endDate: "January/2014",
      location: "Manaus, Amazonas, Brazil",
      technologies: ["PHP", "MySQL", "WordPress"],
    },
    {
      title: "Intern",
      company: "RNP PoP-AM",
      achievements: [
        "Created integrations and tools for report generation in Perl for extraction of reports from Redmine and Zabbix systems",
        "Found and reported a vulnerability that allowed account impersonation by another student through headers manipulation at the college system."
      ],
      startDate: "January/2015",
      endDate: "February/2016",
      location: "Manaus, Amazonas, Brazil",
      technologies: ["PHP", "Perl", "MySQL", "Redmine", "Zabbix", "Linux", "Bash"],
    },
    {
      title: "Mobile and Backend Developer",
      company: "ZenoSoft",
      achievements: [
        "Developed the first android version of the City of Manaus bus route and schedule tracking app (\"Cadê meu ônibus\").",
        "Created APIs and integrations with Node.js and PHP for local fintech startups.",
        "Conducted the migrations of our clients from a PHP to Node.js API."
      ],
      startDate: "January/2016",
      endDate: "March/2018",
      location: "Manaus, Amazonas, Brazil",
      technologies: ["PHP", "MySQL", "Android", "Java", "JavaScript", "Linux", "Bash"],
    },
    {
      title: "Mobile and Backend Developer",
      company: "NuCash",
      achievements: [
        "Integrated with financial services APIs to allow hundreds of instant transactions daily.",
        "Led the existent team into migrating the mobile application to native technology.",
        "Revamped the monolithic PHP API by migrating it to Node.js and Golang microservices, resulting in faster team collaboration and reduction of the delivery cycle from 3 weeks to 12 days.",
        "Optimized API response time in one of the search endpoints, reducing it from approximately 140 seconds to 210 milliseconds, by correctly indexing and caching queries.",
        "Maintained the Android Mobile Application with small bundle size (around 15mb) and optimal performance, all written in Kotlin."
      ],
      startDate: "August/2017",
      endDate: "September/2019",
      location: "Manaus, Amazonas, Brazil",
      technologies: ["AWS", "Kubernetes",
        "MySQL", "Android", "Java", "JavaScript", "Kotlin", "Golang",
        "Linux", "Bash"],
    },
    {
      title: "FullStack Development Consultant",
      company: "Objeto Inc",
      achievements: [
        "Customized and optimized a scheduling system based on Cal.com, an Open Source project for scheduling written in TypeScript.",
        "Collaborated with a cross-functional team to troubleshoot and fix issues in the system.",
        "Contributed to developing and enhancing calendar integrations, and implemented various helper functions for availability management."
      ],
      startDate: "March/2022",
      endDate: "February/2023",
      location: "Toronto, Canada (Remote)",
      technologies: ["AWS", "PostgreSQL", "Node.js",
        "TypeScript", "JavaScript"]
    },
    {
      title: "Software Architect",
      company: "SASI",
      achievements: [
        "Planned and managed cloud resources and services in two clouds and 11 accounts on our OU.",
        "Ensured organizational compliance with ISO-27001 and LGPD/GDPR standards.",
        "Established and directed a top-performing team from the ground up, leveraging expertise in talent identification and hiring to support the product evolution and the company's objectives.",
        "Maintained and evolved the project to support the company's growth, enabling it to serve hundreds of thousands of users",
        "Designed and implemented highly scalable services with Golang and Node.js.",
        "Delivered a scheduling system integrated to the platform that handles more than 200,000 users every week."
      ],
      startDate: "November/2019",
      endDate: "Present",
      location: "Brazil",
      technologies: ["AWS", "PostgreSQL", "MySQL", "Node.js",
        "TypeScript", "JavaScript", "Golang", "Python", "Terraform"]
    }
  ].reverse()
}


