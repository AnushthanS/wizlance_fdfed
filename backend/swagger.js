const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function swaggerDocs(app, port) {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Wizlance API',
                version: '1.0.0',
                description: 'API required for wizlance application',
            },
            servers: [
                {
                    url: `http://localhost:${port}`,
                },
            ],
        },
        apis: ['./routes/*.js'],
    };

    const swaggerSpec = swaggerJsdoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = swaggerDocs;