
function sortDescending(arr) 
{
    var n = arr.length;
  

    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  var inputString = prompt("Enter numbers separated by commas to sort:");

  var inputArray = inputString.split(',').map(Number);
  
  document.getElementById('outputScreen1').innerHTML="Original Array is: "+inputArray;
  console.log("Original array: " + inputArray);

  var sortedArray = sortDescending(inputArray);
  document.getElementById('outputScreen2').innerHTML="Sorted Array is: "+sortedArray;
  console.log("Sorted array in descending order: " + sortedArray);
  