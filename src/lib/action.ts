export function tableAction(node: any, { data, columns }: any) {
  let table = new Tabulator(node, {
    data,
    columns,
    layout: "fitColumns",
    pagination: "local",
    paginationSize: 7,
  });
  return {
    update: ({ data }) => {
      table.replaceData(data);
    },
    // destroy: () => alert('bye bye table :\'(')
  };
}
