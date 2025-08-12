export function knightMoves (start, finish) {

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