'use strict';
const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ansersSchema = new Schema({		
	AnswerId:Number,
	AnswereTxt:String
})


const TestSchema = new Schema({
	_id: String,
	testId: Number,
	testName: String,
	classId:Number,
	ClasseName:String,
	questions:{
		type:Array,
		questionId:Number,
		questionText:String,
		ansers:[ansersSchema]
	}
});
 


const testModel = mongoose.model('Test', TestSchema, 'Test');
module.exports = testModel;
