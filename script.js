const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

//Add task btns 

const addTaskbtn = document.querySelector(".add-task-btn");
const addtaskform = document.querySelector(".add-task");
const blackbg = document.querySelector(".black-backdrop");
// ad task form
const toggleTaskforms = () => {
    addtaskform.classList.toggle("active");
    addTaskbtn.classList.toggle("active");
    blackbg.classList.toggle("active");
}
addTaskbtn.addEventListener("click", toggleTaskforms);
blackbg.addEventListener("click", toggleTaskforms);


//Categories and Tasks with Js

let categories = [
    {
        title: "Personal",
        img: "boy.png",
    },
    {
        title: "Work",
        img: "briefcase.png",
    },
    {
        title: "Shopping",
        img: "shopping.png",
    },
    {
        title: "Coding",
        img: "web-design.png",
    },
    {
        title: "Health",
        img: "healthcare.png",
    },
    {
        title: "Fitness",
        img: "dumbbell.png",
    },
    {
        title: "Education",
        img: "education.png",
    },
    {
        title: "Finance",
        img: "saving.png",
    },
];

let tasks = [
    {
        id: 1,
        task: "Go to market",
        category: "Shopping",
        completed: false,
    },
    {
        id: 2,
        task: "Read a chapter of a book",
        category: "Personal",
        completed: false,
    },
    {
        id: 3,
        task: "Prepare presentation for meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "Complete coding challenge",
        category: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "Take a 30-minute walk",
        category: "Health",
        completed: false,
    },
    {
        id: 6,
        task: "Do a 20-minute HIIT workout",
        category: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "Watch an educational video online",
        category: "Education",
        completed: false,
    },
    {
        id: 8,
        task: "Review monthly budget",
        category: "Finance",
        completed: false,
    },
    {
        id: 9,
        task: "Buy groceries for the week",
        category: "Shopping",
        completed: false,
    },
    {
        id: 10,
        task: "Write in a journal",
        category: "Personal",
        completed: false,
    },
    {
        id: 11,
        task: "Send follow-up emails",
        category: "Work",
        completed: false,
    },
    {
        id: 12,
        task: "Work on a coding side project",
        category: "Coding",
        completed: false,
    },
    {
        id: 13,
        task: "Try a new healthy recipe",
        category: "Health",
        completed: false,
    },
    {
        id: 14,
        task: "Attend a yoga class",
        category: "Fitness",
        completed: false,
    },
    {
        id: 15,
        task: "Read an article about a new topic",
        category: "Education",
        completed: false,
    },
    {
        id: 16,
        task: "Set up automatic bill payments",
        category: "Finance",
        completed: false,
    },
    // Additional tasks for each category
    {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
    },
    {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
    },
    {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        completed: false,
    },
    {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
    },
    {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        completed: false,
    },
    {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
    },
    {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
    },
    {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
    },
    {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
    },
    // Add more tasks for each category as desired
];

let selectedCategory = categories[6];

const categoriesContainer = document.querySelector(".categories");
const categoroyTitle = document.querySelector(".category-title");
const totalcategoroyTasks = document.querySelector(".category-tasks");
const categoroyImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".totaltasks");


const calctoatalTasks = () => {
    const categoryTasks = tasks.filter(
        (task) =>
            task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalcategoroyTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = `${tasks.length}`;
};


const rendercategories = () => {

    categoriesContainer.innerHTML = "";

    categories.forEach((category) => {
        //getting  all tasks of current cateories
        const categoryTasks = tasks.filter(
            (task) =>
                task.category.toLowerCase() === category.title.toLowerCase()
        );
        // creating div to render categories

        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () => {
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoroyTitle.innerHTML = category.title;
            categoroyImg.src = `images/${category.img}`;
            calctoatalTasks();
            rendertasks();

        });
        div.innerHTML = `
        <div class="left">
                            <img src="images/${category.img}" alt="${category.title}">
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTasks.length} Tasks</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="menu">
                                    <path fill="#000"
                                        d="M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
                                    </path>
                                </svg>
                            </div>
                        </div>
        `;
        categoriesContainer.appendChild(div);


    });

};


const taskContainer = document.querySelector(".tasks");

const rendertasks = () => {
    taskContainer.innerHTML = ``;
    const categoryTasks = tasks.filter(
        (task) =>
            task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );

    if (categoryTasks.length == 0) {
        taskContainer.innerHTML = `<p class="no-task">There is no tasks</p>`;
    }
    else {


        categoryTasks.forEach((task) => {
            const div = document.createElement("div");
            div.classList.add("task-wrapper");
            const label = document.createElement("label");
            label.classList.add("task");
            label.setAttribute("for", task.id);
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = task.id;
            checkbox.checked = task.completed;

            // completion linker 

            checkbox.addEventListener("change", () => {
                const index = tasks.findIndex((t) => t.id === task.id);

                tasks[index].completed = !tasks[index].completed;

                savelocal();
            });

            div.innerHTML = `<div class="delete">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 108.294 122.88"
                                xml:space="preserve">
                                <g>
                                    <path
                                        d="M4.873,9.058h33.35V6.2V6.187c0-0.095,0.002-0.186,0.014-0.279c0.075-1.592,0.762-3.037,1.816-4.086l-0.007-0.007 c1.104-1.104,2.637-1.79,4.325-1.806l0.023,0.002V0h0.031h19.884h0.016c0.106,0,0.207,0.009,0.309,0.022 c1.583,0.084,3.019,0.76,4.064,1.81c1.102,1.104,1.786,2.635,1.803,4.315l-0.003,0.021h0.014V6.2v2.857h32.909h0.017 c0.138,0,0.268,0.014,0.401,0.034c1.182,0.106,2.254,0.625,3.034,1.41l0.004,0.007l0.005-0.007 c0.851,0.857,1.386,2.048,1.401,3.368l-0.002,0.032h0.014v0.032v10.829c0,1.472-1.195,2.665-2.667,2.665h-0.07H2.667 C1.195,27.426,0,26.233,0,24.762v-0.063V13.933v-0.014c0-0.106,0.004-0.211,0.018-0.315v-0.021 c0.089-1.207,0.624-2.304,1.422-3.098l-0.007-0.002C2.295,9.622,3.49,9.087,4.81,9.069l0.032,0.002V9.058H4.873L4.873,9.058z M77.79,49.097h-5.945v56.093h5.945V49.097L77.79,49.097z M58.46,49.097h-5.948v56.093h5.948V49.097L58.46,49.097z M39.13,49.097 h-5.946v56.093h5.946V49.097L39.13,49.097z M10.837,31.569h87.385l0.279,0.018l0.127,0.007l0.134,0.011h0.009l0.163,0.023 c1.363,0.163,2.638,0.789,3.572,1.708c1.04,1.025,1.705,2.415,1.705,3.964c0,0.098-0.009,0.193-0.019,0.286l-0.002,0.068 l-0.014,0.154l-7.393,79.335l-0.007,0.043h0.007l-0.016,0.139l-0.051,0.283l-0.002,0.005l-0.002,0.018 c-0.055,0.331-0.12,0.646-0.209,0.928l-0.007,0.022l-0.002,0.005l-0.009,0.018l-0.023,0.062l-0.004,0.021 c-0.118,0.354-0.264,0.698-0.432,1.009c-1.009,1.88-2.879,3.187-5.204,3.187H18.13l-0.247-0.014v0.003l-0.011-0.003l-0.032-0.004 c-0.46-0.023-0.889-0.091-1.288-0.202c-0.415-0.116-0.818-0.286-1.197-0.495l-0.009-0.002l-0.002,0.002 c-1.785-0.977-2.975-2.882-3.17-5.022L4.88,37.79l-0.011-0.125l-0.011-0.247l-0.004-0.116H4.849c0-1.553,0.664-2.946,1.707-3.971 c0.976-0.955,2.32-1.599,3.756-1.726l0.122-0.004v-0.007l0.3-0.013l0.104,0.002V31.569L10.837,31.569z M98.223,36.903H10.837 v-0.007l-0.116,0.004c-0.163,0.022-0.322,0.106-0.438,0.222c-0.063,0.063-0.104,0.132-0.104,0.179h-0.007l0.007,0.118l7.282,79.244 h-0.002l0.002,0.012c0.032,0.376,0.202,0.691,0.447,0.825l-0.002,0.004l0.084,0.032l0.063,0.012h0.077h72.695 c0.207,0,0.399-0.157,0.518-0.377l0.084-0.197l0.054-0.216l0.014-0.138h0.005l7.384-79.21L98.881,37.3 c0-0.045-0.041-0.111-0.103-0.172c-0.12-0.118-0.286-0.202-0.451-0.227L98.223,36.903L98.223,36.903z M98.334,36.901h-0.016H98.334 L98.334,36.901z M98.883,37.413v-0.004V37.413L98.883,37.413z M104.18,37.79l-0.002,0.018L104.18,37.79L104.18,37.79z M40.887,14.389H5.332v7.706h97.63v-7.706H67.907h-0.063c-1.472,0-2.664-1.192-2.664-2.664V6.2V6.168h0.007 c-0.007-0.22-0.106-0.433-0.259-0.585c-0.137-0.141-0.324-0.229-0.521-0.252h-0.082h-0.016H44.425h-0.031V5.325 c-0.213,0.007-0.422,0.104-0.576,0.259l-0.004-0.004l-0.007,0.004c-0.131,0.134-0.231,0.313-0.259,0.501l0.007,0.102V6.2v5.524 C43.554,13.196,42.359,14.389,40.887,14.389L40.887,14.389z" />
                                </g>
                            </svg>
                        </div>`;

            label.innerHTML = `<span class="checkmark">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 122.881 89.842">
                                    <g>
                                        <path
                                            d="M1.232,55.541c-1.533-1.388-1.652-3.756-0.265-5.289c1.388-1.534,3.756-1.652,5.29-0.265l34.053,30.878l76.099-79.699 c1.429-1.501,3.804-1.561,5.305-0.132c1.502,1.428,1.561,3.803,0.133,5.305L43.223,88.683l-0.005-0.005 c-1.396,1.468-3.716,1.563-5.227,0.196L1.232,55.541L1.232,55.541z" />
                                    </g>
                                </svg>
                            </span>
                            <p>${task.task}</p>`;

            label.prepend(checkbox);
            div.prepend(label);
            taskContainer.appendChild(div);

            // delete bttnn
            const deleteBtn = div.querySelector(".delete");
            deleteBtn.addEventListener("click", () => {
                const index = tasks.findIndex((t) => t.id === task.id);
                tasks.splice(index, 1);
                savelocal();
                rendertasks();
            });

        });
        rendercategories();
        calctoatalTasks();

    }


};

//save task on local stroage 

const savelocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// get local item

const getLocal = () => {
    const loadTasks = JSON.parse(localStorage.getItem("tasks"));

    if (loadTasks) {
        tasks = loadTasks;
    }
};
// Add functionality 


//render all the categories on seleect
const categorySelect = document.querySelector("#category-select");
const cancelBtn = document.querySelector(".cancel-btn");
const addBtn = document.querySelector(".add-btn");
cancelBtn.addEventListener("click",toggleTaskforms); 

//addd
const taskinput=document.querySelector("#task-input");

addBtn.addEventListener("click", ()=>{
const task =taskinput.value;
const category=categorySelect.value;
if(task===""){

    alert("Please enter a task");
}
else{

    const newtask={
        id:tasks.length+1,
        task,
        category,
        completed:false,
    };
    tasks.push(newtask);
    taskinput.value="";
    savelocal();
    toggleTaskforms();
    rendertasks();
}
}); 

categories.forEach((category)=>{
    const option = document.createElement("option");
    option.value=category.title.toLowerCase();
    option.textContent=category.title;
    categorySelect.appendChild(option);
    

});



getLocal();
calctoatalTasks();
rendertasks();
