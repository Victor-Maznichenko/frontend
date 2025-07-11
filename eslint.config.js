import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';

/*
=====================================================================
TODO: Сделать свой конфиг eslint, залить как npm пакет
=====================================================================
*/

export default antfu(
   {
      react: true,
      formatters: {
         html: true,
         css: true,
      },
      typescript: true,
      stylistic: { semi: true, indent: 3 },
      isInEditor: false,
      lessOpinionated: true,
      ignores: ['next-env.d.ts'],
   },
   {
      plugins: {
         '@next/next': nextPlugin,
      },
      rules: {
         ...nextPlugin.configs.recommended.rules,
         ...nextPlugin.configs['core-web-vitals'].rules,
         'node/prefer-global/process': ['error', 'always'],
         'perfectionist/sort-imports': 0,
      },
   },
);
