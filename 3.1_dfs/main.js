
const root = {
  value: "1",
  children: [
    {
      value: "1.2",
      children: [
        {
          value: "1.2.1",
          children: [],
        },
        {
          value: "1.2.2",
          children: [],
        },
      ],
    },
    {
      value: "2",
      children: [
        {
          value: "2.2",
          children: [],
        },
      ],
    },
    {
      value: "3",
      children: [],
    },
  ],
};

const dfs = (newRoot) => {
  console.log(newRoot.value);
  if (newRoot.children.length) {
    newRoot.children.forEach((item, i) => {
      dfs(newRoot.children[i]);
    });
  };
};

dfs(root);
