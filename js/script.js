const course = document.querySelector('#bcu'),
course2 = document.querySelector('#courseTitle'),
prof = document.querySelector('#pName'),
classt = document.querySelector('#time').querySelectorAll('li'),
image = document.querySelector('.profImg'),
desc = document.querySelector('#courseDesc'),
content = document.querySelector('#courseCont').querySelectorAll('li');

getText(classData);

function getText(data){

course.innerHTML = data.coursename + "-" + data.coursecode;
course2.innerHTML = data.coursename + "-" + data.coursecode;
prof.innerHTML = "Professor -" + data.profname;
classt[0].innerHTML = data.classtime[0];
classt[1].innerHTML = data.classtime[1];
image.src = data.profimg;
desc.innerHTML = data.coursedesc;
content[0].innerHTML = data.coursecontent[0];
content[1].innerHTML = data.coursecontent[1];
content[2].innerHTML = data.coursecontent[2];
content[3].innerHTML = data.coursecontent[3];
}