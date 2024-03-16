# FindMe

## Membros e Papéis
- Ana Luisa Messias Ferreira Mendes: Fullstack, Scrum Master (SM), UX/UI designer
- Davi Porto Araujo: Fullstack, Product Owner (PO), Devops
- Eduardo Klausing Gervásio Muniz: Fullstack
- Thiago Roberto Magalhães: Fullstack, DevOps, Arquiteto, UX/UI designer

## Escopo
O sistema "FindMe" é uma plataforma que visa facilitar o processo de recrutamento tanto para recrutadores quanto para candidatos. Com um foco em simplicidade e eficiência, a plataforma oferece diversas funcionalidades para atender às necessidades de ambos os públicos.

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
     - Modelar a vaga no banco de dados
     - Implementar a tela de criação de vagas
     - Endpoint para o CRUD das vagas
     - Estruturação das chamadas à API pelo front

2. Buscar candidatos com base em critérios variados.
  - Tarefas e responsáveis:
     - Modelar o candidato e critérios no banco de dados
     - Implementar a tela de criação/edição de perfil/competência
     - Endpoint para o CRUD de novos critérios
     - Estruturação das chamadas à API pelo front
       
3. Estabelecer limitações para cada vaga, como número máximo de candidaturas, período de abertura e fechamento da vaga, e filtros de candidatos.
4. Gerenciar as vagas, incluindo criar, atualizar, listar e deletar.
  - Tarefas e responsáveis:
    - Criação dos endpoints para o CRUD
    - Consumir os endpoints no front-end
    - Criar a tela para a manipulação dos dados
      
5. Visualizar as candidaturas recebidas.
  - Tarefas e responsáveis:
    - Criar tela para visualizar as candidaturas pela parte do recrutador
    - Endpoint para retornar as candidaturas de cada vaga

6. Aplicar para vagas disponíveis na plataforma.
  - Tarefas e responsáveis:
    - Criar tela para visualizar as candidaturas pela parte do candidato
    - Endpoint para retornar as candidaturas de cada vaga. Buscar vagas, visualizar detalhes e candidaturas.
7. Criar, editar e deletar seu perfil na plataforma.
  - Tarefas e responsáveis:
    - Endpoints para o CRUD do perfil
    - Tela para edição do perfil
    
8. Visualizar suas candidaturas realizadas.
  - Tarefas e responsáveis:
    - Tela para a visualização das candidaturas

9. Gerenciar seu currículo, incluindo criação, edição e exclusão. (talvez remover)

  
10. Gerenciar as vagas de forma personalizada, com opções de restrição por características como sexo, cor, deficiência, e modelo de contratação. (talvez remover essa)

