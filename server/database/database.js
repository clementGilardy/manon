"use strict";

const MongoClient = require('mongodb').MongoClient;
const Q           = require('q');

module.exports = {
	save,
	find,
	findLimit,
	del
};

function find(docName, filter) {
	const deffered = Q.defer();
	getMongoDB()
		.then((dbConnection) => {
			dbConnection.collection(docName).find(filter).toArray(function (err, result) {
				if (err) {
					deffered.reject(err);
				}
				else {
					deffered.resolve(result);
				}
			});
		});
	
	return deffered.promise;
}

function findLimit(docName, filter, limit) {
	const deffered = Q.defer();
	getMongoDB()
		.then((dbConnection) => {
			dbConnection.collection(docName)
				.find(filter)
				.limit(+limit)
				.toArray(function (err, result) {
					if (err) {
						deffered.reject(err);
					}
					else {
						deffered.resolve(result);
					}
				});
		});
	
	return deffered.promise;
}

function del(docName, data) {
	const deffered = Q.defer();
	getMongoDB()
		.then((dbConnection) => {
			dbConnection.collection(docName).remove(data, {justOne: true}, function (err, result) {
				if (err)
					deffered.reject(err);
				else
					deffered.resolve(result);
			});
		});
	
	return deffered.promise;
}

function save(docName, dataInsert) {
	const deffered = Q.defer();
	getMongoDB()
		.then((dbConnection) => {
			dbConnection.collection(docName).save(dataInsert, function (err, result) {
				if (err)
					deffered.reject(err);
				else
					deffered.resolve(result);
			});
		});
	
	return deffered.promise;
}

function getMongoDB() {
	const deferred = Q.defer();
	connectMongoDB(function (err, result) {
		if (err)
			deferred.reject(err);
		else
			deferred.resolve(result);
	});
	return deferred.promise;
}

function connectMongoDB(callback) {
	MongoClient.connect('mongodb://hawklm:Vetbopen_36@ds159459.mlab.com:59459/manon', function (err, dbb) {
		if (err) return console.log(err);
		const db = dbb.db('manon');
		callback(err, db);
	});
}