# CRUD Heroes project with MEAN STACK 1.0 Technologies

## Versões:
* Bootstrap v3.3.4 (http://getbootstrap.com).
* Font Aewsone 4.7.

### TO DO


- [x] Grupos de Hero vir a partir do Banco.

- [x] Passar o menu para uma diretiva personalizada.


- [x] Fazer alterações para a refêrência do ProjetoCRUDHero ( feitas no front-end).
	-  Pra ser feito no Banck-end:
	- alterar os endpoints e as chamadas e o Schema do Mongoose.

- [x] Procurar alguma API que já tenha dados de Heróis.
https://superheroapi.com/try-now.html (pode ajudar no cadastro de novos Heróis).
	- [ ]  Personalizar cadastro de Heroi:
		-  Quais campos terão.

- [ ] Tela cadastrar usuários. (somente quem for ADM).
	- Tela de configuração ( onde pode ser possível cadastrar os itens do comboBox {somente quem for ADM})
	- Criar a tela de cadastro Usuários
	- Campos do usuário:
	- Chave. Nome/Sobrenome / Pais / Senha  / Data Criação / Data Modificação / Foto
	- OBS:  no banco salvar data criação. Exclusão Logica(Flag para ativo e desativado) .
	- Salvar quem criou o usuário.

- [ ] 2 - CRUD usuários
- [ ] 3 - Paginação para mostrar os usuários.
- [ ] 4 - Privilégios para essa transação.

* Exemplo CRUD user:
https://www.aspsnippets.com/Articles/AngularJS-Dynamic-Table-example-Dynamically-Add-Remove-Rows-from-HTML-Table-using-AngularJS.aspx


- [ ] Documentação para entender o projeto. (Feito com antiga referência).
- [ ] Criptografar a senha no banco.
- [ ] Login com ID.
- [ ] Transação nas telas.
- [ ] Como inserir Logs em uma aplicação SPA / AngularJS.
- [ ] Tela de perfil do usuário Logado (com principais informações vindo a autenticação do "SEGUR").
- [ ] Gerar Relatório em PDF.
- [ ] Multila idioma.
- [ ] Deploy HeroKu Back-end e front-end.
- [ ] Gerar documentação da API.
- [ ] Dashboard de poder de habidade de Heroi (a pesquisar ).



### Anotações:

* Buscar os Heróis:

```javascript
recursoFoto.query(function(heroes) {
    $scope.heroes = heroes;
}, function(erro) {
    console.log(erro);
});
```


