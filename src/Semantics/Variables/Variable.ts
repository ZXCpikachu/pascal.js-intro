import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { TreeNodeBase } from '../../SyntaxAnalyzer/Tree/TreeNodeBase';
export class Variable extends TreeNodeBase {
    constructor(symbol: SymbolBase) {
        super(symbol);
    }
}