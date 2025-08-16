export function knightMoves (start, finish) {
    let q = [[start]];
    let visited = [start];
    let result = knightMovesFunc(q, visited, finish)
    return result;
};

export function buildEveryMove (position) {
    const results = [];
    if (position[0]+1 <= 7 && position[1]+2 <= 7) {
        results.push([position[0]+1, position[1]+2])
    };
    if (position[0]+2 <= 7 && position[1]+1 <= 7) {
        results.push([position[0]+2, position[1]+1])
    };
    if (position[0]+1 <= 7 && position[1]-2 >= 0) {
        results.push([position[0]+1, position[1]-2])
    };
    if (position[0]+2 <= 7 && position[1]-1 >= 0) {
        results.push([position[0]+2, position[1]-1])
    };
    if (position[0]-1 >= 0 && position[1]-2 >= 0) {
        results.push([position[0]-1, position[1]-2])
    };
    if (position[0]-2 >= 0 && position[1]-1 >= 0) {
        results.push([position[0]-2, position[1]-1])
    };
    if (position[0]-1 >= 0 && position[1]+2 <= 7) {
        results.push([position[0]-1, position[1]+2])
    };
    if (position[0]-2 >= 0 && position[1]+1 <= 7) {
        results.push([position[0]-2, position[1]+1])
    };
    return results;
}

function knightMovesFunc (q, visited, finish) {
    // base condition but I think it's useless

    if (!q.length) return 'prout';

    const newQ = [];
    for (let path of q) {

        const pathLastPos = path.length - 1;
        // Checking if we have the finish position in the path (real base condition?)
        if (path[pathLastPos][0] == finish[0] && path[pathLastPos][1] == finish[1]) {
            return path;
        };

        // Build the next queue without visited positions
        const moves = buildEveryMove(path[pathLastPos]);

        for (let move of moves) {
            // Checking if it has already been visited
            const wasVisited = visited.some((el)=>{
                return el[0] === move[0] && el[1] === move[1];
            });
            
            if (!wasVisited) {
                // Copy and add the next move
                const pathCopy = path.slice();
                pathCopy.push(move);

                // Add to the next queue the new completed path
                newQ.push(pathCopy);
                visited.push(move);
            };
        };
    };
    // If no path arrives to the finish position, start again with the next level of queue
    return knightMovesFunc(newQ, visited, finish);
}