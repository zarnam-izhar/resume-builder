const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); 

    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

   
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields.");
        return;
    }

    // Generate resume
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email Address:</b> ${email}</p>
    <p><b>Phone Number:</b> ${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing');
    }
});


const resetButton = document.createElement('button');
resetButton.innerHTML = "Reset Form";
resetButton.addEventListener('click', () => {
    form.reset(); 
    resumeDisplayElement.innerHTML = ''; 
});
form.appendChild(resetButton);
