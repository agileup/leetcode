// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
//
// 	push(x) -- Push element x onto stack.
// 	pop() -- Removes the element on top of the stack.
// 	top() -- Get the top element.
// 	getMin() -- Retrieve the minimum element in the stack.
//
//
//  
//
// Example:
//
//
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.
//
//
//  
//


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // this.arr.push(x);
    let curr = this.getMin();
    if (curr == null || x < curr) {
        curr = x;
    }
    this.arr.push([x, curr]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // return this.arr[this.arr.length-1];
    return this.arr[this.arr.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (!this.arr.length) {
        return null;
    }
    // let min = Number.MAX_VALUE;
    // for (i in this.arr) {
    //     if (this.arr[i] < min) min = this.arr[i];
    // }
    // return min;
    return this.arr[this.arr.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
