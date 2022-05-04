function solution(operations) {
    const maxH = new Heap(), minH = new Heap();
    const deletedMin = [], deletedMax = [];
    
    const isEmpty = (type) => {
        if (type === 'MAX') {
            return maxH.size() - deletedMin.length === 0
        } else {
            return minH.size() - deletedMax.length === 0;
        }
    }
    
    operations.forEach((operation) => {
        const [op, operand] = operation.split(' ');
        switch (op) {
            case 'I':
                maxH.insert(+operand);
                minH.insert(-1 * +operand);
                break;
            case 'D':
                if (operand > 0 && !isEmpty('MAX')) {
                    deletedMax.push(maxH.pop());
                } else if (operand < 0 && !isEmpty('MIN')){
                    deletedMin.push(minH.pop() * -1);
                }
                break;
        }
        
        while(true) {
            const isMinTopDeleted = 
                  deletedMax.findIndex((_) => _ === minH.peek() * - 1);
            const isMaxTopDeleted = 
                  deletedMin.findIndex((_) => _ * - 1 === maxH.peek());
            
            if (isMinTopDeleted < 0 && isMaxTopDeleted < 0) break;
            
            if (isMinTopDeleted >= 0) {
                minH.pop();
                deletedMax.splice(isMinTopDeleted, 1);
            }
            if (isMaxTopDeleted >= 0) {
                maxH.pop();
                deletedMin.splice(isMaxTopDeleted, 1);
            }
        }
        
    });
    
    return [isEmpty('MAX') ? 0 : maxH.peek(), isEmpty('MIN') ? 0 : minH.peek() * - 1];
}