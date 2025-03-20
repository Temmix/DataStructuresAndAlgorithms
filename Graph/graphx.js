//          A              
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

/** Mapping illustration
    { 
      A : [B,C],
      B : [A,D],
      C : [A,E],
      D : [B,E,F],
      E : [C,D,F],
      F : [D,E]
    }
**/

class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2 );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1 );
    }
    
    depthFirstSearch(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;
        
        (function dfs(vertex){
            if(!vertex) return null
            
            result.push(vertex)
            visited[vertex] = true
            adjacencyList[vertex].forEach(x => {
                if(!visited[x]){
                    dfs(x)
                }
            })
        })(start)
        
        return result
    }

    breadthFirstSearch(start) {
        const stack = [start]
        const result = [start]
        const visited = {}
        let currentVertex;
        
        visited[start] = true
        
        while(stack.length){
            currentVertex = stack.shift()
            this.adjacencyList[currentVertex].forEach(x => {
                if(!visited[x]){
                    visited[x] = true
                    result.push(x)
                    stack.push(x)
                }
            })
        }
        return result
    }
}

var graph = new Graph();
 
graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
 
graph.addEdge('S','P');
graph.addEdge('S','U');
 
graph.addEdge('P','X');
graph.addEdge('U','X');
 
graph.addEdge('P','Q');
graph.addEdge('U','V');
 
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
 
graph.addEdge('Q','R');
graph.addEdge('Y','R');
 
graph.addEdge('Y','W');
graph.addEdge('V','W');
 
graph.addEdge('R','T');
graph.addEdge('W','T');
 
graph.depthFirstSearch('S');
/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/

graph.breadthFirstSearch('S');
// ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
