var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low=1;
        var high= n;
        while (low <= high) {
        var middle = Math.floor((low+high)/2);
            if (isBadVersion(middle)) {
                high = middle -1;
            } else {
                low = middle + 1;
            }
        }
        return low;
        
    };
};