// Project details display logic
let updatingProjectDisplay = false;



const projectLink1 = document.getElementById('project-link-1');
const project1 = document.getElementById('project1');

const projectLink2 = document.getElementById('project-link-2');
const project2 = document.getElementById('project2');



// add event listener for each project link, used MouseEnter and MouseLeave events to show/hide project details on hover, instead of click, for better user experience
projectLink1?.addEventListener('mouseenter', (event) => { {
    if(!updatingProjectDisplay) {
        displayProject(event, 'project1', 'block');
    }
}});


projectLink2?.addEventListener('mouseenter', (event) => {
    if(!updatingProjectDisplay) {
        displayProject(event, 'project2', 'block');
    }
});




// initialize project details display state
project1.style.display = 'flex';
project2.style.display = 'none';

projectLink1.style.backgroundColor = 'var(--project-select-color)';

projectLink1.style.color = 'var(--menu-active-color)';


/**
 * 
 * @param {Event} event - the click event that triggered the display of the project details
 * @param {String} linkName - the name of the project link that was clicked
 * @param {String} visibility - the visibility state to set for the project details (e.g. 'block' or 'none')
 */
function displayProject(event, linkName, visibility) {
    //console.log("Name is: " + linkName, "Event is: " + event, "event type is: " + event.type);

    if(visibility != 'block' && visibility != 'none') {
        //console.log("Invalid visibility value: " + visibility);
        return;
    }

    if(linkName === 'hideall') {
        project1.style.display = 'none';
        project2.style.display = 'none';
        
        return;
    }

    if(updatingProjectDisplay) {
        //console.log("Already updating project display, ignoring click");
        return;
    }

    updatingProjectDisplay = true;

    if(linkName === 'project1') {
        project1.style.display = visibility;
        project2.style.display = 'none';

        projectLink1.style.backgroundColor = 'var(--project-select-color)';
        projectLink2.style.backgroundColor = 'var(--project-inactive-color)';

        projectLink1.style.color = 'var(--menu-active-color)';
        projectLink2.style.color = 'var(--menu-base-color)';
    } 
    else if(linkName === 'project2') {
        project1.style.display = 'none';
        project2.style.display = visibility;

        projectLink1.style.backgroundColor = 'var(--project-inactive-color)';
        projectLink2.style.backgroundColor = 'var(--project-select-color)';

        projectLink1.style.color = 'var(--menu-base-color)';
        projectLink2.style.color = 'var(--menu-active-color)';
    } 
    else {
        console.log("Invalid link name: " + linkName);
    }



    updatingProjectDisplay = false;
}





// Skills section display logic








