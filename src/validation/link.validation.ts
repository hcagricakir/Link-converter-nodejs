import Joi from 'joi';
const schema = {
    create: Joi.object().keys({
        request: Joi.string().min(1).max(100).required(),
    }),
}
export default schema;