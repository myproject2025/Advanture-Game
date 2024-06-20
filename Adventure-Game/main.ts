
import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";

const gradientText = gradient([
  "green",
  "yellow",
  "red",
  "yellow",
  "red",
  "yellow",
  "blue",
]);

console.log(
  gradientText.multiline(
    "\n*************WELCOME TO MY ADVENTURE GAME*************\n"
  )
);

// Use Class For Player
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = Math.max(fuel, 0); // Ensures fuel does not go below 0
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

// Use Class For Opponent
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = Math.max(fuel, 0); // Ensures fuel does not go below 0
  
}
}

// PLAYER NAME
let player = await inquirer.prompt({
  name: "name",
  message: "Please Enter Your Name?",
  type: "input",
  validate: function (value) {
    if (value.trim() !== "") {
      return true;
    }
    return "Please enter the name first?";
  },
});

// SELECT OPPONENT

let opponent = await inquirer.prompt({
  name: "select",
  message: "Select Your Opponent?",
  type: "list",
  choices: ["Skeleton", "Assassin", "Zombie"],
});

console.log(
  `\n${gradientText("********************")}${chalk.italic.underline.red.bold(
    player.name
  )} ${gradientText("V/S")} ${chalk.green.bold.italic.underline(
    opponent.select
  )}${gradientText("********************")}\n`
);

// GATE DATA
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

// Condition
do {
  //Skeleton
  if (opponent.select == "Skeleton") {
    let Ask = await inquirer.prompt({
      name: "Action",
      message: "Choose the Action?",
      type: "list",
      choices: ["Attack", "Drink Portion", "Run for your life.."],
    });
    if (Ask.Action === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (p1.fuel <= 0) {
          console.log(
            gradientText("\n********************") +
              chalk.underline.bold.italic.bgYellow(
                "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
              ) +
              gradientText("********************")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (o1.fuel <= 0) {
          console.log(
            `\n ${gradientText(
              "********************"
            )} ${chalk.yellow.bold.italic(
              "Congratulations"
            )} ${chalk.red.bold.italic(p1.name)} ${chalk.yellow.bold.italic(
              "You Win"
            )} ${gradientText("********************")}\n`
          );
          process.exit();
        }
      }
    }

    if (Ask.Action === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bgCyanBright.bold.italic(
          "\nYou Drink Health portion Your Fuel is " + p1.fuel + "\n"
        )
      );
    }
    if (Ask.Action === "Run for your life..") {
      console.log(
        chalk.bold.italic.bgMagentaBright(
          "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
        )
      );
      process.exit();
    }
  }

  // Assassin
  if (opponent.select == "Assassin") {
    let Ask = await inquirer.prompt({
      name: "Action",
      message: "Choose the Action?",
      type: "list",
      choices: ["Attack", "Drink Portion", "Run for your life.."],
    });
    if (Ask.Action === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (p1.fuel <= 0) {
          console.log(
            gradientText("\n********************") +
              chalk.underline.bold.italic.bgYellow(
                "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
              ) +
              gradientText("********************")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (o1.fuel <= 0) {
          console.log(
            `\n ${gradientText(
              "********************"
            )} ${chalk.yellow.bold.italic(
              "Congratulation"
            )} ${chalk.red.bold.italic(p1.name)} ${chalk.yellow.bold.italic(
              "You Win"
            )} ${gradientText("********************")}\n`
          );
          process.exit();
        }
      }
    }

    if (Ask.Action === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bgCyanBright.bold.italic(
          "\nYou Drink Health portion Your Fuel is " + p1.fuel + "\n"
        )
      );
    }
    if (Ask.Action === "Run for your life..") {
      console.log(
        chalk.bold.italic.bgMagentaBright(
          "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
        )
      );
      process.exit();
    }
  }

  // Zombie
  if (opponent.select == "Zombie") {
    let Ask = await inquirer.prompt({
      name: "Action",
      message: "Choose the Action?",
      type: "list",
      choices: ["Attack", "Drink Portion", "Run for your life.."],
    });
    if (Ask.Action === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (p1.fuel <= 0) {
          console.log(
            gradientText("\n********************") +
              chalk.underline.bold.italic.bgYellow(
                "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
              ) +
              gradientText("********************")
          );
          process.exit();
        }
      }

      if (num <= 0) {
        o1.fuelDecrease();
        console.log(
          chalk.underline.bold.italic.red(`\n${p1.name} fuel is ${p1.fuel}\n`)
        );
        console.log(
          chalk.underline.bold.italic.green(`${o1.name} fuel is ${o1.fuel}\n`)
        );
        if (o1.fuel <= 0) {
          console.log(
            `\n ${gradientText(
              "********************"
            )} ${chalk.yellow.bold.italic(
              "Congratulation"
            )} ${chalk.red.bold.italic(p1.name)} ${chalk.yellow.bold.italic(
              "You Win"
            )} ${gradientText("********************")}\n`
          );
          process.exit();
        }
      }
    }

    if (Ask.Action === "Drink Portion") {
      p1.fuelIncrease();
      console.log(
        chalk.bgCyanBright.bold.italic(
          "\nYou Drink Health portion Your Fuel is " + p1.fuel + "\n"
        )
      );
    }
    if (Ask.Action === "Run for your life..") {
      console.log(
        chalk.bold.italic.bgMagentaBright(
          "\nOhh! " + p1.name + " You Loose ! Better Luck next Time.\n"
        )
      );
      process.exit();
    }
  }
} while (true);