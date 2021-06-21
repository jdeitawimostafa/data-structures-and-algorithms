# Merge-sort : 

**Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.**

**While comparing two sublists for merging, the first element of both lists is taken into consideration. While sorting in ascending order, the element that is of a lesser value becomes a new element of the sorted list. This procedure is repeated until both the smaller sublists are empty and the new combined sublist comprises all the elements of both the sublists.**

## Tracing : 

* Sample Array : [8,4,23,42,16,15] 

pass 1 :

divide the array in the middle to get two arrays . 

[8,4,23]
[42,16,15]

pass 2 : 

continue dividing the arrays until we get every element in a separate array . 

[8]
[4,23]

pass 3 : 

continue dividing the arrays until we get every element in a separate array . 

[42]
[16,15]

pass 4 : 

continue dividing the arrays until we get every element in a separate array . 

[8]
[4]
[23]

pass 5 : 

continue dividing the arrays until we get every element in a separate array . 

[42]
[16]
[15]

pass 6 : 

after we got every element in a separate array , we invoked another function to start sorting , to get the final result . 

[4,8,15,16,23,42]


### Thanks for reading :)) . 
