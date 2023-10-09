# ZenTasker

ZenTasker serves as your personal wellness task manager, seamlessly integrating mindfulness exercises, positivity trackers, and inspirational content into your daily to-do list. This application transcends the capabilities of a conventional to-do app by marrying mindfulness and productivity strategies to sharpen user focus and optimize task management. Its design seeks to inspire users to practice mindfulness, sustain concentration, and adeptly manage stress.

# Screenshot

![Alt text](images/zentasker.png)

# Technologies Used

- React 
- Bootstrap
- CSS
- JavaScript
- Express
- Mongoose
- MongoDB


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |



#### TASKS

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/tasks`              | `tasks#index`    |
| GET   | `/tasks/<task_id>`    | `tasks#show`     |
| POST   | `/tasks`             | `tasks#create`   |
| PATCH  | `/tasks/<recipe_id>` | `tasks#update`   |
| DELETE | `/tasks/<recipe_id>` | `tasks#delete`   |


#### Categories

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET   | `/categories`             | `categories#index`    |
| GET   | `/categories/<category_id`             | `categories#show`    |
| POST   | `/categories`             | `categories#create`   |
| PATCH  | `/categories/<category_id>` | `categories#update`   |
| DELETE | `/categories/<category_id>` | `categories#delete`   |




#### Recommended Request bodies 

Request - users#signup:

```json
{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
}
```

### Token Auth Strategy

Send the token as `Bearer Token <token>`
