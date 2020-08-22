const withImages = require("next-images");
module.exports = withImages({});

const withTM = require("next-transpile-modules")(["gsap", "sass"]);

module.exports = withTM();
