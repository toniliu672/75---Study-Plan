class Trie {
    root: { [key: string]: any };

    constructor() {
        this.root = {};
    }

    insert(word: string): void {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isEnd = true;
    }

    traverse(word: string): any {
        let node = this.root;
        for (let char of word) {
            if (!node[char]) return null;
            node = node[char];
        }
        return node;
    }

    search(word: string): boolean {
        const node = this.traverse(word);
        return !!node && !!node.isEnd;
    }

    startsWith(prefix: string): boolean {
        return !!this.traverse(prefix);
    }
}


/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */