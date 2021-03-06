import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/users',
		data: user,
		success,
		error
	});
};

export const logout = function(success){
	$.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

export const update = function(id, success){
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

export const fetchProfile = function(id, success){
	$.ajax({
		method: 'GET',
		url: `/api/users/${id}`,
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

export const updateUser = function(id, data, success){
	$.ajax({
		method: 'PATCH',
		url: `/api/users/${id}`,
		data: {user: data},
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};
