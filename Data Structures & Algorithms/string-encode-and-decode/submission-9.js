class Solution {
    encode(strs) {
        let result = ""
        for(let i = 0; i < strs.length; i++) {
            result += strs[i].length + "#" + strs[i]
        }
        return result
    }

    decode(str) {
        let decoded = []
        let i = 0

        while(i < str.length) {
            let j = i
            // find the # to get the length
            while(str[j] !== "#") {
                j++
            }
            // extract the length number
            let len = parseInt(str.slice(i, j))
            // extract the string using the length
            let s = str.slice(j + 1, j + 1 + len)
            decoded.push(s)
            // move pointer to next encoded string
            i = j + 1 + len
        }

        return decoded
    }
}