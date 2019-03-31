import { expect } from 'chai'
import agent from 'superagent-bluebird-promise'
import mongoose from 'mongoose'
import models from './models'

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-Key': 'FENPuoMI8lNbx4vQ87y6NAhk'
};

var dataString = {services: ["GOOGLE (GMAIL/VOICE)"]}

describe('tests', () => {
	it('it should create a phone', done => {
		agent.post('https://service.pvaverify.com/api/line/changeService')
		.set(headers)
		.send(dataString)
		.then(res => {
			console.log(res.body)
			expect(res).to.be.ok
			done()
		})
	})
	it.only('it should get phone number details', done => {
		agent.get('https://service.pvaverify.com/api/line')
		.set(headers)
		.then(res => {
			console.log(res.body)
			expect(res).to.be.ok
			done()
		})
	})
	
})