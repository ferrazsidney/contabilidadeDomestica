const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query;

        const [count] = await connection('gastos').count();

        const gastos = await connection('gastos')
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');
        
        response.header('X-Total-Count', count['count(*)']);
    
        return response.json(gastos);
    },

    async create(request, response) {
        const {descricao, valor, parcelas, data} = request.body;

        await connection('gastos').insert({
            descricao,
            valor,
            parcelas,
            data,
        });

        return response.json({ descricao });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('gastos').where('id',id).delete();
        
        return response.status(204).send();
    },

    async update(request, response){
        const { id } = request.params;
        const {descricao, valor, parcelas, data} = request.body;

        await connection('gastos').where('id',id).update({
            descricao,
            valor,
            parcelas,
            data,
        });
        
        return response.status(204).send();
    }
};