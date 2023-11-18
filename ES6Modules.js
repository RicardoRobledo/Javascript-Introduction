import { print, log } from "./text-helpers";
import freel from "./mt-freel";
print("printing a message");
log("logging a message");
freel.print();

import { print as p, log as l } from "./text-helpers";
p("printing a message");
l("logging a message");

import * as fns from './text-helpers';

/*CommonJS does not support an import statement. Instead, modules are imported
with the require function*/
const { log, print } = require("./txt-helpers");