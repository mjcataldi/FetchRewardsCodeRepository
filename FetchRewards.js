//  Javascript Greatest Version Number Detector
//  Have replaced the usual 'var' declaration with the new ES6 'let' and 'const' declarators.
let GreaterVersionNumber = function (input1, input2) {
    const separator = ".";
    let inputArray1 = input1.split(separator);
    let inputArray2 = input2.split(separator);

    //  The following four if statements check if there are any separators that either 
    //  start or end the string
    input1 = input1[0] === separator ? "0" + input1 : input1;
    input2 = input2[0] === separator ? "0" + input2 : input2;

    input1 = input1[input1.length - 1] === separator ? "0" + input1 : input1;
    input2 = input2[input2.length - 1] === separator ? "0" + input2 : input2;

    if (isNaN(inputArray1[0]) || isNaN(inputArray2[0]) || isNaN(inputArray1[inputArray1.length - 1]) || isNaN(inputArray2.length - 1)) {
        return "The two comparision strings could not be compared.  Please check the arguments and try again.";
    }

    //  This adds zeros to the end of the array if it's determined that the version 
    //  numbers do not have the same number of items
    if (inputArray1.length > inputArray2.length) {
        for (let i = 0; i < inputArray1.length - inputArray2.length; i++) {
            inputArray2.push(0);
        }
    }

    if (inputArray2.length > inputArray1.length) {
        for (let i = 0; i < inputArray2.length - inputArray1.length; i++) {
            // alternative method for writting line 24 above.
            inputArray1.concat(0);

            // could also write as:
            // inputArray1 = [...inputArray1, 0];
        }
    }

    for (let i = 0; i < inputArray1.length; i++) {
        let inputNumber1 = parseInt(inputArray1[i]);
        let inputNumber2 = parseInt(inputArray2[i]);

        return (inputNumber1 > inputNumber2) ? "after" : (inputNumber2 > inputNumber1) ? "before" : "equal";

        // This could also be written out as follows:
        // if (inputNumber1 > inputNumber2) {
        //     return "after";
        // }

        // if (inputNumber2 > inputNumber1)
        //     return "before";

        // if (inputNumber1 === inputNumber2 && inputArray1.length - 1 === i) {
        //     return "equal";
        // }
    }
}

const version1 = "0.2.34.1";
const version2 = "4.3.2";

GreaterVersionNumber(version1, version2);