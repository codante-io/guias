---
title: Quero Seletores PUROs!
---


<!-- TODO: exemplo: <RadioGroup.Label class="[&>*:first-child]:bg-gray-700"></RadioGroup.Label> -->

A classe "[&>*:first-child]:bg-red-500" no TailwindCSS usa a sintaxe de arbitrariedade ([]) para aplicar estilos com seletores CSS personalizados. Vamos quebrá-la em partes:

 • & → Refere-se ao elemento pai onde a classe está aplicada.
 • >* → Seleciona todos os filhos diretos do elemento pai.
 • :first-child → Filtra apenas o primeiro filho.
 • bg-red-500 → Aplica fundo vermelho.
