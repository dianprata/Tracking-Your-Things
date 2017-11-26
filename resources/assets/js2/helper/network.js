import axios from "axios";
import {waterfall} from "async";
import localStorage from "localStorage";

export function getRequest(url, action, errAction) {
    waterfall([
        function (callback) {
            let token = localStorage.getItem('sessionStorage');
            callback(null, token);
        }
    ], (err, token) => {
        axios.get(url, {
            "headers": {
                "Authorization": 'Bearer '+token
            }
        }).then(res => {
            action(res);
        })
            .catch(err => {
                errAction(err);
            });
    });
}

export function postRequest(url, data, action, errAction) {
    waterfall([
        function (callback) {
            let token = localStorage.getItem('sessionStorage');
            callback(null, token);
        }
    ], (err, token) => {
        axios.post(url, data, {
            "headers": {
                "Authorization": 'Bearer '+token
            }
        })
            .then(res => {
                action(res);
            })
            .catch(err => {
                errAction(err);
            });
    });
}

export function putRequest(url, data, action, errAction) {
    waterfall([
        function (callback) {
            let token = localStorage.getItem('sessionStorage');
            callback(null, token);
        }
    ], (err, token) => {
        axios.put(url, data, {
            "headers": {
                "Authorization": 'Bearer '+token
            }
        })
            .then(res => {
                action(res);
            })
            .catch(err => {
                errAction(err);
            });
    });
}

export function deleteRequest(url, successCallback, errorCallback) {
    let token = localStorage.getItem('sessionStorage');
    let headers = {
        headers: {
            "Authorization": 'Bearer '+token
        }
    };
    axios.delete(url, headers).then(res => {
        successCallback(res);
    })
        .catch(err => {
            errorCallback(err);
        });
}
