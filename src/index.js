let user = {
  name: "Semen",
  skills: ["lazzy master", "chill god", "inclusive man"],
  SayHI() {
    console.log("Hello from" + this.name);
  },

  createSkill() {
    let x = prompt("Add skill", ["Mad"]);
    this.skills.push(x);
  },

  skillsView() {
    this.skills.forEach((skills) => console.log(skills));
  },
  skillQuestion() {
    let question = prompt("insert skill", ["lazzy"]);

    let result = this.skills.filter((element) => {
      if (element.includes(question)) {
        return true;
      }
    });
    if (result.length >= 1) {
      alert(result);
      if (confirm("delete this skill ?") == true) {
        this.skills.splice(result, 1);
      } else {
        alert("skin has not been removed");
      }
    } else {
      alert("Match skills not found");
    }
  },
};
console.log(user.skillQuestion());