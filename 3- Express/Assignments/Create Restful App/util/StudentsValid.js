// Imports
    const Ajv = require("ajv");

// Create JSON Schema
    const schema = {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "pattern": "^[A-Z][a-z]*$"
            },
            "dept": {
                "type": "string",
                "enum": ["SD", "SA", "MD"],
                "maxLength": 2,
                "minLength": 2
            }
        },
        "required": ["name", "dept"],
        "maxProperties": 2,
        "minProperties": 2
    }

// Validation
const ajv = new Ajv();
module.exports = ajv.compile(schema);