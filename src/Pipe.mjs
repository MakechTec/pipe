
export class Pipe{
    
    actions = [];
    mutable = null;

    constructor(mutable = null, actions = []){
        this.mutable = mutable;
        this.actions = actions;
    }

    addAction(action, ...extras){
        this.actions.push(new Action(action, ...extras));
        return this;
    }

    setActions(actions){
        this.actions = actions;
    }

    execActions(){
        let result = this.mutable;
        this.actions.forEach( (action) => {
            result = action.action(this.mutable, ...action.args);
        } );

        return result;
    }

}

