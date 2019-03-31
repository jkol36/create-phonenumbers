import agent from 'superagent-bluebird-promise'

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-API-Key': 'FENPuoMI8lNbx4vQ87y6NAhk'
};

var dataString = {services: ["GOOGLE (GMAIL/VOICE)"]}
const createPhoneNumber =() => {
	return agent.post('https://service.pvaverify.com/api/line/changeService')
		.set(headers)
		.send(dataString)
		.then(res => {
			return res.body
		})
}
const getPhoneNumberDetails = () => {
	return agent.get('https://service.pvaverify.com/api/line')
		.set(headers)
		.then(res => {
			return res.body
		})
}

createPhoneNumber()
.then(() => getPhoneNumberDetails())
.then(console.log)