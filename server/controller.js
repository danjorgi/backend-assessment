const goals = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.","All will go well with your new project.","Long life is in store for you.","Now is the time to try something new.","You will be successful in your work."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createGoal: (req, res) => {
        const { text } = req.body;
        if (text) {
            const newGoal = {
                id: goals.length + 1,
                text,
            };
            goals.push(newGoal);
            res.status(201).json(newGoal);
        } else {
            res.status(400).json({ message: 'Invalid goal data' });
        }
    },

    deleteGoal: (req, res) => {
        const { id } = req.params;
        const goalIndex = goals.findIndex(goal => goal.id === parseInt(id, 10));
        if (goalIndex !== -1) {
            goals.splice(goalIndex, 1);
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Goal not found'});
        }
    }

}