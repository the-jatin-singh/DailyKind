# DailyKind

## API Structure:

1. Endpoints:

- User Authentication:
  - `/api/auth/login`: POST request to authenticate users.
  - `/api/auth/register`: POST request to register new users.
  - `/api/auth/logout`: POST request to log out users.

- Tasks:
  - `/api/tasks/today`: GET request to fetch today's task for the user.
  - `/api/tasks/suggest`: POST request to allow users to suggest new tasks.
  - `/api/tasks/completed`: POST request to mark a task as completed.

- User Profile:
  - `/api/user/profile`: GET request to fetch user profile information.
  - `/api/user/profile/update`: POST request to update user profile information.

- Feedback:
  - `/api/feedback/submit`: POST request to allow users to submit feedback.

2. Data Model:

- User:
  ```json
  {
    "id": "user_id",
    "username": "user_name",
    "email": "user_email",
    "password": "hashed_password",
    "tasks_completed": [],
    "tasks_suggested": [],
    "profile": {
      "name": "full_name",
      "avatar": "avatar_url",
      "bio": "user_bio"
    }
  }

- Task:
  ```json
  {
  "id": "task_id",
  "title": "task_title",
  "description": "task_description",
  "category": "task_category",
  "created_by": "user_id",
  "created_at": "timestamp"
  }

- Feedback:
  ```json
  {
  "id": "feedback_id",
  "user_id": "user_id",
  "message": "feedback_message",
  "created_at": "timestamp"
  }
