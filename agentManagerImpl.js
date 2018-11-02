"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    constructor() {
        this.agentList = [];
    }
    addAgent(agent) {
        this.agentList.push(agent);
        return agent.id;
    }
}
let mgr = new AgentManagerImpl();
mgr.addAgent({ id: 101, mobileNumber: 999999, name: 'ramesh', category: 'board of director' });
mgr.addAgent({ id: 102, mobileNumber: 888888, name: 'rajesh', category: 'board of member' });
mgr.agentList.forEach(element => {
    console.log(element.id);
    console.log(element.name);
    console.log(element.category);
    console.log(element.mobileNumber);
});
