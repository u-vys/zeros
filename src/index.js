module.exports = function getZerosCount(number) {
    var i, count = 0, copy;
    for (i = 5; i <= number; i = i + 5) {
        copy = i;
        while (copy % 5 === 0) {
            count++;
            copy = copy / 5;
        }
    }
    return count;
}



