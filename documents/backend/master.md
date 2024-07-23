# BigJelly

## Description

- A system allow user to order food from the online shop

## Key Features

- A system allow admin and customer interact with each other:
- Customer can:
  - Login
  - Make new order
  - Receive subscription
- Admin can:
  - Manage sales
  - Add products
  - Add promotions

## Database

### Users

| Field | Datatype        | Constraints |
| ----- | --------------- | ----------- |
| id    | uuid            | primary_key |
| email | string(50)      | unique      |
| type  | customer, admin | not null    |

### Products

| Field    | Datatype   | Constraints |
| -------- | ---------- | ----------- |
| id       | uuid       | primary_key |
| title    | string(50) | not null    |
| note     | string(50) | nullable    |
| price    | integer    | not null    |
| image_id | uuid       | foreign_key |

### Images

| Field | Datatype | constraints |
| ----- | -------- | ----------- |
| id    | uuid     | primary_key |

## Api

### Format

#### Error Response

```json
{
  "status": "error",
  "code": "404",
  "message": "Not found"
}
```

#### Success Response

```json
{
  "status": "success",
  "code": "200",
  "data": "data"
}
```

#### Paginated Response

```json
{
  "status": "success",
  "code": "200",
  "data": {
    "items": [],
    "current_page": 1,
    "total_pages": 2,
    "total_items": 15,
    "page_limit": 10
  }
}
```

#### Code

**Available success codes**: 200
**Available error codes**: 404 (Not found), 401 (Unauthenticate), 403 (forbidden)

### End points:

#### Domain 1 end points: [user endpoint](./endpoints/user-endpoints.md)