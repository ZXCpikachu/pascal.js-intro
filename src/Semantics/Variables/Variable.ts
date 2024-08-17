import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { TreeNodeBase } from '../../SyntaxAnalyzer/Tree/TreeNodeBase';
export class Variable extends TreeNodeBase {
    constructor(public name: SymbolBase) {
        super(null);
    }
}