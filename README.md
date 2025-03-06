# 📝 Form Generator App

## [DEMO LINK](https://nazarmatsevych.github.io/form-generator-app/)

## 📌 Description

This application generates forms based on a specified JSON configuration. It consists of two tabs:

1. **Config** – Allows users to enter the form configuration in JSON format.
2. **Result** – Displays the generated form based on the JSON configuration.

## 🚀 Features

- Supports multiple field types:
    - **Numeric** (number field)
    - **String** (text field)
    - **Multi-line** (text area)
    - **Boolean** (checkbox field)
    - **Date** (date field)
    - **Enum** (radio buttons)
- Allows setting a **form title**.
- Supports custom **buttons** (e.g., OK, Cancel, Apply).

## 🛠 JSON Configuration Fields

```
title: optional
fields: required
buttons: optional
```

## 🛠 JSON Configuration Structure

The JSON configuration example:

```json
{
  "title": "Form Title",
  "fields": [
    {
      "name": "username",
      "label": "Username",
      "type": "string"
    },
    {
      "name": "age",
      "label": "Age",
      "type": "number"
    },
    {
      "name": "bio",
      "label": "Bio",
      "type": "multi-line"
    },
    {
      "name": "subscribe",
      "label": "Subscribe to newsletter",
      "type": "boolean"
    },
    {
      "name": "birthdate",
      "label": "Birthdate",
      "type": "date"
    },
    {
      "name": "gender",
      "label": "Gender",
      "type": "enum",
      "options": ["Male", "Female", "Other"]
    }
  ],
  "buttons": ["OK", "Cancel"]
}
```

## 📦 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/nazarmatsevych/form-generator-app.git
cd form-generator-app
```

### 2️⃣ Install Dependencies

```sh
install node 18+

npm install
```

### 3️⃣ Start Development Server

```sh
npm run dev
```

