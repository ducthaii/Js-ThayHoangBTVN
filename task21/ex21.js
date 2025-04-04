function cleanFalsyValues(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        result.push(arr[i]);
      }
    }
  
    console.log(result);
    return result;
  }
  
  cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);

//

function filterEvenNumbers(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i]);
      }
    }
  
    console.log(result);
    return result;
  }
  
  filterEvenNumbers([1, 2, 3, 4, 5, 6]);  
  filterEvenNumbers([1, 3, 5, 7]);      
  filterEvenNumbers([]);            
  filterEvenNumbers([-2, -1, 0, 1, 2]);   
//

function filterLongStrings(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 5) {
        result.push(arr[i]);
      }
    }
  
    console.log(result);
    return result;
  }
  
  filterLongStrings(["hello", "world", "javascript", "nodejs"]); 
  
  filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]);
  
  filterLongStrings(["hi", "bye", "yes"]);

//

function isPrime(n) {
    if (n < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function findMinMaxAverage(arr) {
    if (arr.length === 0) {
      console.log("Mảng rỗng");
      return null;
    }
  
    // Giả sử phần tử đầu tiên là lớn nhất và nhỏ nhất
    let max = arr[0];
    let maxIndex = 0;
    let min = arr[0];
    let minIndex = 0;
  
    // Biến để tính trung bình cộng số nguyên tố
    let primeSum = 0;
    let primeCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
  
      if (num > max) {
        max = num;
        maxIndex = i;
      }
  
      
      if (num < min) {
        min = num;
        minIndex = i;
      }
  
    
      if (isPrime(num)) {
        primeSum += num;
        primeCount++;
      }
    }
  
    // Tính trung bình nếu có số nguyên tố
    let primeAverage = null;
    if (primeCount > 0) {
      primeAverage = Math.round((primeSum / primeCount) * 100) / 100; 
    }
  
    let result = {
      max: max,
      maxIndex: maxIndex,
      min: min,
      minIndex: minIndex,
      primeAverage: primeAverage
    };
  
    console.log(result);
    return result;
  }
  
  findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]);
  findMinMaxAverage([5, 5, 2, 2, 1]);
  findMinMaxAverage([-3, 7, -8, 11, 0]);
 
//


  
  
  