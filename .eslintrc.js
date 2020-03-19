module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'comma-dangle': ['error', 'never'],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-var': 'error',
        'no-array-constructor': 'warn',
        'no-unused-vars': process.env.NODE_ENV === 'production' ? 'off' : 'error',
        'space-before-function-paren': ['error', 'always'],
        // "no-unused-vars": "off",
        'no-new-object': 'warn',
        'object-shorthand': 'warn', // 要求对象字面量简写语法
        quotes: ['error', 'single', { avoidEscape: true }],
        'template-curly-spacing': ['warn', 'never'],
        'prefer-rest-params': 'warn', // 建议使用剩余参数代替 arguments
        'prefer-spread': 'warn', // 建议使用扩展语法而非 .apply()
        'prefer-arrow-callback': 'error',
        'no-dupe-class-members': 'error', // 不允许类成员中有重复的名称
        'no-duplicate-imports': ['error', { includeExports: true }], // 禁止重复导入
        'prefer-const': ['warn', {
            destructuring: 'all',
            ignoreReadBeforeAssign: true
        }]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
