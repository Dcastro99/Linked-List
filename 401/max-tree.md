> # Code Challenge 16

## Binary Tree and BST Implementation

### Feature Task

Write the following method for the Binary Tree class

- find maximum value
  - Arguments: none
  - Returns: number

Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

# Challenge Summary

## Whiteboard Process

![Whiteboard](/lab16-whiteboard.png)

## Approach & Efficiency

Used built in methods from binary tree and returned Math.max() to grab max value.

## Solution

```javascript
 max() {
    let traversal = [];
    traversal.push(this.value); // Root

    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }

    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return Math.max(...traversal);
  }
```

> collaborators

- Jim Doyle
