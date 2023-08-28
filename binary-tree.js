/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let visit = this.root ? [this.root] : [];
    let minimumDepth = this.root ? 1 : 0;
    while (visit.length) {
      let current = visit.pop();
      if (current.left) visit.push(current.left);
      else {
        minimumDepth++;
        break;
      }
      if (current.right) visit.push(current.right);
      else {
        minimumDepth++;
        break;
      }
    }
    return minimumDepth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    let visit = this.root ? [this.root] : [];
    let maxDepthR = 0;
    let maxDepthL = 0;
    while (visit.length) {
      let current = visit.pop();
      if (current.left) visit.push(current.left);
      else {
        maxDepthL++;
      }
      if (current.right) visit.push(current.right);
      else {
        maxDepthR++;
      }
    }
    const max = maxDepthL > maxDepthR ? maxDepthL : maxDepthR;
    return max;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let visit = this.root ? [this.root] : [];
    let maxSumNode = 0;
    while (visit.length) {
      let current = visit.pop();
      if (current.left) visit.push(current.left);
      if (current.right) visit.push(current.right);
      maxSumNode = current.val + maxSumNode;
    }
    return maxSumNode;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let visit = this.root ? [this.root] : [];
    let nextLargerNodeVal = null;
    while (visit.length) {
      let current = visit.pop();
      if (current.left) visit.push(current.left);
      if (current.right) visit.push(current.right);
      if (current.val > lowerBound) {
        if (!nextLargerNodeVal ||  (nextLargerNodeVal && current.val > lowerBound && current.val<nextLargerNodeVal))
        nextLargerNodeVal = current.val;
      }
    }
    return nextLargerNodeVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

let smallTree;
let largeTree;
let emptyTree;

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);
// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

console.log(smallTree.minDepth());
console.log(largeTree.minDepth());
console.log(emptyTree.minDepth());

console.log(smallTree.maxDepth());
console.log(largeTree.maxDepth());
console.log(emptyTree.maxDepth());

console.log(smallTree.maxSum());
console.log(largeTree.maxSum());
console.log(emptyTree.maxSum());

console.log(largeTree.nextLarger(1));
console.log(largeTree.nextLarger(2));
console.log(largeTree.nextLarger(3));
console.log(largeTree.nextLarger(4));
console.log(largeTree.nextLarger(5));
console.log(largeTree.nextLarger(6));

module.exports = { BinaryTree, BinaryTreeNode };
