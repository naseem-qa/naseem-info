'use strict';

let naseem_info = {};

function jobSeeking(personal_info) {
    personal_info.name = 'Naseem Izzat';
    personal_info.education = {
      BootCamp: 'Full Stack JavaScript Development',
      Bachelor:'Electrical Engineering'
    };

    personal_info.professional_skills = ['HTML5', 'CSS3', 'ES6', 'JQuery' ,'postgress sql', 'Node.js', 'MongoDB', 'React.js', 'Redux','React Hooks'];
    personal_info.github = 'https://github.com/naseem-qa';

    personal_info.experiences = [
      {
        title:'Laboratory Supervisor @ Tafila Technical University',
        period:'One Year',
        location:'http://www.ttu.edu.jo/en/component/users/?view=login&Itemid=437'
    },
      {
          title: 'Marketing & Design Engineer IN Future Energy',
          period:'One Year',
          location:'Amman-Jordan'

    }
    ];

    personal_info.Personal_skills = ['Hard working & multi-tasking', 'Leadership and high communication skills', 'Positive attitude','Ability to adapt and learn new technology', 'Confident problem solver and highly motivated individual'];
    personal_info.contact_info = [{email: 'izzatnaseem30@gmail.com'}, {Mobile:'00962772373785'}, {address:'Amman, Jordan'}];
    console.log(naseem_info);
};

if ('If you have a suitable JOB opportunity') {
  jobSeeking(naseem_info);
}