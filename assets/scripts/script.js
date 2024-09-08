"use strict";
var _a, _b;
function addInfo() {
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('jtitle').value;
    const bio = document.getElementById('bio').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const sidebarName = document.querySelector('#sidebar #per-info h3');
    const sidebarJobTitle = document.querySelector('#sidebar #per-info p:nth-of-type(1)');
    const sidebarBio = document.querySelector('#sidebar #per-info p:nth-of-type(2)');
    const sidebarEmail = document.querySelector('#sidebar #per-info p:nth-of-type(3)');
    const sidebarNumber = document.querySelector('#sidebar #per-info p:nth-of-type(4)');
    if (sidebarName && sidebarJobTitle && sidebarEmail && sidebarNumber && sidebarBio) {
        sidebarName.textContent = name;
        sidebarJobTitle.textContent = jobTitle;
        sidebarEmail.textContent = email;
        sidebarNumber.textContent = number;
        sidebarBio.textContent = bio;
    }
}
(_a = document.querySelector('.add-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addInfo);
function addEducation() {
    const fieldElement = document.getElementById('education-field');
    const degreeElement = document.getElementById('education-degree');
    const schoolElement = document.getElementById('education-school');
    const field = fieldElement.value;
    const degree = degreeElement.value;
    const school = schoolElement.value;
    if (field && degree && school) {
        const ul = document.getElementById('cv-education');
        const li = document.createElement('li');
        li.innerHTML = `${degree} <p>${field} - ${school}</p>`;
        ul.appendChild(li);
        fieldElement.value = '';
        degreeElement.value = '';
        schoolElement.value = '';
    }
}
function addExperience() {
    const titleElement = document.getElementById('experience-title');
    const companyElement = document.getElementById('experience-company');
    const startYearElement = document.getElementById('experience-start-year');
    const endYearElement = document.getElementById('experience-end-year');
    const title = titleElement.value;
    const company = companyElement.value;
    const startYear = startYearElement.value;
    const endYear = endYearElement.value;
    if (title && company && startYear && endYear) {
        const ul = document.getElementById('cv-experience');
        const li = document.createElement('li');
        li.innerHTML = `${title} <p>${company} | ${startYear}-${endYear}</p>`;
        ul.appendChild(li);
        titleElement.value = '';
        companyElement.value = '';
        startYearElement.value = '';
        endYearElement.value = '';
    }
}
function addSkill() {
    const skillNameElement = document.getElementById('skill-name');
    const skillName = skillNameElement.value;
    if (skillName) {
        const div = document.createElement('div');
        div.classList.add('skill');
        div.textContent = skillName;
        const cvSkills = document.getElementById('cv-skills');
        cvSkills.appendChild(div);
        skillNameElement.value = '';
    }
}
function addHobby() {
    const hobbyNameElement = document.getElementById('hobby-name');
    const hobbyName = hobbyNameElement.value;
    if (hobbyName) {
        const ul = document.getElementById('profile-hobbies');
        const li = document.createElement('li');
        li.textContent = hobbyName;
        ul.appendChild(li);
        hobbyNameElement.value = '';
    }
}
function addLink() {
    var _a;
    const socialInput = document.getElementById('social-input').value.trim();
    const newListItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = socialInput;
    link.textContent = socialInput;
    newListItem.appendChild(link);
    (_a = document.getElementById('social-links-list')) === null || _a === void 0 ? void 0 : _a.appendChild(newListItem);
    document.getElementById('social-input').value = '';
}
(_b = document.querySelector('.add-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addLink);
