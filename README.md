# Project Name

API List

This project is made with the help of Chat GPT

## Overview

This project organizes APIs and provides visual representations using a simple HTML, CSS, and JavaScript setup.

## Files

- `index.html`: Main HTML file for UI structure.
- `script.js`: JavaScript file for dynamic functionality.
- `styles.css`: CSS file for styling the UI.
- `data.json`: JSON file for storing API configurations.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Dhruvrana8/Api-view-HTML.git

    Open index.html in a web browser to view the application.

    Modify data.json to add or update API configurations as needed.
   ```

Example data.json

### Example `data.json`

```json
{
  "data": [
    {
      "stack": "Auth",
      "screen": [
        {
          "name": "Login",
          "API": {
            "login": "api/v1/login",
            "reset_password": "api/v1/reset_password"
          }
        },
        {
          "name": "Register",
          "API": {
            "register": "api/v1/register"
          }
        }
      ]
    },
    {
      "stack": "App",
      "screen": [
        {
          "name": "Dashboard",
          "API": {
            "dashboard_data": "api/v1/dashboard_data",
            "notification_count": "api/v1/notification_count"
          }
        }
      ]
    }
  ]
}
```

Explanation of data.json

    Stack: Represents different functional areas or modules in your application (e.g., Auth, App).
    Screen: Represents individual screens or pages within each stack.
        Name: Specifies the name of the screen or page.
        API: Lists the APIs associated with each screen, where:
            Each key (e.g., "login", "reset_password") represents a specific API endpoint.
            Each value (e.g., "api/v1/login", "api/v1/reset_password") represents the URL or endpoint path for accessing that API.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository
    Create your feature branch (git checkout -b feature/YourFeature)
    Commit your changes (git commit -am 'Add some feature')
    Push to the branch (git push origin feature/YourFeature)
    Submit a pull request
