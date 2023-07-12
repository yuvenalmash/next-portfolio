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
    description: "Finance web application that allows users to view real-time price quotes of different companies. UI meant for small screens ",
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
  Languages: ["Python", "Ruby", "JavaScript", "HTML", "CSS"],
  Frameworks: ["Django", "Ruby on Rails", "React", "Next.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
  Testing: ["Jest", "RSpec", "Capybara", "Selenium"],
  Tools: ["Git", "GitHub", "Heroku", "Netlify", "Vercel", "Postman"],
  // Professional: ["Project Management", "Agile Methodologies", "Teamwork", "Effective Communication"]
}

const socialLinks = {
  GitHub: "https://github.com/yuvenalmash",
  LinkedIn: "https://www.linkedin.com/in/yuvenal-njoroge/",
  Twitter: "https://twitter.com/YuvenalNjoroge",
  Email: "yuvenal.njoroge@gmail.com",
  Medium: "https://medium.com/@yuvenal.njoroge",
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
}

export { projectsList, techStackList, socialLinks, aboutMe };
