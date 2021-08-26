# Software Design Documentation

### Project Name: A file/folder viewer

##### Date: 2021/8/20

##### Written By: Chen Li

### Introduction

##### This project aims at building a web application that allows users to browse directory content from a remote server. I aim at level1-2 so there is little interaction between front-end and back-end and the directory content will be simulated by the following JSON data tree. This data will be changed into a more complex one for tests.

```javascript
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
      ],
    },
    {
      name: "README.md",
      sizeKb: 4340,
      type: "file",
    },
  ],
};
```

### Application Overview

##### This application will use the JSON data to mimic a real folder viewer with some functions like filtering and sorting.

###### Architecture

Mainly consists of two parts: the navigation bar and a table.

1. _Navigation Bar_
   - The navigation bar shows the absolute path of current position in the following hierarchical format. The user can click any level of the path to go to the level. For example, if the user click **_teleport_** folder, the interface to render the contents of the folder.
   - The navigation bar also includes a search area where the user can search the specific file under the current level. For example, if the user inputs a "tel" string when he is in the lib folder, the list will render the files whose name includes such a string.

![hierachical path](E:\找工作\interview\Teleport\chanllenge\images\navigation bar.png)

2.  Table

    - A table header displays **_name_**, **_size_**, and **_type_** attributes of all contents under the current level and the attributes can be clicked to sort the contents.
    - A table body shows all the contents of the current level according to the sorting function of the header.

### Development planning

###### Development tools

- HTML3
- CSS5
- JavaScript
- React.js
- Ant Design UI

###### Development libraries

- antd
- prop-types
- react-dom
- react-router-dom

###### Security precautions for React

- bind data inside of the component to prevent XSS attacks

- validate whether URL links are in my white list to prevent potential inject of dynamic scripts through javascript:protocols

- try not to visit actual DOMs directly

- using well-known or popular libraries to prevent possible vulnerabilities in dependencies

###### Development Milestones

- finish static webpage by 8/25

- add navigation function and filtering function by 8/29

- add sorting function by 8/31

- design tests data by 9/2

- finish testing and optimization by 9/5

###### Version control

- designDoc: only add a design documentation to the project
- v1: complete data process and the breadcrumb
- v2: complete data filtering function
