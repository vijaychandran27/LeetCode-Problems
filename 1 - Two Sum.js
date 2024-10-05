// ------------------------- Java Script -----------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let breakFlag = false;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                result[0] = i;
                result[1] = j;
                breakFlag = true;
                break;
            }

        }
        if (breakFlag) {
            break;
        }
    }
    return result;
};
//-------------------------------------------

//----------------------- C# ------------------

// public class Solution {
//     public int[] TwoSum(int[] nums, int target) {
//         List<int> result = new List<int>();
//         bool breakFlag = false;

//         for (int i = 0; i < nums.Length - 1; i++)
//         {
//             for (int j = i + 1; j < nums.Length; j++)
//             {
//                 if ((nums[i] + nums[j]) == target)
//                 {
//                     result.Add(i);
//                     result.Add(j);
//                     breakFlag = true;
//                     break;
//                 }
//             }
//             if (breakFlag)
//             {
//                 break;
//             }
//         }
        
//         return result.ToArray();
//     }
// }

//--------------------------------------

//--------------------------------Java--------------
// class Solution {
//     public int[] twoSum(int[] nums, int target) {
//        int[] result = new int[2];

//         for (int i = 0; i < nums.length - 1; i++) {
//             for (int j = i + 1; j < nums.length; j++) {
//                 if ((nums[i] + nums[j]) == target) {
//                     result[0] = i; 
//                     result[1] = j; 
//                     return result; 
//                 }
//             }
//         }
        
//         return result; 
     
//     }
// }

//-----------------------------------------------------