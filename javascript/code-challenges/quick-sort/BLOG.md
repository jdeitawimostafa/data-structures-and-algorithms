# Quick Sort : 

**Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.** 


# Tracing : 


* Sample array : [5,3,7,6,2,9] 

pass 1 : 

select the pivot .

![image](./assets/pass1cc28.PNG)

pass 2 : 

determine the left and right pointers . 

![image](./assets/pass2cc28.PNG)

pass 3 : 

since 5<6 , shift left pointer .

![image](./assets/pass3cc28.PNG)


pass 4 : 

since 3<6 , shift left pointer and 7>6 , so stop .

![image](./assets/pass4cc28.PNG)

pass 5 : 

since 9<6,shift right pointer 

![image](./assets/pass5cc28.PNG)

pass 6 : 

since 2<6 ,stop and swap them both 2 and 7

![image](./assets/pass6cc28.PNG)

pass 7 : 

move pointers further . 

![image](./assets/pass7cc28.PNG)

pass 8 : 

since 6=6 , move pointers further and stop as left crosses right , and the array will sorted and looks like this . 

![image](./assets/pass8cc28.PNG)





