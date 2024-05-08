#!/usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([{name:"num1",
type:"number",
massage:"enter first number"},{
  name:"num2",
  type:"number",
  message:"enter second number"
  },{
    massage:"select one operator to perform action",
    type:"list",
    name:"operator",
    choices:["add","subtract","multiply","divide"],
  } 
])

if (answer.operator=== "add"){console.log("your answer is,",answer.num1+answer.num2);
} else if (answer.operator === "subtract"){console.log("your answer is",answer.num1-answer.num2);
} else if(answer.operator === "multiply"){console.log("your answer is",answer.num1*answer.num2);
} else if (answer.operator === "divide"){console.log("your answer is",answer.num1/answer.num2);
}
 else ("invalid operator")

