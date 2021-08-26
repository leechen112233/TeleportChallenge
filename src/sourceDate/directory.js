import { flattenTree,assembleTree } from "../utils/index";

//raw data
const directory = {
  name: "teleport",
  sizeKb: 0,
  type: "dir",
  items: [
    {
      name: "lib",
      sizeKb: 0,
      type: "dir",
      items: [
        {
          name: "teleport.go",
          sizeKb: 320,
          type: "file",
        },
        {
          name: "test.go",
          sizeKb: 3320,
          type: "file",
        },
        {
          name: "lib",
          sizeKb: 0,
          type: "dir",
          items:[
            {
              name:"challenge",
              sizeKb:500,
            },
            {
              name:"challenge2",
              sizeKb:600,
            }
          ]
        }
      ],
    },
    {
      name: "README.md",
      sizeKb: 4340,
      type: "file",
    },
  ],
}



export const flattenDirectory = flattenTree(assembleTree([directory]))