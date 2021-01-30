# Answer for Part 1

1. print the value of i, which is the same as price.length. Because "var" has no block scope, i is visible after the for loop

2. print the calculated discountedPrice of the last element i prices. Because "var" has no block scope, discountedPrice is visible after the for loop

3. print the calculated finalPrice of the last element in prices. finalPrice is a function level varibale when decarle with var in this case, so it's accessable when line 13 is executated

4. [50,100,150] Use the first iteration as example, when i=0, we calculate the discountedPrice as 100\*0.5 based on the given input. Then calculate finalPrice as round(50\*100)/100, which is 50. Then 50 is pushed to discounted, which is the return value. Similar to the calculation in the first iteration, after all iteration, eventually, the return value will be [50,100,150]

5. There is an error. i is a block-local variable specific to the for block. Therefore when run line 11 here, it will gives an error that i is not defined.

6. There is an error. discountedPrice is a block-local variable specific to the for block. Therefore when run line 12 here, it will gives an error that discountedPrice is not defined.

7. print the calculated finalPrice of the last element in prices. finalPrice is a function level varibale when decale with let in this case, so it's accessable when line 13 is executated

8. [50,100,150] Use the first iteration as example, when i=0, we decarle a new variable, discountedPrice, as 100\*0.5 based on the given input. Then calculate finalPrice as round(50\*100)/100, which is 50. Then 50 is pushed to discounted, which is the return value. Similar to the calculation in the first iteration, after all iteration, eventually, the return value will be [50,100,150]

9. There is an error. i is a block-local variable specific to the for block. Therefore when run line 11 here, it will gives an error that i is not defined.

10. There is an error. discountedPrice is a block-local variable specific to the for block. Therefore when run line 12 here, it will gives an error that discountedPrice is not defined.

11. finalPrice is declared with const, which means its value cannot be changed. So it will give an error in line 7 where a new value is assigned to finalPrice. If we fix this error by remove line 7, then this line will print 0. If we fix the error by change finalPrice from const to let, then this line will print the calculated finalPrince of the last element in prices.

12. If we fix the error in Question 11 by remove line 7, then it will return [0,0,0]. Because in this case, finalPrice will always be 0. The for loops iterate 3 times, so 0 is pushed 3 times.  If we fix the error by change finalPrice from const to let, then it will return [50,100,150]. In this case, finalPrice will be updated correctly, so the function will give the correct answer.

13. A. student.name  
    B. student["Grad Year"]  
    C. student.greeting()  
    D. student['Favorite Teacher'].name  
    E. student.courseLoad[0]

14. A. 32 Because 2 is convert to a string value  
    B. 1 When doing subtructiom, '3' is converted to a number value  
    C. 3 null is converted to number value, which is 0  
    D. 3null null is converted to a string value and appended to '3'  
    E. 4 true is converted to number value, which is 1  
    F. 0 Both false and null are converted to number value. false is 0 and null is 0  
    G. 3undefined undefined is converted to a string value and appended to "3"  
    H. NaN undefined is converted to number value, which is NaN  

15. A. true '2' is converted to number 2  
    B. false This is a comparison between two strings. Since "2">"1", this experession returns false  
    C. true '2' is converted to number 2  
    D. false because 2 and '2' have different types  
    E. false true is converted to number as 1  
    D. true Boolean(2) after the convertion is true  

16. === checks the equality without type conversion while == converts values to numbers

17. It will print *How are you*  Becasue the first condition 2==true, true is convert to number 1, so this condition false. The second condition 2 convert to boolean is true, so line 4 is executated.

18. [6,8,10]  Use the first iteration as example. when i=0, newArr pushes the return value of doSomething(array[0],function(x){return x\*2}).  Step into function doSomething, it returns the return value of function(num+2), which is (num+2)\*2. In this iteration, that is (1+2)\*2 = 6. doSomething returns 6. Then, 6 is pushed into newArr. Other iteration is similar to this one. Eventually, the result will be [6,8,10]

19. 1  4  3  2
