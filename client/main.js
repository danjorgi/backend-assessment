const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const affirmationBtn = document.getElementById("affirmationButton");
const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalButton");
const goalList = document.getElementById("goalList");

const baseURL = 'http://localhost:4000/api'


const getCompliment = () => {
    axios.get(`${baseURL}/compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get(`${baseURL}/fortune/`)
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const addGoal = () => {
    const goalText = goalInput.value;
    if (goalText) {
        axios.post(`${baseURL}/goals`, { text: goalText })
            .then(res => {
                const newGoal = res.data;
                const listItem = document.createElement("li");
                listItem.textContent = newGoal.text;
                goalList.appendChild(listItem);
                goalInput.value = "";
            })
            .catch(err => {
                console.error(err);
            });
    }
};


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addGoalBtn.addEventListener('click', addGoal);