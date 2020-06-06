"use strict";
var naseemInfo = (function () {
    var root = document.getElementById("root");
    var $printButton = document.querySelector(".print");
    var $emailMe = document.querySelector(".emailMe");
    var nQInfo = {
        profile: "Well, my name is Naseem Al-Qatamin, a passionate software developer who is striving to learn more.",
        education: {
            details: [
                {
                    what: "Full Stack JS development - Boot Camp",
                    where: "Abdul Aziz Al Ghurair School of Advanced Computing (ASAC), Amman (Jordan)",
                    when: "Sep 2019 - May 2020"
                },
                {
                    what: "B.Sc Electrical Power Engineering",
                    where: "Tafilah Technical University.",
                    when: "Sep 2011 - Jun 2015",
                    moreDetails: [
                        "Top of the Class, GPA: 80.49%, Very Good.",
                        "Graduation project: Dish Stirling Stirling Engine.",
                    ]
                },
            ]
        },
        experience: {
            details: [
                {
                    title: "Marketing and Design Engineer.",
                    where: "Future Energy Jo",
                    when: "Dec 2015 - Dec 2016"
                },
                {
                    title: "Trainee. Scientific laboratory Technician",
                    where: "Tafilah Technical University",
                    when: "Jan 2018 - Dec 2018"
                },
            ]
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
            ]
        },
        contactDetails: {
            email: "izzatnaseem30@gmail.com",
            mobile: "+962772373785",
            address: "Amman, Jordan"
        },
        socialDetails: {
            github: "https://github.com/naseem-qa"
        }
    };
    var emailMe = function () {
        var email = nQInfo.contactDetails.email;
        window.location.href = "mailto:" + email + "?subject=Hi Nassem&body=message%20goes%20here";
    };
    var attachPrintHandler = function () {
        $printButton.addEventListener("click", function () {
            naseemInfo.print();
        });
    };
    var attachEmailMeHandler = function () {
        $emailMe.addEventListener("click", function () {
            emailMe();
        });
    };
    attachPrintHandler();
    attachEmailMeHandler();
    return {
        emailMe: emailMe,
        print: function () {
            console.log(nQInfo);
            var infoStrig = JSON.stringify(nQInfo, null, 2);
            var codeHTML = "<pre><code>" + infoStrig + "</code></pre>";
            root.innerHTML = codeHTML;
        }
    };
})();
