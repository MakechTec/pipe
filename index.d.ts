export class Action {
    constructor(action?: () => void, ...args: any[]);
    action: () => void;
    args: any[];
}

export class Pipe {
    constructor(mutable?: any, actions?: any[]);
    actions: any[];
    mutable: any;
    addAction(action: any, ...extras: any[]): Pipe;
    setActions(actions: any): void;
    execActions(): any;
}