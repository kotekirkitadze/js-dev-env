import { webpack } from "webpack";
import webpackConfigProd from "../webpack.config.prod";
import chalk from "chalk";

process.env.NODE_ENV = 'production';

console.log(chalk('generating minified bundling for production...'));

webpack(webpackConfigProd).run((err) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  console.log(chalk.green("Done"));
  return 0;
})
