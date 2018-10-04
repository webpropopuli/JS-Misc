function processData(input) {

    function IsPalindrome(str)  {
        // waaaaayyyy too slow was-> return (str === str.split("").reverse().join(""))

        for(let l=0, r = str.length-1; str[l] === str[r]; l++, r--) {
            if( l >= r)
                return true
        }

        return false
    }  // end of fn()

    const inputLen = input.length

    //Get Decreasing sized chunks until we find a pal
    for(let size = inputLen; size>0; --size) {

        for(let beg = 0, end = size; end<=inputLen; beg++, end++)
            {
            if (IsPalindrome(input.substring(beg, end )) ) {
                console.log(input.substring(beg, end ))
                return;
            }
        }
    }
} 

//$$$$$$$$$$$$$$$$$$$$$
const str = "hackerxrekcahba"
console.time("sml")
processData(str)
console.timeEnd("sml")

const str2 = "Givenastringfindtring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpaltring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestptring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThtring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThtring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelotring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpaltring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindtring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindtring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindromicsubstring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindromicsubstritring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindromicsubstringofthethegiveninputhackerrekcahbahhishackerrngofthethegiveninputhackerrekcahbahhishackerrtringofthethegiveninputhackerrekcahbahhishackerrromicsubstringofthethegiveninputhackerrekcahbahhishackerrromicsubstringofthethegiveninputhackerrekcahbahhishackerrindromicsubstringofthethegiveninputhackerrekcahbahhishackerrngestpalindromicsubstringofthethegiveninputhackerrekcahbahhishackerrelongestpalindromicsubstringofthethegiveninputhackerrekcahbahhishackerrelongestpalindromicsubstringofthethegiveninputhackerrekcahbahhishackerralindromicsubstringofthethegiveninputhackerrekcahbahhishackerrindromicsubstringofthethegiveninputhackerrekcahbahhishackerritslargestpalindromicsubzzzhackerxrekcahzzzbastring.InputFormatAstringConstraintsAllthecharactersarelowercaseEnglishlettersOutputFormatPrintthelargestpossiblesubstringofSampleInputhackerrekcahbaSampleOutputhackerrekcahExplanationThelongestpalindromicsubstringofthethegiveninputhackerrekcahbahhishackerrekcah."
console.time("big")
processData(str2)
console.timeEnd("big")