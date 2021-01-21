// Singly Linked List

// Ordered, contains head, tail and length
// Linked List consist of nodes and each node has a value and pointer to another node or null (null is the end)
// No index, like a train car or a skyscraper without elevator have to use stairs beacuse they are connected
// keep track of head and tail and length
// random acces is not allowed
// insertion and deletion are faster 

// Main reason to use list is if you are going to insert or delete and dont need index


class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }

}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current
    }

    shift(){
        if(!this.head) return undefinded;
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead
    }

    unshift(val){
        let newHead = new Node(val)
        if(!this.head){
            this.head = newHead
            this.tail = newHead
        }else{
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0
        let current = this.head;
        while(counter != index){
            current = current.next
            counter++
        }
        return current
    }

    set(index, val){
        let foundNode = this.get(index)

        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false
    }

    insert(index, val){ 
        if(index < 0 || index > this.length) return false;
        if(index ===this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let before = this.get(index-1)
        let newNode = new Node(val)
        let temp = prev.next
        newNode.next = temp
        before.next = newNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        let previousNode = get(index -1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null;
        let next;

        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this;


    }

    traverse(){
        let current = this.head;
        
        while(current){
            current = current.next 
        }
    }
}
// push psuedocode accept a value and create a node using the value passed to the function 
// if there is no head property on the list set the head adn tail to be the newly created node
// otherwise set the next property on the tail to be the new node and set the tail property on the list 
// to be newly created node

// Pop psuedocode
// no nodes in the list return undefined loop through entire list until you reach tail 
// set the next to last item to be null set tail to be the second to last item to be tail

let first = new Node('Hi')
first.next = new Node('there')
first.next.next = new Node('Hi')

