//this function flatten the tree so that each node is shown as an element in an array
export const flattenTree = arr =>
arr.reduce(function(prev, item) {
  prev.push(item);
  return prev.concat(
    Array.isArray(item.items) ? flattenTree(item.items) : []
  );
}, []);

//this function adds path to each node
export function assembleTree(nodes, parent, depth) {
  if(!depth) depth = 0
  nodes.forEach(n => {
    let path = parent?parent+'/'+n.name:'/'+n.name
    n.path = path
    if (n.items && n.items instanceof Array) {
      assembleTree(n.items, path, depth)
    }
  })
  if (depth === 0) {
    return nodes
  }
  depth++
}