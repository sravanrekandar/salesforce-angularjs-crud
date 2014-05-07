/**
 * Services
 *
 * @authors
 * Sravan
 */
angular.module('bumble.services', [])
	.factory('bumbleRecordsSvc', function($q){
        //get remoteTK Client
 		var remotTKClient = new remotetk.Client();
		var records = [];
        var query = function (queryString) {
                var deferred = $q.defer();
                remotTKClient.query(queryString, 
                                    function(response){
                                        records = response.records;
                                        deferred.resolve(records);
                                    },function(error){
                                        alert(JSON.stringify(error));
                                        deffered.fail(error);
                                    });
                return deferred.promise;
            };
        var create = function(record){
            var deferred = $q.defer();
            remotTKClient.create('contact', {LastName: record.Name, accountId : '001f000000FV7SC' },
                                 function(response){
                                   	deferred.resolve(response)
                                },function(error){
                                    alert(JSON.stringify(error));
                                    deffered.fail(error);
                                });
            return deferred.promise;
        }

		this.query = function(){
			return query('SELECT Id, Name, Title FROM contact LIMIT 50');
		};
		this.create = function(record) {
			return create(record);
		};		
		this.getRecord = function(Id){
			var deferred = $q.defer();
            remotTKClient.retrieve('Contact',
                                   Id, 
                                   'Name,Id', 
                                   function(result){
                                       deferred.resolve(result);
            						},
                                   function(err){
                                       deferred.fail(result);
                                   });
            return deferred.promise;
		};
        
		this.update = function(recId, record, callback){
            var deferred = $q.defer();
			delete record.Id;
            record.LastName = record.Name;
            remotTKClient.update('Contact', recId, {LastName: record.Name}, function(response){
                deferred.resolve(response);
            },function(response){
                deferred.resolve(response);
            });
            return deferred.promise;
		};
		this.delete = function(recId, callback) {
            var deferred = $q.defer();
            remotTKClient.del('Contact', recId, function(response){
                deferred.resolve({success:true});
            }, function(error){
                deferred.fail({success:false, error:error});
            });
            return deferred.promise;
		};
		return this;
	});