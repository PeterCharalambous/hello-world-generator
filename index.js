const fs = require('fs');

const language = process.argv.slice(2)[0];

const supportedLanguages = [
    'JavaScript',
    'HTML',
    'Python',
    'Ruby',
    'C#',
    'PHP',
    'Bash',
    'Perl',
    'Go'
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
    case 'php':
        generatePHP();
        break;
    case 'bash':
        generateBash();
        break;
    case 'perl':
        generatePerl();
        break;
    case 'go':
        generateGo();
        break;
    default:
        console.log('Please select one of the supported languages below:')
        console.log(supportedLanguages)
        break;
}

function write(name, body, message) {
    fs.writeFile(name, body, (err) => {
        if (err) throw err;
        console.log(message);
    });
}

function generateJS() {
    console.log('Generating JS Hello World application...')
    let body = "console.log('Hello World');";
    let message = "Hello World application generated.\nRun with 'node helloWorld.js'!";
    
    write('helloWorld.js', body, message);
}

function generateHTML() {
    console.log('Generating HTML Hello World page...');
    let body = "<h1>Hello World</h1>";
    let message = "Hello World page generated.\nOpen helloWorld.html with your browser!";

    write('helloWorld.html', body, message);
}

function generatePython() {
    console.log('Generating Python Hello World application...');
    let body = 'print("Hello World")';
    let message = "Hello World application generated.\nRun with 'python helloWorld.py'!";

    write('helloWorld.py', body, message);
}

function generateRuby() {
    console.log('Generating Ruby Hello World application...');
    let body = 'puts "Hello World"';
    let message = "Hello World application generated.\nRun with 'ruby helloWorld.rb'!";

    write('helloWorld.rb', body, message)
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
    let message = "Hello World application generated.\nRun with your favourite C# IDE!\nNote, you'll probably need to create a C# project and copy this into your project";

    write('helloWorld.cs', body, message);
}

function generatePHP() {
    console.log('Generating PHP Hello World script...');
    let body = 'echo "Hello World";';
    let message = "Hello World script generated.\nRun with 'php helloWorld.php'!";

    write('helloWorld.php', body, message);
}

function generateBash() {
    console.log('Generating Bash Hello World script...');
    let body = 'echo "Hello World"';
    let message = 'Hello World bash script generated.\nRun with "./helloWorld.sh"!\nTo run on Windows, you\'ll need Cygwin';

    write('helloWorld.sh', body, message);
}

function generatePerl() {
    console.log('Generating Perl Hello World script...');
    let body = "#!/usr/bin/perl\nuse warnings;\nprint('Hello World');";
    let message = 'Hello World script generated.\nRun with "perl ./helloWorld.pl"!';

    write('helloWorld.pl', body, message);
}

function generateGo() {
    console.log('Generating Go Hello World script...');
    //Terrible formatting needed here so the Go script has correct spacing and doesn't look
    //like a mess. It was either this or a string full of \n and \t
    let body = `package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`;
    let message = 'Hello World Go script generated.\nRun with "go run helloWorld.go"!';

    write('helloWorld.go', body, message);
}