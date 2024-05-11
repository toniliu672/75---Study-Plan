class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        current_num = 0
        current_string = ''
        
        for char in s:
            if char.isdigit():
                current_num = current_num * 10 + int(char)
            elif char == '[':
                stack.append(current_string)
                stack.append(current_num)
                current_string = ''
                current_num = 0
            elif char == ']':
                num = stack.pop()
                prev_string = stack.pop()
                current_string = prev_string + num * current_string
            else:
                current_string += char
        
        return current_string