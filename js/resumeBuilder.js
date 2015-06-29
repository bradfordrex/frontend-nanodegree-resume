var bio = {
  "name" : "Bradford Hill",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "(424) 832-0296",
    "email" : "bradfordrex@gmail.com",
    "github" : "bradfordrex",
    "twitter" : "@BradFourHill",
    "location" : "Santa Clarita, CA"
  },
  "biopic" : "images/fry.jpg",
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

var work = {
  "jobs" : [
    {
      "employer" : "William Winckler Productions",
      "title" : "Recording Engineer",
      "location" : "Winnetka, CA",
      "dates" : "2007-Present",
      "description" : [
        "Design signal chain to create high quality audio recording environment.",
        "Ensure correct microphone placement and monitor audio levels for best possible results while recording.",
        "Edit, prepare and compress media to appropriate format for client."
      ]
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
      ]
    },
    {
      "employer" : "Unbound Entertainment",
      "title" : "Video Specialist",
      "location" : "Burbank, CA",
      "dates" : "2010­-2012",
      "description" : [
        "Executed editing, effects, titles, audio mix, color correction, and exports for video post­production.",
        "Entered accurate and descriptive metadata while preparing FCP projects.",
        "Ensured correct file/folder structure and analyzed all incoming footage."
      ]
    }
  ],
  "display" : function() {
    for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
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
        "url1",
        "url2",
        "url3"
      ]
    },
    {
      "title" : "Javascript Resume",
      "dates" : "2015",
      "description" : "Created interactive resume using Javascript",
      "images" : [
        "url1",
        "url2",
        "url3"
      ]
    }
  ],
  "display" : function() {
    for (project in projects.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);
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
      "url" : "www.usc.edu"
    },
    {
      "name" : "Burley High School",
      "location" : "Burley, ID",
      "degree" : "Diploma",
      "majors" : [
      ],
      "dates" : "2003",
      "url" : ""
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "http://www.udacity.com"
    }
  ],
  "display" : function() {
    for (school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
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
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedOnlineDates);
    }
  }
}

// Internation Name Function and Button
// function inName(fullName) {
//   var firstLast = fullName.trim().split(" ");
//   var firstName = firstLast[0].substring(0,1).toUpperCase() + firstLast[0].substring(1).toLowerCase();
//   var lastName = firstLast[1].toUpperCase();
//   return  firstName + " " + lastName;
// }
// console.log(inName("bradford hill"));
// $("#main").append(internationalizeButton);


// Only append skills if there are any in the object
// if(bio.skills.length !== 0) {
//  $("#header").append(HTMLskillsStart);
//  for (skill in bio.skills) {
//    formattedSkill = HTMLskills.replace ("%data%", bio.skills[skill]);
//    $("#skills").append(formattedSkill);
//  }
// }

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
