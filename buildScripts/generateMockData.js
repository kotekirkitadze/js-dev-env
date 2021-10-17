// import * as FakerSchema from 'json-schema-faker';
var FakerSchema = require('json-schema-faker');
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

FakerSchema.extend("faker", () => require("faker"));
const json = JSON.stringify(FakerSchema.generate(schema));


fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."))
  }
});
