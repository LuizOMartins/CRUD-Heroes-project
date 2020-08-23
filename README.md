# CRUD Heroes project with MEAN STACK 1.0 Technologies

Versões:
- Bootstrap v3.3.4 (http://getbootstrap.com).
- Font Aewsone 4.7.

## Ideias: 


* Grupos de Hero vir a partir do Banco.- OK
* Passar o menu para uma diretiva personalizada. - OK

* Procurar alguma API que já tenha dados de Heróis.
https://superheroapi.com/try-now.html (pode ajudar no cadastro de novos Heróis).

* Documentação para entender o projeto. (Feito com antiga referência).

* Fazer alterações para a refêrência do ProjetoCRUDHero ( feitas no front-end).
->  Pra ser feito no Banck-end:
- cirar collections  já com o atributos definidos
- alterar os endpoints e as chamadas e o Schema do Mongoose.

* Tela cadastrar usuários. (somente quem for ADM).
1 - Criar a tela de cadastro Usuários
-> Campos do usuário:
- Chave. Nome/Sobrenome / Pais / Senha 
OBS:  no banco salvar data criação. Exclusão Logica(Flag para ativo e desativado) .
-> Salvar quem criou o usuário.

2 - CRUD usuários
3 - Paginação para mostrar os usuários.
4 - Privilégios para essa transação.

-> Exemplo CRUD user:
https://www.aspsnippets.com/Articles/AngularJS-Dynamic-Table-example-Dynamically-Add-Remove-Rows-from-HTML-Table-using-AngularJS.aspx

* Tela de configuração ( onde pode ser possível cadastrar os itens do comboBox {somente quem for ADM})

* Criptografar a senha no banco.
* Login com ID.
* Transação nas telas.
* Como inserir Logs em uma aplicação SPA / AngularJS.

*  Personalizar cadastro de Heroi:
1 -  Quais campos terão.

* Tela de perfil do usuário Logado (com principais informações vindo a autenticação do "SEGUR").


* Gerar Relatório em PDF.
* Multila idioma.
* Deploy HeroKu bacckend e front-end.
* Gerar documentação da API?
* Dashboard de poder de habidade de Heroi (a pesquisar ).


______________________________________________________________________



### Anotações:

-> Buscar os Heróis:

```javascript
recursoFoto.query(function(heroes) {
    $scope.heroes = heroes;
}, function(erro) {
    console.log(erro);
});
```


