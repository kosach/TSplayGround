"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "title": "Person",
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "age": {
            "description": "Age in years",
            "type": "integer",
            "minimum": 0
        }
    },
    "required": ["firstName", "lastName"]
};
//# sourceMappingURL=shema.js.map