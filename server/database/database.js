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
	const deffered          = Q.defer();
	let currentDbConnection = null;
	getMongoDB()
		.then((dbConnection) => {
			currentDbConnection = dbConnection;
			const defferedForDb = Q.defer();
			dbConnection.db('manon').collection(docName).find(filter).toArray(function (err, result) {
				if (err) {
					defferedForDb.reject(err);
				}
				else {
					defferedForDb.resolve(result);
				}
			});
			return defferedForDb.promise;
		}).then((result) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.resolve(result);
	}).catch((error) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.reject(error);
	});
	
	return deffered.promise;
}

function findLimit(docName, filter, limit) {
	const deffered          = Q.defer();
	let currentDbConnection = null;
	getMongoDB()
		.then((dbConnection) => {
			currentDbConnection = dbConnection;
			const defferedForDb = Q.defer();
			dbConnection.db('manon').collection(docName)
				.find(filter)
				.limit(+limit)
				.toArray(function (err, result) {
					if (err) {
						defferedForDb.reject(err);
					}
					else {
						defferedForDb.resolve(result);
					}
				});
			return defferedForDb.promise;
		}).then((result) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.resolve(result);
	}).catch((error) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.reject(error);
	});
	
	return deffered.promise;
}

function del(docName, data) {
	const deffered          = Q.defer();
	let currentDbConnection = null;
	getMongoDB()
		.then((dbConnection) => {
			const defferedForDb = Q.defer();
			currentDbConnection = dbConnection;
			dbConnection.db('manon').collection(docName).remove(data, {justOne: true}, function (err, result) {
				if (err)
					defferedForDb.reject(err);
				else
					defferedForDb.resolve(result);
			});
			return defferedForDb.promise;
		}).then((result) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.resolve(result);
	}).catch((error) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.reject(error);
	});
	
	return deffered.promise;
}

function save(docName, dataInsert) {
	const deffered          = Q.defer();
	let currentDbConnection = null;
	getMongoDB()
		.then((dbConnection) => {
			const defferedForDb = Q.defer();
			currentDbConnection = dbConnection;
			dbConnection.db('manon').collection(docName).save(dataInsert, function (err, result) {
				if (err)
					defferedForDb.reject(err);
				else
					defferedForDb.resolve(result.ops[0]);
			});
			return defferedForDb.promise;
		}).then((result) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.resolve(result)
	}).catch((error) => {
		if (currentDbConnection) {
			currentDbConnection.close();
		}
		deffered.reject(error);
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
	// MongoClient.connect('mongodb://hawklm:Vetbopen_36@ds159459.mlab.com:59459/manon', function (err, dbb) {
	MongoClient.connect('mongodb://localhost:27017/manon', function (err, dbb) {
		if (err) return console.log(err);
		callback(err, dbb);
	});
}