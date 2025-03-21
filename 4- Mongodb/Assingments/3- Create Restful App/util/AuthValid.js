// Imports
const Ajv = require("ajv").default;

// Validation
const ajv = new Ajv();

// Create JSON Schema
    const schema = {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "pattern": ".+\@.+\..+"
            },
            "password": {
                "type": "string",
                "minLength": 6
            }
        },
        "required": ["email", "password"],
    }


module.exports = ajv.compile(schema);