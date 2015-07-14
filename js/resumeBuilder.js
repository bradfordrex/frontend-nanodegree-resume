var bio = {
  'name' : 'Bradford Hill',
  'role' : 'Web Developer+',
  'contacts' : {
    'mobile' : '(424) 832-0296',
    'email' : '<a href="mailto:bradfordrex@gmail.com">bradfordrex@gmail.com</a>',
    'github' : '<a href="https://github.com/bradfordrex">bradfordrex</a>',
    'twitter' : '<a href="https://twitter.com/BradFourHill"> @BradFourHill </a>',
    'location' : 'Santa Clarita, CA'
  },
  'welcomeMessage' : 'I am a web developer focused on creating dynamic, engaging webpages with beautiful and intuitive user interfaces. Plus, I bring in depth knowlendge and experience in many other areas of media production including vidoe, audio, and graphic design.',
  'skills' : [
    'HTML5',
    'CSS3',
    'Javascript',
    'jQuery',
    'Responsive Web Design',
    'PHP',
    'Wordpress',
    'Photoshop',
    'After Effects',
    'Blender',
    'Nuke',
    'Final cut pro',
    'Avid',
    'Premiere Pro',
    'Pro Tools',
    'LogicPro',
    'IzotopeRX',
    'Filmmaking',
    'Videography',
    'Sound Engineer',
    'Dialog Editing',
    'Screenwriting',
    '3D Modeling and Animation',
    'Sense of Humor'
  ],
  'biopic' : 'images/bradford_headshot-480w.jpg',
  'display' : function() {
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedContacts = {
    'mobile' : HTMLmobile.replace('%data%', bio.contacts.mobile),
    'email' : HTMLemail.replace('%data%', bio.contacts.email),
    'github' : HTMLgithub.replace('%data%', bio.contacts.github),
    'twitter' : HTMLtwitter.replace('%data%', bio.contacts.twitter),
    'location' : HTMLlocation.replace('%data%', bio.contacts.location),
    }
    for (contact in formattedContacts) {
      $('#topContacts').append(formattedContacts[contact]);
      $('#footerContacts').append(formattedContacts[contact]);
    }

    var formattedBiopic = HTMLbioPic.replace ('%data%', bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace ('%data%', bio.welcomeMessage);
    $('#header').append(formattedBiopic);
    $('#header').append(formattedWelcomeMessage);

    $('#header').append(HTMLskillsStart);
    for (skill in bio.skills) {
    formattedSkill = HTMLskills.replace ('%data%', bio.skills[skill]);
        $('#skills').append(formattedSkill);
    // Take gramatical formated skill and remove spaces and uppercase to make id formated
    // insert css ID for each skill
    skillID = bio.skills[skill].replace(/\s/g, '').toLowerCase();
        $('#skills').find('span:last').attr('id',skillID);
    }
  }
}

var education = {
  'schools' : [
    {
      'name' : 'University of Southern California',
      'location' : 'Los Angeles, CA',
      'degree' : 'Bachelor of Arts',
      'majors' : [
        'Theatre',
        'Cinema / Television Production'
      ],
      'dates' : '2008',
      'url' : 'http://www.usc.edu',
      'tags' : [
        'Filmmaking',
        'photoshop',
        'avid',
        'sound engineer',
        'dialg editing',
        'screenwriting'
      ]
    },
    {
      'name' : 'Cassia Regional Technical Center',
      'location' : 'Burley, ID',
      'degree' : 'Certificate',
      'majors' : [
        'Graphic Communications'
      ],
      'dates' : '2003',
      'url' : 'http://www.cassiaschools.org/domain/254',
      'tags' : [
        'photoshop',
        'final cut pro',
        'html5',
        'css3',
        'videography',
        '3D modeling and animation'
      ]
    },
    {
      'name' : 'Penn Foster Career School',
      'location' : 'Burley, ID',
      'degree' : 'Certificate',
      'majors' : [
        'Artist'
      ],
      'dates' : '2003',
      'url' : 'http://www.pennfoster.edu',
      'tags' : [
        '3D Modeling and Animation',
        'photoshop'
      ]
    },
    {
      'name' : 'Burley High School',
      'location' : 'Burley, ID',
      'degree' : 'Diploma',
      'majors' : [
      ],
      'dates' : '2003',
      'url' : 'http://cassiaschools.org/burleyhs',
      'tags' : [
        ''
      ]
    }
  ],
  'onlineCourses' : [
    {
      'title' : 'Intro to HTML and CSS',
      'school' : 'Udacity',
      'date' : '2015',
      'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304',
      'tags' : [
        'HTML5',
        'CSS3',
        'Responsive Web Design'
      ]
    },
    {
      'title' : 'Responsive Web Design Fundamentals',
      'school' : 'Udacity',
      'date' : '2015',
      'url' : 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893',
      'tags' : [
        'HTML5',
        'CSS3',
        'Responsive Web Design'
      ]
    },
    {
      'title' : 'Responsive Images',
      'school' : 'Udacity',
      'date' : '2015',
      'url' : 'https://www.udacity.com/course/responsive-images--ud882',
      'tags' : [
        'HTML5',
        'CSS3',
        'Responsive Web Design'
      ]
    },
    {
      'title' : 'Javascript Basics',
      'school' : 'Udacity',
      'date' : '2015',
      'url' : 'https://www.udacity.com/course/javascript-basics--ud804',
      'tags' : [
        'Javascript',
        'jQuery'
      ]
    },
    {
      'title' : 'Intro to jQuery',
      'school' : 'Udacity',
      'date' : '2015',
      'url' : 'https://www.udacity.com/course/intro-to-jquery--ud245',
      'tags' : [
        'Javascript',
        'jQuery'
      ]
    },
  ],
  'display' : function() {
    for (school in education.schools) {
      $('#education').append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace('#',education.schools[school].url).replace('%data%',education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      $('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      if (education.schools[school].majors.length > 0){
        for (major in education.schools[school].majors){
          var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
          $('.education-entry:last').append(formattedMajors);
        }
      }
      // insert tag class names for skill fiter function
      // format tag names from gramatical input to no spaces and no uppercase to match search
      for (tag in education.schools[school].tags) {
        tagFormatted = education.schools[school].tags[tag].replace(/\s/g, '').toLowerCase();
        $('.education-entry:last').addClass(tagFormatted);
      }
    }
    $('#education').append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace('#',education.onlineCourses[course].url).replace('%data%',education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append('<br>')

      // insert tag class names for skill fiter function
      // format tag names from gramatical input to no spaces and no uppercase to match search
      for (tag in education.onlineCourses[course].tags) {
        tagFormatted = education.onlineCourses[course].tags[tag].replace(/\s/g, '').toLowerCase();
        $('.education-entry:last').addClass(tagFormatted);
    }

    }
  }
}

var work = {
  'jobs' : [
    {
      'employer' : 'Paragon Hill Productions',
      'title' : 'Principle',
      'location' : 'Santa Clarita, CA',
      'dates' : '2010­-Present',
      'description' : [
        'Develop and produce film, television, and new media entertainment.',
        'Provide post-production services for film, video, television, and new media projects.'
      ],
      'url' : 'http://www.paragonhill.com',
      'tags' : [
        'Filmmaking',
        'Photoshop',
        'After Effects',
        'Blender',
        'Nuke',
        'Final Cut Pro',
        'Avid',
        'Premiere Pro',
        'Pro Tools',
        'Logic Pro',
        'IzotopeRX',
        'Videography',
        'Sound Engineer',
        'Dialog Editing',
        'Screenwriting',
        '3D Modeling and Animation',
        'HTML5',
        'wordpress',
        'php'
      ]
    },
    {
      'employer' : 'William Winckler Productions',
      'title' : 'Recording Engineer',
      'location' : 'Winnetka, CA',
      'dates' : '2007-Present',
      'description' : [
        'Design signal chain to create high quality audio recording environment.',
        'Ensure correct microphone placement and monitor audio levels for best possible results while recording.',
        'Edit, prepare and compress media to appropriate format for client.'
      ],
      'url' : 'http://www.imdb.com/company/co0023574/',
      'tags' : [
        'sound engineer',
        'pro tools',
        'logic pro',
        'photoshop',
        'After effects'
      ]
    },
    {
      'employer' : 'Walt Disney Studios New Technology',
      'title' : 'Production Associate',
      'location' : 'Burbank, CA',
      'dates' : '2007-2008',
      'description' : [
        'Design signal chain to create high quality audio recording environment.',
        'Ensure correct microphone placement and monitor audio levels for best possible results while recording.',
        'Edit, prepare and compress media to appropriate format for client.'
      ],
      'url' : 'http://www.disney.com',
      'tags' : [
        'Filmmaking',
        'photoshop',
        'final cut pro',
        'logic pro',
        'After effects'
      ]
    },
    {
      'employer' : 'Walt Disney Character Voices',
      'title' : 'Production Associate',
      'location' : 'Burbank, CA',
      'dates' : '2006',
      'description' : [
        'Design signal chain to create high quality audio recording environment.',
        'Ensure correct microphone placement and monitor audio levels for best possible results while recording.',
        'Edit, prepare and compress media to appropriate format for client.'
      ],
      'url' : 'http://www.disney.com',
      'tags' : [
        'Filmmaking',
        'photoshop',
        'final cut pro',
        'pro tools',
        'sound engineer'
      ]
    },
    {
      'employer' : 'Kids Artistic Review',
      'title' : 'Video Technician',
      'location' : 'Cypress, CA',
      'dates' : '2012 Season',
      'description' : [
        'Operated camera for hundreds of dance routines nightly.',
        'Managed video equipment inventory and maintenance at each venue city.',
        'Ensured reliability of production gear by alerting Video Manager to issues.'
      ],
      'url' : 'http://dancekar.com',
      'tags' : [
        'Videography'
      ]
    }
  ],
  'display' : function() {
    for(job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('#', work.jobs[job].url).replace('%data%', work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      $('.work-entry:last').append(formattedLocation);
      $('.work-entry:last').append(formattedDates);
      // Leaving the code for a resume description block of text
      // var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description[job]);
      // $('.work-entry:last').append(formattedDescription);
      for (bullet in work.jobs[job].description) {
        var formattedDescriptionBullet = HTMLworkDescriptionList.replace('%data%', work.jobs[job].description[bullet]);
        $('.work-entry:last').append(formattedDescriptionBullet);
      }
      // insert tag class names for skill fiter function
      // format tag names from gramatical input to no spaces and no uppercase to match search
      for (tag in work.jobs[job].tags) {
        tagFormatted = work.jobs[job].tags[tag].replace(/\s/g, '').toLowerCase();
        $('.work-entry:last').addClass(tagFormatted);
      }
    }
  }
}

var projects = {
  'projects' : [
    {
      'title' : 'HTML Portfolio',
      'dates' : '2015',
      'description' : 'Created responsive portfolio website using HTML5 and CSS3',
      'images' : [
        '',
        '',
        ''
      ],
      'url' : 'https://github.com/bradfordrex/intro-project-html5-hello-world',
      'tags' : [
        'HTML5',
        'CSS3',
        'Responsive Web Design'
      ]
    },
    {
      'title' : 'Javascript Resume',
      'dates' : '2015',
      'description' : 'Created interactive resume using Javascript',
      'images' : [
        '',
        '',
        ''
      ],
      'url' : 'https://github.com/bradfordrex/frontend-nanodegree-resume',
      'tags' : [
        'Javascript',
        'jQuery'
      ]
    },
    {
      'title' : 'Japollywood Artists',
      'dates' : '2011',
      'description' : 'Designed and developed completely custom website for talent managment start-up Japollywood Artists. Created custom Wordpress theme with proprietary plug-in to input, view, and search client roster. Created graphical back-end client entry form, as well as password protected front-end client browsing portal. Entire website is bi-lingual with language selectable between Japanese and English.',
      'images' : [
        'images/japollywoodArtists.jpg'
      ],
      'url' : '',
      'tags' : [
        'Wordpress',
        'PHP',
        'HTML5',
        'CSS3'
      ]
    },
    {
      'title' : 'Mirrored (short film)',
      'dates' : '2015',
      'description' : 'Produced and Directed a Sci-Fi thriller short film',
      'images' : [
        ''
      ],
      'url' : 'http://www.mirrored-film.com',
      'tags' : [
        'HTML5',
        'PHP',
        'CSS3',
        'Final cut pro',
        'nuke',
        'Blender',
        'pro tools',
        'logic pro',
        'IzotopeRX',
        'Filmmaking',
        'sound engineer',
        'Dialog editing',
        '3d modeling and animation'
      ]
    },
    {
      'title' : 'Eden',
      'dates' : '2015',
      'description' : 'English Language sound recording engineer and dialog re-recording mixer',
      'images' : [
        ''
      ],
      'url' : '',
      'tags' : [
        'Final cut pro',
        'pro tools',
        'logic pro',
        'sound engineer',
        'Dialog editing'
      ]
    },
  ],
  'display' : function() {
    for (project in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace('#', projects.projects[project].url).replace('%data%', projects.projects[project].title);
      $('.project-entry:last').append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
      $('.project-entry:last').append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
      $('.project-entry:last').append(formattedProjectDescription);

      for (url in projects.projects[project].images) {
      var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[url]);
      $('.project-entry:last').append(formattedProjectImage)
      }
      // insert tag class names for skill fiter function
      // format tag names from gramatical input to no spaces and no uppercase to match search
      for (tag in projects.projects[project].tags) {
        tagFormatted = projects.projects[project].tags[tag].replace(/\s/g, '').toLowerCase();
        $('.project-entry:last').addClass(tagFormatted);
      }
    }
  }
}

// Call all resume object display functions
bio.display();
work.display();
projects.display();
education.display();


//  Filter experience and education by selected skill function
function skillFilter() {
  // guidance text as HTML
  skillFilterTitle = '<p class="white-text">(Click a skill to filter relevant entries.)</p>';
  skillShowAll = '<p class="white-text" id="allSkills">Show All</p>';

  // append guidance text to DOM
  $('#skillsH3').append(skillFilterTitle).append(skillShowAll);

  // set CSS cursor for all now active clickable objects
  document.getElementById('allSkills').style.cursor = 'pointer';
  document.getElementById('skills').style.cursor = 'pointer';

  // set global variable to hide easter egg
  var easterEgg = 'off';

  // add event listener to show all text, onclick make all entries visible.
  document.getElementById('allSkills').addEventListener('click', function() {
    // check to see if easter egg is visible, if not, filer skills
    if (easterEgg === 'off') {
        var allEntry =  $('.education-entry, .work-entry, .project-entry');
        for ( i = 0; i<allEntry.length; i++) {
            allEntry[i].style.display = '';
        }
    // if easter egg is visible, hide it and set variable to off. Show all entries.
    } else {
            document.getElementById('easterEgg').style.display = 'none';
            easterEgg = 'off';
            allEntry =  $('.education-entry, .work-entry, .project-entry');
            for ( i = 0; i<allEntry.length; i++) {
                allEntry[i].style.display = '';
        }
    }
  });

  // cycle through each of the skills listed in Bio and send them to toggle function
  for ( i = 0; i<bio.skills.length; i++) {
      var skillID = bio.skills[i].replace(/\s/g, '').toLowerCase();
      var skillClass = '.' + bio.skills[i].replace(/\s/g, '').toLowerCase();
      // check if the skill is call for easter egg. If not contine to skill toggle, if so, send to easter egg function
      if (skillID === 'senseofhumor') {
          easterEggFunction(skillID);
      } else {
        skillToggle(skillID,skillClass);
      }
    };

  function easterEggFunction(skillID) {
    //add event listener to easter egg skill
      document.getElementById(skillID).addEventListener('click', function() {

    // set all elements to not visible
      var allEntry =  $('.education-entry, .work-entry, .project-entry');
      for ( i = 0; i<allEntry.length; i++) {
         allEntry[i].style.display = 'none';
      }
    // prepend and display youtube video embed, and set easter egg to on
      var youtubeLink = '<div id="easterEgg"><iframe src="http://www.youtube.com/embed/1pBFHrTfoe0?autoplay=1"> </iframe></div>';
      $('#workExperience').prepend(youtubeLink);
      easterEgg = 'on';
      });
  }

  // function to hide all items that do not match selected skill
  function skillToggle(skillID,targetClass) {
      // create an event listener for each skillID
      document.getElementById(skillID).addEventListener('click', function() {

      // reset all elements to visible before applying filter
      // check if easter egg is visible, if not, reset all entries visible
      if (easterEgg === 'off') {
          var allEntry =  $('.education-entry, .work-entry, .project-entry');
          for ( i = 0; i<allEntry.length; i++) {
              allEntry[i].style.display = '';
          }
      // if easter egg is visible, hide it and reset all entries visible
      } else {
          document.getElementById('easterEgg').style.display = 'none';
          easterEgg = 'off'
          allEntry =  $('.education-entry, .work-entry, .project-entry');
          for ( i = 0; i<allEntry.length; i++) {
              allEntry[i].style.display = '';
          }
      }
      // Set a variable to find all of the elements that don't relate to the chosen skill
      var skillClass =  $('.education-entry, .work-entry, .project-entry').not(targetClass);
      // for loop to cycle through all elements that do not match chosen skill
      for ( i = 0; i < skillClass.length; i++) {
        // turn each element that doesn't match off
          skillClass[i].style.display = 'none';
      };
      });
    };
}

// Call skillFilter function
skillFilter();



$('#mapDiv').append(googleMap);

$(document).click(function(loc) {
// your code goes here
//  var x = loc.screenX;
//  var y = loc.screenY;
//  logClicks(x,y)
console.log(loc.pageX, loc.pageY);
});
