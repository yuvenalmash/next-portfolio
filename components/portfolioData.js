const projectsList = [
  {
    name: "Undertakings",
    description: "Undertakings is a simple task manager that allows users to create, read, update, and delete tasks. The application is built using React and Redux for the front-end and Ruby on Rails for the back-end (API). It uses PostgreSQL for the database and JWT (JSON Web Token) for authentication and authorization. There are tests for the endpoints using RSpec. It has a responsive design and can be viewed on any device.",
    techStack: ["Ruby on Rails", "React", "Redux", "TypeScript", "PostgreSQL"],
    sourceCode: "https://github.com/yuvenalmash/undertakings",
    live: "https://undertakings-webapp.vercel.app/",
    image: "/images/projects/undertakings.png"
  },
  {
    name: "Drive wise",
    description: "DriveWise is a web application that allows users to book test-drives from car dealers. It provides a seamless and user-friendly experience for people who are looking to make informed decisions before purchasing a vehicle.",
    techStack: ["Ruby", "Rails", "React", "Redux", "PostgreSQL"],
    sourceCode: "https://github.com/iamchristianani/drivewise-backend",
    live: "https://drivewise.onrender.com/",
    image: "/images/projects/drivewise.jpg"
  },
  {
    name: "Inkwell-Blog API",
    description: "A RESTful API for a blogging application. It allows users to create, read, update and delete articles and comments. It also allows users to like and dislike articles. JWT is used for authentication and authorization. The endpoints are documented using Swagger.",
    techStack: ["Ruby", "Rails", "PostgreSQL"],
    sourceCode: "https://github.com/yuvenalmash/inkwell-blog-api",
    live: "https://inkwell-blog-api.onrender.com/api-docs/index.html",
    image: "/images/projects/inkwell-blog-api.png"
  },
  {
    name: "Stock-411",
    description: "Finance web application that allows users to view real-time price quotes of different companies. Gets the quotes from the API in www.stockdata.org. UI meant for small screens",
    techStack: ["React", "Redux", "CSS"],
    sourceCode: "https://github.com/yuvenalmash/stock-411",
    live: "https://yuvenalmash.github.io/stock-411/",
    image: "/images/projects/stock-411.png"
  },
  // {
  //   name: "Auto Auction",
  //   description: "A website announcing a vehicle auction event. It gives the organiser an opportunity to customize the event details dynamically. It has a responsive design and can be viewed on any device.",
  //   techStack: ["JavaScript", "HTML", "CSS"],
  //   sourceCode: "https://github.com/yuvenalmash",
  //   live: "https://yuvenalmash.github.io/vehicle-auction/",
  //   image: "/images/projects/vehicle-auction.png"
  // },
  // {
  //   name: "Shyn TV",
  //   description: "This is a single page application that displays featured shows, and allows users to search for TV shows. The application uses tvmaze API to get shows and display them and an interaction API to handle likes and comments. It has a responsive design and can be viewed on any device.",
  //   techStack: ["JavaScript", "HTML", "CSS"],
  //   sourceCode: "https://github.com/yuvenalmash/shyn-tv",
  //   live: "https://yuvenalmash.github.io/shyn-tv/dist/",
  //   image: "/images/projects/shyn-tv.png"
  // },
  // {
  //   name: "Project 5",
  //   description: "This is a project",
  //   techStack: ["React", "Next.js", "Tailwind CSS"],
  //   sourceCode: "https://github.com/yuvenalmash",
  //   live: "https://yuvenal.dev",
  //   image: "/images/projectImg-placeholder.png"
  // },
  // {
  //   name: "Project 6",
  //   description: "This is a project",
  //   techStack: ["React", "Next.js", "Tailwind CSS"],
  //   sourceCode: "https://github.com/yuvenalmash",
  //   live: "https://yuvenal.dev",
  //   image: "/images/projectImg-placeholder.png"
  // }
];

const techStackList = {
  Languages: ["Python", "Ruby", "JavaScript"],
  Frontend: ["HTML", "CSS", "React", "Redux", "Next.js", "Tailwind CSS"],
  Backend: ["Django", "Flask", "Ruby on Rails", "Node.js", "Express.js"],
  DBMS: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  // Testing: ["Jest", "Mocha", "RSpec", "Selenium"],
  // Tools: ["Git", "GitHub Actions", "Docker", "Kubernetes", "Jenkins", "Portainer"],
}

const socialLinks = {
  GitHub: "https://github.com/yuvenalmash",
  LinkedIn: "https://www.linkedin.com/in/yuvenal-njoroge/",
  // Twitter: "https://twitter.com/YuvenalNjoroge",
  Email: "yuvenal.njoroge@gmail.com",
  // Medium: "https://medium.com/@yuvenal.njoroge",
  // Wellfound: "https://wellfound.com/u/yuvenal-njoroge"
}

const aboutMe = {
  name: "Yuvenal Njoroge",
  title: "Full Stack Developer",
  description: `
    I'm a Full Stack Developer with a passion
    driven by the limitless possibilities of
    technology. With experties in both front-end
    and back-end development, I excel at
    crafting intuitive user experiences and
    architecting robust backend systems.
    Continuously embracing emerging technologies
    and frameworks, I try to stay at the forefront
    of the industry trends. Collaborative and
    adaptable, I prioritize communication and
    teamwork to achieve the best results.
    You'll find me cycling when I'm not coding.`,
  description1: `
    🚀 Welcome to my world of coding and creativity! 
    I'm a passionate Full Stack Developer, exploring 
    the endless possibilities of technology. With 
    expertise in both front-end and back-end 
    development, I thrive on crafting seamless user 
    experiences and building robust backend systems.`,
  description2: `
    🌐 My journey involves continuously embracing 
    emerging technologies and frameworks, I strive 
    to stay at the forefront of industry trends. My 
    commitment to learning and adapting ensures that 
    my work aligns with the latest developments, 
    offering cutting-edge solutions`,
  description3: `
    🤝 Collaboration and adaptability are at the core 
    of my work philosophy. I believe in the power of 
    communication and teamwork to achieve exceptional 
    results. Whether it's designing an intuitive UI or 
    architecting a scalable backend, I bring dedication 
    and innovation to every project.`,
  description4: `
    📧 Ready to turn ideas into reality? Let's connect!`,
    
}

export { projectsList, techStackList, socialLinks, aboutMe };
