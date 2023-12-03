// User defined class node
class Node {
    // constructor
    constructor(element)
    {
        this.val = element;
        this.next = null
    }
}
var mergeTwoLists = function(list1, list2) {

    let head1 = list1; head2 = list2;
    let head3 = null;
    let track = null;
  

    while(head1  && head2) {
     let newNode = null;
        if(head1.val <   head2.val ) {
             newNode = new Node(head1.val);
             head1 = head1.next;
        } else {
           newNode = new Node(head2.val);
             head2 = head2.next;
        }
            if(!head3) {
                head3 = newNode;
                track = head3;
            } else {
              track.next =  newNode; 
              track = track.next;
            }

        
    } 
    while(head1) {
         let newNode =new Node(head1.val)
          head1 = head1.next;
        if(!head3) {
                head3 = newNode;
                track = head3;
            } else {
              track.next =  newNode; 
              track = track.next;
            }
    }
        while(head2) {
         let newNode = new  Node(head2.val)
          head2 = head2.next;
        if(!head3) {
                head3 = newNode;
                track = head3;
            } else {
              track.next =  newNode; 
              track = track.next;
            }
    }
// User defined class node

      
 return head3;

    
};


class Nodee {
    // constructor
    constructor(element)
    {
        this.val = element;
        this.next = null
    }
}
let list1 = new Nodee(1);
list1.next = new Nodee(2)
list1.next.next = new Nodee(4)

let list2 = new Nodee(1);
list2.next = new Nodee(3)
list2.next.next = new Nodee(4)

let track = mergeTwoLists(list1, list2);

console.log(track)