class InsuranceAgent {
    private _agentCode: number;
    private _agentName: string;

    constructor(agentCode: number = 2, agentName: string = 'Suresh') {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }

    set agentCode(agentCode: number) {
        this._agentCode = agentCode;
    }

    set agentName(agentName: string) {
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