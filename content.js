import {camelCase} from 'lodash-es';

const message = "Welcome to this info site.";
const messageIdCode = camelCase(message);

export const mainContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Info Site</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 0 1rem;
            background-color: #333;
            color: #ccc;
        }

        h1 {
            color: rgb(209, 168, 85);
        }
    </style>
</head>
<body>
  <h1>Info Site</h1>
  <p>${message}</p>
  <p>idCode: ${messageIdCode}</p>
</body>
</html>
`;
