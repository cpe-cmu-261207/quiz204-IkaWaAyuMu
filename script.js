const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

const Paragraph = document.querySelector('body').querySelector('p').innerText;

function ResetValue()
{
  let section = document.querySelector('body').querySelectorAll('div')[0];

  section.querySelectorAll('input')[0].value = 5;
  section.querySelectorAll('input')[1].value = "#FFFF00";
  document.querySelector('body').querySelector('p').innerText = Paragraph;
}

function Search()
{
  let SplittedString = Paragraph.split(" ");
  let finalResult = "";
  SplittedString.forEach(str => {
    if (str.length < document.querySelector('body').querySelectorAll('div')[0].querySelectorAll('input')[0].value) finalResult += str + " ";
    else finalResult += "<span style=\"background-color: " +  document.querySelector('body').querySelectorAll('div')[0].querySelectorAll('input')[1].value + "\">" + str + "</span> ";
  });
  document.querySelector('body').querySelector('p').innerHTML = finalResult;
}

function ToggleCalculation()
{
  let studentID = 630610724;
  let studentName = "CHAYANON PITAK";

  let section = document.querySelector('body').querySelectorAll('div')[1];
  let text = section.querySelector('h2');
  let button = section.querySelector('button');

  let searchBox = document.querySelector('body').querySelectorAll('div')[0].querySelectorAll('input')[0];
  if (button.innerText === "Display Calculation")
  {
    button.innerText = "Display Author";
    text.innerText = studentID - searchBox.value;
  }
  else
  {    
    button.innerText = "Display Calculation";
    text.innerText = studentID + " " + studentName;
  }
}

// more codes for Search and Reset buttons here
