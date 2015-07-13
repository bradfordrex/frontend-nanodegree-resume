var bio = {
  "name" : "Bradford Hill",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "(424) 832-0296",
    "email" : '<a href="mailto:bradfordrex@gmail.com">bradfordrex@gmail.com</a>',
    "github" : '<a href="https://github.com/bradfordrex">bradfordrex</a>',
    "twitter" : '<a href="https://twitter.com/BradFourHill"> @BradFourHill </a>',
    "location" : "Santa Clarita, CA"
  },
  "welcomeMessage" : "Hello there, I am Bradford.",
  "skills" : [
    "photoshop",
    "final cut pro",
    "comedy",
    "filmmaking",
    "New Skill",
    "PHP",
    "HTML5",
    "CSS3"
  ],
  "biopic" : "images/bradford_headshot-480w.jpg",
  "display" : function() {
    var formattedName = HTMLheaderName.replace ("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedContacts = {
    "mobile" : HTMLmobile.replace ("%data%", bio.contacts.mobile),
    "email" : HTMLemail.replace ("%data%", bio.contacts.email),
    "github" : HTMLgithub.replace ("%data%", bio.contacts.github),
    "twitter" : HTMLtwitter.replace ("%data%", bio.contacts.twitter),
    "location" : HTMLlocation.replace ("%data%", bio.contacts.location),
    }
    for (contact in formattedContacts) {
      $("#topContacts").append(formattedContacts[contact]);
      $("#footerContacts").append(formattedContacts[contact]);
    }

    var formattedBiopic = HTMLbioPic.replace ("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
    formattedSkill = HTMLskills.replace ("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
  }
}

var education = {
  "schools" : [
    {
      "name" : "University of Southern California",
      "location" : "Los Angeles, CA",
      "degree" : "Bachelor of Arts",
      "majors" : [
        "Theatre",
        "Cinema / Television Production"
      ],
      "dates" : "2008",
      "url" : "http://www.usc.edu"
    },
    {
      "name" : "Cassia Regional Technical Center",
      "location" : "Burley, ID",
      "degree" : "Certificate",
      "majors" : [
        "Graphic Communications"
      ],
      "dates" : "2003",
      "url" : "http://www.cassiaschools.org/domain/254"
    },
    {
      "name" : "Penn Foster Career School",
      "location" : "Burley, ID",
      "degree" : "Certificate",
      "majors" : [
        "Artist"
      ],
      "dates" : "2003",
      "url" : "http://www.pennfoster.edu"
    },
    {
      "name" : "Burley High School",
      "location" : "Burley, ID",
      "degree" : "Diploma",
      "majors" : [
      ],
      "dates" : "2003",
      "url" : "http://cassiaschools.org/burleyhs"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "https://www.udacity.com/course/responsive-images--ud882"
    },
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Intro to jQuery",
      "school" : "Udacity",
      "date" : "2015",
      "url" : "https://www.udacity.com/course/intro-to-jquery--ud245"
    },
  ],
  "display" : function() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("#",education.schools[school].url).replace("%data%",education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      if (education.schools[school].majors.length > 0){
        for (major in education.schools[school].majors){
          var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajors);
        }
      }
    }
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("#",education.onlineCourses[course].url).replace("%data%",education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append("<br>")
    }

  }
}

var work = {
  "jobs" : [
    {
      "employer" : "Paragon Hill Productions",
      "title" : "Principle",
      "location" : "Santa Clarita, CA",
      "dates" : "2010­-Present",
      "description" : [
        "Develop and produce film, television, and new media entertainment.",
        "Provide post-production services for film, video, television, and new media projects."
      ],
      "url" : "http://www.paragonhill.com"
    },
    {
      "employer" : "William Winckler Productions",
      "title" : "Recording Engineer",
      "location" : "Winnetka, CA",
      "dates" : "2007-Present",
      "description" : [
        "Design signal chain to create high quality audio recording environment.",
        "Ensure correct microphone placement and monitor audio levels for best possible results while recording.",
        "Edit, prepare and compress media to appropriate format for client."
      ],
      "url" : "http://www.imdb.com/company/co0023574/"
    },
    {
      "employer" : "Kids Artistic Review",
      "title" : "Video Technician",
      "location" : "Cypress, CA",
      "dates" : "2012 Season",
      "description" : [
        "Operated camera for hundreds of dance routines nightly.",
        "Managed video equipment inventory and maintenance at each venue city.",
        "Ensured reliability of production gear by alerting Video Manager to issues."
      ],
      "url" : "http://dancekar.com"
    }
  ],
  "display" : function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[job].url).replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      // Leaving the code for a resume description block of text
      // var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[job]);
      // $(".work-entry:last").append(formattedDescription);
      for (bullet in work.jobs[job].description) {
        var formattedDescriptionBullet = HTMLworkDescriptionList.replace("%data%", work.jobs[job].description[bullet]);
        $(".work-entry:last").append(formattedDescriptionBullet);
      }
    }
  }
}

var projects = {
  "projects" : [
    {
      "title" : "HTML Portfolio",
      "dates" : "2015",
      "description" : "Created responsive portfolio website using HTML5 and CSS3",
      "images" : [
        "",
        "",
        ""
      ],
      "url" : "https://github.com/bradfordrex/intro-project-html5-hello-world"
    },
    {
      "title" : "Javascript Resume",
      "dates" : "2015",
      "description" : "Created interactive resume using Javascript",
      "images" : [
        "",
        "",
        ""
      ],
      "url" : "https://github.com/bradfordrex/frontend-nanodegree-resume"
    },
    {
      "title" : "Japollywood Artists",
      "dates" : "2011",
      "description" : "Designed and developed completely custom website for talent managment start-up Japollywood Artists. Created custom Wordpress theme with proprietary plug-in to input, view, and search client roster. Created graphical back-end client entry form, as well as password protected front-end client browsing portal. Entire website is bi-lingual with language selectable between Japanese and English.",
      "images" : [
        "images/japollywoodArtists.jpg"
      ],
      "url" : ""
    },
  ],
  "display" : function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("#", projects.projects[project].url).replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);

      for (url in projects.projects[project].images) {
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[url]);
      $(".project-entry:last").append(formattedProjectImage)
      }
    }
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  // your code goes here
//  var x = loc.screenX;
//  var y = loc.screenY;
//  logClicks(x,y)
console.log(loc.pageX, loc.pageY);
});
