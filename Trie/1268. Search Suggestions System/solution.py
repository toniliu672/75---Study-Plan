class TrieNode:
    def __init__(self):
        self.children = {}
        self.words = []

class Solution:
    def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
        root = TrieNode()
        for word in sorted(products):
            node = root
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
                node.words.append(word)
                if len(node.words) > 3:
                    node.words.pop()

        result, node = [], root
        for char in searchWord:
            if char in node.children:
                node = node.children[char]
                result.append(node.words)
            else:
                result.extend([] for _ in range(len(searchWord) - len(result)))
                break

        return result
