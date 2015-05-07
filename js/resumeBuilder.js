//Jobs worked
var work = {
	"jobs": [
		{
			"employer": "TD Bank",
			"title": "Sr. Cloud Architect",
			"location": "Toronto, Canada",
			"dates": "2014 - Present ",
			"description": "Deliver private cloud for the bank and an IT as a Service Marketplace"
    },
		{
			"employer": "Shoppers Drug Mart",
			"title": "Sr. Solutions Architect",
			"location": "North York, Canada",
			"dates": "2013 - 2014 ",
			"description": "Responsible for the Point of Sale systems architecture"
    }
  ]
};

//JSON for Bio, skills and contact Information and encapsulated function for displaying them
var bio = {
	"name": "abdi ibrahim",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "416-509-4565",
		"email": "abdi@ai-consulting.ca",
		"github": "github.com/linuxus",
		"twitter": "#abdiakahalo",
		"location": "Toronto, Canada"
	},
	"welcomeMessage": "Hello fellow Front End Developers and Welcome to my personal resume page.",
	"skills": ["Computer Network", " OpenStack", " Ceph", " HTML", " CSS", " JavaScript"],
	"biopic": "images/roger-smith.png",
	"display": function () {
		"use strict";
		var formattedName = HTMLheaderName.replace("%data%", bio.name),
			formattedRole = HTMLheaderRole.replace("%data%", bio.role),
			formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
			formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email),
			formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github),
			formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
			formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location),
			formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage),
			formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMessage);
		$("#topContacts").append(formattedContactMobile);
		$("#topContacts").append(formattedContactEmail);
		$("#topContacts").append(formattedContactGithub);
		$("#topContacts").append(formattedContactTwitter);
		$("#topContacts").append(formattedContactLocation);
		$("#footerContacts").append(formattedContactMobile);
		$("#footerContacts").append(formattedContactEmail);
		$("#footerContacts").append(formattedContactGithub);
		$("#footerContacts").append(formattedContactTwitter);
		$("#footerContacts").append(formattedContactLocation);
		//Displaying Skills
		if (bio.skills !== null) {
			$("#header").append(HTMLskillsStart);
			var i = 0,
				skill, skills = bio.skills;
			/* jslint -W084 */
			while (skill = skills[i++]) {
				$("#header").append(HTMLskills.replace("%data%", skill));
			}
		}
	}
};
bio.display();

//JSON for Education and encapsulated function for displaying them
var education = {
	"schools": [{
			"name": "York University",
			"location": "Toronto, Canada",
			"degree": "BA Science",
			"majors": ["Computer Science", "Mathematics"],
			"date": "06272001",
			"url": "http://www.yorku.ca"
	},
		{
			"name": "Louis Pasteur University",
			"location": "Strasbourg, France",
			"degree": "BA Science",
			"majors": ["Biology", "Mathematics"],
			"date": "06271996",
			"url": "http://www.unistra.fr"
		  },
		{
			"name": "Lycee de Djibouti",
			"location": "Djibouti, Djibouti",
			"degree": "High-School Science",
			"majors": ["Mathematics", "Physics"],
			"date": "June 27 1992",
			"url": "http://www.lycee-djibouti.org"
		  }
    ],
	"onlineCourses": [{
			"title": "Introduction to HTML and CSS",
			"location": "Udacity",
			"date": "01022015",
			"url": "http://udacity.com"
	}
			],
	"display": function () {
		"use strict";
		for (var school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
				formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
				formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date),
				formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location),
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDate);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolLocation);

		}

	}
};

education.display();

//JSON for Jobs worked and encapsulated function for displaying them
var work = {
	"jobs": [{
			"employer": "TD Bank",
			"title": "Sr. Cloud Architect",
			"location": "Toronto, Canada",
			"dates": "2014 - Present",
			"description": "Deliver private cloud for the bank and an IT as a Service Marketplace"
	},
		{
			"employer": "Shoppers Drug Mart",
			"title": "Sr. Solutions Architect",
			"location": "North York, Canada",
			"dates": "2013 - 2014 ",
			"description": "Responsible for the Point of Sale systems architecture"
		},
		{
			"employer": "Hydro One Network, Inc.",
			"title": "Sr. Solutions Architect",
			"location": "Barrie, Canada",
			"dates": "2010 - 2014 ",
			"description": "Power System IT solutions and architecture"
		}
		],
	"display": function () {
		"use strict";
		var formattedWorkEmployer,
			formattedWorkTitle,
			formattedEmployerTitle,
			formattedLocation,
			formattedDates,
			formattedDescription,
			job;
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();

//JSON for Projects worked on and encapsulated function for displaying them
var projects = {
	"projects": [{
			"title": "Private Cloud",
			"dates": "August 12, 2014 - Present",
			"description": "Architect, designed and built OpenStack based Private Cloud",
			"images": ["images/cloud.jpg"]
    },
		{
			"title": "IT Marketplace",
			"dates": "September 12, 2014 - February 12, 2015",
			"description": "Architect, designed and built IT as a Service Marketplace using Private Cloud",
			"images": ["images/marketplace.jpg"]
      },
		{
			"title": "Infrastructure Upgrade",
			"dates": "January 1, 2012 - August 30, 2014",
			"description": "Infrastructure refresh for the largest electrical transmission company in North America",
			"images": ["images/electric.jpg"]
      }
      ],
	"display": function () {
		"use strict";
		var project,
			formattedprojectTitle,
			formattedprojectDates,
			formattedprojectDescription,
			formattedprojectImages;
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			formattedprojectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images);
			$(".project-entry:last").append(formattedprojectTitle);
			$(".project-entry:last").append(formattedprojectDates);
			$(".project-entry:last").append(formattedprojectDescription);
			$(".project-entry:last").append(formattedprojectImages);
		}
	}
};

projects.display();

// Internationalization Button
$("#main").append(internationalizeButton);

var inName = function (name) {
	name = name.trim().split(" ");
	name = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
	//return finalName;
	return name;
};

//Adding Map to the document
$("#mapDiv").append(googleMap);


//Logging to JS Console click locations
$(document).click(function (loc) {
	// your code goes here
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});
