"use strict";
class InsuranceAgent {
    constructor(agentCode = 2, agentName = 'Suresh') {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }
    set agentCode(agentCode) {
        this._agentCode = agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentCode() {
        return this._agentCode;
    }
    get agentName() {
        return this._agentName.toLocaleUpperCase();
    }
    toString() {
        return `${this.agentCode},${this.agentName}`;
    }
}
