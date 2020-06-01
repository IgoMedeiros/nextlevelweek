import express from 'express';

const app = express();

app.get('/users', (request, response)  => {
    console.log('listagem de usuários!');

    response.json(
        [
            'Igo',
            'Diego',
            'Shamps',
            'Tavares'
        ]
    );
});

app.listen(3333);