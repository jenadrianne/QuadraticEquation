// Your Name
By : JA.Caballes

// Calculated values:
var discriminant;
var complexSolutionRealPart;
var complexSolutionImaginaryPart;
var realSolution1;
var realSolution2;

// String literals:
var sDiscriminant1 = "The value of the discriminant is ";
var sDiscriminant2 = "Since the value of the discriminant is ";
var sInvalidInput = "A number must be entered for each coefficient.";
var sSolutions1 = "The soutions are ";
var sSolutions2 = "The soution is ";

function onLoadPage()
{
  // You write the code for this function.
  // Reset all fields:
  reset();

  // Set input focus to the field for "a":
  document.getElementById("a").focus(); 
}

// Postconditions:
// realSolution1
function calculate1RealSolution(a, b, c)
{
 // You write the code for this function.
 realSolution1 = -b / (2*a);
}

// Preconditions:
// discriminant
// Postconditions:
// complexSolutionRealPart
// complexSolutionImaginaryPart
function calculate2ComplexSolutions(a, b, c)
{
 // You write the code for this function.
 // Calculate real part:
 complexSolutionRealPart = -b/(2*a);
 // Calculate imaginary part:
 complexSolutionImaginaryPart = Math.abs(Math.sqrt(-discriminant)) / (2*a);
}

// Preconditions:
//   discriminant
// Postconditions:
//   realSolution1
//   realSolution2
function calculate2RealSolutions(a, b, c)
{
  // You write the code for this function.
  realSolution1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  realSolution2 = (-b - Math.sqrt(discriminant)) / (2 * a);
}

function calculateDiscriminant(a, b, c)
{
  // You write the code for this function.
  return (b*b) - (4*a*c);
}

// Postconditions:
//   discriminant
//   complexSolutionRealPart
//   complexSolutionImaginaryPart
//   realSolution1
//   realSolution2
function calculateSolutions(a, b, c)
{
  discriminant = calculateDiscriminant(a, b, c);
  if (discriminant > 0)
  {
    calculate2RealSolutions(a, b, c);
  }
  else
  if (discriminant == 0)
  {
    calculate1RealSolution(a, b, c);
  }
  else
  {
    calculate2ComplexSolutions(a, b, c);
  }
}

function isNumber(sNumber)
{
  if (sNumber == "")
  {
    return false;
  }

  var number = parseFloat(sNumber);
  if (isNaN(number) == true)
  {
    return false;
  }
  if (isFinite(number) == false)
  {
    return false;
  }
  return true;
}

// Preconditions:
//   realSolution1
function output1RealSolution()
{
  // You write the code for this function.
  var Output = sSolutions1 + realSolution1; 
  document.getElementById("solutions").innerHTML = Output;
}

// Preconditions:
//   complexSolutionRealPart
//   complexSolutionImaginaryPart
function output2ComplexSolutions()
{
  // You write the code for this function.
  var output = sSolutions1 + complexSolutionRealPart + " + " + complexSolutionImaginaryPart + " i and " + complexSolutionRealPart + " - " + complexSolutionImaginaryPart + " i "; 
  document.getElementById("solutions").innerHTML = output; 
}

// Preconditions:
//   realSolution1
//   realSolution2
function output2RealSolutions()
{
  // You write the code for this function.
  var output = sSolutions1 + realSolution1 + " and " + realSolution2 ;
  document.getElementById("solutions").innerHTML = output;  
}

// Preconditions:
//   discriminant
function outputDiscriminant()
{
  var sOutput = sDiscriminant1 + discriminant + ".<br/>";
  if (discriminant > 0)
  {
    sOutput += sDiscriminant2 + "> 0, there are 2 real number solutions.";
  }
  else
  if (discriminant == 0)
  {
    sOutput += sDiscriminant2 + "= 0, there is 1 real number solution.";
  }
  else
  {
    sOutput += sDiscriminant2 + "< 0, there are 2 complex number solutions.";
  }
  document.getElementById("discriminant").innerHTML = sOutput;
}

// Preconditions:
//   discriminant
//   complexSolutionRealPart
//   complexSolutionImaginaryPart
//   realSolution1
//   realSolution2
function outputSolutions()
{
  if (discriminant > 0)
  {
    output2RealSolutions();
  }
  else
  if (discriminant == 0)
  {
    output1RealSolution();
  }
  else
  {
    output2ComplexSolutions();
  }
}

function reset()
{
  // You write the code for this function.
  document.getElementById("a").value = ""; 
  document.getElementById("b").value = ""; 
  document.getElementById("c").value = ""; 
}

function solve()
{
  // You write the code for this function.
  // Get field values:
  var a = document.getElementById("a").value; 
  var b = document.getElementById("b").value; 
  var c = document.getElementById("c").value; 

  // Validate fields:
  validateFields(a,b,c);

  // Calculate results:
  calculateSolutions(a,b,c);

  // Output results:
  outputDiscriminant();
  outputSolutions();
}

function validateFields(a, b, c)
{
  if (isNumber(a) == false)
  {
    alert(sInvalidInput);
    document.getElementById("a").focus();
    return false;
  }
  if (isNumber(b) == false)
  {
    alert(sInvalidInput);
    document.getElementById("b").focus();
    return false;
  }
  if (isNumber(c) == false)
  {
    alert(sInvalidInput);
    document.getElementById("c").focus();
    return false;
  }
  return true;
}
