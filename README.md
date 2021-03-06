
# Aprendiz para Todos

![Capturar](https://user-images.githubusercontent.com/59628906/107161507-df1c4d80-697b-11eb-9008-ec0c6a7c6df3.PNG)
  
Este projeto foi apresentado no Provi HackWoman e foi desenvolvido com o intuito de ajudar jovens de baixa renda a conseguir sua primeira oportunidade de trabalho.

## Motivação

Jovens de baixa renda não possuem acesso de qualidade a internet e possuem dificuldades na navegação de plataformas como o linkedin. A nossa plataforma contribui para conectar jovens excluídos digitalmente às empresas contratantes, com o diferencial de poder contar com pessoas que possam indicar aprendizes ao mercado de trabalho.

## Etapas do Projeto

### Brainstorming :brain:
Utilizamos a técnica de brainstorming através da ferramenta Miro para iniciar o projeto, todas as ideias sobre o nosso desafio foram explanadas para seguirmos com os próximos passos;
### Primeiras ideias :bulb:
Construir uma plataforma para que pessoas de nível Júnior possam acessar as vagas de maneira mais eficiente. As empresas contam com uma plataforma focada  apenas nas vagas de nível Júnior, tornando a relação candidato-recrutador mais eficiente;
### Mudança de estratégia :hammer:
O nicho de mercado para vagas júniors é muito extenso e com apenas três dias do Hackaton, o tempo para o desenvolvimento do projeto não era suficiente.
### Foco em um nicho de mercado :mag_right:
Decidimos então focar no nicho de Jovem Aprendiz, reduzindo o nosso escopo e priorizando pela finalização do Projeto no tempo hábil.

## Tecnologias 

### Front end
- React e Material-ui
### Back end
- Node.js, express, nodemon, bcrypt, jwt. (no futuro integrará com Mongo DB)
### UX/UI
- Figma e Miro
### Produto
- Miro e metodologias Kanbam, Canvas e matriz CSD.

## Layout da Plataforma

A Plataforma possui uma estrutura leve para funcionar em smartphones que não possuem tanta evolução, com o foco principalmente em jovens de baixa renda.
Além do cuidado da Plataforma não exigir demais do aparelho, utilizamos um layout clean e de fácil navegabilidade para atrair os jovens, indicadores e empresas.

### Tela inicial
![inicio1](https://user-images.githubusercontent.com/59628906/107164106-3e825980-698c-11eb-90ea-b494597d31d9.PNG)

### Perfil Aprendiz
![Cadastro2](https://user-images.githubusercontent.com/59628906/107164316-51495e00-698d-11eb-86d3-3dfc68ba5261.PNG)
![Cadastro3](https://user-images.githubusercontent.com/59628906/107164477-f2381900-698d-11eb-96c8-4ac329a620e5.PNG)
![cadastro44](https://user-images.githubusercontent.com/59628906/107164753-1e07ce80-698f-11eb-9447-867a3addde01.PNG)

### Perfil Indicador
![Indicador](https://user-images.githubusercontent.com/59628906/107165322-48f32200-6991-11eb-8fe0-74f0e34a324e.PNG)
![Ind_new](https://user-images.githubusercontent.com/59628906/107165623-41804880-6992-11eb-9a59-8392a778f8b6.PNG)

### Perfil Empresa
![emp](https://user-images.githubusercontent.com/59628906/107164954-ecdbce00-698f-11eb-948e-e66f057fc7e6.PNG)
![Empee](https://user-images.githubusercontent.com/59628906/107165730-991eb400-6992-11eb-9d81-fabc9b05ee8a.PNG)

### Tela de login (ficará acessível após o cadastro de cada perfil)
![Logg](https://user-images.githubusercontent.com/59628906/107166530-0a5f6680-6995-11eb-9cdc-0ff61180b3f0.PNG)

## Aprendizados com o Projeto

- Criar uma plataforma que atingisse nosso público alvo: Jovens aprendizes excluídos digitalmente em busca de sua primeira oportunidade de emprego;
- Realizar a gestão do tempo de forma assertiva diante de tantas tarefas para conclusão em apenas três dias;
- A utilização de ferramentas desconhecidas até o momento;
- Trabalho em equipe de forma remota;
- Refatorar o código em duas horas, mesmo que tenha demorado dois dias para ser criado;
- A importância de um contrato antes de iniciar a codificação;
- Aprender a codar de forma limpa e legível;
- Aprender um pouco mais de todas as áreas envolvidas, front, back, UX/UI e produto;
- Superação de limites.

## Como executar o Projeto:running:

### Front end
No terminal rodar os seguintes comandos:

- yarn install 
- yarn start 
- Em outro terminal, dentro da pasta do projeto, entrar na pasta mocke.
- Rodar yarn install
- yarn dev

### Back end
- Instalar o Mongo DB
- No terminal na pasta API rodar o comando npm install
- Rodar "node ./bin/www"
- No browser acessar localhost:9000
#### A API tem 4 endpoints (a conexão com o front está em construção, sugerimos rodar com mock)
São três de cadastro e uma de login:
- Candidato = localhost:/9000/api/candidate
- Empresa = localhost:/9000/api/company
- Indicador = localhost:9000/api/mentor
- Login = localhost:9000/api/login

## Participantes Squad 16

#### Andréa Soares - Desenvolvedora de Front End
- https://www.linkedin.com/in/andrea-rsoares/

#### Adrielly Félix - Desenvolvedora de Front End
- https://www.linkedin.com/in/adriellyfxcosta/

#### Catarina Vivacqua - Business Analyst
- https://www.linkedin.com/in/catarinaravagnani/

#### Deise Maya - Desenvolvedora Back end
- https://www.linkedin.com/in/deisemaya/

#### Eliane Reis - Data Analytics
- https://www.linkedin.com/in/eliane-a-reis/

