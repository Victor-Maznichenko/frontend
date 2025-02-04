## Временные пометки
- Решил отказаться от effector, так как связка NextJS + swc + effector с моей текущей версией Next не совместима. Мне нужно подбирать ту, версию NextJS которая будет [совместима](https://effector.dev/en/api/effector/swc-plugin/#installation-versioning) с effector swc-plugin, к сожалению.

- Выбрал собственное решение на замыкании вместо staggerChildren для последовательной анимации, т.к. staggerChildren анимирует еще и родительский элемент, а мне это не нужно
