import { SymbolBase } from '../../LexicalAnalyzer/Symbols/SymbolBase';
import { TreeNodeBase } from './TreeNodeBase';

export class Assignment extends TreeNodeBase {
    left: SymbolBase; 
    right: TreeNodeBase;

    constructor(left: SymbolBase, right: TreeNodeBase) {
        super(left);
        this.left = left; 
        this.right = right;
    }
}
