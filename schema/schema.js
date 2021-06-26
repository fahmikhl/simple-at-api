  export const listUser = {
    "type": "array",
    "items": [
      {
        "type": "object",
        "properties": {
          "userId": {
            "type": "integer"
          },
          "id": {
            "type": "integer"
          },
          "title": {
            "type": "string"
          },
          "body": {
            "type": "string"
          }
        },
        "required": [
          "userId",
          "id",
          "title",
          "body"
        ]
      }
    ]
  }
