    import express from 'express';
    import cors from 'cors';
    import {Client} from '../client.js'

    const app = express();

    const PORT = 3002

    app.use(cors());
    app.use(express.json());

    app.get('/api/test', (req, res) => {
        
    res.json({message: 'доставили'});
    });

    app.post('/api/clients', (req, res) => {
        const clientData = req.body;
        console.log('--- На сервер пришли данные! ---');
        console.log(clientData);
        Client.push(clientData)
        main(Client)

        res.status(201).json({
            status: "Успешно сохранено",
            receivedData: clientData
        });
    });

    app.listen(PORT, () => {
        console.log(`[EXPRESS БЭКЕНД] Сервер запущен на http://localhost:${PORT}`);
    });