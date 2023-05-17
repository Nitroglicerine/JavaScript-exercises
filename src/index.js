let user = {
  name: "Semen",
  skills: ["lazzy master", "chill god", "inclusive man"],
  sayHi() {
    console.log("Hello from" + this.name);
  },

  createSkill() {
    let x = prompt("Add skill", ["Mad"]);

    let f = this.skills.findIndex((item) => {
      if (item == x) {
        return true;
      }
    });
    if (f >= 0) {
      alert("This skill is exist ");
      if (confirm("do yo want create new skill ?") == true) {
        return this.createSkill();
      } else {
        alert("skill has not been added");
      }
    } else {
      this.skills.push(x);
      if (x == null) {
        this.skills.splice(-1, 1);
      }
    }

    return this.skills;
  },

  skillsView() {
    this.skills.forEach((skills) => console.log(skills));
  },
  findNdeleteSkill() {
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
console.log(user.createSkill());
