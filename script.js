function changeAboutMeText() 
{
    const moreSkills = ["a Tech Enthusiast", "a Data Scientist", "a Full Stack Web Developer","an AI Developer"]; // Add more texts as needed
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 1500; // milliseconds to pause between each text change
    const skillsElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() 
    {
        const currentText = moreSkills[textIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) 
        {
            skillsElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            skillsElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % moreSkills.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

function changeSkill() 
{
    const moreSkills = ["Web Development", "Graphic Design", "Photography"]; // Add more texts as needed
    const typingSpeed = 100; // milliseconds per character
    const eraseSpeed = 50; // milliseconds per character during erasing
    const pauseTime = 2000; // milliseconds to pause between each text change
    const skillsElement = document.querySelector('.skills-list');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() 
    {
        const currentText = moreSkills[textIndex];
        /* Typing */
        if (!isDeleting && charIndex < currentText.length) 
        {
            skillsElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        /* Erasing */
        else if (isDeleting && charIndex > 0) {
            skillsElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        /* Switching the deleting or Typing process */
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % moreSkills.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}


// Call function to add stunning modification
changeAboutMeText();
//changeSkill();
