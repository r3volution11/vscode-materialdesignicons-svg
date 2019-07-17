const util = require('@mdi/util');

const fileName = "./snippets/snippets.json";
const version = util.getVersion();
const meta = util.getMeta(true); // withPaths

const body = meta.map(icon => 
  `"mdi-${icon.name}" : {
    "body": "<svg viewBox=\\"0 0 24 24\\" width=\\"24\\" height=\\"24\\"><path d=\\"${icon.path}\\" /></svg>",
    "description": "mdi-${icon.name}",
    "prefix": "svg-mdi-${icon.name}"
  },
  `).join('');

const template = 
  `{
    ${body}
  }
  `;

util.write(fileName, template);

console.log(`\u2714 Build ${version}`);