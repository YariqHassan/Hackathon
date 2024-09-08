interface HTMLInputElement extends HTMLElement {
    value: string;
}

interface HTMLElement {
    textContent?: string;
    innerHTML?: string;
}

function addInfo(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jtitle') as HTMLInputElement).value;
    const bio = (document.getElementById('bio') as HTMLTextAreaElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;

    const sidebarName = document.querySelector('#sidebar #per-info h3') as HTMLElement;
    const sidebarJobTitle = document.querySelector('#sidebar #per-info p:nth-of-type(1)') as HTMLElement;
    const sidebarBio = document.querySelector('#sidebar #per-info p:nth-of-type(2)') as HTMLElement;
    const sidebarEmail = document.querySelector('#sidebar #per-info p:nth-of-type(3)') as HTMLElement;
    const sidebarNumber = document.querySelector('#sidebar #per-info p:nth-of-type(4)') as HTMLElement;

    if (sidebarName && sidebarJobTitle && sidebarEmail && sidebarNumber && sidebarBio) {
        sidebarName.textContent = name;
        sidebarJobTitle.textContent = jobTitle;
        sidebarEmail.textContent = email;
        sidebarNumber.textContent = number;
        sidebarBio.textContent = bio;
    }
}

document.querySelector('.add-btn')?.addEventListener('click', addInfo);

function addEducation(): void {
    const fieldElement = document.getElementById('education-field') as HTMLInputElement;
    const degreeElement = document.getElementById('education-degree') as HTMLInputElement;
    const schoolElement = document.getElementById('education-school') as HTMLInputElement;

    const field = fieldElement.value;
    const degree = degreeElement.value;
    const school = schoolElement.value;

    if (field && degree && school) {
        const ul = document.getElementById('cv-education') as HTMLUListElement;
        const li = document.createElement('li');
        li.innerHTML = `${degree} <p>${field} - ${school}</p>`;
        ul.appendChild(li);

        fieldElement.value = '';
        degreeElement.value = '';
        schoolElement.value = '';
    }
}

function addExperience(): void {
    const titleElement = document.getElementById('experience-title') as HTMLInputElement;
    const companyElement = document.getElementById('experience-company') as HTMLInputElement;
    const startYearElement = document.getElementById('experience-start-year') as HTMLInputElement;
    const endYearElement = document.getElementById('experience-end-year') as HTMLInputElement;

    const title = titleElement.value;
    const company = companyElement.value;
    const startYear = startYearElement.value;
    const endYear = endYearElement.value;

    if (title && company && startYear && endYear) {
        const ul = document.getElementById('cv-experience') as HTMLUListElement;
        const li = document.createElement('li');
        li.innerHTML = `${title} <p>${company} | ${startYear}-${endYear}</p>`;
        ul.appendChild(li);

        titleElement.value = '';
        companyElement.value = '';
        startYearElement.value = '';
        endYearElement.value = '';
    }
}

function addSkill(): void {
    const skillNameElement = document.getElementById('skill-name') as HTMLInputElement;
    const skillName = skillNameElement.value;

    if (skillName) {
        const div = document.createElement('div');
        div.classList.add('skill');
        div.textContent = skillName;
        const cvSkills = document.getElementById('cv-skills') as HTMLElement;
        cvSkills.appendChild(div);

        skillNameElement.value = '';
    }
}

function addHobby(): void {
    const hobbyNameElement = document.getElementById('hobby-name') as HTMLInputElement;
    const hobbyName = hobbyNameElement.value;

    if (hobbyName) {
        const ul = document.getElementById('profile-hobbies') as HTMLUListElement;
        const li = document.createElement('li');
        li.textContent = hobbyName;
        ul.appendChild(li);

        hobbyNameElement.value = '';
    }
}

function addLink(): void {
    const socialInput = (document.getElementById('social-input') as HTMLInputElement).value.trim();

    const newListItem = document.createElement('li');
    
    const link = document.createElement('a');
    link.href = socialInput;
    link.textContent = socialInput;

    newListItem.appendChild(link);

    document.getElementById('social-links-list')?.appendChild(newListItem);

    (document.getElementById('social-input') as HTMLInputElement).value = '';
}

document.querySelector('.add-btn')?.addEventListener('click', addLink);

