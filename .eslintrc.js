module.exports = {   
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
          jsx: true // Allows for the parsing of JSX
        }
      },
      settings: {
        react: {
          version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
      },    
    plugins: [     '@typescript-eslint'   ],   
    extends:  [     
        'eslint:recommended',     
        'plugin:@typescript-eslint/eslint-recommended',     
        'plugin:@typescript-eslint/recommended',     
        'prettier/@typescript-eslint',     
        'plugin:prettier/recommended',
        'plugin:react/recommended'   
    ],
}