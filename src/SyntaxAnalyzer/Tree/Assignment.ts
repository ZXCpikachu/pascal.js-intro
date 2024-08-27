import { SymbolBase } from "src/LexicalAnalyzer/Symbols/SymbolBase";
import { TreeNodeBase } from "./TreeNodeBase";

export class Assignment extends TreeNodeBase {
    identifier: string;
    expression: TreeNodeBase;

    constructor(symbol: SymbolBase, expression: TreeNodeBase) {
        super(symbol); 
        this.identifier = symbol.value.toString();
        this.expression = expression;
    }
}
