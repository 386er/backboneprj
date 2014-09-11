var config = module.exports;

config["Backbone Project Test"] = {
    rootPath: "../../busterproj",
    environment: "browser",
    libs: [
        "src/library/require.js",
        "src/common.js"
    ],
    sources: ["src/modules/*.js"],
    tests: ["../test/first-test.js"],
    extensions: [require("buster-amd")]

};