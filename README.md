# Fatec - Centro Paula Souza
## TechNinja - Projeto Integrador 5º Semestre FATEC Luigi Papaiz
### Descrição
Sistema que visa oferecer uma plataforma educacional interativa para usuários interessados em aprender programação através de quizzes.

<div align="center">
   <img src="https://github.com/user-attachments/assets/fb5772d4-e1f7-41a4-89d6-02a6c15df763" alt='Logo do TechNinja' />
  
</div>

### Time de Desenvolvimento
- [Julia Ayumi](https://github.com/JuliaAyumi)
- [Luan Beserra](https://github.com/luan-beserra)
- [Matheus Duarte](https://github.com/matheusduartedevs)
- [Pedro Henrique](https://github.com/PedroHHCarvalho)

## Metas
- Reunir materiais educativos em um único ambiente.
- Facilitar o acesso para qualquer tipo de usuário.​
- Criar um sistema intuitivo e amigável.​
- Garantir que os usuários possam encontrar informações rapidamente.

## Requisitos Funcionais
- RF01 - Criação de Contas​
- RF02 - Validações no Cadastro​
- RF03 - Banco de Perguntas​
- RF04 - Perguntas Interativas​
- RF05 - Temas das Perguntas​
- RF06 - Fases Progressivas​
- RF07 - Níveis de Jogo​
- RF08 - Feedback Imediato​
- RF09 - Pontuação e Acompanhamento​

## Funcionalidades
- Criação de perfil
- Realizar Quizzes
- Progresso do Usuário 

## Stack utilizada
**Mobile** React Native, Typescript e Expo <br />
**Back-end:** Node <br />
**Banco de Dados:** MongoDB

## Preview
![Captura de Tela 2025-06-18 às 19 15 20](https://github.com/user-attachments/assets/7069c7de-be4f-4b2a-a1ba-1ba64f66c09a) 
![Captura de Tela 2025-06-18 às 19 23 54](https://github.com/user-attachments/assets/ec4ff4d7-87ac-4047-bf7c-edb0337c4dfb) <br />
![Captura de Tela 2025-06-18 às 19 24 04](https://github.com/user-attachments/assets/042bd023-5984-48cf-ac6b-30c78fca7632)
![Captura de Tela 2025-06-18 às 19 24 14](https://github.com/user-attachments/assets/434f043b-d564-4d29-96be-edc9870ece98) 


## Definição de Pronto
A sprint será considerado concluído quando:
1. Todas as entregas de cada membro devem ser revisadas pela equipe;
2. As entregas de código devem estar de acordo com os padrões de aceitação definidos pela equipe e ser plenamente executáveis;
3. Após a aprovação do código, ele deve ser armazenado no GitHub.

## Fluxo de Trabalho

### Branches principal:
- main: Sempre contém o código pronto para produção

### Como contribuir:
1. Atualize sua branch main
   ```bash
     git pull origin main
   ```
2. Crie uma branch para sua feature
   ```bash
     git checkout -b nome-da-feature
   ```
3. Implemente sua feature e faça commits organizados
   ```bash
     git add .
     git commit -m "Descrição clara da mudança"
   ```
4. Envie as alterações para o repositório remoto (commit inicial)
   ```bash
    git push -u origin nome-da-feature
   ```
5. Crie um Pull Request (PR) no GitHub para main
6. Após aprovação, faça o merge na main

## Instalação
Clone o repositório
```bash
  git clone [link_desse_repo]
```

Instale o projeto
```bash
  npm install
```

Crie o arquivo .env e adicione as variáveis de ambiente
```bash
  cp .env.sample .env
```

Execute o projeto e escolha a plataforma desejada (Android, iOS ou Web)
```bash
  npx expo
```
