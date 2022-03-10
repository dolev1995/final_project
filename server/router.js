'use strict';
const defaultController = require("./controllers/user"),
	path = require('path'),
	multer = require('multer'),
	upload = multer({dest: 'uploads/'}),
	User = require('./models/user'),
	fs = require("fs")




	

const router = (app, express) => {

	// API
	// ==============================================
	app.post('/api/:collection/:action*?', (req, res) => {
		const {action} = req.params,
			funcName = action || "add";
		apiHandler(req, res, funcName, req.body);
	});

	const apiHandler = (req, res, funcName, data) => {
		try {
			let useDefaultController = true, controller;
			const {collection} = req.params,
				model = (collection === 'general' ? data : require(`./models/${collection}`));
			//are controller and action exist? if yes rum them else run default controller
			console.log("*******func isss = "+ funcName);
			if (fs.existsSync(`./controllers/${collection}.js`)) {
				controller = require(`./controllers/${collection}`);
				if (typeof controller[funcName] === "function") {
					useDefaultController = false;
					controller[funcName](model, data).then(result => {
						if (!result.toDefault)
							return res.status(200).send(result);
						//run default controller again
						defaultController[`default_${funcName}`](model, result.data).then(result => {
							res.status(200).send(result)
						}).catch(err => {
							if (!err.code || err.code >= 500)
								printError(err, req);
							res.status(err.code || 500).send(err)
						});


					}).catch(err => {
						if (!err.code || err.code >= 500)
							printError(err, req);
						res.status(err.code || 500).send(err)
					});
				}
			}

			if (useDefaultController) {
				defaultController[`default_${funcName}`](model, data).then(result => {
					res.status(200).send(result)
				}).catch(err => {
					if (!err.code || err.code >= 500)
						printError(err, req);
					res.status(err.code || 500).send(err)
				});
			}

		} catch (err) {
			if (!err.code || err.code >= 500)
				printError(err, req);
			res.status(err.code || 500).send({"error": "שגיאה כללית"})
		}
	};

};



    const printError = (e, req) => {
        console.error(`Error: ${new Date().toLocaleString()} : ${e.message}.\n stack: ${e.stack} \n  GET params: ${JSON.stringify(req.params)} \n POST parmars: ${JSON.stringify(req.body)}`)
    };


    module.exports = router;