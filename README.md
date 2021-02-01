# js-practice
I'll be uploading codes here which I've learned.
1) Description about triplets-array-check.js:
assume arrays a and b are persons.
defined arrays are a = (a[0], a[1], a[2]), and b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then array a is awarded 1 point.
If a[i] < b[i], then array b is awarded 1 point.
If a[i] = b[i], then neither array receives a point.
Comparison points is the total points a person earned.

2) plusMinus.js
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
Note: I focused on precision problems.

Example:-   
arr = [1,1,0,-1,-1]
There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000  and 1/5 = 0.200000. Results are printed as:

0.400000
0.400000
0.200000
Function Description:- 

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

Output Format:-

Print the following 3 lines, each to 6 decimals:

1. proportion of positive values
2. proportion of negative values
3. proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output:-

0.500000
0.333333
0.166667
Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.
