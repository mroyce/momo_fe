import invariant from 'invariant';


class ReducerBase {
    constructor(...args) {
        this._name = this.constructor.name;
    }
    get reducer() {
        invariant(
            true,
            '%s must override ReducerBase.reducer().',
            this._name,
        );
    }
}


export default ReducerBase;
