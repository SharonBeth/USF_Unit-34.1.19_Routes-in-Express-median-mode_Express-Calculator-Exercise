const { arrayBuffer } = require("stream/consumers");




function convertStringToIntegers(nums) {
    let array_num = [];
    for (let i = 0; i < nums.length; i++) {
        let each_value = Number.parseInt(nums[i]);
        console.log(each_value + "covert value to be added in loop section")

        if (Number.isNaN(each_value)) {
            return new Error(`The value ${nums[i]} at index ${i} is not a valid entry. An interger is  needed `);
        }
        array_num.push(each_value)
    }
    console.log(array_num + "covertString function")
    return array_num;
}

function sortMedian(num_string) {
    console.log(num_string + "sort Median");
    console.log(num_string.length)
    //////////////////////////////////////////Option 1 for array to object///////////////////////
    // num_obj = num_string.forEach((val) => (obj[val] = (obj[val]) || 0) + 1)

    //////////////////////////////////////////Option 2 for arry to object////////////////////////////
    // spread operator . look up on website below 
    // https://attacomsian.com/blog/javascript-convert-array-to-object


    num_obj = num_string.sort(function (a, b) { return a - b });

    console.log(num_obj + "num-obj from sortMedian function")
    console.log((num_obj.constructor))
    return num_obj;
}
function mean(nums) {
    console.log("mean function working 1")
    let mean_value = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        mean_value = nums[i] + mean_value
    }
    mean_value = (mean_value) / (nums.length);
    console.log(mean_value)
    return mean_value
}

function median(nums) {
    let num_length = nums.length;
    let median_value = 0;
    let median_value2 = 0;
    if (nums.length % 2 == 0) {
        num_index = num_length / 2
        median_value = Number.parseInt(nums[num_index - 1])
        median_value2 = Number.parseInt(nums[num_index])
        median_value = (median_value + median_value2) / 2
    } else {
        num_length = (num_length - 1) / 2
        median_value = Number.parseInt(nums[num_length])
    }
    console.log(num_length + "num_length")
    console.log(median_value.constructor + "")
    console.log(median_value2.constructor)
    return median_value;
}

function mode(nums) {
    //built-in method reduce takes an array and creates key: value pair to turn into an object. The reduce part stops at 
    // return nums.reduce(function (acc, value) {
    // acc[value] = (acc[value] || 0) + 1;
    // return acc;
    // }, {});
    let max = 0;
    let maxKey = "";
    let mode_value = nums.reduce(function (acc, value) {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});

    //The below for...let-In loop iterating through an object. Here is the description of the steps below:
    // Line A, for each iteration of...Let Mode (this is a created variable immeiately in the loop) of each Key:Value Pair in the object-variable (created above) be sent through the following code
    // Line B, Take mode (each iteration of Key:Value Pair) and if the object's "mode_value", key's, value (this is becuase the "[]" were used to signify the value of hte key:value pair), if this value is greater then the current "max" value, then replace "max" value and then go on to the next line. If not, iterate to the next key:value pair in the object.
    // Line C, make max be equal to the current Object's ("mode_value"), key's(mode), value([mode])
    // Line D, make "maxKey" equal the object's("mode_value"), key(mode)





    //line A-    For, Let-in Loop (Loop to iterate through an Object) 
    for (let mode in mode_value) {
        //line B
        if (mode_value[mode] > max) {
            //line C
            max = mode_value[mode];
            //line D
            maxKey = mode;
        }
    }//End Loop
    return maxKey;
}

module.exports = {
    convertStringToIntegers,
    mean,
    median,
    mode,
    sortMedian
}