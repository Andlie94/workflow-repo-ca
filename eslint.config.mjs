import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { 
      globals: {
        ...globals.browser,  
        describe: true,   
        test: true,       
        it: true,        
        expect: true, 
        module: true,        
        require: true,        
        process: true        
      }
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
];