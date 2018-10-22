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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
    META_KEYS["trustedSender"] = "ts";
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 7 */
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

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(12);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(10);
util.inherits = __webpack_require__(6);
/*</replacement>*/

var Readable = __webpack_require__(22);
var Writable = __webpack_require__(17);

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(33)
var ieee754 = __webpack_require__(34)
var isArray = __webpack_require__(20)

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 9 */
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
var META_PARAMS_SPEC = (_META_PARAMS_SPEC = {}, _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PARSER, (_TOPIC$PARSER = {}, _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_TOPIC, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].UNKNOWN_ACTION, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_MESSAGE, [[], []]), _defineProperty(_TOPIC$PARSER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PARSER_ACTIONS"].INVALID_META_PARAMS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$PARSER)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].CONNECTION, (_TOPIC$CONNECTION = {}, _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].PING, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].PONG, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CHALLENGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].url, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].protocolVersion], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].ACCEPT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].REJECT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].REDIRECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].url], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CLOSING, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].CLOSED, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].ERROR, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].AUTHENTICATION_TIMEOUT, [[], []]), _defineProperty(_TOPIC$CONNECTION, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CONNECTION_ACTIONS"].INVALID_MESSAGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$CONNECTION)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].AUTH, (_TOPIC$AUTH = {}, _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].REQUEST, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_SUCCESSFUL, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].AUTH_UNSUCCESSFUL, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].TOO_MANY_AUTH_ATTEMPTS, [[], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].INVALID_MESSAGE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalTopic, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$AUTH, _message_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$AUTH)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RECORD, (_TOPIC$RECORD = {}, _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].NOT_SUBSCRIBED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBEANDHEAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].HEAD_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBEANDREAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].READ_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UPDATE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].PATCH_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].ERASE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBECREATEANDUPDATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDUPDATE_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CREATEANDPATCH_WITH_WRITE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].path, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETE_SUCCESS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].DELETED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_HAS_NO_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].WRITE_ACKNOWLEDGEMENT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].VERSION_EXISTS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].version], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].CACHE_RETRIEVAL_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].STORAGE_RETRIEVAL_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_LOAD_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_CREATE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_UPDATE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_DELETE_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].RECORD_NOT_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_VERSION, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_PATCH_ON_HOTPATH, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNLISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].UNLISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].LISTEN_REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_LISTEN_REGEX, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RECORD, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RECORD_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _TOPIC$RECORD)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].RPC, (_TOPIC$RPC = {}, _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].reason]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REQUEST, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].requestorName, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].requestorData, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].trustedSender]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].PROVIDE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].PROVIDE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].UNPROVIDE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].UNPROVIDE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_PROVIDERS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].NOT_PROVIDED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].RESPONSE_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].INVALID_RPC_CORRELATION_ID, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MULTIPLE_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].ACCEPT_TIMEOUT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].NO_RPC_PROVIDER, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$RPC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["RPC_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _TOPIC$RPC)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].EVENT, (_TOPIC$EVENT = {}, _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].EMIT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].NOT_SUBSCRIBED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNLISTEN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].UNLISTEN_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_FOUND, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].SUBSCRIPTION_FOR_PATTERN_REMOVED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_ACCEPT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].LISTEN_REJECT, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].subscription], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].INVALID_LISTEN_REGEX, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$EVENT, _message_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_ACTIONS"].INVALID_MESSAGE_DATA, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], []]), _TOPIC$EVENT)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].PRESENCE, (_TOPIC$PRESENCE = {}, _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ALL, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].SUBSCRIBE_ALL_ACK, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].UNSUBSCRIBE_ALL_ACK, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].NOT_SUBSCRIBED, [[], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MULTIPLE_SUBSCRIPTIONS, [[], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].QUERY_ALL_RESPONSE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].names], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_JOIN, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_LEAVE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_JOIN_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].PRESENCE_LEAVE_ALL, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].INVALID_PRESENCE_USERS, [[], []]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MESSAGE_PERMISSION_ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId]]), _defineProperty(_TOPIC$PRESENCE, _message_constants__WEBPACK_IMPORTED_MODULE_0__["PRESENCE_ACTIONS"].MESSAGE_DENIED, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].originalAction], [_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].correlationId, _message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].name]]), _TOPIC$PRESENCE)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].CLUSTER, (_TOPIC$CLUSTER = {}, _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].CLOSE, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_REQUEST, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].IDENTIFICATION_RESPONSE, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].KNOWN_PEERS, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].PING, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].PONG, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].REJECT, [[], []]), _defineProperty(_TOPIC$CLUSTER, _message_constants__WEBPACK_IMPORTED_MODULE_0__["CLUSTER_ACTIONS"].REJECT_DUPLICATE, [[], []]), _TOPIC$CLUSTER)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].STATE_REGISTRY, (_TOPIC$STATE_REGISTRY = {}, _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].ERROR, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].ADD, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].REMOVE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].REQUEST_FULL_STATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _defineProperty(_TOPIC$STATE_REGISTRY, _message_constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ACTIONS"].FULL_STATE, [[_message_constants__WEBPACK_IMPORTED_MODULE_0__["META_KEYS"].registryTopic], []]), _TOPIC$STATE_REGISTRY)), _defineProperty(_META_PARAMS_SPEC, _message_constants__WEBPACK_IMPORTED_MODULE_0__["TOPIC"].LOCK, {}), _META_PARAMS_SPEC);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
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

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).Buffer))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

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

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(8)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export isError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseData; });
/* unused harmony export parseJSON */
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _message_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(17);
exports.Duplex = __webpack_require__(7);
exports.Transform = __webpack_require__(26);
exports.PassThrough = __webpack_require__(55);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
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

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(12);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(10);
util.inherits = __webpack_require__(6);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(54)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(13).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(24);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(7);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(52).setImmediate, __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(60);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(6);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 19 */
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



var punycode = __webpack_require__(35);
var util = __webpack_require__(37);

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
    querystring = __webpack_require__(38);

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
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(15)

module.exports = clone(fs)

function clone (obj) {
  if (obj === null || typeof obj !== 'object')
    return obj

  if (obj instanceof Object)
    var copy = { __proto__: obj.__proto__ }
  else
    var copy = Object.create(null)

  Object.getOwnPropertyNames(obj).forEach(function (key) {
    Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key))
  })

  return copy
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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



/*<replacement>*/

var pna = __webpack_require__(12);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(20);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(11).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(13).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(10);
util.inherits = __webpack_require__(6);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(49);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(50);
var destroyImpl = __webpack_require__(24);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(7);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(25).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(7);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(25).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11).EventEmitter;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(12);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 25 */
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



/*<replacement>*/

var Buffer = __webpack_require__(13).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 26 */
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

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(7);

/*<replacement>*/
var util = __webpack_require__(10);
util.inherits = __webpack_require__(6);
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = bindActor
function bindActor () {
  var args = 
        Array.prototype.slice.call
        (arguments) // jswtf.
    , obj = null
    , fn
  if (typeof args[0] === "object") {
    obj = args.shift()
    fn = args.shift()
    if (typeof fn === "string")
      fn = obj[ fn ]
  } else fn = args.shift()
  return function (cb) {
    fn.apply(obj, args.concat(cb)) }
}


/***/ }),
/* 28 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return socketFactory; });
/* harmony import */ var _binary_protocol_src_message_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _binary_protocol_src_message_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _binary_protocol_src_message_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(8).Buffer))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMessage; });
/* harmony import */ var _message_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _message_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).Buffer))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)(module), __webpack_require__(5)))

/***/ }),
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(39);
exports.encode = exports.stringify = __webpack_require__(40);


/***/ }),
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.10.0
(function() {
  var JSONStorage, KEY_FOR_EMPTY_STRING, LocalStorage, MetaKey, QUOTA_EXCEEDED_ERR, StorageEvent, _emptyDirectory, _escapeKey, _rm, createMap, events, fs, path, writeSync,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  path = __webpack_require__(42);

  fs = __webpack_require__(15);

  events = __webpack_require__(11);

  writeSync = __webpack_require__(43).sync;

  KEY_FOR_EMPTY_STRING = '---.EMPTY_STRING.---';

  _emptyDirectory = function(target) {
    var i, len, p, ref, results;
    ref = fs.readdirSync(target);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      p = ref[i];
      results.push(_rm(path.join(target, p)));
    }
    return results;
  };

  _rm = function(target) {
    if (fs.statSync(target).isDirectory()) {
      _emptyDirectory(target);
      return fs.rmdirSync(target);
    } else {
      return fs.unlinkSync(target);
    }
  };

  _escapeKey = function(key) {
    var newKey;
    if (key === '') {
      newKey = KEY_FOR_EMPTY_STRING;
    } else {
      newKey = key.toString();
    }
    return newKey;
  };

  QUOTA_EXCEEDED_ERR = (function(superClass) {
    extend(QUOTA_EXCEEDED_ERR, superClass);

    function QUOTA_EXCEEDED_ERR(message) {
      this.message = message != null ? message : 'Unknown error.';
      if (Error.captureStackTrace != null) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
    }

    QUOTA_EXCEEDED_ERR.prototype.toString = function() {
      return this.name + ": " + this.message;
    };

    return QUOTA_EXCEEDED_ERR;

  })(Error);

  StorageEvent = (function() {
    function StorageEvent(key1, oldValue1, newValue1, url, storageArea) {
      this.key = key1;
      this.oldValue = oldValue1;
      this.newValue = newValue1;
      this.url = url;
      this.storageArea = storageArea != null ? storageArea : 'localStorage';
    }

    return StorageEvent;

  })();

  MetaKey = (function() {
    function MetaKey(key1, index1) {
      this.key = key1;
      this.index = index1;
      if (!(this instanceof MetaKey)) {
        return new MetaKey(this.key, this.index);
      }
    }

    return MetaKey;

  })();

  createMap = function() {
    var Map;
    Map = function() {};
    Map.prototype = Object.create(null);
    return new Map();
  };

  LocalStorage = (function(superClass) {
    var instanceMap;

    extend(LocalStorage, superClass);

    instanceMap = {};

    function LocalStorage(_location, quota) {
      this._location = _location;
      this.quota = quota != null ? quota : 5 * 1024 * 1024;
      if (!(this instanceof LocalStorage)) {
        return new LocalStorage(this._location, this.quota);
      }
      this._location = path.resolve(this._location);
      if (instanceMap[this._location] != null) {
        return instanceMap[this._location];
      }
      this.length = 0;
      this._bytesInUse = 0;
      this._keys = [];
      this._metaKeyMap = createMap();
      this._eventUrl = "pid:" + process.pid;
      this._init();
      this._QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;
      instanceMap[this._location] = this;
      return instanceMap[this._location];
    }

    LocalStorage.prototype._init = function() {
      var _MetaKey, _decodedKey, _keys, e, error, error1, i, index, k, len, stat;
      try {
        stat = fs.statSync(this._location);
        if ((stat != null) && !stat.isDirectory()) {
          throw new Error("A file exists at the location '" + this._location + "' when trying to create/open localStorage");
        }
        this._bytesInUse = 0;
        this.length = 0;
        _keys = fs.readdirSync(this._location);
        for (index = i = 0, len = _keys.length; i < len; index = ++i) {
          k = _keys[index];
          _decodedKey = decodeURIComponent(k);
          this._keys.push(_decodedKey);
          _MetaKey = new MetaKey(k, index);
          this._metaKeyMap[_decodedKey] = _MetaKey;
          stat = this._getStat(k);
          if ((stat != null ? stat.size : void 0) != null) {
            _MetaKey.size = stat.size;
            this._bytesInUse += stat.size;
          }
        }
        this.length = _keys.length;
      } catch (error) {
        e = error;
        if (e.code !== "ENOENT") {
          throw e;
        }
        try {
          fs.mkdirSync(this._location);
        } catch (error1) {
          e = error1;
          if (e.code !== "EEXIST") {
            throw e;
          }
        }
      }
    };

    LocalStorage.prototype.setItem = function(key, value) {
      var encodedKey, evnt, existsBeforeSet, filename, hasListeners, metaKey, oldLength, oldValue, valueString, valueStringLength;
      hasListeners = events.EventEmitter.listenerCount(this, 'storage');
      oldValue = null;
      if (hasListeners) {
        oldValue = this.getItem(key);
      }
      key = _escapeKey(key);
      encodedKey = encodeURIComponent(key);
      filename = path.join(this._location, encodedKey);
      valueString = value.toString();
      valueStringLength = valueString.length;
      metaKey = this._metaKeyMap[key];
      existsBeforeSet = !!metaKey;
      if (existsBeforeSet) {
        oldLength = metaKey.size;
      } else {
        oldLength = 0;
      }
      if (this._bytesInUse - oldLength + valueStringLength > this.quota) {
        throw new QUOTA_EXCEEDED_ERR();
      }
      writeSync(filename, valueString, 'utf8');
      if (!existsBeforeSet) {
        metaKey = new MetaKey(encodedKey, (this._keys.push(key)) - 1);
        metaKey.size = valueStringLength;
        this._metaKeyMap[key] = metaKey;
        this.length += 1;
        this._bytesInUse += valueStringLength;
      }
      if (hasListeners) {
        evnt = new StorageEvent(key, oldValue, value, this._eventUrl);
        return this.emit('storage', evnt);
      }
    };

    LocalStorage.prototype.getItem = function(key) {
      var filename, metaKey;
      key = _escapeKey(key);
      metaKey = this._metaKeyMap[key];
      if (!!metaKey) {
        filename = path.join(this._location, metaKey.key);
        return fs.readFileSync(filename, 'utf8');
      } else {
        return null;
      }
    };

    LocalStorage.prototype._getStat = function(key) {
      var error, filename;
      key = _escapeKey(key);
      filename = path.join(this._location, encodeURIComponent(key));
      try {
        return fs.statSync(filename);
      } catch (error) {
        return null;
      }
    };

    LocalStorage.prototype.removeItem = function(key) {
      var evnt, filename, hasListeners, k, meta, metaKey, oldValue, ref, v;
      key = _escapeKey(key);
      metaKey = this._metaKeyMap[key];
      if (!!metaKey) {
        hasListeners = events.EventEmitter.listenerCount(this, 'storage');
        oldValue = null;
        if (hasListeners) {
          oldValue = this.getItem(key);
        }
        delete this._metaKeyMap[key];
        this.length -= 1;
        this._bytesInUse -= metaKey.size;
        filename = path.join(this._location, metaKey.key);
        this._keys.splice(metaKey.index, 1);
        ref = this._metaKeyMap;
        for (k in ref) {
          v = ref[k];
          meta = this._metaKeyMap[k];
          if (meta.index > metaKey.index) {
            meta.index -= 1;
          }
        }
        _rm(filename);
        if (hasListeners) {
          evnt = new StorageEvent(key, oldValue, null, this._eventUrl);
          return this.emit('storage', evnt);
        }
      }
    };

    LocalStorage.prototype.key = function(n) {
      return this._keys[n];
    };

    LocalStorage.prototype.clear = function() {
      var evnt;
      _emptyDirectory(this._location);
      this._metaKeyMap = createMap();
      this._keys = [];
      this.length = 0;
      this._bytesInUse = 0;
      if (events.EventEmitter.listenerCount(this, 'storage')) {
        evnt = new StorageEvent(null, null, null, this._eventUrl);
        return this.emit('storage', evnt);
      }
    };

    LocalStorage.prototype._getBytesInUse = function() {
      return this._bytesInUse;
    };

    LocalStorage.prototype._deleteLocation = function() {
      delete instanceMap[this._location];
      _rm(this._location);
      this._metaKeyMap = {};
      this._keys = [];
      this.length = 0;
      return this._bytesInUse = 0;
    };

    return LocalStorage;

  })(events.EventEmitter);

  JSONStorage = (function(superClass) {
    extend(JSONStorage, superClass);

    function JSONStorage() {
      return JSONStorage.__super__.constructor.apply(this, arguments);
    }

    JSONStorage.prototype.setItem = function(key, value) {
      var newValue;
      newValue = JSON.stringify(value);
      return JSONStorage.__super__.setItem.call(this, key, newValue);
    };

    JSONStorage.prototype.getItem = function(key) {
      return JSON.parse(JSONStorage.__super__.getItem.call(this, key));
    };

    return JSONStorage;

  })(LocalStorage);

  exports.LocalStorage = LocalStorage;

  exports.JSONStorage = JSONStorage;

  exports.QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;

}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, process, Buffer) {
module.exports = writeFile
module.exports.sync = writeFileSync
module.exports._getTmpname = getTmpname // for testing

var fs = __webpack_require__(44)
var chain = __webpack_require__(62).chain
var MurmurHash3 = __webpack_require__(65)
var extend = Object.assign || __webpack_require__(18)._extend

var invocations = 0
function getTmpname (filename) {
  return filename + '.' +
    MurmurHash3(__filename)
      .hash(String(process.pid))
      .hash(String(++invocations))
      .result()
}

function writeFile (filename, data, options, callback) {
  if (options instanceof Function) {
    callback = options
    options = null
  }
  if (!options) options = {}
  fs.realpath(filename, function (_, realname) {
    _writeFile(realname || filename, data, options, callback)
  })
}
function _writeFile (filename, data, options, callback) {
  var tmpfile = getTmpname(filename)

  if (options.mode && options.chown) {
    return thenWriteFile()
  } else {
    // Either mode or chown is not explicitly set
    // Default behavior is to copy it from original file
    return fs.stat(filename, function (err, stats) {
      if (err || !stats) return thenWriteFile()

      options = extend({}, options)
      if (!options.mode) {
        options.mode = stats.mode
      }
      if (!options.chown && process.getuid) {
        options.chown = { uid: stats.uid, gid: stats.gid }
      }
      return thenWriteFile()
    })
  }

  function thenWriteFile () {
    chain([
      [writeFileAsync, tmpfile, data, options.mode, options.encoding || 'utf8'],
      options.chown && [fs, fs.chown, tmpfile, options.chown.uid, options.chown.gid],
      options.mode && [fs, fs.chmod, tmpfile, options.mode],
      [fs, fs.rename, tmpfile, filename]
    ], function (err) {
      err ? fs.unlink(tmpfile, function () { callback(err) })
        : callback()
    })
  }

  // doing this instead of `fs.writeFile` in order to get the ability to
  // call `fsync`.
  function writeFileAsync (file, data, mode, encoding, cb) {
    fs.open(file, 'w', options.mode, function (err, fd) {
      if (err) return cb(err)
      if (Buffer.isBuffer(data)) {
        return fs.write(fd, data, 0, data.length, 0, syncAndClose)
      } else if (data != null) {
        return fs.write(fd, String(data), 0, String(encoding), syncAndClose)
      } else {
        return syncAndClose()
      }
      function syncAndClose (err) {
        if (err) return cb(err)
        fs.fsync(fd, function (err) {
          if (err) return cb(err)
          fs.close(fd, cb)
        })
      }
    })
  }
}

function writeFileSync (filename, data, options) {
  if (!options) options = {}
  try {
    filename = fs.realpathSync(filename)
  } catch (ex) {
    // it's ok, it'll happen on a not yet existing file
  }
  var tmpfile = getTmpname(filename)

  try {
    if (!options.mode || !options.chown) {
      // Either mode or chown is not explicitly set
      // Default behavior is to copy it from original file
      try {
        var stats = fs.statSync(filename)
        options = extend({}, options)
        if (!options.mode) {
          options.mode = stats.mode
        }
        if (!options.chown && process.getuid) {
          options.chown = { uid: stats.uid, gid: stats.gid }
        }
      } catch (ex) {
        // ignore stat errors
      }
    }

    var fd = fs.openSync(tmpfile, 'w', options.mode)
    if (Buffer.isBuffer(data)) {
      fs.writeSync(fd, data, 0, data.length, 0)
    } else if (data != null) {
      fs.writeSync(fd, String(data), 0, String(options.encoding || 'utf8'))
    }
    fs.fsyncSync(fd)
    fs.closeSync(fd)
    if (options.chown) fs.chownSync(tmpfile, options.chown.uid, options.chown.gid)
    if (options.mode) fs.chmodSync(tmpfile, options.mode)
    fs.renameSync(tmpfile, filename)
  } catch (err) {
    try { fs.unlinkSync(tmpfile) } catch (e) {}
    throw err
  }
}

/* WEBPACK VAR INJECTION */}.call(this, "/index.js", __webpack_require__(3), __webpack_require__(8).Buffer))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var fs = __webpack_require__(15)
var polyfills = __webpack_require__(45)
var legacy = __webpack_require__(47)
var queue = []

var util = __webpack_require__(18)

function noop () {}

var debug = noop
if (util.debuglog)
  debug = util.debuglog('gfs4')
else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
  debug = function() {
    var m = util.format.apply(util, arguments)
    m = 'GFS4: ' + m.split(/\n/).join('\nGFS4: ')
    console.error(m)
  }

if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
  process.on('exit', function() {
    debug(queue)
    __webpack_require__(61).equal(queue.length, 0)
  })
}

module.exports = patch(__webpack_require__(21))
if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH) {
  module.exports = patch(fs)
}

// Always patch fs.close/closeSync, because we want to
// retry() whenever a close happens *anywhere* in the program.
// This is essential when multiple graceful-fs instances are
// in play at the same time.
module.exports.close =
fs.close = (function (fs$close) { return function (fd, cb) {
  return fs$close.call(fs, fd, function (err) {
    if (!err)
      retry()

    if (typeof cb === 'function')
      cb.apply(this, arguments)
  })
}})(fs.close)

module.exports.closeSync =
fs.closeSync = (function (fs$closeSync) { return function (fd) {
  // Note that graceful-fs also retries when fs.closeSync() fails.
  // Looks like a bug to me, although it's probably a harmless one.
  var rval = fs$closeSync.apply(fs, arguments)
  retry()
  return rval
}})(fs.closeSync)

function patch (fs) {
  // Everything that references the open() function needs to be in here
  polyfills(fs)
  fs.gracefulify = patch
  fs.FileReadStream = ReadStream;  // Legacy name.
  fs.FileWriteStream = WriteStream;  // Legacy name.
  fs.createReadStream = createReadStream
  fs.createWriteStream = createWriteStream
  var fs$readFile = fs.readFile
  fs.readFile = readFile
  function readFile (path, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$readFile(path, options, cb)

    function go$readFile (path, options, cb) {
      return fs$readFile(path, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$readFile, [path, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$writeFile = fs.writeFile
  fs.writeFile = writeFile
  function writeFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$writeFile(path, data, options, cb)

    function go$writeFile (path, data, options, cb) {
      return fs$writeFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$writeFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$appendFile = fs.appendFile
  if (fs$appendFile)
    fs.appendFile = appendFile
  function appendFile (path, data, options, cb) {
    if (typeof options === 'function')
      cb = options, options = null

    return go$appendFile(path, data, options, cb)

    function go$appendFile (path, data, options, cb) {
      return fs$appendFile(path, data, options, function (err) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$appendFile, [path, data, options, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  var fs$readdir = fs.readdir
  fs.readdir = readdir
  function readdir (path, options, cb) {
    var args = [path]
    if (typeof options !== 'function') {
      args.push(options)
    } else {
      cb = options
    }
    args.push(go$readdir$cb)

    return go$readdir(args)

    function go$readdir$cb (err, files) {
      if (files && files.sort)
        files.sort()

      if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
        enqueue([go$readdir, [args]])
      else {
        if (typeof cb === 'function')
          cb.apply(this, arguments)
        retry()
      }
    }
  }

  function go$readdir (args) {
    return fs$readdir.apply(fs, args)
  }

  if (process.version.substr(0, 4) === 'v0.8') {
    var legStreams = legacy(fs)
    ReadStream = legStreams.ReadStream
    WriteStream = legStreams.WriteStream
  }

  var fs$ReadStream = fs.ReadStream
  ReadStream.prototype = Object.create(fs$ReadStream.prototype)
  ReadStream.prototype.open = ReadStream$open

  var fs$WriteStream = fs.WriteStream
  WriteStream.prototype = Object.create(fs$WriteStream.prototype)
  WriteStream.prototype.open = WriteStream$open

  fs.ReadStream = ReadStream
  fs.WriteStream = WriteStream

  function ReadStream (path, options) {
    if (this instanceof ReadStream)
      return fs$ReadStream.apply(this, arguments), this
    else
      return ReadStream.apply(Object.create(ReadStream.prototype), arguments)
  }

  function ReadStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        if (that.autoClose)
          that.destroy()

        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
        that.read()
      }
    })
  }

  function WriteStream (path, options) {
    if (this instanceof WriteStream)
      return fs$WriteStream.apply(this, arguments), this
    else
      return WriteStream.apply(Object.create(WriteStream.prototype), arguments)
  }

  function WriteStream$open () {
    var that = this
    open(that.path, that.flags, that.mode, function (err, fd) {
      if (err) {
        that.destroy()
        that.emit('error', err)
      } else {
        that.fd = fd
        that.emit('open', fd)
      }
    })
  }

  function createReadStream (path, options) {
    return new ReadStream(path, options)
  }

  function createWriteStream (path, options) {
    return new WriteStream(path, options)
  }

  var fs$open = fs.open
  fs.open = open
  function open (path, flags, mode, cb) {
    if (typeof mode === 'function')
      cb = mode, mode = null

    return go$open(path, flags, mode, cb)

    function go$open (path, flags, mode, cb) {
      return fs$open(path, flags, mode, function (err, fd) {
        if (err && (err.code === 'EMFILE' || err.code === 'ENFILE'))
          enqueue([go$open, [path, flags, mode, cb]])
        else {
          if (typeof cb === 'function')
            cb.apply(this, arguments)
          retry()
        }
      })
    }
  }

  return fs
}

function enqueue (elem) {
  debug('ENQUEUE', elem[0].name, elem[1])
  queue.push(elem)
}

function retry () {
  var elem = queue.shift()
  if (elem) {
    debug('RETRY', elem[0].name, elem[1])
    elem[0].apply(null, elem[1])
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var fs = __webpack_require__(21)
var constants = __webpack_require__(46)

var origCwd = process.cwd
var cwd = null

var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform

process.cwd = function() {
  if (!cwd)
    cwd = origCwd.call(process)
  return cwd
}
try {
  process.cwd()
} catch (er) {}

var chdir = process.chdir
process.chdir = function(d) {
  cwd = null
  chdir.call(process, d)
}

module.exports = patch

function patch (fs) {
  // (re-)implement some things that are known busted or missing.

  // lchmod, broken prior to 0.6.2
  // back-port the fix here.
  if (constants.hasOwnProperty('O_SYMLINK') &&
      process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
    patchLchmod(fs)
  }

  // lutimes implementation, or no-op
  if (!fs.lutimes) {
    patchLutimes(fs)
  }

  // https://github.com/isaacs/node-graceful-fs/issues/4
  // Chown should not fail on einval or eperm if non-root.
  // It should not fail on enosys ever, as this just indicates
  // that a fs doesn't support the intended operation.

  fs.chown = chownFix(fs.chown)
  fs.fchown = chownFix(fs.fchown)
  fs.lchown = chownFix(fs.lchown)

  fs.chmod = chmodFix(fs.chmod)
  fs.fchmod = chmodFix(fs.fchmod)
  fs.lchmod = chmodFix(fs.lchmod)

  fs.chownSync = chownFixSync(fs.chownSync)
  fs.fchownSync = chownFixSync(fs.fchownSync)
  fs.lchownSync = chownFixSync(fs.lchownSync)

  fs.chmodSync = chmodFixSync(fs.chmodSync)
  fs.fchmodSync = chmodFixSync(fs.fchmodSync)
  fs.lchmodSync = chmodFixSync(fs.lchmodSync)

  fs.stat = statFix(fs.stat)
  fs.fstat = statFix(fs.fstat)
  fs.lstat = statFix(fs.lstat)

  fs.statSync = statFixSync(fs.statSync)
  fs.fstatSync = statFixSync(fs.fstatSync)
  fs.lstatSync = statFixSync(fs.lstatSync)

  // if lchmod/lchown do not exist, then make them no-ops
  if (!fs.lchmod) {
    fs.lchmod = function (path, mode, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchmodSync = function () {}
  }
  if (!fs.lchown) {
    fs.lchown = function (path, uid, gid, cb) {
      if (cb) process.nextTick(cb)
    }
    fs.lchownSync = function () {}
  }

  // on Windows, A/V software can lock the directory, causing this
  // to fail with an EACCES or EPERM if the directory contains newly
  // created files.  Try again on failure, for up to 60 seconds.

  // Set the timeout this long because some Windows Anti-Virus, such as Parity
  // bit9, may lock files for up to a minute, causing npm package install
  // failures. Also, take care to yield the scheduler. Windows scheduling gives
  // CPU to a busy looping process, which can cause the program causing the lock
  // contention to be starved of CPU by node, so the contention doesn't resolve.
  if (platform === "win32") {
    fs.rename = (function (fs$rename) { return function (from, to, cb) {
      var start = Date.now()
      var backoff = 0;
      fs$rename(from, to, function CB (er) {
        if (er
            && (er.code === "EACCES" || er.code === "EPERM")
            && Date.now() - start < 60000) {
          setTimeout(function() {
            fs.stat(to, function (stater, st) {
              if (stater && stater.code === "ENOENT")
                fs$rename(from, to, CB);
              else
                cb(er)
            })
          }, backoff)
          if (backoff < 100)
            backoff += 10;
          return;
        }
        if (cb) cb(er)
      })
    }})(fs.rename)
  }

  // if read() returns EAGAIN, then just try it again.
  fs.read = (function (fs$read) { return function (fd, buffer, offset, length, position, callback_) {
    var callback
    if (callback_ && typeof callback_ === 'function') {
      var eagCounter = 0
      callback = function (er, _, __) {
        if (er && er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          return fs$read.call(fs, fd, buffer, offset, length, position, callback)
        }
        callback_.apply(this, arguments)
      }
    }
    return fs$read.call(fs, fd, buffer, offset, length, position, callback)
  }})(fs.read)

  fs.readSync = (function (fs$readSync) { return function (fd, buffer, offset, length, position) {
    var eagCounter = 0
    while (true) {
      try {
        return fs$readSync.call(fs, fd, buffer, offset, length, position)
      } catch (er) {
        if (er.code === 'EAGAIN' && eagCounter < 10) {
          eagCounter ++
          continue
        }
        throw er
      }
    }
  }})(fs.readSync)
}

function patchLchmod (fs) {
  fs.lchmod = function (path, mode, callback) {
    fs.open( path
           , constants.O_WRONLY | constants.O_SYMLINK
           , mode
           , function (err, fd) {
      if (err) {
        if (callback) callback(err)
        return
      }
      // prefer to return the chmod error, if one occurs,
      // but still try to close, and report closing errors if they occur.
      fs.fchmod(fd, mode, function (err) {
        fs.close(fd, function(err2) {
          if (callback) callback(err || err2)
        })
      })
    })
  }

  fs.lchmodSync = function (path, mode) {
    var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode)

    // prefer to return the chmod error, if one occurs,
    // but still try to close, and report closing errors if they occur.
    var threw = true
    var ret
    try {
      ret = fs.fchmodSync(fd, mode)
      threw = false
    } finally {
      if (threw) {
        try {
          fs.closeSync(fd)
        } catch (er) {}
      } else {
        fs.closeSync(fd)
      }
    }
    return ret
  }
}

function patchLutimes (fs) {
  if (constants.hasOwnProperty("O_SYMLINK")) {
    fs.lutimes = function (path, at, mt, cb) {
      fs.open(path, constants.O_SYMLINK, function (er, fd) {
        if (er) {
          if (cb) cb(er)
          return
        }
        fs.futimes(fd, at, mt, function (er) {
          fs.close(fd, function (er2) {
            if (cb) cb(er || er2)
          })
        })
      })
    }

    fs.lutimesSync = function (path, at, mt) {
      var fd = fs.openSync(path, constants.O_SYMLINK)
      var ret
      var threw = true
      try {
        ret = fs.futimesSync(fd, at, mt)
        threw = false
      } finally {
        if (threw) {
          try {
            fs.closeSync(fd)
          } catch (er) {}
        } else {
          fs.closeSync(fd)
        }
      }
      return ret
    }

  } else {
    fs.lutimes = function (_a, _b, _c, cb) { if (cb) process.nextTick(cb) }
    fs.lutimesSync = function () {}
  }
}

function chmodFix (orig) {
  if (!orig) return orig
  return function (target, mode, cb) {
    return orig.call(fs, target, mode, function (er) {
      if (chownErOk(er)) er = null
      if (cb) cb.apply(this, arguments)
    })
  }
}

function chmodFixSync (orig) {
  if (!orig) return orig
  return function (target, mode) {
    try {
      return orig.call(fs, target, mode)
    } catch (er) {
      if (!chownErOk(er)) throw er
    }
  }
}


function chownFix (orig) {
  if (!orig) return orig
  return function (target, uid, gid, cb) {
    return orig.call(fs, target, uid, gid, function (er) {
      if (chownErOk(er)) er = null
      if (cb) cb.apply(this, arguments)
    })
  }
}

function chownFixSync (orig) {
  if (!orig) return orig
  return function (target, uid, gid) {
    try {
      return orig.call(fs, target, uid, gid)
    } catch (er) {
      if (!chownErOk(er)) throw er
    }
  }
}


function statFix (orig) {
  if (!orig) return orig
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target, cb) {
    return orig.call(fs, target, function (er, stats) {
      if (!stats) return cb.apply(this, arguments)
      if (stats.uid < 0) stats.uid += 0x100000000
      if (stats.gid < 0) stats.gid += 0x100000000
      if (cb) cb.apply(this, arguments)
    })
  }
}

function statFixSync (orig) {
  if (!orig) return orig
  // Older versions of Node erroneously returned signed integers for
  // uid + gid.
  return function (target) {
    var stats = orig.call(fs, target)
    if (stats.uid < 0) stats.uid += 0x100000000
    if (stats.gid < 0) stats.gid += 0x100000000
    return stats;
  }
}

// ENOSYS means that the fs doesn't support the op. Just ignore
// that, because it doesn't matter.
//
// if there's no getuid, or if getuid() is something other
// than 0, and the error is EINVAL or EPERM, then just ignore
// it.
//
// This specific case is a silent failure in cp, install, tar,
// and most other unix tools that manage permissions.
//
// When running as root, or if other types of errors are
// encountered, then it's strict.
function chownErOk (er) {
  if (!er)
    return true

  if (er.code === "ENOSYS")
    return true

  var nonroot = !process.getuid || process.getuid() !== 0
  if (nonroot) {
    if (er.code === "EINVAL" || er.code === "EPERM")
      return true
  }

  return false
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 46 */
/***/ (function(module) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Stream = __webpack_require__(48).Stream

module.exports = legacy

function legacy (fs) {
  return {
    ReadStream: ReadStream,
    WriteStream: WriteStream
  }

  function ReadStream (path, options) {
    if (!(this instanceof ReadStream)) return new ReadStream(path, options);

    Stream.call(this);

    var self = this;

    this.path = path;
    this.fd = null;
    this.readable = true;
    this.paused = false;

    this.flags = 'r';
    this.mode = 438; /*=0666*/
    this.bufferSize = 64 * 1024;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.encoding) this.setEncoding(this.encoding);

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.end === undefined) {
        this.end = Infinity;
      } else if ('number' !== typeof this.end) {
        throw TypeError('end must be a Number');
      }

      if (this.start > this.end) {
        throw new Error('start must be <= end');
      }

      this.pos = this.start;
    }

    if (this.fd !== null) {
      process.nextTick(function() {
        self._read();
      });
      return;
    }

    fs.open(this.path, this.flags, this.mode, function (err, fd) {
      if (err) {
        self.emit('error', err);
        self.readable = false;
        return;
      }

      self.fd = fd;
      self.emit('open', fd);
      self._read();
    })
  }

  function WriteStream (path, options) {
    if (!(this instanceof WriteStream)) return new WriteStream(path, options);

    Stream.call(this);

    this.path = path;
    this.fd = null;
    this.writable = true;

    this.flags = 'w';
    this.encoding = 'binary';
    this.mode = 438; /*=0666*/
    this.bytesWritten = 0;

    options = options || {};

    // Mixin options into this
    var keys = Object.keys(options);
    for (var index = 0, length = keys.length; index < length; index++) {
      var key = keys[index];
      this[key] = options[key];
    }

    if (this.start !== undefined) {
      if ('number' !== typeof this.start) {
        throw TypeError('start must be a Number');
      }
      if (this.start < 0) {
        throw new Error('start must be >= zero');
      }

      this.pos = this.start;
    }

    this.busy = false;
    this._queue = [];

    if (this.fd === null) {
      this._open = fs.open;
      this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
      this.flush();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

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

module.exports = Stream;

var EE = __webpack_require__(11).EventEmitter;
var inherits = __webpack_require__(6);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(16);
Stream.Writable = __webpack_require__(56);
Stream.Duplex = __webpack_require__(57);
Stream.Transform = __webpack_require__(58);
Stream.PassThrough = __webpack_require__(59);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(13).Buffer;
var util = __webpack_require__(51);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(53);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(3)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 55 */
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

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(26);

/*<replacement>*/
var util = __webpack_require__(10);
util.inherits = __webpack_require__(6);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16).Transform


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16).PassThrough


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(18);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports.asyncMap = __webpack_require__(63)
exports.bindActor = __webpack_require__(27)
exports.chain = __webpack_require__(64)


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {
/*
usage:

// do something to a list of things
asyncMap(myListOfStuff, function (thing, cb) { doSomething(thing.foo, cb) }, cb)
// do more than one thing to each item
asyncMap(list, fooFn, barFn, cb)

*/

module.exports = asyncMap

function asyncMap () {
  var steps = Array.prototype.slice.call(arguments)
    , list = steps.shift() || []
    , cb_ = steps.pop()
  if (typeof cb_ !== "function") throw new Error(
    "No callback provided to asyncMap")
  if (!list) return cb_(null, [])
  if (!Array.isArray(list)) list = [list]
  var n = steps.length
    , data = [] // 2d array
    , errState = null
    , l = list.length
    , a = l * n
  if (!a) return cb_(null, [])
  function cb (er) {
    if (er && !errState) errState = er

    var argLen = arguments.length
    for (var i = 1; i < argLen; i ++) if (arguments[i] !== undefined) {
      data[i - 1] = (data[i - 1] || []).concat(arguments[i])
    }
    // see if any new things have been added.
    if (list.length > l) {
      var newList = list.slice(l)
      a += (list.length - l) * n
      l = list.length
      process.nextTick(function () {
        newList.forEach(function (ar) {
          steps.forEach(function (fn) { fn(ar, cb) })
        })
      })
    }

    if (--a === 0) cb_.apply(null, [errState].concat(data))
  }
  // expect the supplied cb function to be called
  // "n" times for each thing in the array.
  list.forEach(function (ar) {
    steps.forEach(function (fn) { fn(ar, cb) })
  })
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = chain
var bindActor = __webpack_require__(27)
chain.first = {} ; chain.last = {}
function chain (things, cb) {
  var res = []
  ;(function LOOP (i, len) {
    if (i >= len) return cb(null,res)
    if (Array.isArray(things[i]))
      things[i] = bindActor.apply(null,
        things[i].map(function(i){
          return (i===chain.first) ? res[0]
           : (i===chain.last)
             ? res[res.length - 1] : i }))
    if (!things[i]) return LOOP(i + 1, len)
    things[i](function (er, data) {
      if (er) return cb(er, res)
      if (data !== undefined) res = res.concat(data)
      LOOP(i + 1, len)
    })
  })(0, things.length) }


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */
(function(){
    var cache;

    // Call this function without `new` to use the cached object (good for
    // single-threaded environments), or with `new` to create a new object.
    //
    // @param {string} key A UTF-16 or ASCII string
    // @param {number} seed An optional positive integer
    // @return {object} A MurmurHash3 object for incremental hashing
    function MurmurHash3(key, seed) {
        var m = this instanceof MurmurHash3 ? this : cache;
        m.reset(seed)
        if (typeof key === 'string' && key.length > 0) {
            m.hash(key);
        }

        if (m !== this) {
            return m;
        }
    };

    // Incrementally add a string to this hash
    //
    // @param {string} key A UTF-16 or ASCII string
    // @return {object} this
    MurmurHash3.prototype.hash = function(key) {
        var h1, k1, i, top, len;

        len = key.length;
        this.len += len;

        k1 = this.k1;
        i = 0;
        switch (this.rem) {
            case 0: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) : 0;
            case 1: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 8 : 0;
            case 2: k1 ^= len > i ? (key.charCodeAt(i++) & 0xffff) << 16 : 0;
            case 3:
                k1 ^= len > i ? (key.charCodeAt(i) & 0xff) << 24 : 0;
                k1 ^= len > i ? (key.charCodeAt(i++) & 0xff00) >> 8 : 0;
        }

        this.rem = (len + this.rem) & 3; // & 3 is same as % 4
        len -= this.rem;
        if (len > 0) {
            h1 = this.h1;
            while (1) {
                k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;

                h1 ^= k1;
                h1 = (h1 << 13) | (h1 >>> 19);
                h1 = (h1 * 5 + 0xe6546b64) & 0xffffffff;

                if (i >= len) {
                    break;
                }

                k1 = ((key.charCodeAt(i++) & 0xffff)) ^
                     ((key.charCodeAt(i++) & 0xffff) << 8) ^
                     ((key.charCodeAt(i++) & 0xffff) << 16);
                top = key.charCodeAt(i++);
                k1 ^= ((top & 0xff) << 24) ^
                      ((top & 0xff00) >> 8);
            }

            k1 = 0;
            switch (this.rem) {
                case 3: k1 ^= (key.charCodeAt(i + 2) & 0xffff) << 16;
                case 2: k1 ^= (key.charCodeAt(i + 1) & 0xffff) << 8;
                case 1: k1 ^= (key.charCodeAt(i) & 0xffff);
            }

            this.h1 = h1;
        }

        this.k1 = k1;
        return this;
    };

    // Get the result of this hash
    //
    // @return {number} The 32-bit hash
    MurmurHash3.prototype.result = function() {
        var k1, h1;
        
        k1 = this.k1;
        h1 = this.h1;

        if (k1 > 0) {
            k1 = (k1 * 0x2d51 + (k1 & 0xffff) * 0xcc9e0000) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = (k1 * 0x3593 + (k1 & 0xffff) * 0x1b870000) & 0xffffffff;
            h1 ^= k1;
        }

        h1 ^= this.len;

        h1 ^= h1 >>> 16;
        h1 = (h1 * 0xca6b + (h1 & 0xffff) * 0x85eb0000) & 0xffffffff;
        h1 ^= h1 >>> 13;
        h1 = (h1 * 0xae35 + (h1 & 0xffff) * 0xc2b20000) & 0xffffffff;
        h1 ^= h1 >>> 16;

        return h1 >>> 0;
    };

    // Reset the hash object for reuse
    //
    // @param {number} seed An optional positive integer
    MurmurHash3.prototype.reset = function(seed) {
        this.h1 = typeof seed === 'number' ? seed : 0;
        this.rem = this.k1 = this.len = 0;
        return this;
    };

    // A cached object to use. This can be safely used if you're in a single-
    // threaded environment, otherwise you need to create new hashes to use.
    cache = new MurmurHash3();

    if (true) {
        module.exports = MurmurHash3;
    } else {}
}());


/***/ }),
/* 66 */
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
var utils = __webpack_require__(4);

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
var timer_registry = __webpack_require__(28);

// EXTERNAL MODULE: ./binary-protocol/src/message-parser.ts
var message_parser = __webpack_require__(14);

// CONCATENATED MODULE: ./src/util/state-machine.ts
var state_machine_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function state_machine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateMachine = function () {
    function StateMachine(logger, stateMachine) {
        state_machine_classCallCheck(this, StateMachine);

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
            throw new Error("Invalid state transition: " + details);
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
var url_url = __webpack_require__(19);

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
var socket_factory = __webpack_require__(29);

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
            this.recordServices.readRegistry.register(this.name, this.handleReadResponse.bind(this));
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
            this.services.connection.sendMessage({
                topic: message_constants["TOPIC"].RECORD,
                action: message_constants["RECORD_ACTIONS"].SUBSCRIBECREATEANDREAD,
                name: this.name
            });
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
            var _this8 = this;

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
                    writeCallbacks[_i](err, _this8.name);
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
            var _this9 = this,
                _mapping;

            if (message.isAck) {
                this.handleAckMessage(message);
                return;
            }
            var mapping = (_mapping = {}, _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].PATCH, function () {
                return _this9.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].UPDATE, function () {
                return _this9.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].ERASE, function () {
                return _this9.handleUpdateMessage(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].DELETE_SUCCESS, function () {
                return _this9.handleDeleteSuccess();
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].DELETED, function () {
                return _this9.handleDeleted();
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].MESSAGE_DENIED, function () {
                return _this9.handleMessageDenied(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].MESSAGE_PERMISSION_ERROR, function () {
                return _this9.handleMessageDenied(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_PROVIDER, function () {
                return _this9.handleChangedProvider(message);
            }), _defineProperty(_mapping, message_constants["RECORD_ACTIONS"].SUBSCRIPTION_HAS_NO_PROVIDER, function () {
                return _this9.handleChangedProvider(message);
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
            var _this10 = this;

            this.whenReady(null, function () {
                if (_this10.services.connection.isConnected) {
                    var message = {
                        topic: message_constants["TOPIC"].RECORD,
                        action: message_constants["RECORD_ACTIONS"].DELETE,
                        name: _this10.name
                    };
                    _this10.deletedTimeout = _this10.services.timeoutRegistry.add({
                        message: message,
                        event: EVENT.RECORD_DELETE_TIMEOUT,
                        duration: _this10.options.recordDeleteTimeout
                    });
                    _this10.services.connection.sendMessage(message);
                } else {
                    _this10.services.storage.delete(_this10.name, function () {
                        _this10.services.timerRegistry.requestIdleCallback(function () {
                            _this10.stateMachine.transition(message_constants["RECORD_ACTIONS"].DELETE_SUCCESS);
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
            var LocalStorage = __webpack_require__(41).LocalStorage;
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