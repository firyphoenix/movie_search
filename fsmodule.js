const fs = require('fs')

/* Writing a File */
//Writing Text File
fs.writeFile('textfile.txt', "Hello World", function(err) {
    if(err) console.log(err)
    console.log("Saved");
})

//Writing HTML File
fs.writeFile('index.html', "<h1>Hello World</h1>", function(err) {
    if(err) console.log(err)
    console.log("html Saved");
})
//Writing JS File
fs.writeFile('app.js', "const x=\"Hello World\"; console.log(x)", function(err) {
    if(err) console.log(err)
    console.log("JS Saved");
})

/* Appending a File */

//Appending Text File
fs.appendFile('textfile.txt', "\nThis is new Content",function(err) {
    if(err) console.log(err);
    console.log("Appended Text File")
});

//Appending HTML File
fs.appendFile('index.html',"\n<h2>Another Line</h2>",function(err) {
    if(err) console.log(err);
    console.log("Appended HTML File")
} )

//Appending JS File
fs.appendFile('app.js',"\n console.log(\"Appended File\")",function(err) {
    if(err) console.log(err)
    console.log("Appended JS File")
})
//Appending a file in Desktop
fs.appendFile('../file.txt', "\nThis is new Content",function(err) {
    if(err) console.log(err);
    console.log("Appended Text File")
});

// Deleting a File

fs.unlink('textfile.txt',function(err) {
    if(err) console.log(err)
    console.log("Deleting text File")
})

fs.unlink('app.js',function(err) {
    if(err) console.log(err)
    console.log("Deleting JS File")
})
fs.unlink('index.html',function(err) {
    if(err) console.log(err)
    console.log("Deleting HTML File")
})