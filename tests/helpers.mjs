import supertest from 'supertest';
import Joi from 'joi';
import joiAssert from 'joi-assert';

global.Joi = Joi;
global.joiAssert = joiAssert;
global.request = supertest("http://www.mocky.io/v2/5e6983512f00006bf8d8b46e");
