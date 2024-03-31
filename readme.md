# FindMe

## Membros e Papéis
- Ana Luisa Messias Ferreira Mendes: Fullstack, Scrum Master (SM), UX/UI designer
- Davi Porto Araujo: Fullstack, Product Owner (PO), Devops
- Eduardo Klausing Gervásio Muniz: Fullstack
- Thiago Roberto Magalhães: Fullstack, DevOps, Arquiteto, UX/UI designer

## Escopo
O sistema "FindMe" é uma plataforma que visa facilitar o processo de recrutamento tanto para recrutadores quanto para candidatos. Com um foco em simplicidade e eficiência, a plataforma oferece diversas funcionalidades para atender às necessidades de ambos os públicos.

## Figma

[Link para o figma](https://www.figma.com/file/9E03uUlkhs4tlAyjkWmJHx/FindMe?type=design&node-id=202%3A2&mode=design&t=viZ9WwJ73szRuBgV-1)

### Principais Features
#### Como recrutador, eu quero:
1. Criar vagas com detalhes específicos.
2. Buscar candidatos com base em critérios variados.
3. Estabelecer limitações para cada vaga, como número máximo de candidaturas, período de abertura e fechamento da vaga, e filtros de candidatos.
4. Gerenciar as vagas, incluindo criar, atualizar, listar e deletar.
5. Visualizar as candidaturas recebidas.
6. Enviar e-mails para os candidatos diretamente pela plataforma.
7. Gerenciar as vagas de forma personalizada, com opções de restrição por características como sexo, cor, deficiência, e modelo de contratação.

#### Como candidato, eu quero:
1. Aplicar para vagas disponíveis na plataforma.
2. Buscar vagas, visualizar detalhes e candidaturas.
3. Criar, editar e deletar seu perfil na plataforma.
4. Visualizar suas candidaturas realizadas.
5. Gerenciar seu currículo, incluindo criação, edição e exclusão.
6. Desistir de uma aplicação para uma vaga.
7. Controlar suas experiências profissionais.
8. Gerenciar suas competências.
9. Controlar sua formação acadêmica.

## Tecnologias
### Linguagens de Programação (LP):
- React para o frontend
- Php para o backend

### Banco de Dados (BD):
- MySQL para armazenamento de dados

### Outras Tecnologias:
- Cypress para testes automatizados
- Docker e docker-compose para contêineres
- Figma para design e prototipagem
- GitHub para controle de versão e colaboração no código
- Laravel para o framework do back-end
- Nextjs para framework de front-end

### Sprint Backlog
1. Criar vagas com detalhes específicos.
 - Tarefas e responsáveis:
     - Modelar a vaga no banco de dados [Eduardo]
     - Implementar a tela de criação de vagas [Ana]
     -  CRUD criação das vagas [ Davi]
        - rotas, criar, atualizar, listar, deletar
        - migrações para criação das tabelas no banco
        - form request para validação do payload
        - teste geral 
        - documentação em openApi das rotas
        - usar soft delete na deleção 
        - salvar alterações no histórico
     - Estruturação das chamadas à API pelo front [Thiago]

2. Buscar candidatos com base em critérios variados.
  - Tarefas e responsáveis:
     - Modelar o candidato e critérios no banco de dados [Eduardo]
     - Implementar a tela de criação/edição de perfil/competência [Ana]

     - CRUD de nova competência  [Davi]
         - migrações para criação das tabelas no banco
         - rotas de criação de competência, que já deve vincular esse a um usuário
         - form request para validação do payload
         - teste geral
         - documentação em openApi das rotas
         - rota de delteção deve usar soft delete
         - rota de atualização, listagem, detalhes
         - salvar alterações no histórico

    - CRUD de nova experiência [Thiago]
      - migrações para criação das tabelas no banco
      - rotas de criação de experiência, que já deve vincular esse a um usuário
      - form request para validação do payload
      - teste geral
      - documentação em openApi das rotas
      - usar soft delete na rota de deleção
      - salvar alterações no histórico
      - rotas de autualização, detalhes, listagem, esta com filtros
    
    - Estruturação das chamadas à API pelo front
       
3. Estabelecer limitações para cada vaga, como número máximo de candidaturas, período de abertura e fechamento da vaga, e filtros de candidatos.
    - Crud relacionada a vaga/aplicação [Davi]
        - Criar tabelas relacionados a aplicação para uma vaga
        - Adicionar essas verificações quando um usuário tenta aplicar para uma vaga
        - Rota de listagem de aplicações com filtros 
        - Documentação openApi
        - Teste geral 
        - adicionar rota de revogar candidatura, soft delete
4. Gerenciar as vagas, incluindo criar, atualizar, listar e deletar.
  - Tarefas e responsáveis: [Ana]
    - Criação dos endpoints para o CRUD
    - Consumir os endpoints no front-end
    - Criar a tela para a manipulação dos dados
      
5. Visualizar as candidaturas recebidas.
  - Tarefas e responsáveis:
    - Criar tela para visualizar as candidaturas pela parte do recrutador [Davi]
    - Endpoint para retornar as candidaturas de cada vaga [Thiago]
        - Deve suportar filtros
        - deve suportar ordenações
        - criar tabelas no banco 
        - documentação openApi da rota 
        - teste geral 
    

6. Aplicar para vagas disponíveis na plataforma.
  - Tarefas e responsáveis:
    - Criar tela para visualizar as candidaturas pela parte do candidato [Ana]
    - Endpoint para buscar vagas [Eduardo]
      - Deve suportar filtros 
      - Deve suportar ordenações
      - documentação openApi
      - teste geral

7. Criar, editar e deletar seu perfil na plataforma.
  - Tarefas e responsáveis:
    - Crud Relacionada ao usuário/autenticação [Davi]
      - rotas, signUp, signIn, deleteAccount, signOff, me, refreshToken
      - documentação openApi
      - cirar migração para tabelas no banco
      - oauth para gerenciar token jtw
      - criação de middleware para verifica se o usuário está logado
      - teste geral
      - salvar alterações no histórico
      - delete deve ser soft delete

      - Tela para edição do perfil [Thiago]
    
8. Visualizar suas candidaturas realizadas.
  - Tarefas e responsáveis: [Ana]
    - Tela para a visualização das candidaturas
    

