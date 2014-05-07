/**
 * Controllers
 *
 * @authors
 * Sravan
 */
angular.module('bumble.controllers', []);
angular.module('bumble.controllers')
	.controller('bumbleCreateCtrl', function($scope, bumbleRecordsSvc){
		$scope.record = {};
		$scope.create = function() {
            bumbleRecordsSvc.create($scope.record).then(function(response){
                if(response.success) {
                    $scope.record.Name = '';
                    alert('A new record has been created. Id = ' + response.id);
                }
            });
		}
	})
	.controller('bumbleReceiveCtrl', function($scope, bumbleRecordsSvc){
        $scope.refresh = function(){
        	bumbleRecordsSvc.query().then(function(records){
                $scope.records =  records;
            });    
        };
        
		$scope.delete = function(recId) {
            bumbleRecordsSvc.delete(recId).then(function(response){
                if(response.success) {
                    $scope.refresh();
                }
            });
		};
        
        $scope.init = function(){
        	$scope.refresh();    
        }
        
	})
	.controller('bumbleReceiveOneCtrl', function($scope, $stateParams, bumbleRecordsSvc){
        bumbleRecordsSvc.getRecord($stateParams.recId).then(function(record){
            $scope.record = record;
        });
	})
	.controller('bumbleUpdateCtrl', function($scope, $state, $stateParams, bumbleRecordsSvc){
        $scope.refresh = function(){
            bumbleRecordsSvc.getRecord($stateParams.recId)
                        .then(function(data){
                            $scope.record = data;
                        });  
        };
		$scope.save = function() {
            bumbleRecordsSvc.update($stateParams.recId, $scope.record).then(function(response){
                $state.go('receiveone');
            });
		};
        
        $scope.init = function(){
        	$scope.refresh();    
        };
	})
;