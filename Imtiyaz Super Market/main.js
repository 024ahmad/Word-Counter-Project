#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// import Choice from "inquirer/lib/objects/choice.js"
console.log(chalk.bgCyan.cyan.magenta.bold("************************** Welcome To Imtiyaz Super Market **************************"));
let Ration_items = [];
let Washing_items = [];
let Sweets_items = [];
let Furniture_items = [];
let Clothes_items = [];
let Total_bill = 0;
let condition = true;
while (condition) {
    let shopping = await inquirer.prompt({
        name: "choice",
        type: "list",
        choices: ["Ration Items", "Washing Items", "Sweet Items", "Furniture Items", "Cloth Items", "Exit"],
        message: chalk.green("What do you want to buy...?")
    });
    if (shopping.choice == "Ration Items") {
        let ration = await inquirer.prompt({
            name: "item",
            type: "list",
            choices: ["Floor", "Rice", "Meet", "Spices/Peppers", "Lentiles", "Back"]
        });
        if (ration.item == "Floor") {
            let floor = 1300;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.blue.bold(`=> 10 kg Floor price is : ${floor} \n How many Floor packets do you want to buy...?`)
            });
            let calculate = floor * contity.item;
            Ration_items.push(`Floor ${contity.item} packets`);
            console.log(Ration_items);
            console.log(chalk.green.bold(`You buy ${contity.item} packets of Floor, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (ration.item == "Rice") {
            let rice = 340;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan.bold(`=> 1 kg Rice packet price is : ${rice} \n How many Rice packets do you want to buy...? `)
            });
            let calculate = rice * contity.item;
            Ration_items.push(`Rice ${contity.item} packets`);
            console.log(Ration_items);
            console.log(chalk.green.bold(`You buy ${contity.item} packets of Rice, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (ration.item == "Meet") {
            let choice = await inquirer.prompt({
                name: "item",
                type: "list",
                choices: ["Beef", "Mutton", "Chicken"]
            });
            if (choice.item == "Beef") {
                let meet_price = 1200;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Beef 1 kg price is : ${meet_price} \n How much kg Beef do you want to buy...?`)
                });
                let calculate = meet_price * contity.item;
                Ration_items.push(`Beef ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.green.bold(`You buy ${contity.item} kg Beef, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Mutton") {
                let mutton_price = 2300;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Mutton 1 kg price is : ${mutton_price} \n How much kg Mutton do you want to buy...?`)
                });
                let calculate = mutton_price * contity.item;
                Ration_items.push(`Mutton ${contity.item} kg`);
                console.log(Ration_items);
                console.log(`You buy ${contity.item} kg Mutton, total amount is : ${calculate}`);
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Chicken") {
                let chicken_price = 700;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Chicken 1 kg price is : ${chicken_price} \n How much kg Chicken do you want to buy...?`)
                });
                let calculate = chicken_price * contity.item;
                Ration_items.push(`Chicken ${contity.item} kg`);
                console.log(Ration_items);
                console.log(`You buy ${contity.item} kg Chicken, total amount is : ${calculate}`);
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
        }
        else if (ration.item == "Spices/Peppers") {
            let choice = await inquirer.prompt({
                name: "item",
                type: "list",
                choices: ["Red Pepper", "Black Papper", "Chilli Crushed"],
                message: chalk.cyan.bold("How much Spices or Peppers do you want to buy...?")
            });
            if (choice.item == "Red Pepper") {
                let red_pepper_price = 650;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Red Pepper 1 kg price is : ${red_pepper_price} \n How much kg Red pepper do you want to buy...?`)
                });
                let calculate = red_pepper_price * contity.item;
                Ration_items.push(`Red pepper ${contity.item} kg`);
                console.log(Ration_items);
                console.log(`You buy ${contity.item} kg Red pepper, total amount is : ${calculate}`);
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Black Papper") {
                let black_peppeer_price = 700;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Black Papper 1 kg price is : ${black_peppeer_price} \n How much kg Black pepper do you want to buy...?`)
                });
                let calculate = black_peppeer_price * contity.item;
                Ration_items.push(`Black pepper ${contity.item} kg`);
                console.log(Ration_items);
                console.log(`You buy ${contity.item} kg Black pepper, total amount is : ${calculate}`);
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Chilli Crushed") {
                let chilli_crushed_price = 630;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Chilli Crushed 1 kg price is : ${chilli_crushed_price} \n How much kg Chilli Crushed do you want to buy...?`)
                });
                let calculate = chilli_crushed_price * contity.item;
                Ration_items.push(`Chilli Crushed ${contity.item} kg`);
                console.log(Ration_items);
                console.log(`You buy ${contity.item} kg Chilli Crushed, total amount is : ${calculate}`);
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
        }
        else if (ration.item == "Lentiles") {
            let choice = await inquirer.prompt({
                name: "item",
                type: "list",
                choices: ["Daal Masoor", "Daal kala Masoor", "Daal Maash", "Daal Chana", "Daal Mong"],
                message: chalk.cyan.bold("How much Lentiles/Daal do you want to buy...?")
            });
            if (choice.item == "Daal Masoor") {
                let masoor = 400;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Daal Masoor 1 kg price is : ${masoor} \n How much kg Daal Masoor do you want to buy...?`)
                });
                let calculate = masoor * contity.item;
                Ration_items.push(`Daal Masoor ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.cyan.bold(`You buy ${contity.item} kg Daal Masoor, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Daal kala Masoor") {
                let kala_masoor = 320;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Daal kala Masoor 1 kg price is : ${kala_masoor} \n How much kg Daal kala Masoor do you want to buy...?`)
                });
                let calculate = kala_masoor * contity.item;
                Ration_items.push(`Daal kala Masoor ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.cyan.bold(`You buy ${contity.item} kg Daal kala Masoor, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Daal Mash") {
                let maash = 430;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Daal Mash 1 kg price is : ${maash} \n How much kg Daal Mash do you want to buy...?`)
                });
                let calculate = maash * contity.item;
                Ration_items.push(`Daal Mash ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.cyan.bold(`You buy ${contity.item} kg Daal Mash, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Daal Chana") {
                let daal_chana = 350;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Daal Chana 1 kg price is : ${daal_chana} \n How much kg Daal Chana do you want to buy...?`)
                });
                let calculate = daal_chana * contity.item;
                Ration_items.push(`Daal Chana ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.cyan.bold(`You buy ${contity.item} kg Daal Chana, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
            else if (choice.item == "Daal Mong") {
                let daal_mong = 350;
                let contity = await inquirer.prompt({
                    name: "item",
                    type: "number",
                    message: chalk.cyan(`=> Daal Mong 1 kg price is : ${daal_mong} \n How much kg Daal Mong do you want to buy...?`)
                });
                let calculate = daal_mong * contity.item;
                Ration_items.push(`Daal Chana ${contity.item} kg`);
                console.log(Ration_items);
                console.log(chalk.cyan.bold(`You buy ${contity.item} kg Daal Chana, total amount is : ${calculate}`));
                Total_bill = Total_bill += calculate;
                console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
            }
        }
    }
    else if (shopping.choice == "Washing Items") {
        let washing = await inquirer.prompt({
            name: "item",
            type: "list",
            choices: ["Soap", "Exel Surf", "Ariel Surf", "Brite Surf", "Bonus Surf", "Back"],
            message: chalk.green("What do you want to buy...?")
        });
        if (washing.item == "Soap") {
            let soap = 550;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Soap 1 packet price is : ${soap} \n How many Soap packets do you want to buy...?`)
            });
            let calculate = soap * contity.item;
            Washing_items.push(`Soap ${contity.item} packets`);
            console.log(Ration_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} packets Soap, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (washing.item == "Exel Surf") {
            let exel = 450;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Surf Exel 1 packet price is : ${exel} \n How many Surf Exel packets do you want to buy...?`)
            });
            let calculate = exel * contity.item;
            Washing_items.push(`Surf Exel ${contity.item} packets`);
            console.log(Washing_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} packets Surf Exel, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (washing.item == "Ariel Surf") {
            let arial = 450;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Ariel Surf 1 packet price is : ${arial} \n How many Ariel Surf packets do you want to buy...?`)
            });
            let calculate = arial * contity.item;
            Washing_items.push(`Ariel Surf ${contity.item} packets`);
            console.log(Washing_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} packets Ariel Surf, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (washing.item == "Brite Surf") {
            let brite = 470;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Brite Surf 1 packet price is : ${brite} \n How many Brite Surf packets do you want to buy...?`)
            });
            let calculate = brite * contity.item;
            Washing_items.push(`Brite Surf ${contity.item} packets`);
            console.log(Washing_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} packets Brite Surf, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (washing.item == "Bonus Surf") {
            let bonus = 420;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Bonus Surf 1 packet price is : ${bonus} \n How many Bonus Surf packets do you want to buy...?`)
            });
            let calculate = bonus * contity.item;
            Washing_items.push(`Bonus Surf ${contity.item} packets`);
            console.log(Washing_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} packets Bonus Surf, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else {
            condition = true;
        }
    }
    else if (shopping.choice == "Sweet Items") {
        let sweet = await inquirer.prompt({
            name: "choice",
            type: "list",
            choices: ["Gulaab Jamun", "Cham Cham", "Moti Chor k laddu", "Gajar ka halwa", "Baalushashi", "Mix Mithayi", "Back"]
        });
        if (sweet.choice == "Gulaab Jamun") {
            let gulab_jamun = 1200;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Gulaab Jamun 1 kg price is : ${gulab_jamun} \n How much kg Gulaab Jamun do you want to buy...?`)
            });
            let calculate = gulab_jamun * contity.item;
            Sweets_items.push(`Gulaab Jamun ${contity.item} kg`);
            console.log(Sweets_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Gulaab Jamun, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (sweet.choice == "Cham Cham") {
            let chamcham = 1250;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Cham Cham 1 kg price is : ${chamcham} \n How much kg Cham Cham do you want to buy...?`)
            });
            let calculate = chamcham * contity.item;
            Sweets_items.push(`Cham Cham ${contity.item} kg`);
            console.log(Sweets_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Cham Cham , total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (sweet.choice == "Moti Chor k laddu") {
            let laddu = 950;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Moti Chor k laddu 1 kg price is : ${laddu} \n How much kg Moti Chor k laddu do you want to buy...?`)
            });
            let calculate = laddu * contity.item;
            Sweets_items.push(`Moti Chor k laddu ${contity.item} kg`);
            console.log(Sweets_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Moti Chor k laddu, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (sweet.choice == "Gajar ka halwa") {
            let halwa = 1100;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Gajar ka halwa 1 kg price is : ${halwa} \n How much kg Gajar ka halwa do you want to buy...?`)
            });
            let calculate = halwa * contity.item;
            Sweets_items.push(`Gajar ka halwa ${contity.item} kg`);
            console.log(Sweets_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Gajar ka halwa, total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (sweet.choice == "Baalushashi") {
            let balushahi = 1000;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Baalushashi 1 kg price is : ${balushahi} \n How much kg Baalushashi do you want to buy...?`)
            });
            let calculate = balushahi * contity.item;
            Sweets_items.push(`Baalushashi ${contity.item} kg`);
            console.log(Washing_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Baalushashi , total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
        else if (sweet.choice == "Mix Mithayi") {
            let mix = 1150;
            let contity = await inquirer.prompt({
                name: "item",
                type: "number",
                message: chalk.cyan(`=> Mix Mithayi 1 kg price is : ${mix} \n How much kg Mix Mithayi do you want to buy...?`)
            });
            let calculate = mix * contity.item;
            Sweets_items.push(`Mix Mithayi ${contity.item} kg`);
            console.log(Sweets_items);
            console.log(chalk.cyan.bold(`You buy ${contity.item} kg Mix Mithayi , total amount is : ${calculate}`));
            Total_bill = Total_bill += calculate;
            console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
        }
    }
    else if (shopping.choice == "Furniture Items") {
        let furniture = await inquirer.prompt({
            name: "choice",
            type: "list",
            choices: ["Sofa Set", "Bedroom Set", "Dining Table", "Back"]
        });
        if (furniture.choice == "Sofa Set") {
            let kinds = await inquirer.prompt({
                name: "choice",
                type: "list",
                choices: ["3pc sofa set", "6pc sofa set", "8pc sofa set"],
                message: chalk.cyan.bold("Which kind of sofa set do you want to buy...?")
            });
            if (kinds.choice == "3pc sofa set") {
                let pc_3 = 36000;
                let choice = await inquirer.prompt({
                    name: "question",
                    type: "confirm",
                    message: chalk.cyan.bold(`3pc sofa set price is : ${pc_3} Do you want to buy this sofa set...?`)
                });
                if (choice.question == true) {
                    Furniture_items.push("You buy 3pc sofa set");
                    console.log(Furniture_items);
                    Total_bill = Total_bill += pc_3;
                    console.log(`Your total bill is : ${Total_bill}`);
                }
            }
            else if (kinds.choice == "6pc sofa set") {
                let pc_6 = 73000;
                let choice = await inquirer.prompt({
                    name: "question",
                    type: "confirm",
                    message: chalk.cyan.bold(`6pc sofa set price is : ${pc_6} Do you want to buy this sofa set...?`)
                });
                if (choice.question == true) {
                    Furniture_items.push("You buy 6pc sofa set");
                    console.log(Furniture_items);
                    Total_bill = Total_bill += pc_6;
                    console.log(`Your total bill is : ${Total_bill}`);
                }
            }
            else if (kinds.choice == "8pc sofa set") {
                let pc_8 = 92000;
                let choice = await inquirer.prompt({
                    name: "question",
                    type: "confirm",
                    message: chalk.cyan.bold(`8pc sofa set price is : ${pc_8} Do you want to buy this sofa set...?`)
                });
                if (choice.question == true) {
                    Furniture_items.push("You buy 8pc sofa set");
                    console.log(Furniture_items);
                    Total_bill = Total_bill += pc_8;
                    console.log(`Your total bill is : ${Total_bill}`);
                }
            }
        }
        else if (furniture.choice == "Bedroom Set") {
            let choices = await inquirer.prompt({
                name: "choice",
                type: "list",
                choices: ["Full Bedroom Set", "Selected Items"],
                message: chalk.cyan.bold("Which kind of bedroom set do you want to buy...?")
            });
            if (choices.choice == "Full Bedroom Set") {
                let full = 250000;
                let choice = await inquirer.prompt({
                    name: "question",
                    type: "confirm",
                    message: chalk.cyan.bold(`Full bedroom set price is : ${full} Do you want to buy this bedroom set...?`)
                });
                if (choice.question == true) {
                    Furniture_items.push("You buy full bedroom set");
                    console.log(Furniture_items);
                    Total_bill = Total_bill += full;
                    console.log(`Your total bill is : ${Total_bill}`);
                }
            }
            else if (choices.choice == "Selected Items") {
                let full_bed = 80000;
                let dressing = 25000;
                let almari = 60000;
                let divider = 50000;
                let choice = await inquirer.prompt({
                    name: "question",
                    type: "list",
                    choices: ["Full bed", "Dressing", "Almari", "Divider"],
                    message: chalk.cyan.bold(`Full bed price is : ${full_bed} \n Dressing table price is : ${dressing} \n 3 doors Almari price is : ${almari} \n Divider pricee is : ${divider} \n which item do you want to buy...?`)
                });
                if (choice.question == "Full bed") {
                    let confirm = await inquirer.prompt({
                        name: "q1",
                        type: 'confirm',
                        message: chalk.cyan.bold("Do you want to buy...?")
                    });
                    if (confirm.q1 == true) {
                        Furniture_items.push("You buy Full Bedroom Set");
                        console.log(Furniture_items);
                        Total_bill = Total_bill += full_bed;
                        console.log(`Your total bill is : ${Total_bill}`);
                    }
                }
                else if (choice.question == "Dressing") {
                    let confirm = await inquirer.prompt({
                        name: "q1",
                        type: 'confirm',
                        message: chalk.cyan.bold("Do you want to buy...?")
                    });
                    if (confirm.q1 == true) {
                        Furniture_items.push("You buy Dressing Table");
                        console.log(Furniture_items);
                        Total_bill = Total_bill += full_bed;
                        console.log(`Your total bill is : ${Total_bill}`);
                    }
                }
                else if (choice.question == "Almari") {
                    let confirm = await inquirer.prompt({
                        name: "q1",
                        type: 'confirm',
                        message: chalk.cyan.bold("Do you want to buy...?")
                    });
                    if (confirm.q1 == true) {
                        Furniture_items.push("You buy 3 Doors Almari");
                        console.log(Furniture_items);
                        Total_bill = Total_bill += full_bed;
                        console.log(`Your total bill is : ${Total_bill}`);
                    }
                }
                else if (choice.question == "Divider") {
                    let confirm = await inquirer.prompt({
                        name: "q1",
                        type: 'confirm',
                        message: chalk.cyan.bold("Do you want to buy...?")
                    });
                    if (confirm.q1 == true) {
                        Furniture_items.push("You buy Divider");
                        console.log(Furniture_items);
                        Total_bill = Total_bill += full_bed;
                        console.log(`Your total bill is : ${Total_bill}`);
                    }
                }
            }
        }
        else if (furniture.choice == "Dining Table") {
            let dining_table = 80000;
            let confirm = await inquirer.prompt({
                name: "question",
                type: "confirm",
                message: chalk.cyan.bold(`Dining Table price is => ${dining_table} \n Do you want to buy...?`)
            });
            if (confirm.question == true) {
                Furniture_items.push("You buy Dining Table");
                console.log(Furniture_items);
                Total_bill = Total_bill += dining_table;
                console.log(`Your total bill is : ${Total_bill}`);
            }
        }
    }
    else if (shopping.choice == "Cloth Items") {
        let condition2 = true;
        while (condition2) {
            let choices = await inquirer.prompt({
                name: "choice",
                type: "list",
                choices: ["Boys Items", "Girls Items", "Kids Items", "Back"],
                message: chalk.cyan.bold("Which kind of clothes do you want to buy...?")
            });
            if (choices.choice == "Boys Items") {
                let types = await inquirer.prompt({
                    name: "item",
                    type: "list",
                    choices: ["Shalwar Kameez", "Kurta Pajama", "Pent Shirt", "Back"],
                    message: chalk.cyan.bold("Which kind of clothes do you want to buy...?")
                });
                if (types.item == "Shalwar Kameez") {
                    let shalwar_kameez = 2500;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Shalwar Kameez price is => ${shalwar_kameez} \n How many items do you want to buy...?`)
                    });
                    let calculate = shalwar_kameez * contity.item;
                    Clothes_items.push(`Shalwar Kameez ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Shalwar Kameez , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Kurta Pajama") {
                    let kurta_pajama = 2300;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Kurta Pajama price is => ${kurta_pajama} \n How many items do you want to buy...?`)
                    });
                    let calculate = kurta_pajama * contity.item;
                    Clothes_items.push(`Kurta Pajama ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Kurta Pajama , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Pent Shirt") {
                    let pent_shirt = 2100;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Pent Shirt price is => ${pent_shirt} \n How many items do you want to buy...?`)
                    });
                    let calculate = pent_shirt * contity.item;
                    Clothes_items.push(`Pent Shirt ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Pent Shirt , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Back") {
                }
            }
            else if (choices.choice == "Girls Items") {
                let types = await inquirer.prompt({
                    name: "item",
                    type: "list",
                    choices: ["Shalwar Kameez", "Kurta Pajama", "Pent Shirt", "Back"],
                    message: chalk.cyan.bold("Which kind of clothes do you want to buy...?")
                });
                if (types.item == "Shalwar Kameez") {
                    let shalwar_kameez = 3200;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Shalwar Kameez price is => ${shalwar_kameez} \n How many items do you want to buy...?`)
                    });
                    let calculate = shalwar_kameez * contity.item;
                    Clothes_items.push(`Shalwar Kameez ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Shalwar Kameez , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Kurta Pajama") {
                    let kurta_pajama = 3100;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Kurta Pajama price is => ${kurta_pajama} \n How many items do you want to buy...?`)
                    });
                    let calculate = kurta_pajama * contity.item;
                    Clothes_items.push(`Kurta Pajama ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Kurta Pajama , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Pent Shirt") {
                    let pent_shirt = 2300;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Pent Shirt price is => ${pent_shirt} \n How many items do you want to buy...?`)
                    });
                    let calculate = pent_shirt * contity.item;
                    Clothes_items.push(`Pent Shirt ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Pent Shirt , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
            }
            else if (choices.choice == "Kids Items") {
                let types = await inquirer.prompt({
                    name: "item",
                    type: "list",
                    choices: ["Shalwar Kameez", "Kurta Pajama", "Pent Shirt", "Back"],
                    message: chalk.cyan.bold("Which kind of clothes do you want to buy...?")
                });
                if (types.item == "Shalwar Kameez") {
                    let shalwar_kameez = 1400;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Shalwar Kameez price is => ${shalwar_kameez} \n How many items do you want to buy...?`)
                    });
                    let calculate = shalwar_kameez * contity.item;
                    Clothes_items.push(`Shalwar Kameez ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Shalwar Kameez , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Kurta Pajama") {
                    let kurta_pajama = 1250;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Kurta Pajama price is => ${kurta_pajama} \n How many items do you want to buy...?`)
                    });
                    let calculate = kurta_pajama * contity.item;
                    Clothes_items.push(`Kurta Pajama ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Kurta Pajama , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
                else if (types.item == "Pent Shirt") {
                    let pent_shirt = 1350;
                    let contity = await inquirer.prompt({
                        name: "item",
                        type: "input",
                        message: chalk.cyan.bold(`1 Pent Shirt price is => ${pent_shirt} \n How many items do you want to buy...?`)
                    });
                    let calculate = pent_shirt * contity.item;
                    Clothes_items.push(`Pent Shirt ${contity.item} Suits`);
                    console.log(Clothes_items);
                    console.log(chalk.cyan.bold(`You buy ${contity.item} Pent Shirt , total amount is : ${calculate}`));
                    Total_bill = Total_bill += calculate;
                    console.log(chalk.blue.bold(`Your total bill is : ${Total_bill}`));
                }
            }
            else {
                condition2 = false;
            }
        }
    }
    else if (shopping.choice == "Exit") {
        Ration_items.concat(Sweets_items);
        shopping = Ration_items.concat(Sweets_items, Washing_items, Furniture_items, Clothes_items);
        console.log(shopping);
        console.log(chalk.cyan.bold(`Before Discount ${Total_bill}`));
        let discount = Total_bill / 100 * 5;
        Total_bill = Total_bill / 100 * 95;
        console.log(chalk.blue.bold(`Your total bill is after 5 % discount : ${Total_bill}`));
        console.log(chalk.magenta(`Total Discount is : ${discount}`));
        console.log(chalk.cyan("\b \b ********** Thank you for visiting Imtiyaz Super Market **********  \b \b"));
        condition = false;
    }
}
