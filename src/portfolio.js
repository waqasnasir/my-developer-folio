
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ahmed Waqas",
  title: "Hi all, I'm Waqas",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/waqasnasir",
  linkedin: "https://www.linkedin.com/in/awaqasnasir/",
  gmail: "a.waqasnasir@gmail.com",
  gitlab: "https://gitlab.com/waqasnasir",
  facebook: "https://www.facebook.com/ahmedwaqas.nasir"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "VisionX",
      companylogo: "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/c0zgeg2dyoljiu6r1jea",
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "waqasnasir818", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhYAAABeCAMAAABIDa3JAAAAkFBMVEX////LICbLHiTKFh3JChTll5nZYWTKGyHIAAD65ubJEBnvv8Dtu7zKFx7++frff4LbcnXRSEzhjI777e7RREjSOD3YaGr++vrQLzXIAAbIAA399PTts7XQP0PccnXXY2bzz9Dxx8j12Nnz0NHlmZvUUFTpp6nNJy333+DWVlrfhoj56Onde33pq6zPNDnijpFtRs6IAAASdUlEQVR4nO1d2ZaiOhSFEAlEURGVyQFQQBz//+8uOCYhYbCqusu+7Ideq0sIIdmcnCknkvSJ8HfRYj/OTHMmT00zG++TINL9v92rfxa7/mnb+3lsT+HuC71c7DMHelhBCAEZ5P8qGGpoqe6Tw7eNxB+GTg779iuD892w+mNNcz34J+C5mjEK3/m8/UB1XWwAIDMAyMCeZoz7v2lMG2NAjrs3+NvdeSGJPVwa6x8EwDhr//qDDCtVvQTYW477PzA8P4w+wXOAfg0torVm/DwVmCk03GM7qb+ZuUYtdRF2vf3G/qGB+iH8TlqEDv5RBggAYBy16OUlbUhdANM5PbThgkD4+zjzK2mxUNAPTXwdsNyYF4fMbb7IAaxRY7vSvCc09ffZLL+RFtFfY4UsK6berJN+3EqgGUvq7jFxszLvaNEAlvnH1QoCcN6sk9NWrAB4Q93e0aI1JvDb5vgNALfRIIzbKT/4aAtv72jRBAftT9qlZaBpAw1wq3HuBE+UfjGYpamjRVtc/qqwyEdBqR+F3YzVfoCBsXH9IzIMDBkHF7wwDXS0aInD8u/pmzfgda24YNc5gJV4kvTDg67rQRgutsfM8eCTGmhqMQ10tGiJ0Pu7a0jhZWAnkYUv031U5GNE32P7h2gbp8rVUQvgiW2ho0VL7P+KI4tCrdKZeNT13lwQ9zgsRrKHgBGXfulo0RLZ315D8lVkX9PHuUJdfqyYVn07U9yw9OeOFi2RkvIZKH8IVGhDqXFdHKYkddFyWHm1PUjKukpHi5agWDFbq38IZ+K5RlbdxY1DdtIrKQ4NQNOimlcUhkPft3KtNgwt3x++FUzJW9iFgZ/fLr6mOS3sW4d2eXttemMX94VXbKwGL9JKmn8fyHlCZvW1fVK2ALlx1HVoPeCviGXIWOsWA+6EWcGgt4odrGmam0PT4Hl9GQhjOD7Z4HPYo8VxaeQN5I046laYYtKQFn6YzKdIu7eXjRZBI8G3C5P8RW6vcX0Rxzwmg8rEFIoWoyYP+Q4M36YFiuvslieS2fQBcqkE6ZTBcsR+PcOop05TSPtDAFIgzCeXOxUHk2wwubWyUB2I0b0FYHjytMcndSNa7EYmeDVXuG5gau7r0o7803yGvNdtxZ0AYQ/P4n0gFGAfQIsFaYi0oMXFQw9QBi5ADDAdU/XDyUyDBip7T4sRNTynxyGGbhivBr1J/hd7sXSZnCGAINzzYoMNaBGOPYjYHuUNavOqtKPdRHaV0m33UcDabBLw7/sAWgxIZ1YbWjT13yprYp71yxLASvMMQbNs6+ikbwXmtIhUzGsF4DNHOaqlhT5GouQ5bMxFK5u9PcNKtxSCabzgDSj1gN9Jiz4lAHHjZM13aBEd3fI3WYJR1nt1UrbAi5QoomlE3qokbepocUorphdgZcEdgMNcq3U/AMN1ODnF5CW/lBYh5eSEjfXid2gRNgscAiVhHkZJC7wfVyTGApix81BNC3vPFTxkd8pMK+IazVyVSCvPO/n7L6UFHSgDSlmC8/EOLXSzmXsPaEwvKGkho8pEZBkvGV5U0sJeVa8ExT1wXeKF1TRxCTkfKS38mJoqlDZ097ylWzQNBhhMWpkuNxIzd+ApPRNVtBjWs6JoMWOtqVXTsIa3LY8d1fTvpIV0pF8Q8bX5Et6iRd9tOph08F7n2S1i4JiaxSpaHJuwIlcwGCu7tBwWBtjVXGJ6ihyOc4vq6y+lRchMFcDOcVfvyHnPEmGVAoAUXOR2lGxDOvDbTlrkKtKYvLuCFluWFcVGKayUdkYAj1Z31lQgCWCYLqdxlk2nS8cg3Rj8fBfy3t9KC7uchYO9TOwzvEPotzAYQNJv8ZK9hftK05xYHe2P2dJjnRD0NPClBTCKHXSuC0u+A0BZD2JaBDLTd8+dZau9mqUaYzIBeSe8D8PRItwVzlfL0jf9xdF0vTuxMDcW8Am0kE5lvT4fcPmsbjcHMTeSpfkA5eV02ABNNiHEaHD7OvPxT6fzy8Yf2sWP9tAK1ZRip6GSwpcnLQB01MsgjMJ+b75kjQnkENJGSAufzr9GKDtZRY9se7i7TGmi4iPRny0pKuGYXXVtK1HPHir6yHV6fAQt/JiSiM/xy79mWb2cBD5cQUykJmB7yG2R4pvMkoD184TUzglwJge0LC0ARNvXFfpiyiQ8kZa2kBYJlcSKZ5TA9xOP6hAMXr9lBJ3oBeuJKDl7Bjxyf/sIWkiB0ODLpQaWnWwbVTo/2wTWJx508m+SF2SkJDOApI1akhbIGNHxD7snUwIDOC/SiGihU8snVNmX3MxIYaIQoWhCPqKlSEO3t7Hgt8+ghZRUqeMg54Y2HQ3E092GFv3zVhgmpcxXSrlgaaGkZc9j36B4QSQii2iRkEsBzsrU35ALG0CvjhNSpiqTwBe86ofQQkrq9tMjrKRjkRbaKg2nIhkhIntBDReziBisw+qKkNJOAHpOs4AWPpl/zfM6SdKAcrr3nn8naIHH7fNEPoUWuQ5V538EuX2i8qMD35adRdJCUYkfaGmBTX4AnSb3S9wIaEFZ5i7rb7+BNESNVxyRoIXxxqbbj6GFFM7qC3AAhRfd/EZakGu9QdGC/GrRVPSINbkKvXgloAU1Sku+9hQQBCDMCvKvuGm44IXPoYWkH7XqUMN1DAxvUp6Tb6MFmVaKZmTnqMA6u33pCWoVAufHssCnhUWuIcQCQYOM4rzkD2mSI6dNvYgrPogWucCYK/WOfoBnpUX4R2gBHOIHOrA+Ed1vk458gB8E4NOC+qss+uR7hFqqrB9/pbLlkTKvttRK+ChaSHZ/rsHaijjKjP06/gAt2DQcAQakwIOPIBWfFgtiwsFMZE6ERIsvAXai9tYAjOPJqUVZsc+iRY7DNku9mtILBmJ48SVa+MPDYbeLosFpciST0MXSAotpYZEtGPF9rrm0oCVLGpt8TMnpTx9CITrTHw+4BlKy0WDXqFLlx9GisLW3scYJMxBQYvrd36OFFQySZHKZr0zTSV3N8yCl9L4lLSj3I3DuXeHSYkheWs5AfYK8CDy/h3E5UAhybrjeTN1vg7pX/0BaXBvoT9ZLJC4OCFfU5a1pcdhMYogxhhhCRSkFozm0aKZbMB4xrYoWflqrYJe6hJ4aiCXzDfoiAJu/VZbsqrQN8o4PokUOe7dZzNNcbPB0DYAD8tqWtNhNprDYAF89Le9JC2rR1+7LPZcWVqNEC7pLRFz2VLHpvEhgN7JEnLZCXvxZtLjB71/UM0fXoOPFrWgRrTRcn+b7rrSg8nwe22X5tODVeqkBJnxeSXUNuiJiMBJZrlSbH0gLqagAvoi1UvaMQurdbWixcBrWrRVLiwqVU9LJya6khf8OLciU9ATW+HkAlHt8xzjV5mfSosBunzKxd+qLbU4LW3Wb7uF/T1ocGtNi81VaSJusbh0Cnsw1W6k2P5cWkhSYtOpN+SAb08Ie0bU02FGk/vOWbrFrTAv9y7SQ/ASySWUsjFnA6SXV5ifTQpJUOnvRIGa/MS1GwqkACEOX8rG+R4sBybsWi4jYQCVRLgQ0mKde9SY5jSMv/iFaWCa9nyR4/dSUFiHLitycU/D1SAPZXPX6u+UXnd9MCoV2V/nqVU6QLmcN4JTzde0omWoeFGvRCifC+g/RQurTGW6EUt6QFkx9OYBdsMzmk94ifJhyzZzfVSon2RXgVvotyCbRUtxkA4S9sZm6nsJ1wGjljSL/Ei1syoR4gxZUXqyMveMg0uniF18NldEBT5BW0oK+dCNusxEOuzBZz1yO3ACodPG/RAtJJf0XkPgGGtKCdAABd8JxA345VBZREe/qmAi5LwwIth+3RpTsY4MxULxS2/8WLUilsz0tKE8Tfwv0l6XFidRanyn8/AgqVWHwndQ7AaxoQu+AL5dB+qdoEZPSov0iQoYrFJUbyG4oLYRpOPS+D/j4Svm0oLbqA691Lk0V9qTUMkrJwx9Ci6iRCHW/pFv4ZFqkx8+cbCYtMH9jhsRU9gFpcP9zg+wsenfQ13EiRCOastGRD6GFqjmD2gJ5lNClCh6QjzNKuy3uoAomaPyLmkkLWRNk2Flnqpbks66sIJeT2nTepDh6GxCvAlJWEn0GLUIXICzI6n7iwPgtCC8N9biZIHBIaYMa/5pm0kIGgFMcoEisoQvPPsdbQAva4jZKpcy/BCLZD5QOgfoIWlxXZGC456ojQi2T8kEictKo40hEB0pGch0t/An1+YqlhQy0CUdD7FGrHPCebyOghU0pSzKurBsW7pknbqvPhSXWsw+lxenu10fwPBatJQFT/IVaiqncF4owBGhaBLxHUPp7hbQoSFyqW+RP6PCE8qpUItpVtqCDuVgVTnQ0ll1amkYpnCYVfn6C4qi02ekTaEEkGiHs4tWitGlY78+ZEzsBJN0/jJ9qzYxucP1/RKZZlhU8fcymdWjEoJf2oAJ4pqcpiOm8GGC8pl9EC2bDuozBgmumhisNA7SkXmud/8WDl4B3fY4hwTijJIY+gRb0cSIAe6k535/CnV3gECwm82lpowDt6Gdq3CjLl8yxre0aXV+c0k2ATE+qPynvXiLtUE59C2SsF4/H2JsVe1ynQRTEEe5YD5lUGmSofZYYVqICzPbnHt4BUJ4nvKXHHxGDWracyGf+UlpEpZzGokKNVxQ4vqI4br1cRYAqYmozFYOQC1a9wWCQ7OeOBhXkXa+iNBCgvYbTD/YKZ68jgMdwE92kEre+heLh7LIYDC6rtJwn5BGWkrjsyQizbWrOZLDRLb8oJx0F/V6sPSqYkMUp/YdakndCUU+MfD0MllT9i5I1Tj7yl9Ki5fF1t1dhysuv2TYAhl6Ryn1b7m+aRMLsrZjuB5GvB8kxlvnpLAAbzlm5PkBQJKkoh8NmjN9AeVHFtODUywMQplMzXsemeU4hmcpKnNxHVooBCkzN9SQJAns43AWL3nxKFWEBbsk2I5/3O2lRCnY3ADqzFQ6rE/Fu3t8hLVOKytg3aSTO7AQA3GyWliXVGGuzonbWblZOVAVF8oVSro4G3IeMtJi850K+wod0ZfdSsN+Q9AG0GHIr4VTjtYvvASur3HGE4qu2dnznOL87LdqVVEOYMgmrKu31BZn93GYf4fc2p5gCuVgHr4ra/W7799PCGvFEcPXglGrs1pXnvVe20Uu128oXlmQ6T1rUdZiNh1aWaw3ZNNUK3LWEoMUWE+AWrjdrbmbxcnd1DFnH308LSdqowjLoXCgyz1+1r2zjHkNc1JzjrqSLI8sLjrQAaXUCZSm3rrq488ZsumNEwTef1qKqRjgNgK/lFOxDmIYHKysosPU+gRb593KEDQq031vzsoDXhj+vOsMRgNtV+8piTF4cSYcp8+1ypAUe7SvyJ4FSqkNcUwreGtfWfCluNDT1oVvol9RrNGLAXd2NaN3RJV8FgWRp4DNoIdm7/VlYcp96S3i+CPIShmpVA3evpn0RTgDA8vUgkUCmecGRFvAi9YVFWgBb2VlqcHDE4lxTDb6wirIB8epWz2wwYgp4zvnO2Ul+dsmk48r5EFrksAYrQ3BiynNkDA9V1H22E5c/TrnJ4S4fTtEk5V2UX/LcghXElCjgSIsiDedwwTzJA7DHOb6o/pgZK6n6/PM3h0f2uBl7MEKVIwYMN375gm+0iNTjdCdLmID2vRH9Ctgr9/VYr2H2qm0t5ktZlMKMMEzjbXWMMZrLZWGAsDKbb15Tpc9T9iKA4ZnYl+fvz8R+LY60uKX46qMzsz8WIOgcedG+PiSmQRDKsxJT5u63zd/8HPPDYtZgvURQ4Qma/J2cOCQCTLs0p4Wpb7QgwtJ+tH9i9E3pgvWwT+RjReV/OLDC5Lj0NK+owv1Acci6q81WpwZJsMHFceHzXkPBnuaM2PN3NvvC9Xm/KG9ck1cLejL10xxr8DaXAmlRYJdkroefDXmamfBTrHbENIz2wsOEwm3saa/uP958VFXQxOon87OWv7RiEHd5GhgzfbH2ljTsWVLf1v/cUYbfB9u3omS0ys2pG8xMPfb6h6bnP/pRbxyb1zun2Xp/4lYB8cOLemt/qs63EeesStuPtr1VgVtdIkGK79BaHDPz1s1jYn35BFbfD3urW4M5YnXV6/u1jdr+IbyM5/e3zsdr1Vvorc7L/CRUnVZZA/t2a4P2m05kVYqv3aahJrh3v21Wjt3qjTp8AxpvNuzwf0LT2lkd/lfopEUHDhpvNuzwf0InLTpw0NGiAwedytmBg05adOCgUzk7cNBJiw4cdNKiAwedtOjAQWeJdOCgkxYdOOh0iw4cdNKiAwedtOjAQeMqvh3+T+ikRQcOqIPFILeg2gfhP5drh+lkdFR6AAAAAElFTkSuQmCC",
      link: "https://www.staples.com/"
    },
    {
      image: "data:image/png;base64,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",
      link: "https://www.dnow.com/"
    },
    {
      image: "https://dmuvt0wczath5.cloudfront.net/6373792d8d869e41c99047731e4fd19d/000-home/kyvio-normal-x9-min-1.png",
      link: "https://kyvio.com/"
    },
    {
      image: "data:image/png;base64,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",
      link: "https://www.simpleray.com/"
    }, 
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@waqasnasir818/getting-started-with-docker-5fa7a6c8b77c",
      title: "Getting started with docker",
      description: "A brief article about what, how and why docker."
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: []//["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3312252818",
  email_address: "a.waqasnasir@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "waqasnasir818"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
