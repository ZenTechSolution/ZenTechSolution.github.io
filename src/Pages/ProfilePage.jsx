import React, { useState } from "react";
import { HeroSection } from "../Components/ProfilePage/HeroSection";
import { About } from "../Components/ProfilePage/About";
import { InfiniteScroll } from "../Components/ProfilePage/InfiniteScroll";
import { Service } from "../Components/ProfilePage/Service";
import "./../Css/profile.css";
import { Journey } from "../Components/ProfilePage/Journey";
import { MyProjects } from "../Components/ProfilePage/MyProjects";

let profileData = {
  profile: {
    first_name: "first",
    last_name: "last",
    role: "Devolper",
    email: "mail@mail.com",
    dob: "2001-07-21",
    facebook: "https://facebook.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    address: "lahore",
    img_path:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editor.",
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
      name: "Web Devolpment",
      description:
        "It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 1,
      name: "Ui/Ux Design",
      description:
        "It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 1,
      name: "Web Design",
      description:
        "It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 1,
      name: "Web Design",
      description:
        "It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
      img_path:
        "https://t3.ftcdn.net/jpg/01/71/25/36/360_F_171253635_8svqUJc0BnLUtrUOP5yOMEwFwA8SZayX.jpg",
    },
    {
      id: 1,
      name: "Web Design",
      description:
        "It's simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
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
        "Card sliders are an effective way to showcase related blocks of content, letting you put multiple pieces of content in front of a visitor quickly. Similar to image carousels, card sliders let you add headings, text, and call to action buttons to quickly navigate visitors to high-priority pages, or even quickly add a product to an online cart. Vev’s card slider offers a quick and easy way to set one up",
    },
  ],
};

export const ProfilePage = () => {
  let [data, setData] = useState(profileData);
  return (
    <div>
      <HeroSection data={data.profile} />

      <InfiniteScroll data={data.skills} />

      <Service data={data.skills} />

      <Journey data={data.education} />

      <About data={data.profile} />

      <MyProjects data={data.projects} />
    </div>
  );
};
