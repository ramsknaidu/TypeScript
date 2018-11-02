export interface Agent{
    id:number;name:string;mobileNumber:number;category:string;
}

function printAgent(agent:Agent)
{
    console.log(agent.name);
}

let ram:Agent = {id:101,category:'chairman',mobileNumber:99997867,name:'ramesh'};

printAgent(ram);