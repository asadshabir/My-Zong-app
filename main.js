import chalk from "chalk";
import inquirer from "inquirer";
let userBlance = 1000;
console.log(chalk.bold.yellow("________________________________"));
console.log("");
console.log(chalk.yellow.bold.italic("$'|") +
    " " +
    chalk.bold.magentaBright("WELCOME") +
    " " +
    chalk.blueBright.bold("TO") +
    " " +
    chalk.bold.cyanBright("MY ZONG") +
    " " +
    chalk.greenBright.bold("AAP") +
    " " +
    chalk.yellow.bold.italic("|'$"));
console.log(chalk.bold.yellow("________________________________"));
console.log("");
let signUp = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: chalk.magenta.bold("Enter Your Full Name :")
    },
    {
        name: 'number',
        type: "number",
        message: chalk.bold.green("Enter Your Number :")
    },
    {
        name: "Pin",
        type: "number",
        message: chalk.bold.cyan("Select Your Pin Code :")
    }
]);
console.log(chalk.bold.yellow("_________________________________________________________________________"));
console.log(chalk.green.bold.italic(`(" Your Account Sign Up Succefully `) +
    chalk.bold.italic.magenta(` Now You Can Login Your Account ~ )`));
console.log(chalk.bold.yellow("_________________________________________________________________________"));
console.log("");
console.log(chalk.yellow.bold("LOGIN :"));
let condition = true;
while (condition) {
    let logiN = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: chalk.bold.greenBright("Enter Your Full Name :")
        },
        {
            name: 'number',
            type: "number",
            message: chalk.magenta.bold("Enter Your Number :")
        },
        {
            name: "Pin",
            type: "number",
            message: chalk.cyanBright.bold("Select Your Pin Code :")
        }
    ]);
    if (signUp.name === logiN.name && signUp.number === logiN.number && signUp.Pin === logiN.Pin) {
        console.log(chalk.bold.yellow("________________________________________________________________________________________________________"));
        console.log(chalk.yellow.bold("| WelCome ") +
            chalk.bold.cyanBright(logiN.name) +
            " " +
            chalk.bold.magenta("&") +
            " " +
            chalk.bold.green("Cogratulations '~'") +
            " " +
            chalk.cyan.bold("You got " +
                chalk.green.bold(`Rs : 1000,`) +
                " " +
                "of bonus on " +
                chalk.bold.magentaBright(`sign Up`) +
                " from lucky draw |"));
        console.log(chalk.bold.yellow("________________________________________________________________________________________________________"));
        condition = false;
        console.log(chalk.bold.blueBright.italic("Your Available Account Balance :"));
        console.log(chalk.bold.yellow("____________________________________________"));
        console.log(chalk.bold.green("RS :") + " " + chalk.bold.magentaBright(userBlance));
        console.log(chalk.bold.yellow("______________"));
        condition = false;
        let optionList = await inquirer.prompt([
            {
                name: "list",
                type: "rawlist",
                message: chalk.bold.cyanBright("| Select option | :"),
                choices: ["Daily Reward", "Recharge", "Share Balance", "Packages", "Other"]
            }
        ]);
        if (optionList.list === "Daily Reward") {
            let DailyReward = await inquirer.prompt([
                {
                    name: "dailyMbs",
                    type: "checkbox",
                    message: "Click Here And Get Free Random MBS",
                    choices: ["FREE REWARD"]
                },
            ]);
            if (DailyReward.dailyMbs) {
                let freembs = Math.floor(Math.random() * 100);
                console.log(chalk.bold.green("Congrats .!! ") + chalk.yellowBright.bold("you got") + " " + chalk.cyanBright.bold(freembs) + " " + chalk.blueBright.bold("From My zong"));
            }
            else {
                console.log(chalk.bold.magentaBright("Opps .!! Try Tomorrrow"));
            }
        }
        else if (optionList.list === "Recharge") {
            const easyLoad = await inquirer.prompt([
                {
                    name: "easyLoad",
                    type: "list",
                    message: chalk.bold.yellow(`| Select Network |`),
                    choices: ["Jazz", "Telenore", "Zong", "Ufone", "Other"],
                },
            ]);
            let condition2 = true;
            if ((easyLoad.easyLoad === "Jazz" || "Zong" || "Telenore" || "Ufone",
                (easyLoad.easyLoad === "Other") === false)) {
                while (condition2) {
                    let getLoad = await inquirer.prompt([
                        {
                            name: "getBalance",
                            type: "number",
                            message: chalk.bold.blue("Enter Mobile  Number :"),
                        },
                        {
                            name: "amount",
                            type: "number",
                            message: chalk.bold.cyan("Enter amount :") +
                                " " +
                                chalk.bold.magentaBright(`( *Minimum 100pkr )`),
                        },
                        {
                            name: "loadPin",
                            type: "number",
                            message: chalk.bold.yellowBright("To Perform This Operation Enter Your Pin Code :"),
                        },
                    ]);
                    if (getLoad.loadPin === logiN.Pin) {
                        if (getLoad.amount >= 100) {
                            if (getLoad.amount <= userBlance) {
                                console.log(chalk.cyan.bold("The balane of Rs :") +
                                    " " +
                                    chalk.green.bold(getLoad.amount) +
                                    " " +
                                    chalk.cyan.bold("Succefully send to") +
                                    " " +
                                    chalk.green.bold(getLoad.getBalance));
                                userBlance -= getLoad.amount;
                                console.log(chalk.bold.magentaBright("Your remaining balance is :") +
                                    " " +
                                    chalk.bold.cyan("Rs : ") +
                                    chalk.green.bold(userBlance));
                                condition2 = false;
                            }
                            else {
                                console.log(chalk.bold.blueBright("Dear User") +
                                    " " +
                                    chalk.bold.greenBright(logiN.name) +
                                    " " +
                                    chalk.bold.red("You Dont Have Insufficient Balance For This Transaction .!!"));
                                console.log("");
                                console.log(chalk.cyan.bold("Because Your Account Balance is :") + " " + chalk.bold.green(userBlance));
                            }
                        }
                        else {
                            console.log(chalk.bold.red("You can't make this transation .!!") +
                                chalk.bold.green(`( enter more than 100 or equal )` +
                                    " Then " +
                                    chalk.bold.italic.magenta(`{Re-Enter Your Number & Amount}`)));
                        }
                    }
                    else {
                        console.log(chalk.bold.red("Invalid Pin Code .!!") +
                            " " +
                            chalk.bold.green("Try Again"));
                    }
                }
            }
            else {
                console.log(chalk.bold.red.italic("Invalid Name Or Pin Or Number .!!"));
            }
        }
        else if (optionList.list === "Share Balance") {
            const easyLoad = await inquirer.prompt([
                {
                    name: "easyLoad",
                    type: "list",
                    message: chalk.bold.yellow(`| Select Network |`),
                    choices: ["Jazz", "Telenore", "Zong", "Ufone", "Other"],
                },
            ]);
            let condition2 = true;
            if ((easyLoad.easyLoad === "Jazz" || "Zong" || "Telenore" || "Ufone",
                (easyLoad.easyLoad === "Other") === false)) {
                while (condition2) {
                    let getLoad = await inquirer.prompt([
                        {
                            name: "getBalance",
                            type: "number",
                            message: chalk.bold.blue("Enter Mobile  Number :"),
                        },
                        {
                            name: "amount",
                            type: "number",
                            message: chalk.bold.cyan("Enter amount :") +
                                " " +
                                chalk.bold.magentaBright(`( *Minimum 100pkr )`),
                        },
                        {
                            name: "loadPin",
                            type: "number",
                            message: chalk.bold.yellowBright("To Perform This Operation Enter Your Pin Code :"),
                        },
                    ]);
                    if (getLoad.loadPin === logiN.Pin) {
                        if (getLoad.amount >= 100) {
                            if (getLoad.amount <= userBlance) {
                                console.log(chalk.cyan.bold("The balane of Rs :") +
                                    " " +
                                    chalk.green.bold(getLoad.amount) +
                                    " " +
                                    chalk.cyan.bold("Succefully send to") +
                                    " " +
                                    chalk.green.bold(getLoad.getBalance));
                                userBlance -= getLoad.amount;
                                console.log(chalk.bold.magentaBright("Your remaining balance is :") +
                                    " " +
                                    chalk.bold.cyan("Rs : ") +
                                    chalk.green.bold(userBlance));
                                condition2 = false;
                            }
                            else {
                                console.log(chalk.bold.blueBright("Dear User") +
                                    " " +
                                    chalk.bold.greenBright(logiN.name) +
                                    " " +
                                    chalk.bold.red("You Dont Have Insufficient Balance For This Transaction .!!"));
                                console.log("");
                                console.log(chalk.cyan.bold("Because Your Account Balance is :") + " " + chalk.bold.green(userBlance));
                            }
                        }
                        else {
                            console.log(chalk.bold.red("You can't make this transation .!!") +
                                chalk.bold.green(`( enter more than 100 or equal )` +
                                    " Then " +
                                    chalk.bold.italic.magenta(`{Re-Enter Your Number & Amount}`)));
                        }
                    }
                    else {
                        console.log(chalk.bold.red("Invalid Pin Code .!!") +
                            " " +
                            chalk.bold.green("Try Again"));
                    }
                }
            }
        }
        else if (optionList.list === "Packages") {
            let packageList = await inquirer.prompt([
                {
                    name: "list",
                    type: "list",
                    message: chalk.bold.yellow("|Select Package |:"),
                    choices: ["Monthly Social", "Call Pkg", "Sms package", "Other"]
                }
            ]);
            if (packageList.list === "Monthly Social" || "Call Pkg" || "Sms package") {
                let package1 = await inquirer.prompt([
                    {
                        name: "package",
                        type: "checkbox",
                        message: chalk.bold.greenBright("200GB Internet ") + chalk.magenta.bold("social 50GB") + chalk.bold.yellowBright(" 500 Sms only") + " " + chalk.blueBright.bold("in 999,"),
                        choices: ["Active This Package"]
                    }
                ]);
                if (package1.package) {
                    let confirmPackage = await inquirer.prompt([
                        {
                            name: "confirm",
                            type: "confirm",
                            message: chalk.bold.red("Are You Sure You Want To Active This Package .?")
                        }
                    ]);
                    confirmPackage;
                    userBlance -= 999;
                    console.log(chalk.bold.magentaBright("Your remaining balance is :") +
                        " " +
                        chalk.bold.cyan("Rs : ") +
                        chalk.green.bold(userBlance));
                    console.log(chalk.bold.yellow("The") + " " + chalk.green.bold(packageList.list) + " " + chalk.cyan.bold("Successfully Activated On Your Number"));
                }
                else {
                    if (package1.package > userBlance) {
                        console.log(chalk.bold.blueBright("Dear User") +
                            " " +
                            chalk.bold.greenBright(logiN.name) +
                            " " +
                            chalk.bold.red("You Dont Have Insufficient Balance For This Transaction .!!"));
                    }
                    else {
                        console.log(chalk.bold.blueBright("Dear User") +
                            " " +
                            chalk.bold.greenBright(logiN.name) +
                            " " +
                            chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                            " " +
                            chalk.bold.green("| Try Again |"));
                    }
                }
            }
            else {
                console.log(chalk.bold.blueBright("Dear User") +
                    " " +
                    chalk.bold.greenBright(logiN.name) +
                    " " +
                    chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                    " " +
                    chalk.bold.green("| Try Again |"));
            }
        }
        else {
            console.log(chalk.bold.blueBright("Dear User") +
                " " +
                chalk.bold.greenBright(logiN.name) +
                " " +
                chalk.bold.red("Sorry our Company Is'nt providing any other service") +
                " " +
                chalk.bold.green("| Try Again |"));
        }
    }
    else {
        console.log(chalk.bold.red.italic("Invalid Name Or Pin Or Number .!!"));
        console.log("");
        console.log(chalk.cyanBright.bold("{Re-Login Your Account}"));
    }
}
