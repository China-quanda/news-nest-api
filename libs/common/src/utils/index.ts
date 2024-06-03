// reduce 是将树结构数据转化为扁平化数据的另一种常见方法。reduce 方法在遍历整个树结构时，将每个节点的值和它的父节点的值（如果有的话）存储在一个对象中，然后将这个对象添加到结果数组中。
export function flattenTree(tree) {
  return tree.reduce((result, node) => {
    const { id, name, children } = node;
    const nodeWithParent = { id, name, parentId: 0 };
    result.push(nodeWithParent);
    if (children) {
      const childNodes = flattenTree(children);
      childNodes.forEach((childNode) => {
        childNode.parentId = id;
        result.push(childNode);
      });
    }
    return result;
  }, []);
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree<T>(
  data: T[],
  id: string,
  parentId: string,
  children?: string,
) {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children',
  };

  const childrenListMap = {};
  const nodeIds = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tree: any = [];

  for (const d of data) {
    const parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (const d of data) {
    const parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}
