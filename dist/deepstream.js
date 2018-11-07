module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META_KEYS", function() { return META_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYLOAD_ENCODING", function() { return PAYLOAD_ENCODING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC", function() { return TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARSER_ACTIONS", function() { return PARSER_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECTION_ACTIONS", function() { return CONNECTION_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ACTIONS", function() { return AUTH_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_ACTIONS", function() { return EVENT_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECORD_ACTIONS", function() { return RECORD_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPC_ACTIONS", function() { return RPC_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESENCE_ACTIONS", function() { return PRESENCE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCK_ACTIONS", function() { return LOCK_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_ACTIONS", function() { return STATE_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUSTER_ACTIONS", function() { return CLUSTER_ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT", function() { return EVENT; });
var _ACTIONS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var META_KEYS;
(function (META_KEYS) {
    META_KEYS["payloadEncoding"] = "e";
    META_KEYS["name"] = "n";
    META_KEYS["names"] = "m";
    META_KEYS["subscription"] = "s";
    META_KEYS["correlationId"] = "c";
    META_KEYS["version"] = "v";
    META_KEYS["path"] = "p";
    META_KEYS["reason"] = "r";
    META_KEYS["url"] = "u";
    META_KEYS["originalTopic"] = "t";
    META_KEYS["originalAction"] = "a";
    META_KEYS["protocolVersion"] = "x";
    META_KEYS["requestorName"] = "rn";
    META_KEYS["requestorData"] = "rd";
    META_KEYS["registryTopic"] = "rt";
})(META_KEYS || (META_KEYS = {}));
var PAYLOAD_ENCODING;
(function (PAYLOAD_ENCODING) {
    PAYLOAD_ENCODING["JSON"] = "j";
    PAYLOAD_ENCODING["BINARY"] = "b";
})(PAYLOAD_ENCODING || (PAYLOAD_ENCODING = {}));
var TOPIC;
(function (TOPIC) {
    TOPIC[TOPIC["ERROR"] = 0] = "ERROR";
    TOPIC[TOPIC["PARSER"] = 1] = "PARSER";
    TOPIC[TOPIC["CONNECTION"] = 2] = "CONNECTION";
    TOPIC[TOPIC["AUTH"] = 3] = "AUTH";
    TOPIC[TOPIC["EVENT"] = 4] = "EVENT";
    TOPIC[TOPIC["RECORD"] = 5] = "RECORD";
    TOPIC[TOPIC["RPC"] = 6] = "RPC";
    TOPIC[TOPIC["PRESENCE"] = 7] = "PRESENCE";
    TOPIC[TOPIC["SUBSCRIPTIONS"] = 16] = "SUBSCRIPTIONS";
    TOPIC[TOPIC["ONLINE_USERS"] = 17] = "ONLINE_USERS";
    TOPIC[TOPIC["EVENT_SUBSCRIPTIONS"] = 32] = "EVENT_SUBSCRIPTIONS";
    TOPIC[TOPIC["RECORD_SUBSCRIPTIONS"] = 33] = "RECORD_SUBSCRIPTIONS";
    TOPIC[TOPIC["RPC_SUBSCRIPTIONS"] = 34] = "RPC_SUBSCRIPTIONS";
    TOPIC[TOPIC["PRESENCE_SUBSCRIPTIONS"] = 35] = "PRESENCE_SUBSCRIPTIONS";
    TOPIC[TOPIC["RECORD_LISTEN_PATTERNS"] = 36] = "RECORD_LISTEN_PATTERNS";
    TOPIC[TOPIC["EVENT_LISTEN_PATTERNS"] = 37] = "EVENT_LISTEN_PATTERNS";
    TOPIC[TOPIC["RECORD_PUBLISHED_SUBSCRIPTIONS"] = 38] = "RECORD_PUBLISHED_SUBSCRIPTIONS";
    TOPIC[TOPIC["EVENT_PUBLISHED_SUBSCRIPTIONS"] = 39] = "EVENT_PUBLISHED_SUBSCRIPTIONS";
    TOPIC[TOPIC["RECORD_LISTENING"] = 40] = "RECORD_LISTENING";
    TOPIC[TOPIC["EVENT_LISTENING"] = 41] = "EVENT_LISTENING";
    TOPIC[TOPIC["STATE_REGISTRY"] = 48] = "STATE_REGISTRY";
    TOPIC[TOPIC["CLUSTER"] = 49] = "CLUSTER";
    TOPIC[TOPIC["LOCK"] = 50] = "LOCK";
})(TOPIC || (TOPIC = {}));
var PARSER_ACTIONS;
(function (PARSER_ACTIONS) {
    PARSER_ACTIONS[PARSER_ACTIONS["UNKNOWN_TOPIC"] = 80] = "UNKNOWN_TOPIC";
    PARSER_ACTIONS[PARSER_ACTIONS["UNKNOWN_ACTION"] = 81] = "UNKNOWN_ACTION";
    PARSER_ACTIONS[PARSER_ACTIONS["INVALID_MESSAGE"] = 82] = "INVALID_MESSAGE";
    PARSER_ACTIONS[PARSER_ACTIONS["MESSAGE_PARSE_ERROR"] = 83] = "MESSAGE_PARSE_ERROR";
    PARSER_ACTIONS[PARSER_ACTIONS["MAXIMUM_MESSAGE_SIZE_EXCEEDED"] = 84] = "MAXIMUM_MESSAGE_SIZE_EXCEEDED";
    PARSER_ACTIONS[PARSER_ACTIONS["ERROR"] = 85] = "ERROR";
    PARSER_ACTIONS[PARSER_ACTIONS["INVALID_META_PARAMS"] = 86] = "INVALID_META_PARAMS";
})(PARSER_ACTIONS || (PARSER_ACTIONS = {}));
var CONNECTION_ACTIONS;
(function (CONNECTION_ACTIONS) {
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["ERROR"] = 0] = "ERROR";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["PING"] = 1] = "PING";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["PONG"] = 2] = "PONG";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["ACCEPT"] = 3] = "ACCEPT";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["CHALLENGE"] = 4] = "CHALLENGE";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["REJECT"] = 6] = "REJECT";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["REDIRECT"] = 7] = "REDIRECT";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["CLOSING"] = 8] = "CLOSING";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["CLOSED"] = 9] = "CLOSED";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["AUTHENTICATION_TIMEOUT"] = 80] = "AUTHENTICATION_TIMEOUT";
    CONNECTION_ACTIONS[CONNECTION_ACTIONS["INVALID_MESSAGE"] = 82] = "INVALID_MESSAGE";
})(CONNECTION_ACTIONS || (CONNECTION_ACTIONS = {}));
var AUTH_ACTIONS;
(function (AUTH_ACTIONS) {
    AUTH_ACTIONS[AUTH_ACTIONS["ERROR"] = 0] = "ERROR";
    AUTH_ACTIONS[AUTH_ACTIONS["REQUEST"] = 1] = "REQUEST";
    AUTH_ACTIONS[AUTH_ACTIONS["AUTH_SUCCESSFUL"] = 2] = "AUTH_SUCCESSFUL";
    AUTH_ACTIONS[AUTH_ACTIONS["AUTH_UNSUCCESSFUL"] = 3] = "AUTH_UNSUCCESSFUL";
    AUTH_ACTIONS[AUTH_ACTIONS["TOO_MANY_AUTH_ATTEMPTS"] = 80] = "TOO_MANY_AUTH_ATTEMPTS";
    AUTH_ACTIONS[AUTH_ACTIONS["INVALID_MESSAGE"] = 82] = "INVALID_MESSAGE";
    AUTH_ACTIONS[AUTH_ACTIONS["INVALID_MESSAGE_DATA"] = 98] = "INVALID_MESSAGE_DATA";
})(AUTH_ACTIONS || (AUTH_ACTIONS = {}));
var EVENT_ACTIONS;
(function (EVENT_ACTIONS) {
    EVENT_ACTIONS[EVENT_ACTIONS["ERROR"] = 0] = "ERROR";
    EVENT_ACTIONS[EVENT_ACTIONS["EMIT"] = 1] = "EMIT";
    EVENT_ACTIONS[EVENT_ACTIONS["SUBSCRIBE"] = 2] = "SUBSCRIBE";
    EVENT_ACTIONS[EVENT_ACTIONS["SUBSCRIBE_ACK"] = 130] = "SUBSCRIBE_ACK";
    EVENT_ACTIONS[EVENT_ACTIONS["UNSUBSCRIBE"] = 3] = "UNSUBSCRIBE";
    EVENT_ACTIONS[EVENT_ACTIONS["UNSUBSCRIBE_ACK"] = 131] = "UNSUBSCRIBE_ACK";
    EVENT_ACTIONS[EVENT_ACTIONS["LISTEN"] = 4] = "LISTEN";
    EVENT_ACTIONS[EVENT_ACTIONS["LISTEN_ACK"] = 132] = "LISTEN_ACK";
    EVENT_ACTIONS[EVENT_ACTIONS["UNLISTEN"] = 5] = "UNLISTEN";
    EVENT_ACTIONS[EVENT_ACTIONS["UNLISTEN_ACK"] = 133] = "UNLISTEN_ACK";
    EVENT_ACTIONS[EVENT_ACTIONS["LISTEN_ACCEPT"] = 6] = "LISTEN_ACCEPT";
    EVENT_ACTIONS[EVENT_ACTIONS["LISTEN_REJECT"] = 7] = "LISTEN_REJECT";
    EVENT_ACTIONS[EVENT_ACTIONS["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 8] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    EVENT_ACTIONS[EVENT_ACTIONS["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 9] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    EVENT_ACTIONS[EVENT_ACTIONS["INVALID_LISTEN_REGEX"] = 80] = "INVALID_LISTEN_REGEX";
    EVENT_ACTIONS[EVENT_ACTIONS["MESSAGE_PERMISSION_ERROR"] = 96] = "MESSAGE_PERMISSION_ERROR";
    EVENT_ACTIONS[EVENT_ACTIONS["MESSAGE_DENIED"] = 97] = "MESSAGE_DENIED";
    EVENT_ACTIONS[EVENT_ACTIONS["INVALID_MESSAGE_DATA"] = 98] = "INVALID_MESSAGE_DATA";
    EVENT_ACTIONS[EVENT_ACTIONS["MULTIPLE_SUBSCRIPTIONS"] = 99] = "MULTIPLE_SUBSCRIPTIONS";
    EVENT_ACTIONS[EVENT_ACTIONS["NOT_SUBSCRIBED"] = 100] = "NOT_SUBSCRIBED";
})(EVENT_ACTIONS || (EVENT_ACTIONS = {}));
var RECORD_ACTIONS;
(function (RECORD_ACTIONS) {
    RECORD_ACTIONS[RECORD_ACTIONS["ERROR"] = 0] = "ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["READ"] = 1] = "READ";
    RECORD_ACTIONS[RECORD_ACTIONS["READ_RESPONSE"] = 2] = "READ_RESPONSE";
    RECORD_ACTIONS[RECORD_ACTIONS["HEAD"] = 3] = "HEAD";
    RECORD_ACTIONS[RECORD_ACTIONS["HEAD_RESPONSE"] = 4] = "HEAD_RESPONSE";
    RECORD_ACTIONS[RECORD_ACTIONS["DELETE"] = 5] = "DELETE";
    RECORD_ACTIONS[RECORD_ACTIONS["DELETE_SUCCESS"] = 6] = "DELETE_SUCCESS";
    RECORD_ACTIONS[RECORD_ACTIONS["DELETED"] = 8] = "DELETED";
    RECORD_ACTIONS[RECORD_ACTIONS["WRITE_ACKNOWLEDGEMENT"] = 9] = "WRITE_ACKNOWLEDGEMENT";
    RECORD_ACTIONS[RECORD_ACTIONS["CREATE"] = 16] = "CREATE";
    RECORD_ACTIONS[RECORD_ACTIONS["CREATEANDUPDATE"] = 17] = "CREATEANDUPDATE";
    RECORD_ACTIONS[RECORD_ACTIONS["CREATEANDUPDATE_WITH_WRITE_ACK"] = 18] = "CREATEANDUPDATE_WITH_WRITE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["CREATEANDPATCH"] = 19] = "CREATEANDPATCH";
    RECORD_ACTIONS[RECORD_ACTIONS["CREATEANDPATCH_WITH_WRITE_ACK"] = 20] = "CREATEANDPATCH_WITH_WRITE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["UPDATE"] = 21] = "UPDATE";
    RECORD_ACTIONS[RECORD_ACTIONS["UPDATE_WITH_WRITE_ACK"] = 22] = "UPDATE_WITH_WRITE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["PATCH"] = 23] = "PATCH";
    RECORD_ACTIONS[RECORD_ACTIONS["PATCH_WITH_WRITE_ACK"] = 24] = "PATCH_WITH_WRITE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["ERASE"] = 25] = "ERASE";
    RECORD_ACTIONS[RECORD_ACTIONS["ERASE_WITH_WRITE_ACK"] = 26] = "ERASE_WITH_WRITE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBEANDHEAD"] = 32] = "SUBSCRIBEANDHEAD";
    // SUBSCRIBEANDHEAD_RESPONSE = 0x21,
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBEANDREAD"] = 34] = "SUBSCRIBEANDREAD";
    // SUBSCRIBEANDREAD_RESPONSE = 0x23,
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBECREATEANDREAD"] = 36] = "SUBSCRIBECREATEANDREAD";
    // SUBSCRIBECREATEANDREAD_RESPONSE = 0x25,
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBECREATEANDUPDATE"] = 38] = "SUBSCRIBECREATEANDUPDATE";
    // SUBSCRIBECREATEANDUPDATE_RESPONSE = 0x27,
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBE"] = 40] = "SUBSCRIBE";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIBE_ACK"] = 168] = "SUBSCRIBE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["UNSUBSCRIBE"] = 41] = "UNSUBSCRIBE";
    RECORD_ACTIONS[RECORD_ACTIONS["UNSUBSCRIBE_ACK"] = 169] = "UNSUBSCRIBE_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["LISTEN"] = 48] = "LISTEN";
    RECORD_ACTIONS[RECORD_ACTIONS["LISTEN_ACK"] = 176] = "LISTEN_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["UNLISTEN"] = 49] = "UNLISTEN";
    RECORD_ACTIONS[RECORD_ACTIONS["UNLISTEN_ACK"] = 177] = "UNLISTEN_ACK";
    RECORD_ACTIONS[RECORD_ACTIONS["LISTEN_ACCEPT"] = 50] = "LISTEN_ACCEPT";
    RECORD_ACTIONS[RECORD_ACTIONS["LISTEN_REJECT"] = 51] = "LISTEN_REJECT";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIPTION_HAS_PROVIDER"] = 52] = "SUBSCRIPTION_HAS_PROVIDER";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIPTION_HAS_NO_PROVIDER"] = 53] = "SUBSCRIPTION_HAS_NO_PROVIDER";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 54] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    RECORD_ACTIONS[RECORD_ACTIONS["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 55] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    RECORD_ACTIONS[RECORD_ACTIONS["CACHE_RETRIEVAL_TIMEOUT"] = 80] = "CACHE_RETRIEVAL_TIMEOUT";
    RECORD_ACTIONS[RECORD_ACTIONS["STORAGE_RETRIEVAL_TIMEOUT"] = 81] = "STORAGE_RETRIEVAL_TIMEOUT";
    RECORD_ACTIONS[RECORD_ACTIONS["VERSION_EXISTS"] = 82] = "VERSION_EXISTS";
    RECORD_ACTIONS[RECORD_ACTIONS["RECORD_LOAD_ERROR"] = 83] = "RECORD_LOAD_ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["RECORD_CREATE_ERROR"] = 84] = "RECORD_CREATE_ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["RECORD_UPDATE_ERROR"] = 85] = "RECORD_UPDATE_ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["RECORD_DELETE_ERROR"] = 86] = "RECORD_DELETE_ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["RECORD_NOT_FOUND"] = 88] = "RECORD_NOT_FOUND";
    RECORD_ACTIONS[RECORD_ACTIONS["INVALID_VERSION"] = 89] = "INVALID_VERSION";
    RECORD_ACTIONS[RECORD_ACTIONS["INVALID_PATCH_ON_HOTPATH"] = 90] = "INVALID_PATCH_ON_HOTPATH";
    RECORD_ACTIONS[RECORD_ACTIONS["INVALID_LISTEN_REGEX"] = 91] = "INVALID_LISTEN_REGEX";
    RECORD_ACTIONS[RECORD_ACTIONS["MESSAGE_PERMISSION_ERROR"] = 96] = "MESSAGE_PERMISSION_ERROR";
    RECORD_ACTIONS[RECORD_ACTIONS["MESSAGE_DENIED"] = 97] = "MESSAGE_DENIED";
    RECORD_ACTIONS[RECORD_ACTIONS["INVALID_MESSAGE_DATA"] = 98] = "INVALID_MESSAGE_DATA";
    RECORD_ACTIONS[RECORD_ACTIONS["MULTIPLE_SUBSCRIPTIONS"] = 99] = "MULTIPLE_SUBSCRIPTIONS";
    RECORD_ACTIONS[RECORD_ACTIONS["NOT_SUBSCRIBED"] = 100] = "NOT_SUBSCRIBED";
})(RECORD_ACTIONS || (RECORD_ACTIONS = {}));
var RPC_ACTIONS;
(function (RPC_ACTIONS) {
    RPC_ACTIONS[RPC_ACTIONS["ERROR"] = 0] = "ERROR";
    RPC_ACTIONS[RPC_ACTIONS["REQUEST"] = 1] = "REQUEST";
    RPC_ACTIONS[RPC_ACTIONS["ACCEPT"] = 2] = "ACCEPT";
    RPC_ACTIONS[RPC_ACTIONS["RESPONSE"] = 3] = "RESPONSE";
    RPC_ACTIONS[RPC_ACTIONS["REJECT"] = 4] = "REJECT";
    RPC_ACTIONS[RPC_ACTIONS["REQUEST_ERROR"] = 5] = "REQUEST_ERROR";
    RPC_ACTIONS[RPC_ACTIONS["PROVIDE"] = 6] = "PROVIDE";
    RPC_ACTIONS[RPC_ACTIONS["PROVIDE_ACK"] = 134] = "PROVIDE_ACK";
    RPC_ACTIONS[RPC_ACTIONS["UNPROVIDE"] = 7] = "UNPROVIDE";
    RPC_ACTIONS[RPC_ACTIONS["UNPROVIDE_ACK"] = 135] = "UNPROVIDE_ACK";
    RPC_ACTIONS[RPC_ACTIONS["NO_RPC_PROVIDER"] = 80] = "NO_RPC_PROVIDER";
    RPC_ACTIONS[RPC_ACTIONS["ACCEPT_TIMEOUT"] = 82] = "ACCEPT_TIMEOUT";
    RPC_ACTIONS[RPC_ACTIONS["MULTIPLE_ACCEPT"] = 83] = "MULTIPLE_ACCEPT";
    RPC_ACTIONS[RPC_ACTIONS["INVALID_RPC_CORRELATION_ID"] = 84] = "INVALID_RPC_CORRELATION_ID";
    RPC_ACTIONS[RPC_ACTIONS["RESPONSE_TIMEOUT"] = 85] = "RESPONSE_TIMEOUT";
    RPC_ACTIONS[RPC_ACTIONS["MULTIPLE_RESPONSE"] = 86] = "MULTIPLE_RESPONSE";
    RPC_ACTIONS[RPC_ACTIONS["MESSAGE_PERMISSION_ERROR"] = 96] = "MESSAGE_PERMISSION_ERROR";
    RPC_ACTIONS[RPC_ACTIONS["MESSAGE_DENIED"] = 97] = "MESSAGE_DENIED";
    RPC_ACTIONS[RPC_ACTIONS["INVALID_MESSAGE_DATA"] = 98] = "INVALID_MESSAGE_DATA";
    RPC_ACTIONS[RPC_ACTIONS["MULTIPLE_PROVIDERS"] = 99] = "MULTIPLE_PROVIDERS";
    RPC_ACTIONS[RPC_ACTIONS["NOT_PROVIDED"] = 100] = "NOT_PROVIDED";
})(RPC_ACTIONS || (RPC_ACTIONS = {}));
var PRESENCE_ACTIONS;
(function (PRESENCE_ACTIONS) {
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["ERROR"] = 0] = "ERROR";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["QUERY_ALL"] = 1] = "QUERY_ALL";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["QUERY_ALL_RESPONSE"] = 2] = "QUERY_ALL_RESPONSE";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["QUERY"] = 3] = "QUERY";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["QUERY_RESPONSE"] = 4] = "QUERY_RESPONSE";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["PRESENCE_JOIN"] = 5] = "PRESENCE_JOIN";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["PRESENCE_JOIN_ALL"] = 6] = "PRESENCE_JOIN_ALL";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["PRESENCE_LEAVE"] = 7] = "PRESENCE_LEAVE";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["PRESENCE_LEAVE_ALL"] = 8] = "PRESENCE_LEAVE_ALL";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["SUBSCRIBE"] = 9] = "SUBSCRIBE";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["SUBSCRIBE_ACK"] = 137] = "SUBSCRIBE_ACK";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["UNSUBSCRIBE"] = 10] = "UNSUBSCRIBE";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["UNSUBSCRIBE_ACK"] = 138] = "UNSUBSCRIBE_ACK";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["SUBSCRIBE_ALL"] = 11] = "SUBSCRIBE_ALL";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["SUBSCRIBE_ALL_ACK"] = 139] = "SUBSCRIBE_ALL_ACK";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["UNSUBSCRIBE_ALL"] = 12] = "UNSUBSCRIBE_ALL";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["UNSUBSCRIBE_ALL_ACK"] = 140] = "UNSUBSCRIBE_ALL_ACK";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["INVALID_PRESENCE_USERS"] = 80] = "INVALID_PRESENCE_USERS";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["MESSAGE_PERMISSION_ERROR"] = 96] = "MESSAGE_PERMISSION_ERROR";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["MESSAGE_DENIED"] = 97] = "MESSAGE_DENIED";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["MULTIPLE_SUBSCRIPTIONS"] = 99] = "MULTIPLE_SUBSCRIPTIONS";
    PRESENCE_ACTIONS[PRESENCE_ACTIONS["NOT_SUBSCRIBED"] = 100] = "NOT_SUBSCRIBED";
})(PRESENCE_ACTIONS || (PRESENCE_ACTIONS = {}));
var LOCK_ACTIONS;
(function (LOCK_ACTIONS) {
    LOCK_ACTIONS[LOCK_ACTIONS["ERROR"] = 0] = "ERROR";
    LOCK_ACTIONS[LOCK_ACTIONS["REQUEST"] = 1] = "REQUEST";
    LOCK_ACTIONS[LOCK_ACTIONS["RESPONSE"] = 2] = "RESPONSE";
    LOCK_ACTIONS[LOCK_ACTIONS["RELEASE"] = 3] = "RELEASE";
})(LOCK_ACTIONS || (LOCK_ACTIONS = {}));
var STATE_ACTIONS;
(function (STATE_ACTIONS) {
    STATE_ACTIONS[STATE_ACTIONS["ERROR"] = 0] = "ERROR";
    STATE_ACTIONS[STATE_ACTIONS["ADD"] = 1] = "ADD";
    STATE_ACTIONS[STATE_ACTIONS["REMOVE"] = 2] = "REMOVE";
    STATE_ACTIONS[STATE_ACTIONS["REQUEST_FULL_STATE"] = 3] = "REQUEST_FULL_STATE";
    STATE_ACTIONS[STATE_ACTIONS["FULL_STATE"] = 4] = "FULL_STATE";
})(STATE_ACTIONS || (STATE_ACTIONS = {}));
var CLUSTER_ACTIONS;
(function (CLUSTER_ACTIONS) {
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["PING"] = 0] = "PING";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["PONG"] = 1] = "PONG";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["CLOSE"] = 2] = "CLOSE";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["REJECT"] = 3] = "REJECT";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["REJECT_DUPLICATE"] = 4] = "REJECT_DUPLICATE";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["IDENTIFICATION_REQUEST"] = 5] = "IDENTIFICATION_REQUEST";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["IDENTIFICATION_RESPONSE"] = 6] = "IDENTIFICATION_RESPONSE";
    CLUSTER_ACTIONS[CLUSTER_ACTIONS["KNOWN_PEERS"] = 7] = "KNOWN_PEERS";
})(CLUSTER_ACTIONS || (CLUSTER_ACTIONS = {}));
var ACTIONS = (_ACTIONS = {}, _defineProperty(_ACTIONS, TOPIC.PARSER, PARSER_ACTIONS), _defineProperty(_ACTIONS, TOPIC.CONNECTION, CONNECTION_ACTIONS), _defineProperty(_ACTIONS, TOPIC.AUTH, AUTH_ACTIONS), _defineProperty(_ACTIONS, TOPIC.EVENT, EVENT_ACTIONS), _defineProperty(_ACTIONS, TOPIC.RECORD, RECORD_ACTIONS), _defineProperty(_ACTIONS, TOPIC.RPC, RPC_ACTIONS), _defineProperty(_ACTIONS, TOPIC.PRESENCE, PRESENCE_ACTIONS), _defineProperty(_ACTIONS, TOPIC.LOCK, LOCK_ACTIONS), _defineProperty(_ACTIONS, TOPIC.STATE_REGISTRY, STATE_ACTIONS), _defineProperty(_ACTIONS, TOPIC.CLUSTER, CLUSTER_ACTIONS), _ACTIONS);
var EVENT;
(function (EVENT) {
    EVENT["INFO"] = "INFO";
    EVENT["DEPRECATED"] = "DEPRECATED";
    EVENT["INCOMING_CONNECTION"] = "INCOMING_CONNECTION";
    EVENT["CLOSED_SOCKET_INTERACTION"] = "CLOSED_SOCKET_INTERACTION";
    EVENT["CLIENT_DISCONNECTED"] = "CLIENT_DISCONNECTED";
    EVENT["CONNECTION_ERROR"] = "CONNECTION_ERROR";
    EVENT["AUTH_ERROR"] = "AUTH_ERROR";
    EVENT["PLUGIN_ERROR"] = "PLUGIN_ERROR";
    EVENT["PLUGIN_INITIALIZATION_ERROR"] = "PLUGIN_INITIALIZATION_ERROR";
    EVENT["PLUGIN_INITIALIZATION_TIMEOUT"] = "PLUGIN_INITIALIZATION_TIMEOUT";
    EVENT["TIMEOUT"] = "TIMEOUT";
    EVENT["LEADING_LISTEN"] = "LEADING_LISTEN";
    EVENT["LOCAL_LISTEN"] = "LOCAL_LISTEN";
    EVENT["INVALID_CONFIG_DATA"] = "INVALID_CONFIG_DATA";
    EVENT["INVALID_STATE_TRANSITION"] = "INVALID_STATE_TRANSITION";
    EVENT["INVALID_LEADER_REQUEST"] = "INVALID_LEADER_REQUEST";
})(EVENT || (EVENT = {}));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || Object.create(null);
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || Object.create(null);

  // all
  if (0 == arguments.length) {
    this._callbacks = Object.create(null);
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks[event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || Object.create(null);

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks[event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || Object.create(null);
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

/**
 * Returns an array listing the events for which the emitter has registered listeners.
 *
 * @return {Array}
 * @api public
 */
Emitter.prototype.eventNames = function(){
  return this._callbacks ? Object.keys(this._callbacks) : [];
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEADER_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return META_PAYLOAD_OVERFLOW_LENGTH; });
var HEADER_LENGTH = 8;
var META_PAYLOAD_OVERFLOW_LENGTH = Math.pow(2, 24) - 1;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isWriteAck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_TO_WRITE_ACK; });
/* unused harmony export reverseMapNumeric */
/* unused harmony export WRITE_ACK_TO_ACTION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESPONSE_TO_REQUEST; });
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var _ACTION_TO_WRITE_ACK, _TOPIC$RECORD, _TOPIC$PRESENCE, _TOPIC$RPC, _RESPONSE_TO_REQUEST;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function isWriteAck(action) {
    return action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH_WITH_WRITE_ACK || action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE_WITH_WRITE_ACK || action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH_WITH_WRITE_ACK || action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE_WITH_WRITE_ACK || action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE_WITH_WRITE_ACK || action === _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].WRITE_ACKNOWLEDGEMENT;
}
var ACTION_TO_WRITE_ACK = (_ACTION_TO_WRITE_ACK = {}, _defineProperty(_ACTION_TO_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH_WITH_WRITE_ACK), _defineProperty(_ACTION_TO_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE_WITH_WRITE_ACK), _defineProperty(_ACTION_TO_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH_WITH_WRITE_ACK), _defineProperty(_ACTION_TO_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE_WITH_WRITE_ACK), _defineProperty(_ACTION_TO_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE_WITH_WRITE_ACK), _ACTION_TO_WRITE_ACK);
/**
 * Like reverseMap but the values will be cast using Number(k)
 */
function reverseMapNumeric(map) {
    var reversedMap = {};
    for (var key in map) {
        reversedMap[map[key]] = Number(key);
    }
    return reversedMap;
}
var WRITE_ACK_TO_ACTION = reverseMapNumeric(ACTION_TO_WRITE_ACK);
var RESPONSE_TO_REQUEST = (_RESPONSE_TO_REQUEST = {}, _defineProperty(_RESPONSE_TO_REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RECORD, (_TOPIC$RECORD = {}, _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE_SUCCESS, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE), _TOPIC$RECORD)), _defineProperty(_RESPONSE_TO_REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PRESENCE, (_TOPIC$PRESENCE = {}, _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL), _TOPIC$PRESENCE)), _defineProperty(_RESPONSE_TO_REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RPC, (_TOPIC$RPC = {}, _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ACCEPT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ERROR, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST), _TOPIC$RPC)), _defineProperty(_RESPONSE_TO_REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].EVENT, {}), _RESPONSE_TO_REQUEST);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export META_PARAMS_SPEC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateMeta; });
/* unused harmony export hasCorrelationId */
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _TOPIC$PARSER, _TOPIC$CONNECTION, _TOPIC$AUTH, _TOPIC$RECORD, _TOPIC$RPC, _TOPIC$EVENT, _TOPIC$PRESENCE, _TOPIC$CLUSTER, _TOPIC$STATE_REGISTRY, _META_PARAMS_SPEC, _payloadMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*
 * Specification of  fields within Meta Params used for message validation
 * (see `validateMeta`)
 *
 * META_PARAMS_SPEC[topic][action] => [required, optional]
 * The keys in `required` must be present in all instances of the message
 * The keys in `optional` may be present in some instances of the message
 */
var META_PARAMS_SPEC = (_META_PARAMS_SPEC = {}, _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PARSER, (_TOPIC$PARSER = {}, _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_TOPIC, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_ACTION, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_MESSAGE, [[], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_META_PARAMS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$PARSER)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].CONNECTION, (_TOPIC$CONNECTION = {}, _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].PING, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].PONG, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CHALLENGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].url, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].protocolVersion], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].ACCEPT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].REJECT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].REDIRECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].url], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CLOSING, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CLOSED, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].ERROR, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].AUTHENTICATION_TIMEOUT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].INVALID_MESSAGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$CONNECTION)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].AUTH, (_TOPIC$AUTH = {}, _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].REQUEST, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_SUCCESSFUL, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_UNSUCCESSFUL, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].TOO_MANY_AUTH_ATTEMPTS, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].INVALID_MESSAGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$AUTH)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RECORD, (_TOPIC$RECORD = {}, _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].NOT_SUBSCRIBED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBEANDHEAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBEANDREAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBECREATEANDUPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE_SUCCESS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_HAS_NO_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].WRITE_ACKNOWLEDGEMENT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].VERSION_EXISTS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CACHE_RETRIEVAL_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].STORAGE_RETRIEVAL_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_LOAD_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_CREATE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_UPDATE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_DELETE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_NOT_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_VERSION, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_PATCH_ON_HOTPATH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNLISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNLISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_LISTEN_REGEX, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _TOPIC$RECORD)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RPC, (_TOPIC$RPC = {}, _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].reason]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].requestorName, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].requestorData]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].PROVIDE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].PROVIDE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].UNPROVIDE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].UNPROVIDE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_PROVIDERS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].NOT_PROVIDED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].RESPONSE_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].INVALID_RPC_CORRELATION_ID, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ACCEPT_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].NO_RPC_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _TOPIC$RPC)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].EVENT, (_TOPIC$EVENT = {}, _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].EMIT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].NOT_SUBSCRIBED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNLISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNLISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].INVALID_LISTEN_REGEX, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$EVENT)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PRESENCE, (_TOPIC$PRESENCE = {}, _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ALL, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ALL_ACK, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ALL_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].NOT_SUBSCRIBED, [[], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_JOIN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_LEAVE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_JOIN_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_LEAVE_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].INVALID_PRESENCE_USERS, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name]]), _TOPIC$PRESENCE)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].CLUSTER, (_TOPIC$CLUSTER = {}, _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].CLOSE, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_REQUEST, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_RESPONSE, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].KNOWN_PEERS, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].PING, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].PONG, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].REJECT, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].REJECT_DUPLICATE, [[], []]), _TOPIC$CLUSTER)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].STATE_REGISTRY, (_TOPIC$STATE_REGISTRY = {}, _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].ADD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].REMOVE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].REQUEST_FULL_STATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].FULL_STATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _TOPIC$STATE_REGISTRY)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].LOCK, {}), _META_PARAMS_SPEC);
var payloadMap = (_payloadMap = {}, _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PARSER, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].MESSAGE_PARSE_ERROR, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_META_PARAMS]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].AUTH, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_SUCCESSFUL, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_UNSUCCESSFUL]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RECORD, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE_WITH_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH_WITH_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE_WITH_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH_WITH_WRITE_ACK, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].VERSION_EXISTS]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RPC, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST_ERROR]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].EVENT, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].EMIT]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PRESENCE, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_RESPONSE]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].CLUSTER, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_REQUEST, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_RESPONSE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].KNOWN_PEERS]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].STATE_REGISTRY, [_message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].FULL_STATE]), _defineProperty(_payloadMap, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].LOCK, []), _payloadMap);
function mapOfArraysHas(map, topic, action) {
    var actions = map[topic];
    if (!actions) {
        return false;
    }
    return actions.indexOf(action) !== -1;
}
var hasPayload = function hasPayload(topic, action) {
    return mapOfArraysHas(payloadMap, topic, action);
};
function validateMeta(topic, action, meta) {
    var spec = META_PARAMS_SPEC[topic][action];
    if (!spec) {
        return 'no meta spec';
    }

    var _spec = _slicedToArray(spec, 2),
        required = _spec[0],
        optional = _spec[1];

    for (var key in meta) {
        if (meta[key] !== undefined && required.indexOf(key) === -1 && optional.indexOf(key) === -1) {
            return 'meta object has unknown key ' + key;
        }
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = required[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var req = _step.value;

            if (meta[req] === undefined) {
                return 'meta object does not have required key ' + req;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return;
}
function hasCorrelationId(topic, action) {
    var spec = META_PARAMS_SPEC[topic][action];
    if (!spec) {
        return;
    }

    var _spec2 = _slicedToArray(spec, 2),
        required = _spec2[0],
        optional = _spec2[1];

    return required.indexOf(_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId) !== -1 || optional.indexOf(_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId) !== -1;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export isError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseData; });
/* unused harmony export parseJSON */
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _message_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* tslint:disable:no-bitwise */




function isError(message) {
    return message.action >= 0x50 && message.action < 0x70 || message.topic === _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PARSER;
}
function parse(buffer) {
    var queue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var offset = 0;
    var messages = [];
    do {
        var _readBinary = readBinary(buffer, offset),
            bytesConsumed = _readBinary.bytesConsumed,
            rawMessage = _readBinary.rawMessage;

        if (!rawMessage) {
            break;
        }
        queue.push(rawMessage);
        offset += bytesConsumed;
        if (rawMessage.fin) {
            var joinedMessage = joinMessages(queue);
            var message = parseMessage(joinedMessage);
            queue.length = 0;
            messages.push(message);
        }
    } while (offset < buffer.length);
    return messages;
}
function parseData(message) {
    if (message.parsedData !== undefined || message.data === undefined) {
        return true;
    }
    if (message.payloadEncoding && message.payloadEncoding !== _message_constants__WEBPACK_IMPORTED_MODULE_0__["PAYLOAD_ENCODING"].JSON) {
        return new Error('unable to parse data of type \'' + message.payloadEncoding + '\'');
    }
    if (typeof message.data === 'string') {
        return new Error('tried to parse string data with binary parser');
    }
    message.parsedData = parseJSON(message.data);
    if (message.parsedData === undefined) {
        return new Error('unable to parse data ' + message.data);
    }
    return true;
}
function readBinary(buff, offset) {
    if (buff.length < offset + _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"]) {
        return { bytesConsumed: 0 };
    }
    var fin = !!(buff[offset] & 0x80);
    var topic = buff[offset] & 0x7F;
    var action = buff[offset + 1];
    var metaLength = buff.readUIntBE(offset + 2, 3);
    var payloadLength = buff.readUIntBE(offset + 5, 3);
    var messageLength = _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"] + metaLength + payloadLength;
    if (buff.length < offset + messageLength) {
        return { bytesConsumed: 0 };
    }
    var rawHeader = buff.slice(offset, offset + _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"]);
    var rawMessage = { fin: fin, topic: topic, action: action, rawHeader: rawHeader };
    if (metaLength > 0) {
        rawMessage.meta = buff.slice(offset + _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"], offset + _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"] + metaLength);
    }
    if (payloadLength > 0) {
        rawMessage.payload = buff.slice(offset + _constants__WEBPACK_IMPORTED_MODULE_1__[/* HEADER_LENGTH */ "a"] + metaLength, offset + messageLength);
    }
    return {
        bytesConsumed: messageLength,
        rawMessage: rawMessage
    };
}
function joinMessages(rawMessages) {
    if (rawMessages.length === 0) {
        throw new Error('parseMessage must not be called with an empty message queue');
    }
    if (rawMessages.length === 1) {
        return rawMessages[0];
    }
    var _rawMessages$ = rawMessages[0],
        topic = _rawMessages$.topic,
        action = _rawMessages$.action,
        rawHeader = _rawMessages$.rawHeader;

    var payloadSections = [];
    var metaSections = [];
    rawMessages.forEach(function (_ref) {
        var payloadSection = _ref.payload,
            metaSection = _ref.meta;

        if (payloadSection) {
            payloadSections.push(payloadSection);
        }
        if (metaSection) {
            metaSections.push(metaSection);
        }
    });
    var payload = Buffer.concat(payloadSections);
    var meta = Buffer.concat(metaSections);
    return { fin: true, topic: topic, action: action, rawHeader: rawHeader, meta: meta, payload: payload };
}
function parseMessage(rawMessage) {
    var rawTopic = rawMessage.topic,
        rawAction = rawMessage.action,
        rawHeader = rawMessage.rawHeader;

    if (_message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][rawTopic] === undefined) {
        return {
            parseError: true,
            action: _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_TOPIC,
            parsedMessage: {
                topic: rawTopic,
                action: rawAction
            },
            description: 'unknown topic ' + rawTopic,
            raw: rawHeader
        };
    }
    var topic = rawTopic;
    if (_message_constants__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][topic][rawAction] === undefined) {
        return {
            parseError: true,
            action: _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_ACTION,
            parsedMessage: {
                topic: topic,
                action: rawAction
            },
            description: 'unknown ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][topic] + ' action ' + rawAction,
            raw: rawHeader
        };
    }
    // mask out uppermost bit(ACK)
    var action = rawAction & 0x7F;
    var message = { topic: topic, action: action };
    if (rawMessage.meta && rawMessage.meta.length > 0) {
        var meta = parseJSON(rawMessage.meta);
        if (!meta || (typeof meta === 'undefined' ? 'undefined' : _typeof(meta)) !== 'object') {
            return {
                parseError: true,
                action: _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].MESSAGE_PARSE_ERROR,
                parsedMessage: message,
                description: 'invalid meta field ' + rawMessage.meta.toString(),
                raw: rawHeader
            };
        }
        var metaError = Object(_message_validator__WEBPACK_IMPORTED_MODULE_3__[/* validateMeta */ "b"])(topic, rawAction, meta);
        if (metaError) {
            throw new Error('invalid meta ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][message.topic] + ' ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][message.topic][message.action] + ': ' + metaError);
            // return {
            //   parseError: true,
            //   action: PARSER_ACTIONS.INVALID_META_PARAMS,
            //   parsedMessage: message,
            //   description: 'invalid ack'
            // }
        }
        addMetadataToMessage(meta, message);
    }
    if (rawMessage.payload !== undefined) {
        if (!Object(_message_validator__WEBPACK_IMPORTED_MODULE_3__[/* hasPayload */ "a"])(message.topic, rawAction)) {
            return {
                parseError: true,
                action: _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_MESSAGE,
                parsedMessage: message,
                description: 'should not have a payload'
            };
        }
        if (!message.payloadEncoding && topic === _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PARSER) {
            message.payloadEncoding = _message_constants__WEBPACK_IMPORTED_MODULE_0__["PAYLOAD_ENCODING"].BINARY;
        }
        message.data = rawMessage.payload;
    }
    // if (rawMessage.payload && rawMessage.payload.length > 0) {
    //   const payload = parseJSON(rawMessage.payload)
    //   if (payload === undefined) {
    //     return {
    //       parseError: true,
    //       description: `invalid message data ${rawMessage.payload.toString()}`,
    //       parsedMessage: message,
    //       raw: rawHeader
    //     }
    //   }
    //   message.data = payload
    // }
    message.isAck = rawAction >= 0x80;
    message.isError = isError(message);
    if (message.topic === _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RECORD && Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isWriteAck */ "c"])(rawAction)) {
        message.isWriteAck = true;
    }
    return message;
}
function addMetadataToMessage(meta, message) {
    for (var key in _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"]) {
        var value = meta[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"][key]];
        if (value !== undefined) {
            message[key] = value;
        }
    }
}
function parseJSON(buff) {
    try {
        return JSON.parse(buff.toString());
    } catch (err) {
        return undefined;
    }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6).Buffer))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(15)
var ieee754 = __webpack_require__(16)
var isArray = __webpack_require__(17)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(18);
var util = __webpack_require__(20);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(21);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerRegistry; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerRegistry = function () {
    function TimerRegistry() {
        _classCallCheck(this, TimerRegistry);
    }

    _createClass(TimerRegistry, [{
        key: "add",
        value: function add(timeout) {
            return setTimeout(timeout.callback.bind(timeout.context, timeout.data), timeout.duration);
        }
    }, {
        key: "remove",
        value: function remove(timerId) {
            clearTimeout(timerId);
            return true;
        }
    }, {
        key: "requestIdleCallback",
        value: function requestIdleCallback(callback) {
            process.nextTick(callback);
        }
    }]);

    return TimerRegistry;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return socketFactory; });
/* harmony import */ var _binary_protocol_src_message_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _binary_protocol_src_message_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_3__);



var BrowserWebsocket = global.WebSocket || global.MozWebSocket;

var socketFactory = function socketFactory(url, options) {
    var socket = BrowserWebsocket ? new BrowserWebsocket(url, [], options) : new ws__WEBPACK_IMPORTED_MODULE_3__(url, options);
    if (BrowserWebsocket) {
        socket.binaryType = 'arraybuffer';
    }
    // tslint:disable-next-line:no-empty
    socket.onparsedmessage = function () {};
    socket.onmessage = function (raw) {
        if (typeof raw.data === 'string') {
            // TODO: We expect to always receive a buffer here but it seems like we
            // sometimes get string. How does this happen?
            raw.data = Buffer.from(raw.data);
        }
        var parseResults = Object(_binary_protocol_src_message_parser__WEBPACK_IMPORTED_MODULE_0__[/* parse */ "a"])(BrowserWebsocket ? new Buffer(new Uint8Array(raw.data)) : raw.data);
        socket.onparsedmessages(parseResults);
    };
    socket.sendParsedMessage = function (message) {
        if (message.topic === _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__["TOPIC"].CONNECTION && message.action === _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ACTIONS"].CLOSING) {
            socket.onparsedmessages([{ topic: _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__["TOPIC"].CONNECTION, action: _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__["CONNECTION_ACTIONS"].CLOSED }]);
            socket.close();
            return;
        }
        message.data = JSON.stringify(message.parsedData);
        socket.send(Object(_binary_protocol_src_message_builder__WEBPACK_IMPORTED_MODULE_1__[/* getMessage */ "a"])(message, false));
    };
    return socket;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7), __webpack_require__(6).Buffer))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMessage; });
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _message_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/**
 * Functions for handling (de)serialization of the deepstream binary realtime protocol.
 *
 * In brief, a message is a variable length binary blob with the following structure:
 *
 *  0                   1                   2                   3
 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 * +-+-------------+-+-------------+-------------------------------+
 * |F|  Message    |A|  Message    |             Meta              |
 * |I|   Topic     |C|  Action     |            Length             |
 * |N|    (7)      |K|   (7)       |             (24)              |
 * +-+-------------+-+-------------+-------------------------------+
 * | Meta Cont.    |              Payload Length (24)              |
 * +---------------+-----------------------------------------------+
 * :                     Meta Data (Meta Length * 8)               :
 * + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
 * |                  Payload Data (Payload Length * 8)            :
 * +---------------------------------------------------------------+
 *
 * The first 6 bytes of the message are the header, and the rest of the message is the payload.
 *
 * CONT (1 bit): The continuation bit. If this is set, the following payload of the following
 *                message must be appended to this one. If this is not set, parsing may finish
 *                after the payload is read.
 * RSV{0..3} (1 bit): Reserved for extension.
 * Meta Length (24 bits, unsigned big-endian): The total length of Meta Data in bytes.
 *                If Meta Data can be no longer than 16 MB.
 * Payload Length (24 bits, unsigned big-endian): The total length of Payload in bytes.
 *                If Payload is longer than 16 MB, it must be split into chunks of
 *                less than 2^24 bytes with identical topic and action, setting the CONT bit
 *                in all but the final chunk.
 *
 */
/* tslint:disable:no-bitwise */




function getMessage(msg, isAck) {
    var message = msg;
    var action = message.action;
    // convert action to write ack if necessary
    if (message.isWriteAck && !Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* isWriteAck */ "c"])(message.action)) {
        action = _utils__WEBPACK_IMPORTED_MODULE_1__[/* ACTION_TO_WRITE_ACK */ "a"][message.action];
    }
    if (message.isAck || isAck) {
        action |= 0x80;
        if (_message_constants__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][message.topic][message.action] === undefined) {
            throw new Error('message ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][message.topic] + ' ' + message.action + ' should not have an ack');
        }
    }
    var meta = Object.create(null);
    for (var key in _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"]) {
        meta[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"][key]] = message[key];
    }
    if (meta[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].payloadEncoding] === _message_constants__WEBPACK_IMPORTED_MODULE_0__["PAYLOAD_ENCODING"].JSON) {
        delete meta[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].payloadEncoding];
    }
    var metaError = Object(_message_validator__WEBPACK_IMPORTED_MODULE_3__[/* validateMeta */ "b"])(message.topic, action, meta);
    if (metaError) {
        throw new Error('invalid ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][message.topic] + ' ' + (_message_constants__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"][message.topic][action] || action) + ': ' + metaError);
    }
    var metaStr = JSON.stringify(meta);
    var metaBuff = metaStr === '{}' ? null : Buffer.from(metaStr, 'utf8');
    var payloadBuff = void 0;
    if (message.data instanceof Buffer) {
        payloadBuff = message.data;
    } else if (message.data !== undefined || message.parsedData !== undefined) {
        var payloadStr = message.data;
        if (payloadStr === undefined) {
            payloadStr = JSON.stringify(message.parsedData);
        }
        payloadBuff = Buffer.from(payloadStr, 'utf8');
    } else {
        payloadBuff = null;
    }
    if (payloadBuff && !Object(_message_validator__WEBPACK_IMPORTED_MODULE_3__[/* hasPayload */ "a"])(message.topic, action)) {
        console.error('invalid message ' + _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"][message.topic] + ' ' + message.action + ': should not have payload');
    }
    var metaBuffLength = metaBuff ? metaBuff.length : 0;
    var payloadBuffLength = payloadBuff ? payloadBuff.length : 0;
    if (metaBuffLength <= _constants__WEBPACK_IMPORTED_MODULE_2__[/* META_PAYLOAD_OVERFLOW_LENGTH */ "b"] && payloadBuffLength <= _constants__WEBPACK_IMPORTED_MODULE_2__[/* META_PAYLOAD_OVERFLOW_LENGTH */ "b"]) {
        return buildRaw(true, message.topic, action, metaBuff, payloadBuff);
    } else {
        return buildMultipart(message.topic, action, metaBuff, payloadBuff);
    }
}
function buildMultipart(topic, action, meta, payload) {
    var metaLength = meta ? meta.length : 0;
    var payloadLength = payload ? payload.length : 0;
    var messageParts = [];
    var metaSectionOffset = 0;
    var payloadSectionOffset = 0;
    var fin = void 0;
    do {
        var metaSectionLength = Math.min(metaLength - metaSectionOffset, _constants__WEBPACK_IMPORTED_MODULE_2__[/* META_PAYLOAD_OVERFLOW_LENGTH */ "b"]);
        var payloadSectionLength = Math.min(payloadLength - payloadSectionOffset, _constants__WEBPACK_IMPORTED_MODULE_2__[/* META_PAYLOAD_OVERFLOW_LENGTH */ "b"]);
        var metaSection = meta && meta.slice(metaSectionOffset, metaSectionOffset + metaSectionLength);
        var payloadSection = payload && payload.slice(payloadSectionOffset, payloadSectionOffset + payloadSectionLength);
        metaSectionOffset += metaSectionLength;
        payloadSectionOffset += payloadSectionLength;
        fin = metaSectionOffset === metaLength && payloadSectionOffset === payloadLength;
        messageParts.push(buildRaw(fin, topic, action, metaSection, payloadSection));
    } while (!fin);
    return Buffer.concat(messageParts);
}
function buildRaw(fin, topic, action, meta, payload) {
    var metaLength = meta ? meta.length : 0;
    var payloadLength = payload ? payload.length : 0;
    var messageBufferLength = _constants__WEBPACK_IMPORTED_MODULE_2__[/* HEADER_LENGTH */ "a"] + metaLength + payloadLength;
    var messageBuffer = Buffer.allocUnsafe(messageBufferLength);
    messageBuffer[0] = (fin ? 0x80 : 0x00) | topic;
    messageBuffer[1] = action;
    messageBuffer.writeUIntBE(metaLength, 2, 3);
    messageBuffer.writeUIntBE(payloadLength, 5, 3);
    if (meta) {
        meta.copy(messageBuffer, _constants__WEBPACK_IMPORTED_MODULE_2__[/* HEADER_LENGTH */ "a"]);
    }
    if (payload) {
        payload.copy(messageBuffer, _constants__WEBPACK_IMPORTED_MODULE_2__[/* HEADER_LENGTH */ "a"] + metaLength);
    }
    return messageBuffer;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6).Buffer))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)(module), __webpack_require__(7)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(22);
exports.encode = exports.stringify = __webpack_require__(23);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/record/merge-strategy.ts
/**
 *  Choose the server's state over the client's
**/
var REMOTE_WINS = function REMOTE_WINS(localValue, localVersion, remoteValue, remoteVersion, callback) {
  callback(null, remoteValue);
};
/**
 *  Choose the local state over the server's
**/
var LOCAL_WINS = function LOCAL_WINS(localValue, localVersion, remoteValue, remoteVersion, callback) {
  callback(null, localValue);
};
// CONCATENATED MODULE: ./src/client-options.ts

var DefaultOptions = {
    heartbeatInterval: 30000,
    reconnectIntervalIncrement: 4000,
    maxReconnectInterval: 180000,
    maxReconnectAttempts: 5,
    rpcAcceptTimeout: 6000,
    rpcResponseTimeout: 10000,
    subscriptionTimeout: 2000,
    recordReadAckTimeout: 15000,
    recordReadTimeout: 15000,
    recordDeleteTimeout: 15000,
    offlineBufferTimeout: 2000,
    discardTimeout: 5000,
    path: '/deepstream',
    mergeStrategy: REMOTE_WINS,
    recordDeepCopy: true,
    socketOptions: null,
    dirtyStorageName: '__ds__dirty_records',
    nodeStoragePath: './local-storage',
    nodeStorageSize: 5,
    lazyConnect: false,
    messageRewriter: function messageRewriter(message) {}
};
// CONCATENATED MODULE: ./src/constants.ts
var EVENT;
(function (EVENT) {
    EVENT[EVENT["UNSOLICITED_MESSAGE"] = 0] = "UNSOLICITED_MESSAGE";
    EVENT[EVENT["IS_CLOSED"] = 1] = "IS_CLOSED";
    EVENT[EVENT["MAX_RECONNECTION_ATTEMPTS_REACHED"] = 2] = "MAX_RECONNECTION_ATTEMPTS_REACHED";
    EVENT[EVENT["CONNECTION_ERROR"] = 3] = "CONNECTION_ERROR";
    EVENT[EVENT["ACK_TIMEOUT"] = 4] = "ACK_TIMEOUT";
    EVENT[EVENT["UNKNOWN_CORRELATION_ID"] = 5] = "UNKNOWN_CORRELATION_ID";
    EVENT[EVENT["HEARTBEAT_TIMEOUT"] = 6] = "HEARTBEAT_TIMEOUT";
    EVENT[EVENT["LISTENER_EXISTS"] = 7] = "LISTENER_EXISTS";
    EVENT[EVENT["NOT_LISTENING"] = 8] = "NOT_LISTENING";
    EVENT[EVENT["RECORD_ALREADY_DESTROYED"] = 9] = "RECORD_ALREADY_DESTROYED";
    EVENT[EVENT["RECORD_DELETE_TIMEOUT"] = 10] = "RECORD_DELETE_TIMEOUT";
    EVENT["CLIENT_OFFLINE"] = "client offline";
    EVENT["INVALID_AUTHENTICATION_DETAILS"] = "INVALID_AUTHENTICATION_DETAILS";
    EVENT["CONNECTION_LOST"] = "connectionLost";
    EVENT["CONNECTION_REESTABLISHED"] = "connectionReestablished";
    EVENT["EXIT_LIMBO"] = "exitLimbo";
    EVENT["CONNECTION_STATE_CHANGED"] = "connectionStateChanged";
    EVENT["CLIENT_DATA_CHANGED"] = "clientDataChanged";
    EVENT["REAUTHENTICATION_FAILURE"] = "reauthenticationFailure";
    EVENT["AUTHENTICATION_TIMEOUT"] = "AUTHENTICATION_TIMEOUT";
    EVENT["RECORD_ERROR"] = "error";
    EVENT["RECORD_READY"] = "ready";
    EVENT["RECORD_DELETED"] = "delete";
    EVENT["RECORD_DISCARDED"] = "discard";
    EVENT["RECORD_VERSION_EXISTS"] = "versionExists";
    EVENT["RECORD_HAS_PROVIDER_CHANGED"] = "hasProviderChanged";
    EVENT["RECORD_STATE_CHANGED"] = "onRecordStateChanged";
    EVENT["ENTRY_ADDED_EVENT"] = "entry-added";
    EVENT["ENTRY_REMOVED_EVENT"] = "entry-removed";
    EVENT["ENTRY_MOVED_EVENT"] = "entry-moved";
})(EVENT || (EVENT = {}));
var CONNECTION_STATE;
(function (CONNECTION_STATE) {
    CONNECTION_STATE["CLOSING"] = "CLOSING";
    CONNECTION_STATE["CLOSED"] = "CLOSED";
    CONNECTION_STATE["INITIALISING"] = "INITIALISING";
    CONNECTION_STATE["AWAITING_CONNECTION"] = "AWAITING_CONNECTION";
    CONNECTION_STATE["CHALLENGING"] = "CHALLENGING";
    CONNECTION_STATE["AWAITING_AUTHENTICATION"] = "AWAITING_AUTHENTICATION";
    CONNECTION_STATE["AUTHENTICATING"] = "AUTHENTICATING";
    CONNECTION_STATE["OPEN"] = "OPEN";
    CONNECTION_STATE["ERROR"] = "ERROR";
    CONNECTION_STATE["RECONNECTING"] = "RECONNECTING";
    CONNECTION_STATE["REDIRECTING"] = "REDIRECTING";
    CONNECTION_STATE["CHALLENGE_DENIED"] = "CHALLENGE_DENIED";
    CONNECTION_STATE["TOO_MANY_AUTH_ATTEMPTS"] = "TOO_MANY_AUTH_ATTEMPTS";
    CONNECTION_STATE["AUTHENTICATION_TIMEOUT"] = "AUTHENTICATION_TIMEOUT";
    CONNECTION_STATE["PAUSING"] = "PAUSING";
    CONNECTION_STATE["OFFLINE"] = "OFFLINE";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));
// EXTERNAL MODULE: ./binary-protocol/src/message-constants.ts
var message_constants = __webpack_require__(0);

// CONCATENATED MODULE: ./src/util/logger.ts
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function isEvent(action) {
    return EVENT[action] !== undefined;
}
var logger_Logger = function () {
    function Logger(emitter) {
        _classCallCheck(this, Logger);

        this.emitter = emitter;
    }

    _createClass(Logger, [{
        key: 'warn',
        value: function warn(message, event, meta) {
            // tslint:disable-next-line:no-console
            var warnMessage = 'Warning: ' + message_constants["TOPIC"][message.topic];
            var action = message.action;
            if (action) {
                warnMessage += ' (' + message_constants["ACTIONS"][message.topic][action] + ')';
            }
            if (event) {
                warnMessage += ': ' + EVENT[event];
            }
            if (meta) {
                warnMessage += ' \u2013 ' + (typeof meta === 'string' ? meta : JSON.stringify(meta));
            }
            console.warn(warnMessage);
        }
    }, {
        key: 'error',
        value: function error(message, event, meta) {
            // tslint:disable-next-line:no-console
            if (isEvent(event)) {
                if (event === EVENT.IS_CLOSED) {
                    this.emitter.emit('error', meta, EVENT[event], message_constants["TOPIC"][message_constants["TOPIC"].CONNECTION]);
                } else if (event === EVENT.CONNECTION_ERROR) {
                    this.emitter.emit('error', meta, EVENT[event], message_constants["TOPIC"][message_constants["TOPIC"].CONNECTION]);
                }
            } else {
                var action = event ? event : message.action;
                this.emitter.emit('error', meta, message_constants["ACTIONS"][message.topic][action], message_constants["TOPIC"][message.topic]);
            }
        }
    }]);

    return Logger;
}();
// EXTERNAL MODULE: ./binary-protocol/src/utils.ts
var utils = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/component-emitter2/index.js
var component_emitter2 = __webpack_require__(1);

// CONCATENATED MODULE: ./src/util/timeout-registry.ts
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var timeout_registry_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function timeout_registry_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Subscriptions to events are in a pending state until deepstream acknowledges
 * them. This is a pattern that's used by numerour classes. This registry aims
 * to centralise the functionality necessary to keep track of subscriptions and
 * their respective timeouts.
 */
var timeout_registry_TimeoutRegistry = function (_EventEmitter) {
    _inherits(TimeoutRegistry, _EventEmitter);

    function TimeoutRegistry(services, options) {
        timeout_registry_classCallCheck(this, TimeoutRegistry);

        var _this = _possibleConstructorReturn(this, (TimeoutRegistry.__proto__ || Object.getPrototypeOf(TimeoutRegistry)).call(this));

        _this.options = options;
        _this.services = services;
        _this.register = new Map();
        _this.ackRegister = new Map();
        return _this;
    }
    /**
     * Add an entry
     */


    timeout_registry_createClass(TimeoutRegistry, [{
        key: 'add',
        value: function add(timeout) {
            if (timeout.duration === undefined) {
                timeout.duration = this.options.subscriptionTimeout;
            }
            if (timeout.event === undefined) {
                timeout.event = EVENT.ACK_TIMEOUT;
            }
            /*
            if (timeout.duration < 1) {
              should we throw an error?
              return -1
            }
            */
            if (!this.services.connection.isConnected) {
                return -1;
            }
            this.remove(timeout.message);
            var internalTimeout = Object.assign({}, {
                timerId: -1,
                uniqueName: this.getUniqueName(timeout.message),
                event: timeout.event
            }, { timeout: timeout });
            internalTimeout.timerId = this.services.timerRegistry.add({
                context: this,
                callback: this.onTimeout,
                duration: timeout.duration,
                data: internalTimeout
            });
            this.register.set(internalTimeout.timerId, internalTimeout);
            this.ackRegister.set(internalTimeout.uniqueName, internalTimeout);
            return internalTimeout.timerId;
        }
        /**
         * Remove an entry
         */

    }, {
        key: 'remove',
        value: function remove(message) {
            var requestMsg = void 0;
            var action = utils["b" /* RESPONSE_TO_REQUEST */][message.topic][message.action];
            if (!action) {
                requestMsg = message;
            } else {
                requestMsg = Object.assign({}, message, { action: action });
            }
            var uniqueName = this.getUniqueName(requestMsg);
            var entry = this.ackRegister.get(uniqueName);
            if (entry) {
                this.clear(entry.timerId);
            }
        }
        /**
         * Processes an incoming ACK-message and removes the corresponding subscription
         */

    }, {
        key: 'clear',
        value: function clear(timerId) {
            this.services.timerRegistry.remove(timerId);
            var entry = this.register.get(timerId);
            if (entry) {
                this.register.delete(timerId);
                this.ackRegister.delete(entry.uniqueName);
            }
        }
        /**
         * Will be invoked if the timeout has occured before the ack message was received
         */

    }, {
        key: 'onTimeout',
        value: function onTimeout(internalTimeout) {
            this.register.delete(internalTimeout.timerId);
            var timeout = internalTimeout.timeout;
            if (timeout.callback) {
                timeout.callback(timeout.event, timeout.message);
            } else {
                this.services.logger.warn(timeout.message, timeout.event);
            }
        }
        /**
         * Returns a unique name from the timeout
         */

    }, {
        key: 'getUniqueName',
        value: function getUniqueName(message) {
            var action = message.originalAction || message.action;
            var name = '' + message.topic + action + '_';
            if (message.correlationId) {
                name += message.correlationId;
            } else if (message.name) {
                name += message.name;
            }
            return name;
        }
        /**
         * Remote all timeouts when connection disconnects
         */

    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.register[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 1);

                    var timerId = _ref2[0];

                    clearTimeout(timerId);
                    this.register.delete(timerId);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return TimeoutRegistry;
}(component_emitter2);
// EXTERNAL MODULE: ./src/util/timer-registry.ts
var timer_registry = __webpack_require__(9);

// EXTERNAL MODULE: ./binary-protocol/src/message-parser.ts
var message_parser = __webpack_require__(5);

// CONCATENATED MODULE: ./src/util/state-machine.ts
var state_machine_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function state_machine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateMachine = function () {
    function StateMachine(logger, stateMachine) {
        state_machine_classCallCheck(this, StateMachine);

        this._logger = logger;
        this._transitions = stateMachine.transitions;
        this._state = stateMachine.init;
        this._stateMachine = stateMachine;
    }
    /**
     * Try to perform a state change
     */


    state_machine_createClass(StateMachine, [{
        key: "transition",
        value: function transition(transitionName) {
            var transition = void 0;
            for (var i = 0; i < this._transitions.length; i++) {
                transition = this._transitions[i];
                if (transitionName === transition.name && (this._state === transition.from || transition.from === undefined)) {
                    var oldState = this._state;
                    this._state = transition.to;
                    if (this._stateMachine.onStateChanged) {
                        this._stateMachine.onStateChanged(this._state, oldState);
                    }
                    if (transition.handler) {
                        transition.handler();
                    }
                    return;
                }
            }
            var details = JSON.stringify({ transition: transitionName, state: this._state });
            this._logger.warn("Invalid state transition: " + details);
        }
    }, {
        key: "state",
        get: function get() {
            return this._state;
        }
    }]);

    return StateMachine;
}();
// EXTERNAL MODULE: ./node_modules/url/url.js
var url_url = __webpack_require__(8);

// CONCATENATED MODULE: ./src/util/utils.ts
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


/**
 * A regular expression that matches whitespace on either side, but
 * not in the center of a string
 */
var TRIM_REGULAR_EXPRESSION = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
/**
 * Removes whitespace from the beginning and end of a string
 */
var trim = function trim(inputString) {
    if (inputString.trim) {
        return inputString.trim();
    }
    return inputString.replace(TRIM_REGULAR_EXPRESSION, '');
};
/**
 * Compares two objects for deep (recoursive) equality
 *
 * This used to be a significantly more complex custom implementation,
 * but JSON.stringify has gotten so fast that it now outperforms the custom
 * way by a factor of 1.5 to 3.
 *
 * In IE11 / Edge the custom implementation is still slightly faster, but for
 * consistencies sake and the upsides of leaving edge-case handling to the native
 * browser / node implementation we'll go for JSON.stringify from here on.
 *
 * Please find performance test results here
 *
 * http://jsperf.com/deep-equals-code-vs-json
 */
var deepEquals = function deepEquals(objA, objB) {
    if (objA === objB) {
        return true;
    } else if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object') {
        return false;
    }
    return JSON.stringify(objA) === JSON.stringify(objB);
};
/**
 * Similar to deepEquals above, tests have shown that JSON stringify outperforms any attempt of
 * a code based implementation by 50% - 100% whilst also handling edge-cases and keeping
 * implementation complexity low.
 *
 * If ES6/7 ever decides to implement deep copying natively (what happened to Object.clone?
 * that was briefly a thing...), let's switch it for the native implementation. For now though,
 * even Object.assign({}, obj) only provides a shallow copy.
 *
 * Please find performance test results backing these statements here:
 *
 * http://jsperf.com/object-deep-copy-assign
 */
var utils_deepCopy = function deepCopy(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        return JSON.parse(JSON.stringify(obj));
    }
    return obj;
};
/**
 * Copy the top level of items, but do not copy its items recourisvely. This
 * is much quicker than deepCopy does not guarantee the object items are new/unique.
 * Mainly used to change the reference to the actual object itself, but not its children.
 */
var shallowCopy = function shallowCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.slice(0);
    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        var copy = Object.create(null);
        var props = Object.keys(obj);
        for (var i = 0; i < props.length; i++) {
            copy[props[i]] = obj[props[i]];
        }
        return copy;
    }
    return obj;
};
/**
 * Used to see if a protocol is specified within the url
 * @type {RegExp}
 */
var hasUrlProtocol = /^wss:|^ws:|^\/\//;
/**
 * Used to see if the protocol contains any unsupported protocols
 * @type {RegExp}
 */
var unsupportedProtocol = /^http:|^https:/;
/**
 * Take the url passed when creating the client and ensure the correct
 * protocol is provided
 * @param  {String} url Url passed in by client
 * @return {String} Url with supported protocol
 */
var utils_parseUrl = function parseUrl(initialURl, defaultPath) {
    var url = initialURl;
    if (unsupportedProtocol.test(url)) {
        throw new Error('Only ws and wss are supported');
    }
    if (!hasUrlProtocol.test(url)) {
        url = 'ws://' + url;
    } else if (url.indexOf('//') === 0) {
        url = 'ws:' + url;
    }
    var serverUrl = url_url["parse"](url);
    if (!serverUrl.host) {
        throw new Error('invalid url, missing host');
    }
    serverUrl.protocol = serverUrl.protocol ? serverUrl.protocol : 'ws:';
    serverUrl.pathname = serverUrl.pathname ? serverUrl.pathname : defaultPath;
    return url_url["format"](serverUrl);
};
/**
* Returns a random string. The first block of characters
* is a timestamp, in order to allow databases to optimize for semi-
* sequentuel numberings
*/
var getUid = function getUid() {
    var timestamp = new Date().getTime().toString(36);
    var randomString = (Math.random() * 10000000000000000).toString(36).replace('.', '');
    return timestamp + '-' + randomString;
};
/**
 * Creates a map based on the types of the provided arguments
 */
var normalizeSetArguments = function normalizeSetArguments(args) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var result = void 0;
    var isRootData = function isRootData(data) {
        return data !== undefined && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object';
    };
    var isNestedData = function isNestedData(data) {
        return typeof data !== 'function';
    };
    var isPath = function isPath(path) {
        return path !== undefined && typeof path === 'string';
    };
    var isCallback = function isCallback(callback) {
        return typeof callback === 'function';
    };
    if (args.length === startIndex + 1) {
        result = {
            path: undefined,
            data: isRootData(args[startIndex]) ? args[startIndex] : undefined,
            callback: undefined
        };
    }
    if (args.length === startIndex + 2) {
        result = { path: undefined, data: undefined, callback: undefined };
        if (!isCallback(args[startIndex]) && isNestedData(args[startIndex])) {
            result.path = isPath(args[startIndex]) ? args[startIndex] : undefined;
        }
        if (isPath(args[startIndex])) {
            result.data = isNestedData(args[startIndex + 1]) ? args[startIndex + 1] : undefined;
        } else {
            result.data = isRootData(args[startIndex]) ? args[startIndex] : undefined;
        }
        if (!isPath(args[startIndex])) {
            result.callback = isCallback(args[startIndex + 1]) ? args[startIndex + 1] : false;
        }
    }
    if (args.length === startIndex + 3) {
        result = {
            path: isPath(args[startIndex]) ? args[startIndex] : undefined,
            data: isNestedData(args[startIndex + 1]) ? args[startIndex + 1] : undefined,
            callback: isCallback(args[startIndex + 2]) ? args[startIndex + 2] : undefined
        };
    }
    if (result) {
        if (result.path !== undefined && result.path.length === 0 || result.path === undefined && !result.data) {
            throw Error('Invalid set path argument');
        }
        if (result.data === undefined && result.path === undefined) {
            throw Error('Invalid set data argument');
        }
        if (result.callback !== undefined && result.callback === false || result.callback === undefined && args.length === startIndex + 3) {
            throw Error('Invalid set callback argument');
        }
        return result;
    }
    throw Error('Invalid set arguments');
};
/**
 * Creates a map based on the types of the provided arguments
 */
var normalizeArguments = function normalizeArguments(args) {
    // If arguments is already a map of normalized parameters
    // (e.g. when called by AnonymousRecord), just return it.
    if (args.length === 1 && _typeof(args[0]) === 'object') {
        return args[0];
    }
    var result = Object.create(null);
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            result.path = args[i];
        } else if (typeof args[i] === 'function') {
            result.callback = args[i];
        } else if (typeof args[i] === 'boolean') {
            result.triggerNow = args[i];
        }
    }
    return result;
};
// CONCATENATED MODULE: ./src/connection/connection.ts
var connection_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var connection_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function connection_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var connection_Connection = function () {
    function Connection(services, options, url, emitter) {
        var _this = this;

        connection_classCallCheck(this, Connection);

        this.options = options;
        this.services = services;
        this.authParams = null;
        this.handlers = new Map();
        // tslint:disable-next-line:no-empty
        this.authCallback = null;
        this.resumeCallback = null;
        this.emitter = emitter;
        this.internalEmitter = new component_emitter2();
        this.isInLimbo = true;
        this.clientData = null;
        this.heartbeatInterval = null;
        this.lastHeartBeat = null;
        this.endpoint = null;
        this.reconnectTimeout = null;
        this.reconnectionAttempt = 0;
        this.limboTimeout = null;
        var isReconnecting = false;
        var firstOpen = true;
        this.stateMachine = new StateMachine(this.services.logger, {
            init: CONNECTION_STATE.CLOSED,
            onStateChanged: function onStateChanged(newState, oldState) {
                if (newState === oldState) {
                    return;
                }
                emitter.emit(EVENT.CONNECTION_STATE_CHANGED, newState);
                if (newState === CONNECTION_STATE.RECONNECTING) {
                    _this.isInLimbo = true;
                    isReconnecting = true;
                    if (oldState !== CONNECTION_STATE.CLOSED) {
                        _this.internalEmitter.emit(EVENT.CONNECTION_LOST);
                        _this.limboTimeout = _this.services.timerRegistry.add({
                            duration: _this.options.offlineBufferTimeout,
                            context: _this,
                            callback: function callback() {
                                _this.isInLimbo = false;
                                _this.internalEmitter.emit(EVENT.EXIT_LIMBO);
                            }
                        });
                    }
                } else if (newState === CONNECTION_STATE.OPEN && (isReconnecting || firstOpen)) {
                    firstOpen = false;
                    _this.isInLimbo = false;
                    _this.internalEmitter.emit(EVENT.CONNECTION_REESTABLISHED);
                    _this.services.timerRegistry.remove(_this.limboTimeout);
                }
            },
            transitions: [{ name: "initialised" /* INITIALISED */, from: CONNECTION_STATE.CLOSED, to: CONNECTION_STATE.INITIALISING }, { name: "connected" /* CONNECTED */, from: CONNECTION_STATE.INITIALISING, to: CONNECTION_STATE.AWAITING_CONNECTION }, { name: "connected" /* CONNECTED */, from: CONNECTION_STATE.REDIRECTING, to: CONNECTION_STATE.AWAITING_CONNECTION }, { name: "connected" /* CONNECTED */, from: CONNECTION_STATE.RECONNECTING, to: CONNECTION_STATE.AWAITING_CONNECTION }, { name: "challenge" /* CHALLENGE */, from: CONNECTION_STATE.AWAITING_CONNECTION, to: CONNECTION_STATE.CHALLENGING }, { name: "redirected" /* CONNECTION_REDIRECTED */, from: CONNECTION_STATE.CHALLENGING, to: CONNECTION_STATE.REDIRECTING }, { name: "challenge-denied" /* CHALLENGE_DENIED */, from: CONNECTION_STATE.CHALLENGING, to: CONNECTION_STATE.CHALLENGE_DENIED }, { name: "accepted" /* CHALLENGE_ACCEPTED */, from: CONNECTION_STATE.CHALLENGING, to: CONNECTION_STATE.AWAITING_AUTHENTICATION, handler: this.onAwaitingAuthentication.bind(this) }, { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: CONNECTION_STATE.AWAITING_CONNECTION, to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT }, { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: CONNECTION_STATE.AWAITING_AUTHENTICATION, to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT }, { name: "authenticate" /* AUTHENTICATE */, from: CONNECTION_STATE.AWAITING_AUTHENTICATION, to: CONNECTION_STATE.AUTHENTICATING }, { name: "unsuccesful-login" /* UNSUCCESFUL_LOGIN */, from: CONNECTION_STATE.AUTHENTICATING, to: CONNECTION_STATE.AWAITING_AUTHENTICATION }, { name: "succesful-login" /* SUCCESFUL_LOGIN */, from: CONNECTION_STATE.AUTHENTICATING, to: CONNECTION_STATE.OPEN }, { name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */, from: CONNECTION_STATE.AUTHENTICATING, to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS }, { name: "too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */, from: CONNECTION_STATE.AWAITING_AUTHENTICATION, to: CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS }, { name: "authentication-timeout" /* AUTHENTICATION_TIMEOUT */, from: CONNECTION_STATE.AWAITING_AUTHENTICATION, to: CONNECTION_STATE.AUTHENTICATION_TIMEOUT }, { name: "reconnect" /* RECONNECT */, from: CONNECTION_STATE.RECONNECTING, to: CONNECTION_STATE.RECONNECTING }, { name: "closed" /* CLOSED */, from: CONNECTION_STATE.CLOSING, to: CONNECTION_STATE.CLOSED }, { name: "offline" /* OFFLINE */, from: CONNECTION_STATE.PAUSING, to: CONNECTION_STATE.OFFLINE }, { name: "error" /* ERROR */, to: CONNECTION_STATE.RECONNECTING }, { name: "connection-lost" /* LOST */, to: CONNECTION_STATE.RECONNECTING }, { name: "resume" /* RESUME */, to: CONNECTION_STATE.RECONNECTING }, { name: "pause" /* PAUSE */, to: CONNECTION_STATE.PAUSING }, { name: "close" /* CLOSE */, to: CONNECTION_STATE.CLOSING }]
        });
        this.stateMachine.transition("initialised" /* INITIALISED */);
        this.originalUrl = utils_parseUrl(url, this.options.path);
        this.url = this.originalUrl;
        if (!options.lazyConnect) {
            this.createEndpoint();
        }
    }

    connection_createClass(Connection, [{
        key: 'onLost',
        value: function onLost(callback) {
            this.internalEmitter.on(EVENT.CONNECTION_LOST, callback);
        }
    }, {
        key: 'removeOnLost',
        value: function removeOnLost(callback) {
            this.internalEmitter.off(EVENT.CONNECTION_LOST, callback);
        }
    }, {
        key: 'onReestablished',
        value: function onReestablished(callback) {
            this.internalEmitter.on(EVENT.CONNECTION_REESTABLISHED, callback);
        }
    }, {
        key: 'removeOnReestablished',
        value: function removeOnReestablished(callback) {
            this.internalEmitter.off(EVENT.CONNECTION_REESTABLISHED, callback);
        }
    }, {
        key: 'onExitLimbo',
        value: function onExitLimbo(callback) {
            this.internalEmitter.on(EVENT.EXIT_LIMBO, callback);
        }
    }, {
        key: 'registerHandler',
        value: function registerHandler(topic, callback) {
            this.handlers.set(topic, callback);
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(message) {
            if (!this.isOpen()) {
                this.services.logger.error(message, EVENT.IS_CLOSED);
                return;
            }
            if (this.endpoint) {
                this.endpoint.sendParsedMessage(message);
            }
        }
        /**
         * Sends the specified authentication parameters
         * to the server. Can be called up to <maxAuthAttempts>
         * times for the same connection.
         *
         * @param   {Object}   authParams A map of user defined auth parameters.
         *                E.g. { username:<String>, password:<String> }
         * @param   {Function} callback   A callback that will be invoked with the authenticationr result
         */

    }, {
        key: 'authenticate',
        value: function authenticate(authParamsOrCallback, callback) {
            if (authParamsOrCallback && (typeof authParamsOrCallback === 'undefined' ? 'undefined' : connection_typeof(authParamsOrCallback)) !== 'object' && typeof authParamsOrCallback !== 'function') {
                throw new Error('invalid argument authParamsOrCallback');
            }
            if (callback && typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            if (this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED || this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS || this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
                this.services.logger.error({ topic: message_constants["TOPIC"].CONNECTION }, EVENT.IS_CLOSED);
                return;
            }
            if (authParamsOrCallback) {
                this.authParams = (typeof authParamsOrCallback === 'undefined' ? 'undefined' : connection_typeof(authParamsOrCallback)) === 'object' ? authParamsOrCallback : {};
            }
            if (authParamsOrCallback && typeof authParamsOrCallback === 'function') {
                this.authCallback = authParamsOrCallback;
            } else if (callback) {
                this.authCallback = callback;
            } else {
                this.authCallback = function () {};
            }
            // if (this.stateMachine.state === CONNECTION_STATE.CLOSED && !this.endpoint) {
            //   this.createEndpoint()
            //   return
            // }
            if (this.stateMachine.state === CONNECTION_STATE.AWAITING_AUTHENTICATION && this.authParams) {
                this.sendAuthParams();
            }
            if (!this.endpoint) {
                this.createEndpoint();
            }
        }
        /*
        * Returns the current connection state.
        */

    }, {
        key: 'getConnectionState',
        value: function getConnectionState() {
            return this.stateMachine.state;
        }
    }, {
        key: 'isOpen',
        value: function isOpen() {
            var connState = this.getConnectionState();
            return connState !== CONNECTION_STATE.CLOSED && connState !== CONNECTION_STATE.ERROR && connState !== CONNECTION_STATE.CLOSING;
        }
        /**
         * Closes the connection. Using this method
         * will prevent the client from reconnecting.
         */

    }, {
        key: 'close',
        value: function close() {
            this.services.timerRegistry.remove(this.heartbeatInterval);
            this.sendMessage({
                topic: message_constants["TOPIC"].CONNECTION,
                action: message_constants["CONNECTION_ACTIONS"].CLOSING
            });
            this.stateMachine.transition("close" /* CLOSE */);
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.stateMachine.transition("pause" /* PAUSE */);
            this.services.timerRegistry.remove(this.heartbeatInterval);
            if (this.endpoint) {
                this.endpoint.close();
            }
        }
    }, {
        key: 'resume',
        value: function resume(callback) {
            this.stateMachine.transition("resume" /* RESUME */);
            this.resumeCallback = callback;
            this.tryReconnect();
        }
        /**
         * Creates the endpoint to connect to using the url deepstream
         * was initialised with.
         */

    }, {
        key: 'createEndpoint',
        value: function createEndpoint() {
            this.endpoint = this.services.socketFactory(this.url, this.options.socketOptions);
            this.endpoint.onopen = this.onOpen.bind(this);
            this.endpoint.onerror = this.onError.bind(this);
            this.endpoint.onclose = this.onClose.bind(this);
            this.endpoint.onparsedmessages = this.onMessages.bind(this);
        }
        /********************************
        ****** Endpoint Callbacks ******
        /********************************/
        /**
        * Will be invoked once the connection is established. The client
        * can't send messages yet, and needs to get a connection ACK or REDIRECT
        * from the server before authenticating
        */

    }, {
        key: 'onOpen',
        value: function onOpen() {
            this.clearReconnect();
            this.lastHeartBeat = Date.now();
            this.checkHeartBeat();
            this.stateMachine.transition("connected" /* CONNECTED */);
            this.sendMessage({
                topic: message_constants["TOPIC"].CONNECTION,
                action: message_constants["CONNECTION_ACTIONS"].CHALLENGE,
                url: this.originalUrl,
                protocolVersion: '0.1a'
            });
            this.stateMachine.transition("challenge" /* CHALLENGE */);
        }
        /**
         * Callback for generic connection errors. Forwards
         * the error to the client.
         *
         * The connection is considered broken once this method has been
         * invoked.
         */

    }, {
        key: 'onError',
        value: function onError(error) {
            var _this2 = this;

            /*
             * If the implementation isn't listening on the error event this will throw
             * an error. So let's defer it to allow the reconnection to kick in.
             */
            setTimeout(function () {
                var msg = void 0;
                if (error.code === 'ECONNRESET' || error.code === 'ECONNREFUSED') {
                    msg = 'Can\'t connect! Deepstream server unreachable on ' + _this2.originalUrl;
                } else {
                    try {
                        msg = JSON.stringify(error);
                    } catch (e) {
                        msg = error.toString();
                    }
                }
                _this2.services.logger.error({ topic: message_constants["TOPIC"].CONNECTION }, EVENT.CONNECTION_ERROR, msg);
            }, 1);
            this.services.timerRegistry.remove(this.heartbeatInterval);
            this.stateMachine.transition("error" /* ERROR */);
            this.tryReconnect();
        }
        /**
         * Callback when the connection closes. This might have been a deliberate
         * close triggered by the client or the result of the connection getting
         * lost.
         *
         * In the latter case the client will try to reconnect using the configured
         * strategy.
         */

    }, {
        key: 'onClose',
        value: function onClose() {
            this.services.timerRegistry.remove(this.heartbeatInterval);
            if (this.stateMachine.state === CONNECTION_STATE.REDIRECTING) {
                this.createEndpoint();
                return;
            }
            if (this.stateMachine.state === CONNECTION_STATE.CHALLENGE_DENIED || this.stateMachine.state === CONNECTION_STATE.TOO_MANY_AUTH_ATTEMPTS || this.stateMachine.state === CONNECTION_STATE.AUTHENTICATION_TIMEOUT) {
                return;
            }
            if (this.stateMachine.state === CONNECTION_STATE.CLOSING) {
                this.stateMachine.transition("closed" /* CLOSED */);
                return;
            }
            if (this.stateMachine.state === CONNECTION_STATE.PAUSING) {
                this.stateMachine.transition("offline" /* OFFLINE */);
                return;
            }
            this.stateMachine.transition("connection-lost" /* LOST */);
            this.tryReconnect();
        }
        /**
         * Callback for messages received on the connection.
         */

    }, {
        key: 'onMessages',
        value: function onMessages(parseResults) {
            var _this3 = this;

            parseResults.forEach(function (parseResult) {
                if (parseResult.parseError) {
                    _this3.services.logger.error({ topic: message_constants["TOPIC"].PARSER }, parseResult.action, parseResult.raw && parseResult.raw.toString());
                    return;
                }
                var message = parseResult;
                var res = Object(message_parser["b" /* parseData */])(message);
                if (res !== true) {
                    _this3.services.logger.error({ topic: message_constants["TOPIC"].PARSER }, message_constants["PARSER_ACTIONS"].INVALID_MESSAGE, res);
                }
                if (message === null) {
                    return;
                }
                if (message.topic === message_constants["TOPIC"].CONNECTION) {
                    _this3.handleConnectionResponse(message);
                    return;
                }
                if (message.topic === message_constants["TOPIC"].AUTH) {
                    _this3.handleAuthResponse(message);
                    return;
                }
                var handler = _this3.handlers.get(message.topic);
                if (!handler) {
                    // this should never happen
                    return;
                }
                handler(message);
            });
        }
        /**
        * Sends authentication params to the server. Please note, this
        * doesn't use the queued message mechanism, but rather sends the message directly
        */

    }, {
        key: 'sendAuthParams',
        value: function sendAuthParams() {
            this.stateMachine.transition("authenticate" /* AUTHENTICATE */);
            this.sendMessage({
                topic: message_constants["TOPIC"].AUTH,
                action: message_constants["AUTH_ACTIONS"].REQUEST,
                parsedData: this.authParams
            });
        }
        /**
        * Ensures that a heartbeat was not missed more than once, otherwise it considers the connection
        * to have been lost and closes it for reconnection.
        */

    }, {
        key: 'checkHeartBeat',
        value: function checkHeartBeat() {
            var heartBeatTolerance = this.options.heartbeatInterval * 2;
            if (Date.now() - this.lastHeartBeat > heartBeatTolerance) {
                this.services.timerRegistry.remove(this.heartbeatInterval);
                this.services.logger.error({ topic: message_constants["TOPIC"].CONNECTION }, EVENT.HEARTBEAT_TIMEOUT);
                if (this.endpoint) {
                    this.endpoint.close();
                }
                return;
            }
            this.heartbeatInterval = this.services.timerRegistry.add({
                duration: this.options.heartbeatInterval,
                callback: this.checkHeartBeat,
                context: this
            });
        }
        /**
        * If the connection drops or is closed in error this
        * method schedules increasing reconnection intervals
        *
        * If the number of failed reconnection attempts exceeds
        * options.maxReconnectAttempts the connection is closed
        */

    }, {
        key: 'tryReconnect',
        value: function tryReconnect() {
            if (this.reconnectTimeout !== null) {
                return;
            }
            if (this.reconnectionAttempt < this.options.maxReconnectAttempts) {
                this.stateMachine.transition("reconnect" /* RECONNECT */);
                this.reconnectTimeout = setTimeout(this.tryOpen.bind(this), Math.min(this.options.maxReconnectInterval, this.options.reconnectIntervalIncrement * this.reconnectionAttempt));
                this.reconnectionAttempt++;
                return;
            }
            this.emitter.emit(EVENT[EVENT.MAX_RECONNECTION_ATTEMPTS_REACHED], this.reconnectionAttempt);
            this.clearReconnect();
            this.close();
        }
        /**
         * Attempts to open a errourosly closed connection
         */

    }, {
        key: 'tryOpen',
        value: function tryOpen() {
            if (this.stateMachine.state !== CONNECTION_STATE.REDIRECTING) {
                this.url = this.originalUrl;
            }
            this.createEndpoint();
            this.reconnectTimeout = null;
        }
        /**
         * Stops all further reconnection attempts,
         * either because the connection is open again
         * or because the maximal number of reconnection
         * attempts has been exceeded
         */

    }, {
        key: 'clearReconnect',
        value: function clearReconnect() {
            if (this.reconnectTimeout) {
                clearTimeout(this.reconnectTimeout);
            }
            this.reconnectTimeout = null;
            this.reconnectionAttempt = 0;
        }
        /**
         * The connection response will indicate whether the deepstream connection
         * can be used or if it should be forwarded to another instance. This
         * allows us to introduce load-balancing if needed.
         *
         * If authentication parameters are already provided this will kick of
         * authentication immediately. The actual 'open' event won't be emitted
         * by the client until the authentication is successful.
         *
         * If a challenge is recieved, the user will send the url to the server
         * in response to get the appropriate redirect. If the URL is invalid the
         * server will respond with a REJECTION resulting in the client connection
         * being permanently closed.
         *
         * If a redirect is recieved, this connection is closed and updated with
         * a connection to the url supplied in the message.
         */

    }, {
        key: 'handleConnectionResponse',
        value: function handleConnectionResponse(message) {
            if (message.action === message_constants["CONNECTION_ACTIONS"].PING) {
                this.lastHeartBeat = Date.now();
                if (this.getConnectionState() !== CONNECTION_STATE.CLOSING && this.getConnectionState() !== CONNECTION_STATE.PAUSING) {
                    this.sendMessage({ topic: message_constants["TOPIC"].CONNECTION, action: message_constants["CONNECTION_ACTIONS"].PONG });
                }
                return;
            }
            if (message.action === message_constants["CONNECTION_ACTIONS"].ACCEPT) {
                this.stateMachine.transition("accepted" /* CHALLENGE_ACCEPTED */);
                return;
            }
            if (message.action === message_constants["CONNECTION_ACTIONS"].REJECT) {
                this.stateMachine.transition("challenge-denied" /* CHALLENGE_DENIED */);
                if (this.endpoint) {
                    this.endpoint.close();
                }
                return;
            }
            if (message.action === message_constants["CONNECTION_ACTIONS"].REDIRECT) {
                this.url = message.url;
                this.stateMachine.transition("redirected" /* CONNECTION_REDIRECTED */);
                if (this.endpoint) {
                    this.endpoint.close();
                }
                return;
            }
            if (message.action === message_constants["CONNECTION_ACTIONS"].AUTHENTICATION_TIMEOUT) {
                this.stateMachine.transition("authentication-timeout" /* AUTHENTICATION_TIMEOUT */);
                this.services.logger.error(message);
            }
        }
        /**
         * Callback for messages received for the AUTH topic. If
         * the authentication was successful this method will
         * open the connection and send all messages that the client
         * tried to send so far.
         */

    }, {
        key: 'handleAuthResponse',
        value: function handleAuthResponse(message) {
            if (message.action === message_constants["AUTH_ACTIONS"].TOO_MANY_AUTH_ATTEMPTS) {
                this.stateMachine.transition("too-many-auth-attempts" /* TOO_MANY_AUTH_ATTEMPTS */);
                this.services.logger.error(message);
                return;
            }
            if (message.action === message_constants["AUTH_ACTIONS"].AUTH_UNSUCCESSFUL) {
                this.stateMachine.transition("unsuccesful-login" /* UNSUCCESFUL_LOGIN */);
                this.onAuthUnSuccessful();
                return;
            }
            if (message.action === message_constants["AUTH_ACTIONS"].AUTH_SUCCESSFUL) {
                this.stateMachine.transition("succesful-login" /* SUCCESFUL_LOGIN */);
                this.onAuthSuccessful(message.parsedData);
                return;
            }
        }
    }, {
        key: 'onAwaitingAuthentication',
        value: function onAwaitingAuthentication() {
            if (this.authParams) {
                this.sendAuthParams();
            }
        }
    }, {
        key: 'onAuthSuccessful',
        value: function onAuthSuccessful(clientData) {
            this.updateClientData(clientData);
            if (this.resumeCallback) {
                this.resumeCallback();
                this.resumeCallback = null;
            }
            if (this.authCallback === null) {
                return;
            }
            this.authCallback(true, this.clientData);
            this.authCallback = null;
        }
    }, {
        key: 'onAuthUnSuccessful',
        value: function onAuthUnSuccessful() {
            var reason = { reason: EVENT[EVENT.INVALID_AUTHENTICATION_DETAILS] };
            if (this.resumeCallback) {
                this.resumeCallback(reason);
                this.resumeCallback = null;
            }
            if (this.authCallback === null) {
                this.emitter.emit(EVENT.REAUTHENTICATION_FAILURE, reason);
                return;
            }
            this.authCallback(false, reason);
            this.authCallback = null;
        }
    }, {
        key: 'updateClientData',
        value: function updateClientData(data) {
            var newClientData = data || null;
            if (this.clientData === null && (newClientData === null || Object.keys(newClientData).length === 0)) {
                return;
            }
            if (!deepEquals(this.clientData, data)) {
                this.emitter.emit(EVENT.CLIENT_DATA_CHANGED, Object.assign({}, newClientData));
                this.clientData = newClientData;
            }
        }
    }, {
        key: 'isConnected',
        get: function get() {
            return this.stateMachine.state === CONNECTION_STATE.OPEN;
        }
    }]);

    return Connection;
}();
// EXTERNAL MODULE: ./src/connection/socket-factory.ts
var socket_factory = __webpack_require__(10);

// CONCATENATED MODULE: ./src/util/listener.ts
var listener_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function listener_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var listener_Listener = function () {
    function Listener(topic, services) {
        listener_classCallCheck(this, Listener);

        this.topic = topic;
        this.services = services;
        this.listeners = new Map();
        this.stopCallbacks = new Map();
        if (topic === message_constants["TOPIC"].RECORD) {
            this.actions = message_constants["RECORD_ACTIONS"];
        } else if (topic === message_constants["TOPIC"].EVENT) {
            this.actions = message_constants["EVENT_ACTIONS"];
        }
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }

    listener_createClass(Listener, [{
        key: 'listen',
        value: function listen(pattern, callback) {
            if (typeof pattern !== 'string' || pattern.length === 0) {
                throw new Error('invalid argument pattern');
            }
            if (typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            if (this.listeners.has(pattern)) {
                this.services.logger.warn({
                    topic: this.topic,
                    action: EVENT.LISTENER_EXISTS,
                    name: pattern
                });
                return;
            }
            this.listeners.set(pattern, callback);
            this.sendListen(pattern);
        }
    }, {
        key: 'unlisten',
        value: function unlisten(pattern) {
            if (typeof pattern !== 'string' || pattern.length === 0) {
                throw new Error('invalid argument pattern');
            }
            if (!this.listeners.has(pattern)) {
                this.services.logger.warn({
                    topic: this.topic,
                    action: EVENT.NOT_LISTENING,
                    name: pattern
                });
                return;
            }
            this.listeners.delete(pattern);
            this.sendUnlisten(pattern);
        }
        /*
        * Accepting a listener request informs deepstream that the current provider is willing to
        * provide the record or event matching the subscriptionName . This will establish the current
        * provider as the only publisher for the actual subscription with the deepstream cluster.
        * Either accept or reject needs to be called by the listener
        */

    }, {
        key: 'accept',
        value: function accept(pattern, subscription) {
            this.services.connection.sendMessage({
                topic: this.topic,
                action: this.actions.LISTEN_ACCEPT,
                name: pattern,
                subscription: subscription
            });
        }
        /*
        * Rejecting a listener request informs deepstream that the current provider is not willing
        * to provide the record or event matching the subscriptionName . This will result in deepstream
        * requesting another provider to do so instead. If no other provider accepts or exists, the
        * resource will remain unprovided.
        * Either accept or reject needs to be called by the listener
        */

    }, {
        key: 'reject',
        value: function reject(pattern, subscription) {
            this.services.connection.sendMessage({
                topic: this.topic,
                action: this.actions.LISTEN_REJECT,
                name: pattern,
                subscription: subscription
            });
        }
    }, {
        key: 'stop',
        value: function stop(subscription, callback) {
            this.stopCallbacks.set(subscription, callback);
        }
    }, {
        key: 'handle',
        value: function handle(message) {
            if (message.isAck) {
                this.services.timeoutRegistry.remove(message);
                return;
            }
            if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_FOUND) {
                var listener = this.listeners.get(message.name);
                if (listener) {
                    listener(message.subscription, {
                        accept: this.accept.bind(this, message.name, message.subscription),
                        reject: this.reject.bind(this, message.name, message.subscription),
                        onStop: this.stop.bind(this, message.subscription)
                    });
                }
                return;
            }
            if (message.action === this.actions.SUBSCRIPTION_FOR_PATTERN_REMOVED) {
                var stopCallback = this.stopCallbacks.get(message.subscription);
                if (stopCallback) {
                    stopCallback(message.subscription);
                    this.stopCallbacks.delete(message.subscription);
                }
                return;
            }
            this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
        }
    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            this.stopCallbacks.forEach(function (callback, subscription) {
                callback(subscription);
            });
            this.stopCallbacks.clear();
        }
    }, {
        key: 'onConnectionReestablished',
        value: function onConnectionReestablished() {
            var _this = this;

            this.listeners.forEach(function (callback, pattern) {
                _this.sendListen(pattern);
            });
        }
        /*
        * Sends a C.ACTIONS.LISTEN to deepstream.
        */

    }, {
        key: 'sendListen',
        value: function sendListen(pattern) {
            var message = {
                topic: this.topic,
                action: this.actions.LISTEN,
                name: pattern
            };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }, {
        key: 'sendUnlisten',
        value: function sendUnlisten(pattern) {
            var message = {
                topic: this.topic,
                action: this.actions.UNLISTEN,
                name: pattern
            };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }]);

    return Listener;
}();
// CONCATENATED MODULE: ./src/event/event-handler.ts
var event_handler_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function event_handler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var event_handler_EventHandler = function () {
    function EventHandler(services, options, listeners) {
        event_handler_classCallCheck(this, EventHandler);

        this.services = services;
        this.listeners = listeners || new listener_Listener(message_constants["TOPIC"].EVENT, services);
        this.emitter = new component_emitter2();
        this.limboQueue = [];
        this.services.connection.registerHandler(message_constants["TOPIC"].EVENT, this.handle.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
    * Subscribe to an event. This will receive both locally emitted events
    * as well as events emitted by other connected clients.
    */


    event_handler_createClass(EventHandler, [{
        key: 'subscribe',
        value: function subscribe(name, callback) {
            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            if (typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            if (!this.emitter.hasListeners(name)) {
                if (this.services.connection.isConnected) {
                    this.sendSubscriptionMessage(name);
                }
            }
            this.emitter.on(name, callback);
        }
        /**
         * Removes a callback for a specified event. If all callbacks
         * for an event have been removed, the server will be notified
         * that the client is unsubscribed as a listener
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(name, callback) {
            if (!name || typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            if (callback !== undefined && typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            if (!this.emitter.hasListeners(name)) {
                this.services.logger.warn({
                    topic: message_constants["TOPIC"].EVENT,
                    action: message_constants["EVENT_ACTIONS"].NOT_SUBSCRIBED,
                    name: name
                });
                return;
            }
            this.emitter.off(name, callback);
            if (!this.emitter.hasListeners(name)) {
                var message = {
                    topic: message_constants["TOPIC"].EVENT,
                    action: message_constants["EVENT_ACTIONS"].UNSUBSCRIBE,
                    name: name
                };
                this.services.timeoutRegistry.add({ message: message });
                this.services.connection.sendMessage(message);
            }
        }
        /**
         * Emits an event locally and sends a message to the server to
         * broadcast the event to the other connected clients
         */

    }, {
        key: 'emit',
        value: function emit(name, data) {
            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            var message = {
                topic: message_constants["TOPIC"].EVENT,
                action: message_constants["EVENT_ACTIONS"].EMIT,
                name: name,
                parsedData: data
            };
            if (this.services.connection.isConnected) {
                this.services.connection.sendMessage(message);
            } else if (this.services.connection.isInLimbo) {
                this.limboQueue.push(message);
            }
            this.emitter.emit(name, data);
        }
        /**
        * Allows to listen for event subscriptions made by this or other clients. This
        * is useful to create "active" data providers, e.g. providers that only provide
        * data for a particular event if a user is actually interested in it
        */

    }, {
        key: 'listen',
        value: function listen(pattern, callback) {
            this.listeners.listen(pattern, callback);
        }
        /**
         * Removes a listener that was previously registered
         */

    }, {
        key: 'unlisten',
        value: function unlisten(pattern) {
            this.listeners.unlisten(pattern);
        }
        /**
        * Handles incoming messages from the server
        */

    }, {
        key: 'handle',
        value: function handle(message) {
            if (message.isAck) {
                this.services.timeoutRegistry.remove(message);
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].EMIT) {
                if (message.parsedData !== undefined) {
                    this.emitter.emit(message.name, message.parsedData);
                } else {
                    this.emitter.emit(message.name, undefined);
                }
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].MESSAGE_DENIED) {
                this.services.logger.error({ topic: message_constants["TOPIC"].EVENT }, message_constants["EVENT_ACTIONS"].MESSAGE_DENIED);
                this.services.timeoutRegistry.remove(message);
                if (message.originalAction === message_constants["EVENT_ACTIONS"].SUBSCRIBE) {
                    this.emitter.off(message.name);
                }
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].MULTIPLE_SUBSCRIPTIONS) {
                this.services.timeoutRegistry.remove(Object.assign({}, message, {
                    action: message_constants["EVENT_ACTIONS"].SUBSCRIBE
                }));
                this.services.logger.warn(message);
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].NOT_SUBSCRIBED) {
                this.services.timeoutRegistry.remove(Object.assign({}, message, {
                    action: message_constants["EVENT_ACTIONS"].SUBSCRIBE
                }));
                this.services.logger.warn(message);
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND || message.action === message_constants["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED) {
                this.listeners.handle(message);
                return;
            }
            if (message.action === message_constants["EVENT_ACTIONS"].INVALID_LISTEN_REGEX) {
                this.services.logger.error(message);
                return;
            }
            this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
        }
        /**
         * Resubscribes to events when connection is lost
         */

    }, {
        key: 'onConnectionReestablished',
        value: function onConnectionReestablished() {
            var callbacks = this.emitter.eventNames();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var name = _step.value;

                    this.sendSubscriptionMessage(name);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var i = 0; i < this.limboQueue.length; i++) {
                this.services.connection.sendMessage(this.limboQueue[i]);
            }
            this.limboQueue = [];
        }
    }, {
        key: 'onExitLimbo',
        value: function onExitLimbo() {
            this.limboQueue = [];
        }
    }, {
        key: 'sendSubscriptionMessage',
        value: function sendSubscriptionMessage(name) {
            var message = {
                topic: message_constants["TOPIC"].EVENT,
                action: message_constants["EVENT_ACTIONS"].SUBSCRIBE,
                name: name
            };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }]);

    return EventHandler;
}();
// CONCATENATED MODULE: ./src/rpc/rpc.ts
var rpc_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function rpc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 */
var rpc_RPC = function () {
    function RPC(name, correlationId, data, response, options, services) {
        rpc_classCallCheck(this, RPC);

        this.options = options;
        this.services = services;
        this.name = name;
        this.correlationId = correlationId;
        this.response = response;
        var message = {
            topic: message_constants["TOPIC"].RPC,
            action: message_constants["RPC_ACTIONS"].REQUEST,
            correlationId: correlationId,
            name: name,
            parsedData: data
        };
        this.acceptTimeout = this.services.timeoutRegistry.add({
            message: {
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].ACCEPT,
                name: this.name,
                correlationId: this.correlationId
            },
            event: message_constants["RPC_ACTIONS"].ACCEPT_TIMEOUT,
            duration: this.options.rpcAcceptTimeout,
            callback: this.onTimeout.bind(this)
        });
        this.responseTimeout = this.services.timeoutRegistry.add({
            message: {
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].REQUEST,
                name: this.name,
                correlationId: this.correlationId
            },
            event: message_constants["RPC_ACTIONS"].RESPONSE_TIMEOUT,
            duration: this.options.rpcResponseTimeout,
            callback: this.onTimeout.bind(this)
        });
        this.services.connection.sendMessage(message);
    }
    /**
     * Called once an ack message is received from the server
     */


    rpc_createClass(RPC, [{
        key: 'accept',
        value: function accept() {
            this.services.timeoutRegistry.clear(this.acceptTimeout);
        }
        /**
         * Called once a response message is received from the server.
         */

    }, {
        key: 'respond',
        value: function respond(data) {
            this.response(null, data);
            this.complete();
        }
        /**
         * Called once an error is received from the server.
         */

    }, {
        key: 'error',
        value: function error(data) {
            this.response(data);
            this.complete();
        }
        /**
         * Callback for error messages received from the server. Once
         * an error is received the request is considered completed. Even
         * if a response arrives later on it will be ignored / cause an
         * UNSOLICITED_MESSAGE error
         */

    }, {
        key: 'onTimeout',
        value: function onTimeout(event, message) {
            this.response(message_constants["RPC_ACTIONS"][event]);
            this.complete();
        }
        /**
         * Called after either an error or a response
         * was received
        */

    }, {
        key: 'complete',
        value: function complete() {
            this.services.timeoutRegistry.clear(this.acceptTimeout);
            this.services.timeoutRegistry.clear(this.responseTimeout);
        }
    }]);

    return RPC;
}();
// CONCATENATED MODULE: ./src/rpc/rpc-response.ts
var rpc_response_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function rpc_response_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * This class represents a single remote procedure
 * call made from the client to the server. It's main function
 * is to encapsulate the logic around timeouts and to convert the
 * incoming response data
 */

var rpc_response_RPCResponse = function () {
    function RPCResponse(message, options, services) {
        rpc_response_classCallCheck(this, RPCResponse);

        this.name = message.name;
        this.correlationId = message.correlationId;
        this.services = services;
        this.isAccepted = false;
        this.isComplete = false;
        this.autoAccept = true;
        this.services.timerRegistry.requestIdleCallback(this.performAutoAck.bind(this));
    }
    /**
     * Acknowledges the receipt of the request. This
     * will happen implicitly unless the request callback
     * explicitly sets autoAck to false
     */


    rpc_response_createClass(RPCResponse, [{
        key: 'accept',
        value: function accept() {
            if (this.isAccepted === false) {
                this.services.connection.sendMessage({
                    topic: message_constants["TOPIC"].RPC,
                    action: message_constants["RPC_ACTIONS"].ACCEPT,
                    name: this.name,
                    correlationId: this.correlationId
                });
                this.isAccepted = true;
            }
        }
        /**
         * Reject the request. This might be necessary if the client
         * is already processing a large number of requests. If deepstream
         * receives a rejection message it will try to route the request to
         * another provider - or return a NO_RPC_PROVIDER error if there are no
         * providers left
         */

    }, {
        key: 'reject',
        value: function reject() {
            if (this.isComplete === true) {
                throw new Error('Rpc ' + this.name + ' already completed');
            }
            this.autoAccept = false;
            this.isComplete = true;
            this.isAccepted = true;
            this.services.connection.sendMessage({
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].REJECT,
                name: this.name,
                correlationId: this.correlationId
            });
        }
        /**
         * Notifies the server that an error has occured while trying to process the request.
         * This will complete the rpc.
         */

    }, {
        key: 'error',
        value: function error(_error) {
            if (this.isComplete === true) {
                throw new Error('Rpc ' + this.name + ' already completed');
            }
            this.autoAccept = false;
            this.isComplete = true;
            this.isAccepted = true;
            this.services.connection.sendMessage({
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].REQUEST_ERROR,
                name: this.name,
                correlationId: this.correlationId,
                parsedData: _error
            });
        }
        /**
         * Completes the request by sending the response data
         * to the server. If data is an array or object it will
         * automatically be serialised.
         * If autoAck is disabled and the response is sent before
         * the ack message the request will still be completed and the
         * ack message ignored
         */

    }, {
        key: 'send',
        value: function send(data) {
            if (this.isComplete === true) {
                throw new Error('Rpc ' + this.name + ' already completed');
            }
            this.accept();
            this.services.connection.sendMessage({
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].RESPONSE,
                name: this.name,
                correlationId: this.correlationId,
                parsedData: data
            });
            this.isComplete = true;
        }
        /**
         * Callback for the autoAck timeout. Executes ack
         * if autoAck is not disabled
         */

    }, {
        key: 'performAutoAck',
        value: function performAutoAck() {
            if (this.autoAccept === true) {
                this.accept();
            }
        }
    }]);

    return RPCResponse;
}();


// CONCATENATED MODULE: ./src/rpc/rpc-handler.ts
var rpc_handler_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var rpc_handler_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function rpc_handler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var rpc_handler_RPCHandler = function () {
    function RPCHandler(services, options) {
        rpc_handler_classCallCheck(this, RPCHandler);

        this.services = services;
        this.options = options;
        this.rpcs = new Map();
        this.providers = new Map();
        this.limboQueue = [];
        this.services.connection.registerHandler(message_constants["TOPIC"].RPC, this.handle.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Registers a callback function as a RPC provider. If another connected client calls
     * client.rpc.make() the request will be routed to this method
     *
     * The callback will be invoked with two arguments:
     *     {Mixed} data The data passed to the client.rpc.make function
     *     {RpcResponse} rpcResponse An object with methods to response,
     *                               acknowledge or reject the request
     *
     * Only one callback can be registered for a RPC at a time
     *
     * Please note: Deepstream tries to deliver data in its original format.
     * Data passed to client.rpc.make as a String will arrive as a String,
     * numbers or implicitly JSON serialized objects will arrive in their
     * respective format as well
     */


    rpc_handler_createClass(RPCHandler, [{
        key: 'provide',
        value: function provide(name, callback) {
            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            if (this.providers.has(name)) {
                throw new Error('RPC ' + name + ' already registered');
            }
            if (typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            this.providers.set(name, callback);
            if (this.services.connection.isConnected) {
                this.sendProvide(name);
            }
        }
        /**
         * Unregisters this client as a provider for a remote procedure call
         */

    }, {
        key: 'unprovide',
        value: function unprovide(name) {
            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            if (!this.providers.has(name)) {
                this.services.logger.warn({
                    topic: message_constants["TOPIC"].RPC,
                    action: message_constants["RPC_ACTIONS"].NOT_PROVIDED,
                    name: name
                });
                return;
            }
            this.providers.delete(name);
            if (this.services.connection.isConnected) {
                var message = { topic: message_constants["TOPIC"].RPC, action: message_constants["RPC_ACTIONS"].UNPROVIDE, name: name };
                this.services.timeoutRegistry.add({ message: message });
                this.services.connection.sendMessage(message);
                return;
            }
        }
    }, {
        key: 'make',
        value: function make(name, data, callback) {
            var _this = this;

            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument name');
            }
            if (callback && typeof callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            var correlationId = getUid();
            if (this.services.connection.isConnected) {
                if (callback) {
                    this.rpcs.set(correlationId, new rpc_RPC(name, correlationId, data, callback, this.options, this.services));
                    return;
                }
                return new Promise(function (resolve, reject) {
                    _this.rpcs.set(correlationId, new rpc_RPC(name, correlationId, data, function (error, result) {
                        return error ? reject(error) : resolve(result);
                    }, _this.options, _this.services));
                });
            } else if (this.services.connection.isInLimbo) {
                if (callback) {
                    this.limboQueue.push({ correlationId: correlationId, name: name, data: data, callback: callback });
                } else {
                    return new Promise(function (resolve, reject) {
                        _this.limboQueue.push({ correlationId: correlationId, name: name, data: data, callback: function callback(error, result) {
                                return error ? reject(error) : resolve(result);
                            } });
                    });
                }
            } else {
                if (callback) {
                    callback(EVENT.CLIENT_OFFLINE);
                } else {
                    return Promise.reject(EVENT.CLIENT_OFFLINE);
                }
            }
        }
        /**
         * Handles incoming rpc REQUEST messages. Instantiates a new response object
         * and invokes the provider callback or rejects the request if no rpc provider
         * is present (which shouldn't really happen, but might be the result of a race condition
         * if this client sends a unprovide message whilst an incoming request is already in flight)
         */

    }, {
        key: 'respondToRpc',
        value: function respondToRpc(message) {
            var provider = this.providers.get(message.name);
            if (provider) {
                if (this.options.messageRewriter) {
                    this.options.messageRewriter(message);
                }
                provider(message.parsedData, new rpc_response_RPCResponse(message, this.options, this.services));
            } else {
                this.services.connection.sendMessage({
                    topic: message_constants["TOPIC"].RPC,
                    action: message_constants["RPC_ACTIONS"].REJECT,
                    name: message.name,
                    correlationId: message.correlationId
                });
            }
        }
        /**
         * Distributes incoming messages from the server
         * based on their action
         */

    }, {
        key: 'handle',
        value: function handle(message) {
            // RPC Requests
            if (message.action === message_constants["RPC_ACTIONS"].REQUEST) {
                this.respondToRpc(message);
                return;
            }
            // RPC subscription Acks
            if (message.isAck) {
                this.services.timeoutRegistry.remove(message);
                return;
            }
            // handle auth/denied subscription errors
            if (message.action === message_constants["RPC_ACTIONS"].MESSAGE_PERMISSION_ERROR || message.action === message_constants["RPC_ACTIONS"].MESSAGE_DENIED) {
                if (message.originalAction === message_constants["RPC_ACTIONS"].PROVIDE || message.originalAction === message_constants["RPC_ACTIONS"].UNPROVIDE) {
                    this.services.timeoutRegistry.remove(message);
                    this.providers.delete(message.name);
                    this.services.logger.error(message);
                    return;
                }
                if (message.originalAction === message_constants["RPC_ACTIONS"].REQUEST) {
                    var invalidRPC = this.getRPC(message);
                    if (invalidRPC) {
                        invalidRPC.error(message_constants["RPC_ACTIONS"][message.action]);
                        this.rpcs.delete(message.correlationId);
                        return;
                    }
                }
            }
            // RPC Responses
            var rpc = this.getRPC(message);
            if (rpc) {
                if (message.action === message_constants["RPC_ACTIONS"].ACCEPT) {
                    rpc.accept();
                    return;
                }
                if (message.action === message_constants["RPC_ACTIONS"].RESPONSE) {
                    rpc.respond(message.parsedData);
                } else if (message.action === message_constants["RPC_ACTIONS"].REQUEST_ERROR) {
                    rpc.error(message.parsedData);
                } else if (message.action === message_constants["RPC_ACTIONS"].RESPONSE_TIMEOUT || message.action === message_constants["RPC_ACTIONS"].NO_RPC_PROVIDER) {
                    rpc.error(message_constants["RPC_ACTIONS"][message.action]);
                }
                this.rpcs.delete(message.correlationId);
            }
        }
    }, {
        key: 'getRPC',
        value: function getRPC(message) {
            var rpc = this.rpcs.get(message.correlationId);
            if (rpc === undefined) {
                this.services.logger.error(message, EVENT.UNKNOWN_CORRELATION_ID);
            }
            return rpc;
        }
    }, {
        key: 'sendProvide',
        value: function sendProvide(name) {
            var message = {
                topic: message_constants["TOPIC"].RPC,
                action: message_constants["RPC_ACTIONS"].PROVIDE,
                name: name
            };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }, {
        key: 'onConnectionReestablished',
        value: function onConnectionReestablished() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.providers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = rpc_handler_slicedToArray(_ref, 1);

                    var name = _ref2[0];

                    this.sendProvide(name);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            for (var i = 0; i < this.limboQueue.length; i++) {
                var _limboQueue$i = this.limboQueue[i],
                    correlationId = _limboQueue$i.correlationId,
                    _name = _limboQueue$i.name,
                    data = _limboQueue$i.data,
                    callback = _limboQueue$i.callback;

                this.rpcs.set(correlationId, new rpc_RPC(_name, correlationId, data, callback, this.options, this.services));
            }
            this.limboQueue = [];
        }
    }, {
        key: 'onExitLimbo',
        value: function onExitLimbo() {
            for (var i = 0; i < this.limboQueue.length; i++) {
                this.limboQueue[i].callback(EVENT.CLIENT_OFFLINE);
            }
            this.limboQueue = [];
        }
    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            this.rpcs.forEach(function (rpc) {
                rpc.error(EVENT.CLIENT_OFFLINE);
            });
            this.rpcs.clear();
        }
    }]);

    return RPCHandler;
}();
// CONCATENATED MODULE: ./src/record/json-path.ts
var json_path_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


var SPLIT_REG_EXP = /[[\]]/g;
/**
* Returns the value of the path or
* undefined if the path can't be resolved
*/
function json_path_get(data, path, deepCopy) {
    var tokens = tokenize(path);
    var value = data;
    for (var i = 0; i < tokens.length; i++) {
        if (value === undefined) {
            return undefined;
        }
        if ((typeof value === 'undefined' ? 'undefined' : json_path_typeof(value)) !== 'object') {
            throw new Error('invalid data or path');
        }
        value = value[tokens[i]];
    }
    return deepCopy !== false ? utils_deepCopy(value) : value;
}
/**
 * This class allows to set or get specific
 * values within a json data structure using
 * string-based paths
 */
function setValue(root, path, value) {
    if (path === null) {
        return value;
    }
    var tokens = tokenize(path);
    var rootCopy = utils_deepCopy(root);
    var valueCopy = utils_deepCopy(value);
    var node = rootCopy;
    var i = void 0;
    for (i = 0; i < tokens.length - 1; i++) {
        var token = tokens[i];
        if (node[token] !== undefined && node[token] !== null && json_path_typeof(node[token]) === 'object') {
            node = node[token];
        } else if (typeof tokens[i + 1] === 'number') {
            var array = new Array(tokens[i + 1]);
            array.fill(null);
            node = node[token] = array;
        } else {
            node = node[token] = {};
        }
    }
    if (value === undefined) {
        delete node[tokens[i]];
    } else {
        node[tokens[i]] = valueCopy;
    }
    return rootCopy;
}
/**
 * Parses the path. Splits it into
 * keys for objects and indices for arrays.
 */
function tokenize(path) {
    if (path === null) {
        return [];
    }
    var tokens = [];
    var parts = path.split('.');
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();
        if (part.length === 0) {
            continue;
        }
        var arrayIndexes = part.split(SPLIT_REG_EXP);
        if (arrayIndexes.length === 0) {
            // TODO
            continue;
        }
        tokens.push(arrayIndexes[0]);
        for (var j = 1; j < arrayIndexes.length; j++) {
            if (arrayIndexes[j].length === 0) {
                continue;
            }
            tokens.push(Number(arrayIndexes[j]));
        }
    }
    return tokens;
}
// CONCATENATED MODULE: ./src/record/record-core.ts
var record_core_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var record_core_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var record_core_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function record_core_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function record_core_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function record_core_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var record_core_RecordCore = function (_Emitter) {
    record_core_inherits(RecordCore, _Emitter);

    function RecordCore(name, services, options, recordServices, whenComplete) {
        record_core_classCallCheck(this, RecordCore);

        var _this = record_core_possibleConstructorReturn(this, (RecordCore.__proto__ || Object.getPrototypeOf(RecordCore)).call(this));

        _this.services = services;
        _this.options = options;
        _this.recordServices = recordServices;
        _this.emitter = new component_emitter2();
        _this.data = Object.create(null);
        _this.name = name;
        _this.whenComplete = whenComplete;
        _this.references = 1;
        _this.hasProvider = false;
        _this.pendingWrites = [];
        _this.isReady = false;
        _this.parentEmitter = services.emitter;
        _this.version = null;
        _this.responseTimeout = -1;
        _this.discardTimeout = -1;
        _this.deletedTimeout = -1;
        _this.deleteResponse = {};
        if (typeof name !== 'string' || name.length === 0) {
            throw new Error('invalid argument name');
        }

        var _map = [_this.onSubscribing, _this.onReady, _this.onDeleted, _this.onUnsubscribed].map(function (f) {
            return f.bind(_this);
        }),
            _map2 = record_core_slicedToArray(_map, 4),
            onSubscribing = _map2[0],
            onReady = _map2[1],
            onDeleted = _map2[2],
            onUnsubscribed = _map2[3];

        var transitions = [{
            name: message_constants["RECORD_ACTIONS"].SUBSCRIBE,
            from: 0 /* INITIAL */, to: 1 /* SUBSCRIBING */
            , handler: onSubscribing
        }, {
            name: message_constants["RECORD_ACTIONS"].READ_RESPONSE,
            from: 1 /* SUBSCRIBING */, to: 2 /* READY */
            , handler: onReady
        }, {
            name: message_constants["RECORD_ACTIONS"].DELETE,
            from: 2 /* READY */, to: 5 /* DELETING */
        }, {
            name: message_constants["RECORD_ACTIONS"].DELETED,
            from: 2 /* READY */, to: 6 /* DELETED */
            , handler: onDeleted
        }, {
            name: message_constants["RECORD_ACTIONS"].DELETE_SUCCESS,
            from: 5 /* DELETING */, to: 6 /* DELETED */
            , handler: onDeleted
        }, {
            name: message_constants["RECORD_ACTIONS"].UNSUBSCRIBE,
            from: 2 /* READY */, to: 3 /* UNSUBSCRIBING */
        },
        // Ignore unsubscribes while in the unsubscribing state.
        {
            name: message_constants["RECORD_ACTIONS"].UNSUBSCRIBE,
            from: 3 /* UNSUBSCRIBING */, to: 3 /* UNSUBSCRIBING */
        }, {
            name: message_constants["RECORD_ACTIONS"].SUBSCRIBE,
            from: 3 /* UNSUBSCRIBING */, to: 2 /* READY */
        }, {
            name: message_constants["RECORD_ACTIONS"].UNSUBSCRIBE_ACK,
            from: 3 /* UNSUBSCRIBING */, to: 4 /* UNSUBSCRIBED */
            , handler: onUnsubscribed
        }];
        var onStateChanged = function onStateChanged(newState, oldState) {
            _this.emitter.emit(EVENT.RECORD_STATE_CHANGED, newState);
        };
        var stateMachine = { init: 0 /* INITIAL */, onStateChanged: onStateChanged, transitions: transitions };
        _this.stateMachine = new StateMachine(_this.services.logger, stateMachine);
        _this.handleReadResponse = _this.handleReadResponse.bind(_this);
        _this.onConnectionLost = _this.onConnectionLost.bind(_this);
        _this.stateMachine.transition(message_constants["RECORD_ACTIONS"].SUBSCRIBE);
        return _this;
    }

    record_core_createClass(RecordCore, [{
        key: 'whenReady',

        /**
         * Convenience method, similar to promises. Executes callback
         * whenever the record is ready, either immediatly or once the ready
         * event is fired
         * @param   {[Function]} callback Will be called when the record is ready
         */
        value: function whenReady(context, callback) {
            var _this2 = this;

            switch (true) {
                case this.isReady && !!callback:
                    callback(context);
                    return;
                case this.isReady && !callback:
                    return Promise.resolve(context);
                case !this.isReady && !!callback:
                    this.once(EVENT.RECORD_READY, function () {
                        return callback(context);
                    });
                    return;
                case !this.isReady && !callback:
                    return new Promise(function (resolve, reject) {
                        _this2.once(EVENT.RECORD_READY, function () {
                            return resolve(context);
                        });
                    });
            }
        }
        /**
         * Sets the value of either the entire dataset
         * or of a specific path within the record
         * and submits the changes to the server
         *
         * If the new data is equal to the current data, nothing will happen
         *
         * @param {[String|Object]} pathOrData Either a JSON path when called with
         *                                     two arguments or the data itself
         * @param {Object} data     The data that should be stored in the record
         */

    }, {
        key: 'set',
        value: function set(_ref) {
            var _this3 = this;

            var path = _ref.path,
                data = _ref.data,
                callback = _ref.callback;

            if (!path && (data === null || (typeof data === 'undefined' ? 'undefined' : record_core_typeof(data)) !== 'object')) {
                throw new Error('invalid arguments, scalar values cannot be set without path');
            }
            if (!this.isReady || !this.services.connection.isConnected) {
                this.pendingWrites.push({ path: path, data: data, callback: callback });
                return;
            }
            var oldValue = this.data;
            var newValue = setValue(oldValue, path || null, data);
            if (oldValue === newValue) {
                if (callback) {
                    this.services.timerRegistry.requestIdleCallback(function () {
                        return callback(null, _this3.name);
                    });
                }
                return;
            }
            this.applyChange(newValue);
            this.sendUpdate(path, data, callback);
        }
        /**
         * Wrapper function around the record.set that returns a promise
         * if no callback is supplied.
         * @returns {Promise} if a callback is omitted a Promise is returned with the result of the write
         */

    }, {
        key: 'setWithAck',
        value: function setWithAck(args) {
            var _this4 = this;

            if (args.callback) {
                this.set(args);
                return;
            }
            return new Promise(function (resolve, reject) {
                args.callback = function (error) {
                    return error === null ? resolve() : reject(error);
                };
                _this4.set(args);
            });
        }
        /**
         * Returns a copy of either the entire dataset of the record
         * or - if called with a path - the value of that path within
         * the record's dataset.
         *
         * Returning a copy rather than the actual value helps to prevent
         * the record getting out of sync due to unintentional changes to
         * its data
         */

    }, {
        key: 'get',
        value: function get(path) {
            return json_path_get(this.data, path || null, this.options.recordDeepCopy);
        }
        /**
         * Subscribes to changes to the records dataset.
         *
         * Callback is the only mandatory argument.
         *
         * When called with a path, it will only subscribe to updates
         * to that path, rather than the entire record
         *
         * If called with true for triggerNow, the callback will
         * be called immediatly with the current value
         */

    }, {
        key: 'subscribe',
        value: function subscribe(args) {
            var _this5 = this;

            if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
                throw new Error('invalid argument path');
            }
            if (typeof args.callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            if (args.triggerNow) {
                this.whenReady(null, function () {
                    _this5.emitter.on(args.path || '', args.callback);
                    args.callback(_this5.get(args.path));
                });
            } else {
                this.emitter.on(args.path || '', args.callback);
            }
        }
        /**
         * Removes a subscription that was previously made using record.subscribe()
         *
         * Can be called with a path to remove the callback for this specific
         * path or only with a callback which removes it from the generic subscriptions
         *
         * Please Note: unsubscribe is a purely client side operation. If the app is no longer
         * interested in receiving updates for this record from the server it needs to call
         * discard instead
         *
         * @param   {String}           path  A JSON path
         * @param   {Function}         callback     The callback method. Please note, if a bound
         *                                          method was passed to subscribe, the same method
         *                                          must be passed to unsubscribe as well.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(args) {
            if (args.path !== undefined && (typeof args.path !== 'string' || args.path.length === 0)) {
                throw new Error('invalid argument path');
            }
            if (args.callback !== undefined && typeof args.callback !== 'function') {
                throw new Error('invalid argument callback');
            }
            this.emitter.off(args.path || '', args.callback);
        }
        /**
         * Removes all change listeners and notifies the server that the client is
         * no longer interested in updates for this record
         */

    }, {
        key: 'discard',
        value: function discard() {
            var _this6 = this;

            this.whenReady(null, function () {
                _this6.references--;
                if (_this6.references <= 0) {
                    _this6.discardTimeout = _this6.services.timerRegistry.add({
                        duration: _this6.options.discardTimeout,
                        callback: _this6.stateMachine.transition,
                        context: _this6.stateMachine,
                        data: message_constants["RECORD_ACTIONS"].UNSUBSCRIBE_ACK
                    });
                }
            });
            this.stateMachine.transition(message_constants["RECORD_ACTIONS"].UNSUBSCRIBE);
        }
        /**
         * Deletes the record on the server.
         */

    }, {
        key: 'delete',
        value: function _delete(callback) {
            var _this7 = this;

            if (!this.services.connection.isConnected) {
                // this.services.logger.warn({ topic: TOPIC.RECORD }, RA.DELETE, 'Deleting while offline is not supported')
                if (callback) {
                    this.services.timerRegistry.requestIdleCallback(function () {
                        callback('Deleting while offline is not supported');
                    });
                    return;
                }
                return Promise.reject('Deleting while offline is not supported');
            }
            this.stateMachine.transition(message_constants["RECORD_ACTIONS"].DELETE);
            if (callback && typeof callback === 'function') {
                this.deleteResponse = { callback: callback };
                this.sendDelete();
            } else {
                return new Promise(function (resolve, reject) {
                    _this7.deleteResponse = { resolve: resolve, reject: reject };
                    _this7.sendDelete();
                });
            }
        }
        /**
         * Set a merge strategy to resolve any merge conflicts that may occur due to
         * write conflicts. The function will be called with the local record, the
         * remote version/data and a callback to call once the merge has completed or
         * if an error occurs ( which leaves it in an inconsistent state until the
         * next update merge attempt ).
         */

    }, {
        key: 'setMergeStrategy',
        value: function setMergeStrategy(mergeStrategy) {
            this.recordServices.mergeStrategy.setMergeStrategyByName(this.name, mergeStrategy);
        }
    }, {
        key: 'saveRecordLocally',
        value: function saveRecordLocally() {
            this.services.storage.set(this.name, this.version, this.data, function () {});
        }
        /**
         * Transition States
         */

    }, {
        key: 'onSubscribing',
        value: function onSubscribing() {
            var _this8 = this;

            this.recordServices.readRegistry.register(this.name, this.handleReadResponse.bind(this));
            this.parentEmitter.on(EVENT.CONNECTION_STATE_CHANGED, function (newState) {
                if (newState === CONNECTION_STATE.OPEN) {
                    _this8.services.connection.sendMessage({
                        topic: message_constants["TOPIC"].RECORD,
                        action: message_constants["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD,
                        name: _this8.name
                    });
                }
            });
            this.services.timeoutRegistry.add({
                message: {
                    topic: message_constants["TOPIC"].RECORD,
                    action: message_constants["RECORD_ACTIONS"].SUBSCRIBE,
                    name: this.name
                }
            });
            this.responseTimeout = this.services.timeoutRegistry.add({
                message: {
                    topic: message_constants["TOPIC"].RECORD,
                    action: message_constants["RECORD_ACTIONS"].READ_RESPONSE,
                    name: this.name
                }
            });
            if (this.services.connection.isConnected) {
                this.services.connection.sendMessage({
                    topic: message_constants["TOPIC"].RECORD,
                    action: message_constants["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD,
                    name: this.name
                });
            }
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            this.services.timeoutRegistry.clear(this.responseTimeout);
            this.applyPendingWrites();
            this.isReady = true;
            this.emit(EVENT.RECORD_READY);
        }
    }, {
        key: 'applyPendingWrites',
        value: function applyPendingWrites() {
            var _this9 = this;

            var writeCallbacks = [];
            var oldData = this.data;
            var newData = oldData;
            for (var i = 0; i < this.pendingWrites.length; i++) {
                var _pendingWrites$i = this.pendingWrites[i],
                    callback = _pendingWrites$i.callback,
                    path = _pendingWrites$i.path,
                    data = _pendingWrites$i.data;

                if (callback) {
                    writeCallbacks.push(callback);
                }
                newData = setValue(newData, path || null, data);
            }
            this.pendingWrites = [];
            this.applyChange(newData);
            var runFns = function runFns(err) {
                for (var _i = 0; _i < writeCallbacks.length; _i++) {
                    writeCallbacks[_i](err, _this9.name);
                }
            };
            if (deepEquals(oldData, newData)) {
                runFns(null);
                return;
            }
            // Assume we are connected, otherwise we would not be in a ready state.
            this.sendUpdate(null, newData, runFns);
        }
        /// Handlers for received record messages ///

    }, {
        key: 'onUnsubscribed',
        value: function onUnsubscribed() {
            if (this.services.connection.isConnected) {
                var message = {
                    topic: message_constants["TOPIC"].RECORD,
                    action: message_constants["RECORD_ACTIONS"].UNSUBSCRIBE,
                    name: this.name
                };
                this.discardTimeout = this.services.timeoutRegistry.add({ message: message });
                this.services.connection.sendMessage(message);
            }
            this.emit(EVENT.RECORD_DISCARDED);
            this.destroy();
        }
    }, {
        key: 'onDeleted',
        value: function onDeleted() {
            this.emit(EVENT.RECORD_DELETED);
            this.destroy();
        }
    }, {
        key: 'handleAckMessage',
        value: function handleAckMessage(message) {
            this.services.timeoutRegistry.remove(message);
        }
    }, {
        key: 'handleUpdateMessage',
        value: function handleUpdateMessage(message) {
            this.applyUpdate(message);
        }
    }, {
        key: 'handleDeleteSuccess',
        value: function handleDeleteSuccess() {
            this.services.timeoutRegistry.clear(this.deletedTimeout);
            this.stateMachine.transition(message_constants["RECORD_ACTIONS"].DELETE_SUCCESS);
            if (this.deleteResponse.callback) {
                this.deleteResponse.callback(null);
            } else if (this.deleteResponse.resolve) {
                this.deleteResponse.resolve();
            }
        }
    }, {
        key: 'handleDeleted',
        value: function handleDeleted() {
            this.stateMachine.transition(message_constants["RECORD_ACTIONS"].DELETED);
        }
    }, {
        key: 'handleMessageDenied',
        value: function handleMessageDenied(message) {
            var isSubscribeMessage = message.originalAction === message_constants["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD || message.originalAction === message_constants["RECORD_ACTIONS"].SUBSCRIBEANDHEAD || message.originalAction === message_constants["RECORD_ACTIONS"].SUBSCRIBEANDREAD;
            if (isSubscribeMessage) {
                var subscribeMsg = Object.assign({}, message, { originalAction: message_constants["RECORD_ACTIONS"].SUBSCRIBE });
                var actionMsg = Object.assign({}, message, { originalAction: message.originalAction === message_constants["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD ? message_constants["RECORD_ACTIONS"].READ_RESPONSE : message_constants["RECORD_ACTIONS"].HEAD_RESPONSE });
                this.services.timeoutRegistry.remove(subscribeMsg);
                this.services.timeoutRegistry.remove(actionMsg);
            }
            this.emit(EVENT.RECORD_ERROR, message_constants["RECORD_ACTIONS"][message_constants["RECORD_ACTIONS"].MESSAGE_DENIED], message_constants["RECORD_ACTIONS"][message.originalAction]);
            if (message.originalAction === message_constants["RECORD_ACTIONS"].DELETE) {
                if (this.deleteResponse.callback) {
                    this.deleteResponse.callback(message_constants["RECORD_ACTIONS"][message_constants["RECORD_ACTIONS"].MESSAGE_DENIED]);
                } else if (this.deleteResponse.reject) {
                    this.deleteResponse.reject(message_constants["RECORD_ACTIONS"][message_constants["RECORD_ACTIONS"].MESSAGE_DENIED]);
                }
            }
        }
    }, {
        key: 'handleChangedProvider',
        value: function handleChangedProvider(message) {
            this.hasProvider = message.action === message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER;
            this.emit(EVENT.RECORD_HAS_PROVIDER_CHANGED, this.hasProvider);
        }
    }, {
        key: 'handle',
        value: function handle(message) {
            var _this10 = this,
                _mapping;

            if (message.isAck) {
                this.handleAckMessage(message);
                return;
            }
            var mapping = (_mapping = {}, _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].PATCH, function () {
                return _this10.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].UPDATE, function () {
                return _this10.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].ERASE, function () {
                return _this10.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].DELETE_SUCCESS, function () {
                return _this10.handleDeleteSuccess();
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].DELETED, function () {
                return _this10.handleDeleted();
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].MESSAGE_DENIED, function () {
                return _this10.handleMessageDenied(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].MESSAGE_PERMISSION_ERROR, function () {
                return _this10.handleMessageDenied(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER, function () {
                return _this10.handleChangedProvider(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_NO_PROVIDER, function () {
                return _this10.handleChangedProvider(message);
            }), _mapping);
            var defaultAction = function defaultAction() {};
            var handleAction = mapping[message.action] || defaultAction;
            return handleAction();
        }
    }, {
        key: 'handleReadResponse',
        value: function handleReadResponse(message) {
            this.version = message.version;
            this.applyChange(setValue(this.data, null, message.parsedData));
            this.stateMachine.transition(message_constants["RECORD_ACTIONS"].READ_RESPONSE);
        }
        /// Record modification, including update and delete ///

    }, {
        key: 'sendUpdate',
        value: function sendUpdate() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var data = arguments[1];
            var callback = arguments[2];

            this.version++;
            var message = {
                topic: message_constants["TOPIC"].RECORD,
                version: this.version,
                name: this.name
            };
            if (!path) {
                Object.assign(message, { action: message_constants["RECORD_ACTIONS"].UPDATE, parsedData: data });
            } else if (data === undefined) {
                Object.assign(message, { action: message_constants["RECORD_ACTIONS"].ERASE, path: path });
            } else {
                Object.assign(message, { action: message_constants["RECORD_ACTIONS"].PATCH, path: path, parsedData: data });
            }
            if (callback) {
                this.recordServices.writeAckService.send(message, callback);
            } else {
                this.services.connection.sendMessage(message);
            }
        }
        /**
         * Applies incoming updates and patches to the record's dataset
         */

    }, {
        key: 'applyUpdate',
        value: function applyUpdate(message) {
            var version = message.version;
            var data = message.parsedData;
            if (this.version === null) {
                this.version = version;
            }
            this.version = version;
            var newData = void 0;
            if (message.action === message_constants["RECORD_ACTIONS"].PATCH) {
                newData = setValue(this.data, message.path, data);
            } else if (message.action === message_constants["RECORD_ACTIONS"].ERASE) {
                newData = setValue(this.data, message.path, undefined);
            } else {
                newData = setValue(this.data, null, data);
            }
            this.applyChange(newData);
        }
        /**
         * Compares the new values for every path with the previously stored ones and
         * updates the subscribers if the value has changed
         */

    }, {
        key: 'applyChange',
        value: function applyChange(newData) {
            var oldData = this.data;
            this.data = newData;
            var paths = this.emitter.eventNames();
            for (var i = 0; i < paths.length; i++) {
                var newValue = json_path_get(newData, paths[i], false);
                var oldValue = json_path_get(oldData, paths[i], false);
                if (newValue !== oldValue) {
                    this.emitter.emit(paths[i], this.get(paths[i]));
                }
            }
        }
        /**
         * If connected sends the delete message to server, otherwise
         * we delete in local storage and transition to delete success.
         */

    }, {
        key: 'sendDelete',
        value: function sendDelete() {
            var _this11 = this;

            this.whenReady(null, function () {
                if (_this11.services.connection.isConnected) {
                    var message = {
                        topic: message_constants["TOPIC"].RECORD,
                        action: message_constants["RECORD_ACTIONS"].DELETE,
                        name: _this11.name
                    };
                    _this11.deletedTimeout = _this11.services.timeoutRegistry.add({
                        message: message,
                        event: EVENT.RECORD_DELETE_TIMEOUT,
                        duration: _this11.options.recordDeleteTimeout
                    });
                    _this11.services.connection.sendMessage(message);
                } else {
                    _this11.services.storage.delete(_this11.name, function () {
                        _this11.services.timerRegistry.requestIdleCallback(function () {
                            _this11.stateMachine.transition(message_constants["RECORD_ACTIONS"].DELETE_SUCCESS);
                        });
                    });
                }
            });
        }
        /**
         * Destroys the record and nulls all
         * its dependencies
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.services.timerRegistry.remove(this.deletedTimeout);
            this.services.timerRegistry.remove(this.discardTimeout);
            this.services.timerRegistry.remove(this.responseTimeout);
            this.services.connection.removeOnLost(this.onConnectionLost);
            this.emitter.off();
            this.isReady = false;
            this.whenComplete(this.name);
        }
    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            this.saveRecordLocally();
        }
    }, {
        key: 'recordState',
        get: function get() {
            return this.stateMachine.state;
        }
    }, {
        key: 'usages',
        set: function set(usages) {
            this.references = usages;
            if (this.references === 1) {
                this.services.timerRegistry.remove(this.discardTimeout);
                this.stateMachine.transition(message_constants["RECORD_ACTIONS"].SUBSCRIBE);
            }
        },
        get: function get() {
            return this.references;
        }
    }]);

    return RecordCore;
}(component_emitter2);
// CONCATENATED MODULE: ./src/record/record.ts
var record_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function record_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function record_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function record_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var record_Record = function (_Emitter) {
    record_inherits(Record, _Emitter);

    function Record(record) {
        record_classCallCheck(this, Record);

        var _this = record_possibleConstructorReturn(this, (Record.__proto__ || Object.getPrototypeOf(Record)).call(this));

        _this.record = record;
        _this.subscriptions = [];
        _this.record.on(EVENT.RECORD_READY, _this.emit.bind(_this, EVENT.RECORD_READY, _this));
        _this.record.on(EVENT.RECORD_DISCARDED, _this.emit.bind(_this, EVENT.RECORD_DISCARDED));
        _this.record.on(EVENT.RECORD_DELETED, _this.emit.bind(_this, EVENT.RECORD_DELETED));
        _this.record.on(EVENT.RECORD_ERROR, _this.emit.bind(_this, EVENT.RECORD_ERROR));
        return _this;
    }

    record_createClass(Record, [{
        key: 'whenReady',
        value: function whenReady(callback) {
            return this.record.whenReady(this, callback);
        }
    }, {
        key: 'get',
        value: function get(path) {
            return this.record.get(path);
        }
    }, {
        key: 'set',
        value: function set(path, data, callback) {
            return this.record.set(normalizeSetArguments(arguments));
        }
    }, {
        key: 'setWithAck',
        value: function setWithAck(path, data, callback) {
            return this.record.setWithAck(normalizeSetArguments(arguments));
        }
        /**
         * Deletes a path from the record. Equivalent to doing `record.set(path, undefined)`
         *
         * @param {String} path The path to be deleted
         */

    }, {
        key: 'erase',
        value: function erase(path) {
            if (!path) {
                throw new Error('unable to erase record data without path, consider using `delete`');
            }
            this.set(path, undefined);
        }
    }, {
        key: 'eraseWithAck',
        value: function eraseWithAck(path, callback) {
            if (!path) {
                throw new Error('unable to erase record data without path, consider using `delete`');
            }
            if (callback) {
                this.setWithAck(path, undefined, callback);
            } else {
                return this.setWithAck(path, undefined);
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe(path, callback, triggerNow) {
            var parameters = normalizeArguments(arguments);
            this.subscriptions.push(parameters);
            this.record.subscribe(parameters);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(path, callback) {
            var parameters = normalizeArguments(arguments);
            this.subscriptions = this.subscriptions.filter(function (subscription) {
                return subscription.path !== parameters.path || subscription.callback !== parameters.callback;
            });
            this.record.unsubscribe(parameters);
        }
    }, {
        key: 'discard',
        value: function discard() {
            for (var i = 0; i < this.subscriptions.length; i++) {
                this.record.unsubscribe(this.subscriptions[i]);
            }
            return this.record.discard();
        }
    }, {
        key: 'delete',
        value: function _delete(callback) {
            return this.record.delete(callback);
        }
    }, {
        key: 'setMergeStrategy',
        value: function setMergeStrategy(mergeStrategy) {
            this.record.setMergeStrategy(mergeStrategy);
        }
    }, {
        key: 'name',
        get: function get() {
            return this.record.name;
        }
    }, {
        key: 'isReady',
        get: function get() {
            return this.record.isReady;
        }
    }, {
        key: 'version',
        get: function get() {
            return this.record.version;
        }
    }, {
        key: 'hasProvider',
        get: function get() {
            return this.record.hasProvider;
        }
    }]);

    return Record;
}(component_emitter2);
// CONCATENATED MODULE: ./src/record/anonymous-record.ts
var anonymous_record_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function anonymous_record_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function anonymous_record_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function anonymous_record_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var anonymous_record_AnonymousRecord = function (_Emitter) {
    anonymous_record_inherits(AnonymousRecord, _Emitter);

    function AnonymousRecord(getRecordCore) {
        anonymous_record_classCallCheck(this, AnonymousRecord);

        var _this = anonymous_record_possibleConstructorReturn(this, (AnonymousRecord.__proto__ || Object.getPrototypeOf(AnonymousRecord)).call(this));

        _this.record = null;
        _this.subscriptions = [];
        _this.getRecordCore = getRecordCore;
        return _this;
    }

    anonymous_record_createClass(AnonymousRecord, [{
        key: 'whenReady',
        value: function whenReady(callback) {
            if (this.record) {
                return this.record.whenReady(this, callback);
            }
        }
    }, {
        key: 'setName',
        value: function setName(recordName, callback) {
            if (this.name === recordName) {
                return;
            }
            this.discard();
            this.record = this.getRecordCore(recordName);
            for (var i = 0; i < this.subscriptions.length; i++) {
                this.record.subscribe(this.subscriptions[i]);
            }
            this.emit('nameChanged', recordName);
            return this.record.whenReady(this, callback);
        }
    }, {
        key: 'get',
        value: function get(path) {
            if (this.record) {
                return this.record.get(path);
            }
        }
    }, {
        key: 'set',
        value: function set(path, data, callback) {
            if (this.record) {
                return this.record.set(normalizeSetArguments(arguments));
            }
        }
    }, {
        key: 'setWithAck',
        value: function setWithAck(path, data, callback) {
            if (this.record) {
                return this.record.setWithAck(normalizeSetArguments(arguments));
            }
        }
    }, {
        key: 'erase',
        value: function erase(path) {
            if (this.record) {
                return this.record.set(normalizeSetArguments(arguments));
            }
        }
    }, {
        key: 'eraseWithAck',
        value: function eraseWithAck(path, callback) {
            if (this.record) {
                return this.record.setWithAck(normalizeSetArguments(arguments));
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe(path, callback, triggerNow) {
            var parameters = normalizeArguments(arguments);
            this.subscriptions.push(parameters);
            if (this.record) {
                this.record.subscribe(parameters);
            }
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(path, callback) {
            var parameters = normalizeArguments(arguments);
            this.subscriptions = this.subscriptions.filter(function (subscription) {
                return subscription.path !== parameters.path || subscription.callback !== parameters.callback;
            });
            if (this.record) {
                this.record.unsubscribe(parameters);
            }
        }
    }, {
        key: 'discard',
        value: function discard() {
            if (this.record) {
                for (var i = 0; i < this.subscriptions.length; i++) {
                    this.record.unsubscribe(this.subscriptions[i]);
                }
                return this.record.discard();
            }
        }
    }, {
        key: 'delete',
        value: function _delete(callback) {
            if (this.record) {
                return this.record.delete(callback);
            }
        }
    }, {
        key: 'setMergeStrategy',
        value: function setMergeStrategy(mergeStrategy) {
            if (this.record) {
                this.record.setMergeStrategy(mergeStrategy);
            }
        }
    }, {
        key: 'name',
        get: function get() {
            if (!this.record) {
                return '';
            }
            return this.record.name;
        }
    }, {
        key: 'isReady',
        get: function get() {
            if (!this.record) {
                return false;
            }
            return this.record.isReady;
        }
    }, {
        key: 'version',
        get: function get() {
            if (!this.record) {
                return -1;
            }
            return this.record.version;
        }
    }]);

    return AnonymousRecord;
}(component_emitter2);
// CONCATENATED MODULE: ./src/record/list.ts
var list_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function list_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function list_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function list_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var list_List = function (_Emitter) {
    list_inherits(List, _Emitter);

    function List(record) {
        list_classCallCheck(this, List);

        var _this = list_possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

        _this.record = record;
        _this.originalApplyUpdate = _this.record.applyUpdate.bind(_this.record);
        _this.record.applyUpdate = _this.applyUpdate.bind(_this);
        _this.wrappedFunctions = new Map();
        _this.record.on('delete', _this.emit.bind(_this, 'delete'));
        _this.record.on('discard', _this.emit.bind(_this, 'discard'));
        _this.record.on('ready', _this.emit.bind(_this, 'ready'));
        _this.hasAddListener = false;
        _this.hasRemoveListener = false;
        _this.hasMoveListener = false;
        return _this;
    }

    list_createClass(List, [{
        key: 'whenReady',
        value: function whenReady(callback) {
            return this.record.whenReady(this, callback);
        }
    }, {
        key: 'discard',
        value: function discard() {
            return this.record.discard();
        }
    }, {
        key: 'delete',
        value: function _delete() {
            return this.record.delete();
        }
        /**
         * Returns the array of list entries or an
         * empty array if the list hasn't been populated yet.
         */

    }, {
        key: 'getEntries',
        value: function getEntries() {
            var entries = this.record.get();
            if (!(entries instanceof Array)) {
                return [];
            }
            return entries;
        }
        /**
         * Returns true if the list is empty
         */

    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.getEntries().length === 0;
        }
        /**
         * Updates the list with a new set of entries
         */

    }, {
        key: 'setEntriesWithAck',
        value: function setEntriesWithAck(entries, callback) {
            var _this2 = this;

            if (!callback) {
                return new Promise(function (resolve, reject) {
                    _this2.setEntries(entries, function (error) {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    });
                });
            }
            this.setEntries(entries, callback);
        }
        /**
         * Updates the list with a new set of entries
         */

    }, {
        key: 'setEntries',
        value: function setEntries(entries, callback) {
            var errorMsg = 'entries must be an array of record names';
            var i = void 0;
            if (!(entries instanceof Array)) {
                throw new Error(errorMsg);
            }
            for (i = 0; i < entries.length; i++) {
                if (typeof entries[i] !== 'string') {
                    throw new Error(errorMsg);
                }
            }
            if (this.record.isReady === false) {
                // ...
            } else {
                this.beforeChange();
                this.record.set({ data: entries, callback: callback });
                this.afterChange();
            }
        }
        /**
         * Removes an entry from the list
         *
         * @param {String} entry
         * @param {Number} [index]
         */

    }, {
        key: 'removeEntry',
        value: function removeEntry(entry, index, callback) {
            if (this.record.isReady === false) {
                // ...
                return;
            }
            var currentEntries = this.record.get();
            var hasIndex = this.hasIndex(index);
            var entries = [];
            var i = void 0;
            for (i = 0; i < currentEntries.length; i++) {
                if (currentEntries[i] !== entry || hasIndex && index !== i) {
                    entries.push(currentEntries[i]);
                }
            }
            this.beforeChange();
            this.record.set({ data: entries, callback: callback });
            this.afterChange();
        }
        /**
         * Adds an entry to the list
         *
         * @param {String} entry
         * @param {Number} [index]
         */

    }, {
        key: 'addEntry',
        value: function addEntry(entry, index, callback) {
            if (typeof entry !== 'string') {
                throw new Error('Entry must be a recordName');
            }
            if (this.record.isReady === false) {
                // ..
                return;
            }
            var hasIndex = this.hasIndex(index);
            var entries = this.getEntries();
            if (hasIndex) {
                entries.splice(index, 0, entry);
            } else {
                entries.push(entry);
            }
            this.beforeChange();
            this.record.set({ data: entries, callback: callback });
            this.afterChange();
        }
        /**
         * Proxies the underlying Record's subscribe method. Makes sure
         * that no path is provided
         */

    }, {
        key: 'subscribe',
        value: function subscribe(callback) {
            var parameters = normalizeArguments(arguments);
            if (parameters.path) {
                throw new Error('path is not supported for List.subscribe');
            }
            // Make sure the callback is invoked with an empty array for new records
            var listCallback = function (scope, cb) {
                cb(scope.getEntries());
            }.bind(this, this, parameters.callback);
            /**
             * Adding a property onto a function directly is terrible practice,
             * and we will change this as soon as we have a more seperate approach
             * of creating lists that doesn't have records default state.
             *
             * The reason we are holding a referencing to wrapped array is so that
             * on unsubscribe it can provide a reference to the actual method the
             * record is subscribed too.
             **/
            this.wrappedFunctions.set(parameters.callback, listCallback);
            parameters.callback = listCallback;
            this.record.subscribe(parameters);
        }
        /**
         * Proxies the underlying Record's unsubscribe method. Makes sure
         * that no path is provided
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe(callback) {
            var parameters = normalizeArguments(arguments);
            if (parameters.path) {
                throw new Error('path is not supported for List.unsubscribe');
            }
            var listenCallback = this.wrappedFunctions.get(parameters.callback);
            parameters.callback = listenCallback;
            this.record.unsubscribe(parameters);
            this.wrappedFunctions.delete(parameters.callback);
        }
        /**
         * Proxies the underlying Record's _update method. Set's
         * data to an empty array if no data is provided.
         */

    }, {
        key: 'applyUpdate',
        value: function applyUpdate(message) {
            if (!(message.parsedData instanceof Array)) {
                message.parsedData = [];
            }
            this.beforeChange();
            this.originalApplyUpdate(message);
            this.afterChange();
        }
        /**
         * Validates that the index provided is within the current set of entries.
         */

    }, {
        key: 'hasIndex',
        value: function hasIndex(index) {
            var hasIndex = false;
            var entries = this.getEntries();
            if (index !== undefined) {
                if (isNaN(index)) {
                    throw new Error('Index must be a number');
                }
                if (index !== entries.length && (index >= entries.length || index < 0)) {
                    throw new Error('Index must be within current entries');
                }
                hasIndex = true;
            }
            return hasIndex;
        }
        /**
         * Establishes the current structure of the list, provided the client has attached any
         * add / move / remove listener
         *
         * This will be called before any change to the list, regardsless if the change was triggered
         * by an incoming message from the server or by the client
         */

    }, {
        key: 'beforeChange',
        value: function beforeChange() {
            this.hasAddListener = this.listeners(EVENT.ENTRY_ADDED_EVENT).length > 0;
            this.hasRemoveListener = this.listeners(EVENT.ENTRY_REMOVED_EVENT).length > 0;
            this.hasMoveListener = this.listeners(EVENT.ENTRY_MOVED_EVENT).length > 0;
            if (this.hasAddListener || this.hasRemoveListener || this.hasMoveListener) {
                this.beforeStructure = this.getStructure();
            } else {
                this.beforeStructure = null;
            }
        }
        /**
         * Compares the structure of the list after a change to its previous structure and notifies
         * any add / move / remove listener. Won't do anything if no listeners are attached.
         */

    }, {
        key: 'afterChange',
        value: function afterChange() {
            if (this.beforeStructure === null) {
                return;
            }
            var after = this.getStructure();
            var before = this.beforeStructure;
            var entry = void 0;
            var i = void 0;
            if (this.hasRemoveListener) {
                for (entry in before) {
                    for (i = 0; i < before[entry].length; i++) {
                        if (after[entry] === undefined || after[entry][i] === undefined) {
                            this.emit(EVENT.ENTRY_REMOVED_EVENT, entry, before[entry][i]);
                        }
                    }
                }
            }
            if (this.hasAddListener || this.hasMoveListener) {
                for (entry in after) {
                    if (before[entry] === undefined) {
                        for (i = 0; i < after[entry].length; i++) {
                            this.emit(EVENT.ENTRY_ADDED_EVENT, entry, after[entry][i]);
                        }
                    } else {
                        for (i = 0; i < after[entry].length; i++) {
                            if (before[entry][i] !== after[entry][i]) {
                                if (before[entry][i] === undefined) {
                                    this.emit(EVENT.ENTRY_ADDED_EVENT, entry, after[entry][i]);
                                } else {
                                    this.emit(EVENT.ENTRY_MOVED_EVENT, entry, after[entry][i]);
                                }
                            }
                        }
                    }
                }
            }
        }
        /**
         * Iterates through the list and creates a map with the entry as a key
         * and an array of its position(s) within the list as a value, e.g.
         *
         * {
         *   'recordA': [ 0, 3 ],
         *   'recordB': [ 1 ],
         *   'recordC': [ 2 ]
         * }
         */

    }, {
        key: 'getStructure',
        value: function getStructure() {
            var structure = {};
            var i = void 0;
            var entries = this.record.get();
            for (i = 0; i < entries.length; i++) {
                if (structure[entries[i]] === undefined) {
                    structure[entries[i]] = [i];
                } else {
                    structure[entries[i]].push(i);
                }
            }
            return structure;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.record.name;
        }
    }, {
        key: 'isReady',
        get: function get() {
            return this.record.isReady;
        }
    }, {
        key: 'version',
        get: function get() {
            return this.record.version;
        }
    }]);

    return List;
}(component_emitter2);
// CONCATENATED MODULE: ./src/record/single-notifier.ts
var single_notifier_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function single_notifier_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Provides a scaffold for subscriptionless requests to deepstream, such as the SNAPSHOT
 * and HAS functionality. The SingleNotifier multiplexes all the client requests so
 * that they can can be notified at once, and also includes reconnection funcionality
 * incase the connection drops.
 *
 * @param {Services} services          The deepstream client
 * @param {Options} options     Function to call to allow resubscribing
 *
 * @constructor
 */
var single_notifier_SingleNotifier = function () {
    function SingleNotifier(services, action, timeoutDuration) {
        single_notifier_classCallCheck(this, SingleNotifier);

        this.services = services;
        this.action = action;
        this.requests = new Map();
        this.internalRequests = new Map();
        this.limboQueue = [];
        this.services.connection.onLost(this.onConnectionLost.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
    }
    /**
    * Add a request. If one has already been made it will skip the server request
    * and multiplex the response
    *
    * @param {String} name An identifier for the request, e.g. a record name
    * @param {Object} response An object with property `callback` or `resolve` and `reject`
    *
    * @public
    * @returns {void}
    */


    single_notifier_createClass(SingleNotifier, [{
        key: 'request',
        value: function request(name, callback) {
            var message = {
                topic: message_constants["TOPIC"].RECORD,
                action: this.action,
                name: name
            };
            var req = this.requests.get(name);
            if (req) {
                req.push(callback);
                return;
            }
            this.requests.set(name, [callback]);
            if (this.services.connection.isConnected) {
                this.services.connection.sendMessage(message);
                this.services.timeoutRegistry.add({ message: message });
            } else if (this.services.connection.isInLimbo) {
                this.limboQueue.push(message);
            } else {
                callback(EVENT.CLIENT_OFFLINE);
            }
        }
        /**
         * Adds a callback to a (possibly) inflight request that will be called
         * on the response.
         *
         * @param name
         * @param response
         */

    }, {
        key: 'register',
        value: function register(name, callback) {
            var request = this.internalRequests.get(name);
            if (!request) {
                this.internalRequests.set(name, [callback]);
            } else {
                request.push(callback);
            }
        }
    }, {
        key: 'recieve',
        value: function recieve(message, error, data) {
            this.services.timeoutRegistry.remove(message);
            var name = message.name;
            var responses = this.requests.get(name) || [];
            var internalResponses = this.internalRequests.get(name) || [];
            if (!responses && !internalResponses) {
                return;
            }
            for (var i = 0; i < internalResponses.length; i++) {
                internalResponses[i](message);
            }
            this.internalRequests.delete(name);
            // todo we can clean this up and do cb = (error, data) => error ? reject(error) : resolve()
            for (var _i = 0; _i < responses.length; _i++) {
                responses[_i](error, data);
            }
            this.requests.delete(name);
            return;
        }
    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            this.requests.forEach(function (responses) {
                responses.forEach(function (response) {
                    return response(EVENT.CLIENT_OFFLINE);
                });
            });
            this.requests.clear();
        }
    }, {
        key: 'onExitLimbo',
        value: function onExitLimbo() {
            for (var i = 0; i < this.limboQueue.length; i++) {
                var message = this.limboQueue[i];
                var requests = this.requests.get(message.name);
                if (requests) {
                    requests.forEach(function (cb) {
                        return cb(EVENT.CLIENT_OFFLINE);
                    });
                }
            }
            this.requests.clear();
            this.limboQueue = [];
        }
    }, {
        key: 'onConnectionReestablished',
        value: function onConnectionReestablished() {
            for (var i = 0; i < this.limboQueue.length; i++) {
                var message = this.limboQueue[i];
                this.services.connection.sendMessage(message);
                this.services.timeoutRegistry.add({ message: message });
            }
        }
    }]);

    return SingleNotifier;
}();
// CONCATENATED MODULE: ./src/record/write-ack-service.ts
var write_ack_service_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function write_ack_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var write_ack_service_WriteAcknowledgementService = function () {
    function WriteAcknowledgementService(services) {
        write_ack_service_classCallCheck(this, WriteAcknowledgementService);

        this.services = services;
        this.responses = new Map();
        this.count = 1;
        this.services.connection.onLost(this.onConnectionLost.bind(this));
    }
    /**
     * Send message with write ack callback.
     */


    write_ack_service_createClass(WriteAcknowledgementService, [{
        key: 'send',
        value: function send(message, callback) {
            if (!this.services.connection.isConnected) {
                this.services.timerRegistry.requestIdleCallback(callback.bind(this, EVENT.CLIENT_OFFLINE));
                return;
            }
            var correlationId = this.count.toString();
            this.responses.set(correlationId, callback);
            var messageToSend = Object.assign({}, message, { correlationId: correlationId, action: utils["a" /* ACTION_TO_WRITE_ACK */][message.action] });
            this.services.connection.sendMessage(messageToSend);
            this.count++;
        }
    }, {
        key: 'recieve',
        value: function recieve(message) {
            var id = message.correlationId;
            var response = this.responses.get(id);
            if (!response || message.action !== message_constants["RECORD_ACTIONS"].WRITE_ACKNOWLEDGEMENT && !message.isError) {
                return;
            }
            message.isError ? response(message_constants["RECORD_ACTIONS"][message.action]) : response(null);
            this.responses.delete(id);
        }
    }, {
        key: 'onConnectionLost',
        value: function onConnectionLost() {
            this.responses.forEach(function (response) {
                return response(EVENT.CLIENT_OFFLINE);
            });
            this.responses.clear();
        }
    }]);

    return WriteAcknowledgementService;
}();
// CONCATENATED MODULE: ./src/record/merge-strategy-service.ts
var merge_strategy_service_slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var merge_strategy_service_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function merge_strategy_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var merge_strategy_service_MergeStrategyService = function () {
    function MergeStrategyService(services, defaultStrategy) {
        merge_strategy_service_classCallCheck(this, MergeStrategyService);

        this.services = services;
        this.defaultStrategy = defaultStrategy;
        this.strategiesByRecord = new Map();
        this.strategiesByPattern = new Map();
    }

    merge_strategy_service_createClass(MergeStrategyService, [{
        key: 'setMergeStrategyByName',
        value: function setMergeStrategyByName(recordName, strategy) {
            this.strategiesByRecord.set(recordName, strategy);
        }
    }, {
        key: 'setMergeStrategyByPattern',
        value: function setMergeStrategyByPattern(pattern, strategy) {
            this.strategiesByPattern.set(pattern, strategy);
        }
    }, {
        key: 'merge',
        value: function merge(recordName, localVersion, localData, remoteVersion, remoteData, callback) {
            var exactMergeStrategy = this.strategiesByRecord.get(recordName);
            if (exactMergeStrategy) {
                exactMergeStrategy(localData, localVersion, remoteData, remoteVersion, function (error, data) {
                    callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
                });
                return;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.strategiesByPattern[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = merge_strategy_service_slicedToArray(_ref, 2);

                    var pattern = _ref2[0];
                    var patternMergeStrategy = _ref2[1];

                    if (pattern.test(recordName)) {
                        patternMergeStrategy(localData, localVersion, remoteData, remoteVersion, function (error, data) {
                            callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
                        });
                        return;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (this.defaultStrategy) {
                this.defaultStrategy(localData, localVersion, remoteData, remoteVersion, function (error, data) {
                    callback(error, recordName, data, remoteVersion, remoteData, localVersion, localData);
                });
            }
            this.services.logger.error({ topic: message_constants["TOPIC"].RECORD }, EVENT.RECORD_VERSION_EXISTS, { remoteVersion: remoteVersion, recordName: recordName });
        }
    }]);

    return MergeStrategyService;
}();
// CONCATENATED MODULE: ./src/record/record-handler.ts
var record_handler_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var record_handler_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function record_handler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }













var record_handler_RecordHandler = function () {
    function RecordHandler(services, options, recordServices, listener) {
        record_handler_classCallCheck(this, RecordHandler);

        this.services = services;
        this.options = options;
        this.listener = listener || new listener_Listener(message_constants["TOPIC"].RECORD, this.services);
        this.recordCores = new Map();
        this.recordServices = recordServices || {
            writeAckService: new write_ack_service_WriteAcknowledgementService(services),
            readRegistry: new single_notifier_SingleNotifier(services, message_constants["RECORD_ACTIONS"].READ, options.recordReadTimeout),
            headRegistry: new single_notifier_SingleNotifier(services, message_constants["RECORD_ACTIONS"].HEAD, options.recordReadTimeout),
            mergeStrategy: new merge_strategy_service_MergeStrategyService(services, options.mergeStrategy)
        };
        this.getRecordCore = this.getRecordCore.bind(this);
        this.services.connection.registerHandler(message_constants["TOPIC"].RECORD, this.handle.bind(this));
    }

    record_handler_createClass(RecordHandler, [{
        key: 'setMergeStrategy',
        value: function setMergeStrategy(recordName, mergeStrategy) {
            if (typeof mergeStrategy === 'function') {
                this.recordServices.mergeStrategy.setMergeStrategyByName(recordName, mergeStrategy);
            } else {
                throw new Error('Invalid merge strategy: Must be a Function');
            }
        }
    }, {
        key: 'setMergeStrategyRegExp',
        value: function setMergeStrategyRegExp(regexp, mergeStrategy) {
            if (typeof mergeStrategy === 'function') {
                this.recordServices.mergeStrategy.setMergeStrategyByPattern(regexp, mergeStrategy);
            } else {
                throw new Error('Invalid merge strategy: Must be a Function');
            }
        }
        /**
        * Returns an existing record or creates a new one.
        *
        * @param   {String} name              the unique name of the record
        */

    }, {
        key: 'getRecord',
        value: function getRecord(name) {
            return new record_Record(this.getRecordCore(name));
        }
        /**
         * Returns an existing List or creates a new one. A list is a specialised
         * type of record that holds an array of recordNames.
         *
         * @param   {String} name       the unique name of the list
         */

    }, {
        key: 'getList',
        value: function getList(name) {
            return new list_List(this.getRecordCore(name));
        }
        /**
         * Returns an anonymous record. A anonymous record is effectively
         * a wrapper that mimicks the API of a record, but allows for the
         * underlying record to be swapped without loosing subscriptions etc.
         *
         * This is particularly useful when selecting from a number of similarly
         * structured records. E.g. a list of users that can be choosen from a list
         *
         * The only API difference to a normal record is an additional setName( name ) method.
         */

    }, {
        key: 'getAnonymousRecord',
        value: function getAnonymousRecord() {
            return new anonymous_record_AnonymousRecord(this.getRecordCore);
        }
        /**
         * Allows to listen for record subscriptions made by this or other clients. This
         * is useful to create "active" data providers, e.g. providers that only provide
         * data for a particular record if a user is actually interested in it
         *
         * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
         * @param   {Function} callback
         */

    }, {
        key: 'listen',
        value: function listen(pattern, callback) {
            this.listener.listen(pattern, callback);
        }
        /**
         * Removes a listener that was previously registered with listenForSubscriptions
         *
         * @param   {String}   pattern  A combination of alpha numeric characters and wildcards( * )
         */

    }, {
        key: 'unlisten',
        value: function unlisten(pattern) {
            this.listener.unlisten(pattern);
        }
    }, {
        key: 'snapshot',
        value: function snapshot(name, callback) {
            var _this = this;

            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument: name');
            }
            if (callback !== undefined && typeof callback !== 'function') {
                throw new Error('invalid argument: callback');
            }
            var recordCore = this.recordCores.get(name);
            if (recordCore && callback) {
                return recordCore.whenReady(null, function () {
                    callback(null, recordCore.get());
                });
            } else if (recordCore && !callback) {
                return new Promise(function (resolve, reject) {
                    recordCore.whenReady(null, function () {
                        resolve(recordCore.get());
                    });
                });
            } else if (!recordCore && callback) {
                this.recordServices.readRegistry.request(name, callback);
                return;
            } else {
                return new Promise(function (resolve, reject) {
                    var cb = function cb(err, data) {
                        return err ? reject(err) : resolve(data);
                    };
                    _this.recordServices.readRegistry.request(name, cb);
                });
            }
        }
    }, {
        key: 'has',
        value: function has(name, callback) {
            var _this2 = this;

            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument: name');
            }
            if (callback !== undefined && typeof callback !== 'function') {
                throw new Error('invalid argument: callback');
            }
            var cb = void 0;
            if (!callback) {
                return new Promise(function (resolve, reject) {
                    cb = function cb(error, version) {
                        return error ? reject(error) : resolve(version !== -1);
                    };
                    _this2.head(name, cb);
                });
            }
            cb = function cb(error, version) {
                return error ? callback(error, null) : callback(null, version !== -1);
            };
            this.head(name, cb);
        }
    }, {
        key: 'head',
        value: function head(name, callback) {
            var _this3 = this;

            if (typeof name !== 'string' || name.length === 0) {
                throw new Error('invalid argument: name');
            }
            if (callback !== undefined && typeof callback !== 'function') {
                throw new Error('invalid argument: callback');
            }
            var recordCore = this.recordCores.get(name);
            if (recordCore) {
                if (callback) {
                    recordCore.whenReady(null, function () {
                        callback(null, recordCore.version);
                    });
                } else {
                    return new Promise(function (resolve, reject) {
                        recordCore.whenReady(null, function () {
                            resolve(recordCore.version);
                        });
                    });
                }
                return;
            }
            if (callback) {
                this.recordServices.headRegistry.request(name, callback);
            } else {
                return new Promise(function (resolve, reject) {
                    _this3.recordServices.headRegistry.request(name, function (error, data) {
                        return error ? reject(error) : resolve(data);
                    });
                });
            }
        }
    }, {
        key: 'setDataWithAck',
        value: function setDataWithAck(recordName) {
            var _this4 = this;

            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                rest[_key - 1] = arguments[_key];
            }

            var args = normalizeSetArguments(arguments, 1);
            if (!args.callback) {
                return new Promise(function (resolve, reject) {
                    args.callback = function (error) {
                        return error === null ? resolve() : reject(error);
                    };
                    _this4.sendSetData(recordName, -1, args);
                });
            }
            this.sendSetData(recordName, -1, args);
        }
    }, {
        key: 'setData',
        value: function setData(recordName) {
            var args = normalizeSetArguments(arguments, 1);
            this.sendSetData(recordName, -1, args);
        }
    }, {
        key: 'sendSetData',
        value: function sendSetData(recordName, version, args) {
            var path = args.path,
                data = args.data,
                callback = args.callback;

            if (!recordName || typeof recordName !== 'string' || recordName.length === 0) {
                throw new Error('invalid argument: recordName must be an non empty string');
            }
            if (!path && (data === null || (typeof data === 'undefined' ? 'undefined' : record_handler_typeof(data)) !== 'object')) {
                throw new Error('invalid argument: data must be an object when no path is provided');
            }
            var recordCore = this.recordCores.get(recordName);
            if (recordCore) {
                recordCore.set({ path: path, data: data, callback: callback });
                return;
            }
            var action = function () {
                if (!path) {
                    return message_constants["RECORD_ACTIONS"].CREATEANDUPDATE;
                } else if (data === undefined) {
                    return message_constants["RECORD_ACTIONS"].ERASE;
                } else {
                    return message_constants["RECORD_ACTIONS"].CREATEANDPATCH;
                }
            }();
            var message = {
                topic: message_constants["TOPIC"].RECORD,
                action: action,
                name: recordName,
                path: path,
                version: version,
                parsedData: data
            };
            if (callback) {
                this.recordServices.writeAckService.send(message, callback);
            } else {
                this.services.connection.sendMessage(message);
            }
        }
        /**
         * Will be called by the client for incoming messages on the RECORD topic
         *
         * @param   {Object} message parsed and validated deepstream message
         */

    }, {
        key: 'handle',
        value: function handle(message) {
            if (message.action === message_constants["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND || message.action === message_constants["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED || message.action === message_constants["RECORD_ACTIONS"].LISTEN || message.action === message_constants["RECORD_ACTIONS"].UNLISTEN) {
                this.listener.handle(message);
                return;
            }
            if (Object(utils["c" /* isWriteAck */])(message.action) || Object(utils["c" /* isWriteAck */])(message.originalAction)) {
                this.recordServices.writeAckService.recieve(message);
                return;
            }
            if (message.action === message_constants["RECORD_ACTIONS"].READ_RESPONSE || message.originalAction === message_constants["RECORD_ACTIONS"].READ) {
                if (message.isError) {
                    this.recordServices.readRegistry.recieve(message, message_constants["RECORD_ACTIONS"][message.action]);
                } else {
                    this.recordServices.readRegistry.recieve(message, null, message.parsedData);
                }
                return;
            }
            if (message.action === message_constants["RECORD_ACTIONS"].HEAD_RESPONSE || message.originalAction === message_constants["RECORD_ACTIONS"].HEAD) {
                if (message.isError) {
                    this.recordServices.headRegistry.recieve(message, message_constants["RECORD_ACTIONS"][message.action]);
                } else {
                    this.recordServices.headRegistry.recieve(message, null, message.version);
                }
            }
            var recordCore = this.recordCores.get(message.name);
            if (recordCore) {
                recordCore.handle(message);
                return;
            }
            if (message.action === message_constants["RECORD_ACTIONS"].VERSION_EXISTS) {
                return;
            }
            if (message.action === message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER || message.action === message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_NO_PROVIDER) {
                // record can receive a HAS_PROVIDER after discarding the record
                return;
            }
            if (message.isError) {
                this.services.logger.error(message);
                return;
            }
            this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
        }
        /**
         * Callback for 'deleted' and 'discard' events from a record. Removes the record from
         * the registry
         */

    }, {
        key: 'removeRecord',
        value: function removeRecord(recordName) {
            this.recordCores.delete(recordName);
        }
    }, {
        key: 'getRecordCore',
        value: function getRecordCore(recordName) {
            var recordCore = this.recordCores.get(recordName);
            if (!recordCore) {
                recordCore = new record_core_RecordCore(recordName, this.services, this.options, this.recordServices, this.removeRecord.bind(this));
                this.recordCores.set(recordName, recordCore);
            } else {
                recordCore.usages++;
            }
            return recordCore;
        }
    }]);

    return RecordHandler;
}();
// CONCATENATED MODULE: ./src/record/storage-service.ts
var storage_service_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function storage_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
    function Storage(options) {
        storage_service_classCallCheck(this, Storage);

        if (typeof localStorage === 'undefined' || localStorage === null) {
            var LocalStorage = __webpack_require__(24).LocalStorage;
            this.storage = new LocalStorage(options.nodeStoragePath, options.nodeStorageSize * 1024 * 1024);
        } else {
            this.storage = window.localStorage;
        }
    }

    storage_service_createClass(Storage, [{
        key: 'get',
        value: function get(recordName, callback) {
            var item = this.storage.getItem(recordName);
            if (item) {
                var doc = JSON.parse(item);
                setTimeout(callback.bind(this, recordName, doc.version, doc.data), 0);
                return;
            }
            setTimeout(callback.bind(this, recordName, -1, null), 0);
        }
    }, {
        key: 'set',
        value: function set(recordName, version, data, callback) {
            this.storage.setItem(recordName, JSON.stringify({ recordName: recordName, version: version, data: data }));
            setTimeout(callback, 0);
        }
    }, {
        key: 'delete',
        value: function _delete(recordName, callback) {
            this.storage.removeItem(recordName);
            setTimeout(callback, 0);
        }
    }]);

    return Storage;
}();
// CONCATENATED MODULE: ./src/presence/presence-handler.ts
var presence_handler_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function presence_handler_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ONLY_EVENT = 'OE';
function validateQueryArguments(rest) {
    var users = null;
    var callback = null;
    if (rest.length === 1) {
        if (Array.isArray(rest[0])) {
            users = rest[0];
        } else {
            if (typeof rest[0] !== 'function') {
                throw new Error('invalid argument: "callback"');
            }
            callback = rest[0];
        }
    } else if (rest.length === 2) {
        users = rest[0];
        callback = rest[1];
        if (!Array.isArray(users) || typeof callback !== 'function') {
            throw new Error('invalid argument: "users" or "callback"');
        }
    }
    return { users: users, callback: callback };
}
var presence_handler_PresenceHandler = function () {
    function PresenceHandler(services, options) {
        presence_handler_classCallCheck(this, PresenceHandler);

        this.services = services;
        this.subscriptionEmitter = new component_emitter2();
        this.globalSubscriptionEmitter = new component_emitter2();
        this.queryEmitter = new component_emitter2();
        this.queryAllEmitter = new component_emitter2();
        this.services.connection.registerHandler(message_constants["TOPIC"].PRESENCE, this.handle.bind(this));
        this.services.connection.onExitLimbo(this.onExitLimbo.bind(this));
        this.services.connection.onLost(this.onExitLimbo.bind(this));
        this.services.connection.onReestablished(this.onConnectionReestablished.bind(this));
        this.counter = 0;
        this.pendingSubscribes = new Set();
        this.pendingUnsubscribes = new Set();
        this.limboQueue = [];
        this.flushTimeout = null;
    }

    presence_handler_createClass(PresenceHandler, [{
        key: 'subscribe',
        value: function subscribe(userOrCallback, callback) {
            if (typeof userOrCallback === 'string' && userOrCallback.length > 0 && typeof callback === 'function') {
                var user = userOrCallback;
                if (!this.subscriptionEmitter.hasListeners(user)) {
                    this.pendingSubscribes.add(user);
                }
                this.subscriptionEmitter.on(user, callback);
                this.pendingUnsubscribes.delete(user);
                this.registerFlushTimeout();
                return;
            }
            if (typeof userOrCallback === 'function' && typeof callback === 'undefined') {
                if (!this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT)) {
                    this.subscribeToAllChanges();
                }
                this.globalSubscriptionEmitter.on(ONLY_EVENT, userOrCallback);
                return;
            }
            throw new Error('invalid arguments: "user" or "callback"');
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(userOrCallback, callback) {
            if (userOrCallback && typeof userOrCallback === 'string' && userOrCallback.length > 0) {
                var user = userOrCallback;
                if (callback) {
                    if (typeof callback !== 'function') {
                        throw new Error('invalid argument: "callback"');
                    }
                    this.subscriptionEmitter.off(user, callback);
                } else {
                    this.subscriptionEmitter.off(user);
                }
                if (!this.subscriptionEmitter.hasListeners(user)) {
                    this.pendingSubscribes.delete(user);
                    this.pendingUnsubscribes.add(user);
                    this.registerFlushTimeout();
                }
                return;
            }
            if (userOrCallback && typeof userOrCallback === 'function') {
                callback = userOrCallback;
                this.globalSubscriptionEmitter.off(ONLY_EVENT, callback);
                if (!this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT)) {
                    this.unsubscribeToAllChanges();
                }
                return;
            }
            if (typeof userOrCallback === 'undefined' && typeof callback === 'undefined') {
                this.subscriptionEmitter.off();
                this.globalSubscriptionEmitter.off();
                this.pendingSubscribes.clear();
                var users = this.subscriptionEmitter.eventNames();
                for (var i = 0; i < users.length; i++) {
                    this.pendingUnsubscribes.add(users[i]);
                }
                this.registerFlushTimeout();
                this.unsubscribeToAllChanges();
                return;
            }
            throw new Error('invalid argument: "user" or "callback"');
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            var _validateQueryArgumen = validateQueryArguments(rest),
                callback = _validateQueryArgumen.callback,
                users = _validateQueryArgumen.users;

            var message = void 0;
            var emitter = void 0;
            var emitterAction = void 0;
            if (users) {
                var queryId = (this.counter++).toString();
                message = {
                    topic: message_constants["TOPIC"].PRESENCE,
                    action: message_constants["PRESENCE_ACTIONS"].QUERY,
                    correlationId: queryId,
                    names: users
                };
                emitter = this.queryEmitter;
                emitterAction = queryId;
            } else {
                message = {
                    topic: message_constants["TOPIC"].PRESENCE,
                    action: message_constants["PRESENCE_ACTIONS"].QUERY_ALL
                };
                emitter = this.queryAllEmitter;
                emitterAction = ONLY_EVENT;
            }
            if (this.services.connection.isConnected) {
                this.sendQuery(message);
            } else if (this.services.connection.isInLimbo) {
                this.limboQueue.push(message);
            } else {
                this.services.timerRegistry.requestIdleCallback(function () {
                    emitter.emit(emitterAction, EVENT.CLIENT_OFFLINE);
                });
            }
            if (callback) {
                emitter.once(emitterAction, callback);
                return;
            }
            return new Promise(function (resolve, reject) {
                emitter.once(emitterAction, function (error, results) {
                    return error ? reject(error) : resolve(results);
                });
            });
        }
    }, {
        key: 'handle',
        value: function handle(message) {
            if (message.isAck) {
                this.services.timeoutRegistry.remove(message);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].QUERY_ALL_RESPONSE) {
                this.queryAllEmitter.emit(ONLY_EVENT, null, message.names);
                this.services.timeoutRegistry.remove(message);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].QUERY_RESPONSE) {
                this.queryEmitter.emit(message.correlationId, null, message.parsedData);
                this.services.timeoutRegistry.remove(message);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].PRESENCE_JOIN) {
                this.subscriptionEmitter.emit(message.name, message.name, true);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].PRESENCE_JOIN_ALL) {
                this.globalSubscriptionEmitter.emit(ONLY_EVENT, message.name, true);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].PRESENCE_LEAVE) {
                this.subscriptionEmitter.emit(message.name, message.name, false);
                return;
            }
            if (message.action === message_constants["PRESENCE_ACTIONS"].PRESENCE_LEAVE_ALL) {
                this.globalSubscriptionEmitter.emit(ONLY_EVENT, message.name, false);
                return;
            }
            if (message.isError) {
                this.services.timeoutRegistry.remove(message);
                if (message.originalAction === message_constants["PRESENCE_ACTIONS"].QUERY) {
                    this.queryEmitter.emit(message.correlationId, message_constants["PRESENCE_ACTIONS"][message.action]);
                } else if (message.originalAction === message_constants["PRESENCE_ACTIONS"].QUERY_ALL) {
                    this.queryAllEmitter.emit(ONLY_EVENT, message_constants["PRESENCE_ACTIONS"][message.action]);
                } else {
                    this.services.logger.error(message);
                }
                return;
            }
            this.services.logger.error(message, EVENT.UNSOLICITED_MESSAGE);
        }
    }, {
        key: 'sendQuery',
        value: function sendQuery(message) {
            this.services.connection.sendMessage(message);
            this.services.timeoutRegistry.add({ message: message });
        }
    }, {
        key: 'flush',
        value: function flush() {
            if (!this.services.connection.isConnected) {
                // will be handled by resubscribe
                return;
            }
            var subUsers = Array.from(this.pendingSubscribes.keys());
            if (subUsers.length > 0) {
                this.bulkSubscription(message_constants["PRESENCE_ACTIONS"].SUBSCRIBE, subUsers);
                this.pendingSubscribes.clear();
            }
            var unsubUsers = Array.from(this.pendingUnsubscribes.keys());
            if (unsubUsers.length > 0) {
                this.bulkSubscription(message_constants["PRESENCE_ACTIONS"].UNSUBSCRIBE, unsubUsers);
                this.pendingUnsubscribes.clear();
            }
            this.flushTimeout = null;
        }
    }, {
        key: 'bulkSubscription',
        value: function bulkSubscription(action, names) {
            var correlationId = this.counter++;
            var message = {
                topic: message_constants["TOPIC"].PRESENCE,
                action: action,
                correlationId: correlationId.toString(),
                names: names
            };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }, {
        key: 'subscribeToAllChanges',
        value: function subscribeToAllChanges() {
            if (!this.services.connection.isConnected) {
                return;
            }
            var message = { topic: message_constants["TOPIC"].PRESENCE, action: message_constants["PRESENCE_ACTIONS"].SUBSCRIBE_ALL };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }, {
        key: 'unsubscribeToAllChanges',
        value: function unsubscribeToAllChanges() {
            if (!this.services.connection.isConnected) {
                return;
            }
            var message = { topic: message_constants["TOPIC"].PRESENCE, action: message_constants["PRESENCE_ACTIONS"].UNSUBSCRIBE_ALL };
            this.services.timeoutRegistry.add({ message: message });
            this.services.connection.sendMessage(message);
        }
    }, {
        key: 'registerFlushTimeout',
        value: function registerFlushTimeout() {
            if (!this.flushTimeout) {
                this.flushTimeout = this.services.timerRegistry.add({
                    duration: 0,
                    context: this,
                    callback: this.flush
                });
            }
        }
    }, {
        key: 'onConnectionReestablished',
        value: function onConnectionReestablished() {
            var keys = this.subscriptionEmitter.eventNames();
            if (keys.length > 0) {
                this.bulkSubscription(message_constants["PRESENCE_ACTIONS"].SUBSCRIBE, keys);
            }
            var hasGlobalSubscription = this.globalSubscriptionEmitter.hasListeners(ONLY_EVENT);
            if (hasGlobalSubscription) {
                this.subscribeToAllChanges();
            }
            for (var i = 0; i < this.limboQueue.length; i++) {
                this.sendQuery(this.limboQueue[i]);
            }
            this.limboQueue = [];
        }
    }, {
        key: 'onExitLimbo',
        value: function onExitLimbo() {
            var _this = this;

            this.queryEmitter.eventNames().forEach(function (correlationId) {
                _this.queryEmitter.emit(correlationId, EVENT.CLIENT_OFFLINE);
            });
            this.queryAllEmitter.emit(ONLY_EVENT, EVENT.CLIENT_OFFLINE);
            this.limboQueue = [];
            this.queryAllEmitter.off();
            this.queryEmitter.off();
        }
    }]);

    return PresenceHandler;
}();
// CONCATENATED MODULE: ./src/client.ts
var client_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var client_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function client_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function client_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function client_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var client_Client = function (_EventEmitter) {
    client_inherits(Client, _EventEmitter);

    function Client(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        client_classCallCheck(this, Client);

        var _this = client_possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this));

        _this.options = Object.assign({}, DefaultOptions, options);
        var services = {};
        services.storage = options.storage || new Storage(_this.options);
        services.logger = new logger_Logger(_this);
        services.timerRegistry = new timer_registry["a" /* TimerRegistry */]();
        services.timeoutRegistry = new timeout_registry_TimeoutRegistry(services, _this.options);
        services.socketFactory = options.socketFactory || socket_factory["a" /* socketFactory */];
        services.connection = new connection_Connection(services, _this.options, url, _this);
        services.emitter = _this;
        _this.services = services;
        _this.services.connection.onLost(services.timeoutRegistry.onConnectionLost.bind(services.timeoutRegistry));
        _this.event = new event_handler_EventHandler(_this.services, _this.options);
        _this.rpc = new rpc_handler_RPCHandler(_this.services, _this.options);
        _this.record = new record_handler_RecordHandler(_this.services, _this.options);
        _this.presence = new presence_handler_PresenceHandler(_this.services, _this.options);
        return _this;
    }

    client_createClass(Client, [{
        key: 'login',
        value: function login(detailsOrCallback, callback) {
            var _this2 = this;

            if (detailsOrCallback && (typeof detailsOrCallback === 'undefined' ? 'undefined' : client_typeof(detailsOrCallback)) === 'object') {
                if (callback) {
                    this.services.connection.authenticate(detailsOrCallback, callback);
                } else {
                    return new Promise(function (resolve, reject) {
                        _this2.services.connection.authenticate(detailsOrCallback, function (success, data) {
                            success ? resolve(data) : reject(data);
                        });
                    });
                }
            } else {
                if (typeof detailsOrCallback === 'function') {
                    this.services.connection.authenticate({}, detailsOrCallback);
                } else {
                    return new Promise(function (resolve, reject) {
                        _this2.services.connection.authenticate({}, function (success, data) {
                            success ? resolve(data) : reject(data);
                        });
                    });
                }
            }
        }
    }, {
        key: 'getConnectionState',
        value: function getConnectionState() {
            return this.services.connection.getConnectionState();
        }
    }, {
        key: 'close',
        value: function close() {
            this.services.connection.close();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.services.connection.pause();
        }
    }, {
        key: 'resume',
        value: function resume(callback) {
            var _this3 = this;

            if (callback) {
                this.services.connection.resume(callback);
                return;
            }
            return new Promise(function (resolve, reject) {
                _this3.services.connection.resume(function (error) {
                    error ? reject(error) : resolve();
                });
            });
        }
        /**
        * Returns a random string. The first block of characters
        * is a timestamp, in order to allow databases to optimize for semi-
        * sequentuel numberings
        */

    }, {
        key: 'getUid',
        value: function getUid() {
            var timestamp = new Date().getTime().toString(36);
            var randomString = (Math.random() * 10000000000000000).toString(36).replace('.', '');
            return timestamp + '-' + randomString;
        }
    }]);

    return Client;
}(component_emitter2);
// CONCATENATED MODULE: ./src/deepstream.ts




var deepstream_client = function client(url, options) {
    return new client_Client(url, options);
};
/* harmony default export */ var deepstream = __webpack_exports__["default"] = (Object.assign(deepstream_client, {
    CONNECTION_STATE: CONNECTION_STATE,
    C: message_constants,
    EVENT: EVENT,
    deepstream: deepstream_client,
    MERGE_STRATEGIES: {
        LOCAL_WINS: LOCAL_WINS, REMOTE_WINS: REMOTE_WINS
    }
}));

/***/ })
/******/ ]);