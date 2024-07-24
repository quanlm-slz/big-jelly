### [Return to master](../master.md)

### End point: `POST customers/sign_in`

#### Description:

- Allow registered customer to sign_in the system

#### Body:

```json
{
  "customer": {
    "email": "test@example.com",
    "password": "password"
  }
}
```

#### Response:

```json
{
  "customer": {
    "email": "test@example.com",
    "token": "jwt token",
    "created_at": "created_at"
  }
}
```

### End point: `POST customers/sign_up`

#### Description:

- Allow anonymous customer to register the system

#### Body:

```json
{
  "customer": {
    "email": "test@example.com",
    "password": "password"
  }
}
```

#### Response:

```json
{
  "status": "success",
  "code": "200",
  "data": {
    "email": "test@example.com",
    "token": "jwt token",
    "created_at": "created_at"
  }
}
```

### End point: `GET customers/me`

#### Description:

- Allow signed in customer to validate token

#### Header:

```json
{
  "Authorization": "Bearer token"
}
```

#### Response:

```json
{
  "status": "success",
  "code": "200",
  "data": {
    "email": "test@example.com",
    "created_at": "created_at"
  }
}
```

### [Return to master](../master.md)