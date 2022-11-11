# Code Challenge 33

## Feature Tasks

Write a function that `LEFT JOINs` two hashmaps into a single data structure.

- Write a function called left join

- Arguments: two hash maps

  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Challenge

check right Map to see if it contains the same key in let Map and combine value of right with left.

## Approach & Efficiency

Used and array to store key and values of leftMap and checked with has() in rightMap

## Solution

![whiteboard](../Images/cc33.png)
