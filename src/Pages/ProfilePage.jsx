import React, { useState, useEffect } from "react";
import { HeroSection } from "../Components/ProfilePage/HeroSection";
import { About } from "../Components/ProfilePage/About";
import { InfiniteScroll } from "../Components/ProfilePage/InfiniteScroll";
import { Service } from "../Components/ProfilePage/Service";
import "./../Css/profile.css";
import { Journey } from "../Components/ProfilePage/Journey";
import { MyProjects } from "../Components/ProfilePage/MyProjects";
import { useParams, useLocation } from "react-router-dom";

let profileData = {
  profile: {
    first_name: "Talha ",
    last_name: "Nazir",
    role: "Web Developer",
    email: "talhanazzir786y@gmail.com",
    dob: "2001-07-21",
    facebook: "https://facebook.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    address: "lahore",
    img_path: "./Images/Images/UserImage.png",
    description:
      "A passionate Web Developer with 1 year of experience in front-end and back-end development. Skilled in building responsive web applications using modern frameworks and technologies. Dedicated to writing clean, efficient code and continuously learning new tools to enhance performance.",
  },
  projects: [
    {
      name: "Project Name",
      description:
        "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
      customer_name: "client name",
      customer_review:
        "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
      link: "https://schoollet.com",
      img_path:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      images: [
        {
          img_path:
            "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
        },
        {
          img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
        },
        {
          img_path:
            "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
      ],
    },
    {
      name: "Schoollet 2",
      description:
        "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
      customer_name: "Ali Raza",
      customer_review:
        "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
      link: "https://schoollet.com",
      img_path:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
      images: [
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
        {
          img_path:
            "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
        },
      ],
    },
  ],
  skills: [
    {
      id: 1,
      name: "Web Development",
      description:
        "Web development involves building and maintaining websites or web applications. It includes front-end development using technologies like HTML, CSS, and JavaScript, as well as back-end development with frameworks such as Node.js, Django, and Laravel.",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 2,
      name: "UI/UX Design",
      description:
        "UI/UX design focuses on creating visually appealing and user-friendly interfaces. It involves wireframing, prototyping, and usability testing to ensure a seamless experience for users across different devices and platforms.",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 3,
      name: "Web Design",
      description:
        "Web design involves designing the layout, aesthetics, and overall visual appeal of a website. It includes aspects like typography, color theory, and responsive design to ensure an engaging and accessible user experience.",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 4,
      name: "Graphic Design",
      description:
        "Graphic design is the art of creating visual content to communicate messages effectively. It includes branding, logo design, digital illustrations, and marketing materials using tools like Adobe Photoshop, Illustrator, and Figma.",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 5,
      name: "Backend Development",
      description:
        "Backend development focuses on server-side logic, databases, and API development. It includes working with programming languages such as Node.js, Python, PHP, and Java, and using databases like MySQL, PostgreSQL, and MongoDB to ensure efficient data handling and system performance.",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
  ],
  education: [
    {
      name: "BsIt",
      from: "2019-01-01",
      to: "2021-01-01",
      type: "education",
      institute: "Punjab University Lahore",
      description: "Cgpa 3.54",
    },
    {
      name: "MsIt",
      from: "2022-01-01",
      to: "2024-01-01",
      type: "education",
      institute: "Punjab University Lahore",
      description: "Cgpa 3.54",
    },
    {
      name: "Ics",
      from: "2017-01-01",
      to: "2019-01-01",
      type: "education",
      institute: "Punjab University Lahore",
      description: "892/1100",
    },
    {
      name: "Web Dev",
      from: "2017-01-01",
      to: "2019-01-01",
      type: "job",
      institute: "Zentech",
      description:
        "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
    },
  ],
};

const teamObj = [
  {
    profile: {
      id: 3,
      first_name: "Adil",
      last_name: "Sehr",
      role: "Founder & Lead Mobile Developer",
      email: "adil@example.com", // Add actual email if available
      dob: "1989-06-15", // Example DOB, update accordingly
      facebook: "https://facebook.com/adilsehr",
      github: "https://github.com/adilsehr",
      linkedin: "https://linkedin.com/in/adilsehr",
      twitter: "https://twitter.com/adilsehr",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/adilsehr.png",
      description:
        "Founder of Zentech Solutions with over a decade of experience in mobile app development. Leading the team in building innovative digital solutions with a focus on efficiency and scalability.",
    },
    skills: [
      {
        id: 1,
        name: "Mobile App Development",
        description:
          "Specializing in Android and iOS development with expertise in cross-platform technologies.",
      },
      {
        id: 2,
        name: "Firebase",
        description:
          "Experience in Firebase Authentication, Firestore, Realtime Database, and Firebase Cloud Functions.",
      },
      {
        id: 3,
        name: "Full-Stack Development",
        description:
          "Proficient in front-end and back-end development, including React, Node.js, and databases.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "MsIt",
        from: "2022-01-01",
        to: "2024-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "Ics",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "892/1100",
      },
      {
        name: "Web Dev",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "job",
        institute: "Zentech",
        description:
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Eris",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
          },
          {
            img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
          },
          {
            img_path:
              "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
      {
        name: "Schoollet",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
    ],
  },
  {
    profile: {
      id: 1,
      first_name: "Saad",
      last_name: "Shafique",
      role: "Senior Mobile App Developer",
      email: "saad@example.com", // Add actual email if available
      dob: "1998-08-10", // Example DOB, update accordingly
      facebook: "https://facebook.com/saadshafique",
      github: "https://github.com/saadshafique",
      linkedin: "https://linkedin.com/in/saadshafique",
      twitter: "https://twitter.com/saadshafique",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/saadshafique.png",
      description:
        "Experienced mobile app developer with 3 years of expertise in Flutter, game development, and AI scripting using PHP and Python.",
    },
    skills: [
      {
        id: 1,
        name: "Flutter",
        description:
          "Building cross-platform mobile applications with Flutter for seamless user experiences.",
      },
      {
        id: 2,
        name: "Game Development",
        description:
          "Expertise in creating mobile games with engaging UI and optimized performance.",
      },
      {
        id: 3,
        name: "PHP, Python (AI Scripts)",
        description:
          "Skilled in AI-powered applications using PHP and Python scripting.",
      },
      {
        id: 4,
        name: "SQL & Firestore",
        description:
          "Database management with SQL and NoSQL solutions like Firestore for scalable apps.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "MsIt",
        from: "2022-01-01",
        to: "2024-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "Ics",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "892/1100",
      },
      {
        name: "Web Dev",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "job",
        institute: "Zentech",
        description:
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Project Name",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
          },
          {
            img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
          },
          {
            img_path:
              "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
      {
        name: "Schoollet 2",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
    ],
  },
  {
    profile: {
      id: 2,
      first_name: "Talha",
      last_name: "Nazir",
      role: "Web Developer",
      email: "talhanazzir786y@gmail.com",
      dob: "2001-07-21",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/talhanazir.png",
      description:
        "Web developer with 1.5 years of experience in React.js, Laravel, SQL, and Firestore, specializing in building scalable and efficient web applications.",
    },
    skills: [
      {
        id: 1,
        name: "React.js",
        description:
          "Expert in building interactive and dynamic web applications using React.js.",
      },
      {
        id: 2,
        name: "Laravel",
        description:
          "Back-end development with Laravel for scalable and secure web applications.",
      },
      {
        id: 3,
        name: "SQL",
        description:
          "Database management and optimization using SQL for efficient data handling.",
      },
      {
        id: 4,
        name: "Firestore",
        description:
          "Experience in Firestore for real-time database solutions in web applications.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "MsIt",
        from: "2022-01-01",
        to: "2024-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "Cgpa 3.54",
      },
      {
        name: "Ics",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "education",
        institute: "Punjab University Lahore",
        description: "892/1100",
      },
      {
        name: "Web Dev",
        from: "2017-01-01",
        to: "2019-01-01",
        type: "job",
        institute: "Zentech",
        description:
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Project Name",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
          },
          {
            img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
          },
          {
            img_path:
              "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
      {
        name: "Schoollet 2",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
    ],
  },
];

export const ProfilePage = () => {
  const { id } = useParams(); // Get team member ID from URL
  const location = useLocation();

  // If data is passed via navigation, use it; otherwise, fetch it from API
  const [data, setData] = useState(location.state?.team || null);

  useEffect(() => {
    if (!data) {
      teamObj.forEach((team) => {
        if (team.profile.id == id) {
          setData(team);
        }
      });

      // console.log(teamMember);
      // Fetch data from API using the ID
      // fetch(`http://127.0.0.1:8000/api/getTeam/${id}`)
      //   .then((res) => res.json())
      //   .then((response) => {
      //     setData(response.data);
      //   })
      //   .catch((err) => console.error("Error fetching team member:", err));
    }
  }, [id, data]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <HeroSection data={data.profile} />
      <InfiniteScroll data={data.skills} />
      <Service data={data.skills} />
      {data.education && <Journey data={data.education} />}
      <About data={data.profile} />
      {data.projects && <MyProjects data={data.projects} />}
    </div>
  );
};
