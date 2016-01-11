'use strict';

//require('gulpw');

//Note: load application level gulp subtasks
try {
  require('require-dir')('./gulp-tasks');
} catch (err) {
  console.log("Problem loading the local gulp tasks", err);
}
