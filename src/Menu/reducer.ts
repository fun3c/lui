
export  const findRoot = (
          node: any,
          parents: any[],
          flag?: boolean | undefined,
        ) => {
          const parent = node.parent;
          if (parent) {
            if (flag) parent.active = true;
            findRoot(parent, parents);
            parents.push(parent);
          }
          return parents[0];
        };

export const resetActive = (data: any[]) => {
    return data.map((item: { active: boolean; children: any; }) => {
        item.active = false;
        if (item.children) {
            resetActive(item.children);
        }
        return item;
    });
}

export const mixin = (arr: never[], node: { children: any; opened: boolean; active: boolean; }, datasource: any, mode: string) => {
    let newData = [...datasource];
    if (node.children) {
        node.opened = !node.opened;
    } else {
        newData = resetActive(datasource);
        node.active = true;
        const nodeParent = findRoot(node, arr, true);
        if (nodeParent) {
            if (mode === 'horizontal') nodeParent.opened = false;
            newData[nodeParent.index] = nodeParent;
        }
    }
    return newData;
}
