const fs = require('fs');

const language = process.argv.slice(2)[0];

const supportedLanguages = [
    'JavaScript',
    'HTML',
    'Python',
    'Ruby'
];

switch (language.toLowerCase()) {
    case 'js':
    case 'javascript':
    case 'node':
        generateJS();
        break;
    case 'html':
        generateHTML();
        break;
    case 'py':
    case 'python':
        generatePython();
        break;
    case 'ruby':
    case 'rb':
        generateRuby();
        break;
    case 'c#':
        generateCSharp();
        break;
    default:
        console.log('Please select one of the supported languages below:')
        console.log(supportedLanguages)
        break;
}

function generateJS() {
    console.log('Generating JS Hello World application...')
    let body = "console.log('Hello World');";

    fs.writeFile('helloWorld.js', body, (err) => {
        if (err) throw err;
        console.log("Hello World application generated.\nRun with 'node helloWorld.js'!");
    });
}

function generateHTML() {
    console.log('Generating HTML Hello World page...');
    let body = "<h1>Hello World</h1>";

    fs.writeFile('helloWorld.html', body, (err) => {
        if (err) throw err;
        console.log("Hello World page generated.\nOpen helloWorld.html with your browser!");
    });
}

function generatePython() {
    console.log('Generating Python Hello World application...');
    let body = 'print("Hello World")';

    fs.writeFile('helloWorld.py', body, (err) => {
        if (err) throw err;
        console.log("Hello World application generated.\nRun with 'python helloWorld.py!");
    });
}

function generateRuby() {
    console.log('Generating Ruby Hello World application...');
    let body = 'puts "Hello World"';

    fs.writeFile('helloWorld.rb', body, (err) => {
        if (err) throw err;
        console.log("Hello World application generated.\nRun with 'ruby helloWorld.rb!");
    });
}

function generateCSharp() {
    console.log('Generating C# Hello World application...');
    //Terrible formatting needed here so the C# app has correct spacing and doesn't look
    //like a mess. It was either this or a string full of \n and \t
    let body = `using System;
                
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            Console.WriteLine('Hello World!');
        }
    }
}`;

    fs.writeFile('helloWorld.cs', body, (err) => {
        if (err) throw err;
        console.log("Hello World application generated.\nRun with your favourite C# IDE");
        console.log('Note, you\ll probably need to create a C# project and copy this into your project')
    });

}