"use strict";

type TExperienceDetail = {
  title: string;
  where: string;
  when: string;
};
type TExperience = {
  details: TExperienceDetail[];
};
type TEducationDetails = {
  what: string;
  where: string;
  when?: string;
  moreDetails?: string[];
};
type TEducation = {
  details: TEducationDetails[];
};
type TResume = {
  profile: string;
  education: TEducation;
  experience: TExperience;
  skills: any;
  contactDetails: {
    [key: string]: string;
  };
  socialDetails: {
    [key: string]: string;
  };
};

var naseemInfo = (function () {
  const root = document.getElementById("root");
  const $printButton = document.querySelector(".print");
  const $emailMe = document.querySelector(".emailMe");

  const nQInfo: TResume = {
    profile:
      "Well, my name is Naseem Al-Qatamin, a passionate software developer who is striving to learn more.",
    education: {
      details: [
        {
          what: "Full Stack JS development - Boot Camp",
          where:
            "Abdul Aziz Al Ghurair School of Advanced Computing (ASAC), Amman (Jordan)",
          when: "Sep 2019 - May 2020",
        },
        {
          what: "B.Sc Electrical Power Engineering",
          where: "Tafilah Technical University.",
          when: "Sep 2011 - Jun 2015",
          moreDetails: [
            "Top of the Class, GPA: 80.49%, Very Good.",
            "Graduation project: Dish Stirling Stirling Engine.",
          ],
        },
      ],
    },
    experience: {
      details: [
        {
          title: "Marketing and Design Engineer.",
          where: "Future Energy Jo",
          when: "Dec 2015 - Dec 2016",
        },
        {
          title: "Trainee. Scientific laboratory Technician",
          where: "Tafilah Technical University",
          when: "Jan 2018 - Dec 2018",
        },
      ],
    },
    skills: {
      professional: [
        "HTML5",
        "CSS3",
        "ES6",
        "JQuery",
        "postgress sql",
        "Node.js",
        "MongoDB",
        "React.js",
        "Redux",
        "React Hooks",
      ],
      personal: [
        "Hard working & multi-tasking",
        "Leadership and high communication skills",
        "Positive attitude",
        "Ability to adapt and learn new technology",
        "Confident problem solver and highly motivated individual",
      ],
    },
    contactDetails: {
      email: "izzatnaseem30@gmail.com",
      mobile: "+962772373785",
      address: "Amman, Jordan",
    },
    socialDetails: {
      github: "https://github.com/naseem-qa",
    },
  };

  const emailMe = function () {
    const email = nQInfo.contactDetails.email;
    window.location.href = `mailto:${email}?subject=Hi Nassem&body=message%20goes%20here`;
  };

  const attachPrintHandler = function () {
    $printButton.addEventListener("click", function () {
      naseemInfo.print();
    });
  };

  const attachEmailMeHandler = function () {
    $emailMe.addEventListener("click", function () {
      emailMe();
    });
  };

  attachPrintHandler();
  attachEmailMeHandler();

  return {
    emailMe,
    print: function () {
      console.log(nQInfo);
      const infoStrig = JSON.stringify(nQInfo, null, 2);
      const codeHTML = `<pre><code>${infoStrig}</code></pre>`;
      root.innerHTML = codeHTML;
    },
  };
})();
