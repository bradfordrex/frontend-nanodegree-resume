var formattedName = HTMLheaderName.replace ("%data%","Bradford Hill");
var formattedRole = HTMLheaderRole.replace ("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
