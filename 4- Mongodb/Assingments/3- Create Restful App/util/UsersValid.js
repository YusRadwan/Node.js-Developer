// Imports
const Ajv = require("ajv").default;

// Validation
const ajv = new Ajv();

// Create JSON Schema
    const schema = {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "pattern": "^[A-Z][a-z]*$"
            },
            "email": {
                "type": "string",
                "pattern": ".+\@.+\..+"
            },
            "password": {
                "type": "string",
                "minLength": 6
            }
        },
        "required": ["name", "email", "password"],
    }


module.exports = ajv.compile(schema);