// https://www.youtube.com/watch?v=D7y_hoT_YZI
var reverseList = function (head) {
    let prev = null;
    let current = head;
    let next;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head = prev;
    return head;
};
