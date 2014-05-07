/**
 * Application Entry Point
 *
 * @authors
 * Sravan
 */
'use strict';
angular.module('bumble', ['bumble.services', 'bumble.controllers', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/receive");
		$stateProvider
			.state('create', {
				url: '/create',
				templateUrl: 'apex/bumble_create_html',
				controller: 'bumbleCreateCtrl'
			})
			.state('update', {
				url: '/update/:recId',
				templateUrl: 'apex/bumble_update_html',
				controller: 'bumbleUpdateCtrl'
			})
			.state('receiveone', {
				url: '/receive/:recId',
				templateUrl: 'apex/bumble_receive_one_html',
				controller: 'bumbleReceiveOneCtrl'
			})
			.state('receive', {
				url: '/receive',
				templateUrl: 'apex/bumble_receive_html',
				controller: 'bumbleReceiveCtrl'
			})
	});