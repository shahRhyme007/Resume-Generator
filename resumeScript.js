function addNewExperienceField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    
    newNode.classList.add("experienceField");
    newNode.setAttribute("rows", 3);
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder" , "Enter here")

    let expObject = document.getElementById("experiences");
    expObject.appendChild(newNode); // Append the new textarea to the "experiences" div
}


function addNewAQbutton()
{
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    
    newNode.classList.add("academicField");
    newNode.setAttribute("rows", 3);
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder" , "Enter here")

    let aqObject = document.getElementById("aq");
    aqObject.appendChild(newNode); // Append the new textarea to the "aq" div
}


function generateResume()
{
    // console.log("generating cv")
    let nameFieldobj= document.getElementById("nameField").value
    let nameTobj = document.getElementById("nameT")
    nameTobj.innerHTML = nameFieldobj


    // now doing directly
    document.getElementById("bignameT").innerHTML = nameFieldobj

    document.getElementById("phoneT").innerHTML = document.getElementById("phoneField").value

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value


    document.getElementById("linkT").innerHTML = document.getElementById("lkdField").value

    document.getElementById("gitT").innerHTML = document.getElementById("githubField").value

    document.getElementById("FbT").innerHTML = document.getElementById("mediaField").value
    
    
    document.getElementById("objectiveT").innerHTML = document.getElementById("aboutYourslfField").value


    // now going to work for work experiences
    let wexp = document.getElementsByClassName("experienceField")
    let str = ""
    for (let e of wexp)
    {
        str = str + `<li> ${e.value} </li>`
    }
    document.getElementById("experienceT").innerHTML = str


    // now going to work for work academic qualifications
    let aQualification = document.getElementsByClassName("academicField")
    let str1 = ""
    for (let e of aQualification)
    {
        str1 = str1 + `<li> ${e.value} </li>`
    }
    document.getElementById("academicQT").innerHTML = str1

    document.getElementById("cv-form").style.display = "none"
    document.getElementById("cv-template").style.display = "block"


}

// printing the resume
function printResume()
{
    window.print()
}