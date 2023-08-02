# LabMedical Software para gestão de inventário médico.

> O LabMedical tem como objetivo principal facilitar o processo de atendimento aos pacientes e gerenciamento de informações do hospital. Utilizando o software é possível armazenar com facilidade os pacientes, também armazena os dados das consultas e exames ligados aos pacientes no processo de atendimento. 


## Tecnologias utilizadas

O projeto foi criado utilizando Typescript, React, Styled Components, json-server em conjunto com outras dependencias que são elas: React-router-dom, react-hook-form, react-icons, react-loading, react-toastify e usando o vite dependencia-dev para criação do projeto.

| Tecnologias   | Documentação       |
| :---------- | :--------- |
| [![Typescript](https://i.imgur.com/g1qdEPR.png)](https://www.typescriptlang.org/docs/) | https://www.typescriptlang.org/docs/ | 
| [![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png)](https://react.dev/learn) | https://react.dev/learn |
| [![StyledComponents](https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png)](https://styled-components.com/) | https://styled-components.com/docs |


| Dependencias   | Documentação    |   
| :---------- | :--------- |
| [![react-router-dom](https://i.imgur.com/7fCEUii.png)](https://reactrouter.com/en/main) | https://reactrouter.com/en/main |
|[<img src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.png" style="width:100px"  /> <h1>React hook form</h1>](https://react-hook-form.com/) | https://react-hook-form.com/ |
| [![react-icons](https://static.javatpoint.com/tutorial/reactjs/images/react-icons.png)](https://react-icons.github.io/react-icons/) | https://react-icons.github.io/react-icons/ |
|[<h1>React loading</h1>](https://github.com/fakiolinho/react-loading) | https://github.com/fakiolinho/react-loading |
| [<h1>React Toastfy</h1>](https://fkhadra.github.io/react-toastify/introduction) | https://fkhadra.github.io/react-toastify/introduction |
|[<h1><img src="https://vitejs.dev/logo-with-shadow.png" style="width:100px"  />Vite</h1>](https://vitejs.dev/) | https://vitejs.dev/guide/ |

## Técnicas utilizadas

Criei um trello para organização de tarefas de desenvolvimento do projeto, no projeto criei as pastas seguindo as boas praticas ensinadas em sala de aula para uma melhor visualização/organização dos arquivos tornando assim de facil acesso em caso de correções, foi utilizado também a criação de branchs develop e uma de features para as tarefa.
![Trello](https://i.imgur.com/5gq4TW7.png)
![Tecnicas utilizadas](https://i.imgur.com/GIcImFt.png)

## Requitos

Ter o node.js na versão 16+ \
Ter o json-server instalado  


## Como executar

Clone o projeto

```bash
  git clone https://github.com/andreluizamorimdev/LabMedical_Projeto.git
```

Entre no diretório do projeto

```bash
  cd LabMedical_Projeto
```

Instale as dependências

```bash
  npm install
```

Instale o json-server caso não tenha

```bash
  npm install -g json-server
```

Abra o projeto no vs-code
```bash
  code .
```

Abra dois terminais dentro do vs-code, um para frontend e um para backend

No de Frontend execute o comando para iniciar a visualização do projeto
```bash
  npm run dev
```

No de Backend entre na pasta src/server
```bash
  cd /src/server
```
E execute o comando do json-server para rodar    
```bash
  json-server --watch db.json
```
## 

## Melhorias que podem ser aplicadas

> Como melhoria eu proponho que a utilização do backend feito no projeto do modulo 1, seria interessante também a utilização e criação de componentes mais reativos como por exemplo um componente de form generico que possa ser utilizado em todo o sistema quando necessário um formulario, outra melhoria interessante seria implementar uma pagina de perfil perfil para quem esta logado onde poderia-se editar e ver as informações do perfil.

## Imagem da pagina inicial do sistema

![PrintHomePage](https://i.imgur.com/eeLlRFi.png)