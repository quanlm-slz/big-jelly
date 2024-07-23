### [Return to master](../master.md)

### End point: `POST customers/sign_in`

#### Description:

- Allow registered customer to sign_in the system

#### Body:

```json
{
  "user": {
    "email": "test@example.com",
    "password": "password"
  }
}
```

#### Response:

```json
{
  "user": {
    "email": "test@example.com",
    "token": "jwt token"
  }
}
```

### End point: `POST customers/sign_up`

#### Description:

- Allow anonymous user to register the system

#### Body:

```json
{
  "user": {
    "email": "test@example.com",
    "password": "password"
  }
}
```

#### Response:

```json
{
  "user": {
    "email": "test@example.com",
    "token": "jwt token"
  }
}
```

### [Return to master](../master.md)
