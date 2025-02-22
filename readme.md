## About project: REST API used for working with a collection of contacts.

### Commands

- `npm start` &mdash; server start in production mode
- `npm run start:dev` &mdash; server start in development mode
- `npm run lint` &mdash; run code check execution with eslint
- `npm lint:fix` &mdash; run code check execution with eslint with automatic fixes for simple errors
- `npm test` &mdash; run code tests
- `npm run test:coverage` &mdash; run code tests for test report generation

### Routes Contacts

| Method | <http://localhost:{PORT}/api> | Description                  | Properties                    |
| ------ | ----------------------------- | ---------------------------- | ----------------------------- |
| GET    | /contacts                     | get all contacts             | Authorization                 |
| GET    | /contacts/{id}                | get a contact by id          | Authorization                 |
| POST   | /contacts                     | add a new contact            | Authorization,Body(json)      |
| PUT    | /contacts/{id}                | update an existing contact   | Authorization,id,Body(json)   |
| PATCH  | /contacts/{id}                | update at least 1 property   | Authorization,id,Body(json)   |
| PATCH  | /contacts/{id}/favorite       | update a property 'favorite' | Authorization,id,Body(json)   |
| DELETE | /contacts/{id}                | remove a contact by id       | Authorization,id              |
| GET    | /contacts?page={1}&limit={20} | pagination                   | Authorization,query parameter |
| GET    | /contacts?favorite={false}    | filter by favorite           | Authorization,query parameter |

### Routes Users

| Method | <http://localhost:{PORT}/api> | Description                       | Properties                    |
| ------ | ----------------------------- | --------------------------------- | ----------------------------- |
| POST   | /users/signup                 | create a new user                 | Request body                  |
| POST   | /users/login                  | user login                        | Request body                  |
| POST   | /users/logout                 | user logout                       | Authorization                 |
| GET    | /users/current                | get info about current user       | Authorization                 |
| PATCH  | /users                        | update user subscription          | Authorization,Body(json)      |
| GET    | /users/starter                | access 'starter' subscription     | Authorization                 |
| GET    | /users/business               | access 'business' subscription    | Authorization                 |
| GET    | /users/pro                    | access 'pro' subscription         | Authorization                 |
| PATCH  | /users/avatar                 | upload user avatar                | Authorization,Body(form-data) |
| GET    | /users/verify/{verifyToken}   | get token for verify user email   | query parameter               |
| POST   | /users/verify                 | repeat send for verify user email | Body(json)                    |

<!-- | Full Routes Contacts                                 | Method | Description                  |
| ---------------------------------------------------- | ------ | ---------------------------- |
| <http://localhost:{PORT}/api/contacts>               | GET    | get all contacts             |
| <http://localhost:{PORT}/api/contacts/{id}>          | GET    | get a contact by id          |
| <http://localhost:{PORT}/api/contacts>               | POST   | add a new contact            |
| <http://localhost:{PORT}/api/contacts/{id}>          | PUT    | update an existing contact   |
| <http://localhost:{PORT}/api/contacts/{id}>          | PATCH  | update at least 1 property   |
| <http://localhost:{PORT}/api/contacts/{id}/favorite> | PATCH  | update a property 'favorite' |
| <http://localhost:{PORT}/api/contacts/{id}>          | DELETE | remove a contact by id       |

| Full Routes Users                                        | Method | Description                       |
| -------------------------------------------------------- | ------ | --------------------------------- |
| <http://localhost:{PORT}/api/users/signup>               | POST   | user registration                 |
| <http://localhost:{PORT}/api/users/login>                | POST   | user login                        |
| <http://localhost:{PORT}/api/users/logout>               | POST   | user logout                       |
| <http://localhost:{PORT}/api/users/current>              | GET    | get user data by token            |
| <http://localhost:{PORT}/api/users>                      | PATCH  | update user subscription          |
| <http://localhost:{PORT}/api/users/starter>              | GET    | access by 'starter' subscription  |
| <http://localhost:{PORT}/api/users/business>             | GET    | access by 'business' subscription |
| <http://localhost:{PORT}/api/users/pro>                  | GET    | access by 'pro' subscription      |
| <http://localhost:{PORT}/api/users/avatar>               | PATCH  | upload user avatar                |
| <http://localhost:{PORT}/api/users/verify/{verifyToken}> | GET    | get token for verify user email   |
| <http://localhost:{PORT}/api/users/verify>               | POST   | repeat send for verify user email | -->

### Schemas

#### Schema Contacts

```
{
    name*: String,
    surname*: String,
    email*: String,
    phone*: String,
    favorite: Boolean,
    owner: Object,
    id: String
}
```

_example:_
_{_
_"name":_ _"exampleName",_
_"surname":_ _"exampleSurname",_
_"email":_ _"example@gmail.com",_
_"phone":_ _"examplePhone"_
_}_

#### Schema Users

```
{
    email*: String,
    password*: String,
    name: String,
    subscription: String,
    avatarURL: String,
    token: String,
    id: String,
    verify: Boolean,
    verifyToken*: String
}
```

_example:_
_{_
_"email":_ _"example@gmail.com",_
_"password":_ _"examplePassword"_
_}_
