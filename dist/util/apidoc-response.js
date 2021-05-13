"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDocResponse = exports.DocType = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
var DocType;
(function (DocType) {
    DocType["Array"] = "array";
    DocType["NULL"] = "null";
})(DocType = exports.DocType || (exports.DocType = {}));
const ApiDocResponse = (model, type = DocType.NULL) => {
    let data = null;
    if (type === 'array') {
        data = {
            type: 'array',
            items: {
                $ref: swagger_1.getSchemaPath(model),
            },
        };
    }
    else {
        data = { $ref: swagger_1.getSchemaPath(model) };
    }
    return common_1.applyDecorators(swagger_1.ApiOkResponse({
        schema: {
            allOf: [
                {
                    properties: {
                        data,
                        statusCode: {
                            type: 'number',
                            default: 200,
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiDocResponse = ApiDocResponse;
//# sourceMappingURL=apidoc-response.js.map