import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/react-intro/",
  integrations: [
    starlight({
      favicon: "/favicon.ico",
      title: "React Intro",
      editLink: {
        baseUrl:
          "https://github.com/codante-io/guias/edit/main/apps/react-intro/",
      },
      social: {
        github: "https://github.com/icaroharry",
        linkedin: "https://www.linkedin.com/in/ícaro/",
        email: "mailto:contato@codante.io",
      },
      customCss: ["./src/tailwind.css"],
      sidebar: [
        {
          label: "Intro ao Workshop",
          autogenerate: {
            directory: "00-intro",
          },
        },
        {
          label: "Introdução ao React",
          autogenerate: {
            directory: "01-intro-react",
          },
        },
        {
          label: "Por trás dos panos",
          autogenerate: {
            directory: "02-por-tras-dos-panos",
          },
        },
        {
          label: "Configurando um app React",
          autogenerate: {
            directory: "03-configurando-um-app-react",
          },
        },
        {
          label: "Componentes no React",
          autogenerate: {
            directory: "04-componentes-no-react",
          },
        },
        {
          label: "Aprendendo JSX",
          autogenerate: {
            directory: "05-aprendendo-jsx",
          },
        },
        {
          label: "Implementando os componentes",
          autogenerate: {
            directory: "06-implementando-os-componentes",
          },
        },
        {
          label: "Aprofundando no React",
          autogenerate: {
            directory: "07-aprofundando-no-react",
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
