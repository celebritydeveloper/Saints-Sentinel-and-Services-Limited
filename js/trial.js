function createQueue() {
    const queue = [];
    return {
        enqueue(item){
            queue.push(item);
        },

        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue;

console.log(q.isEmphg 