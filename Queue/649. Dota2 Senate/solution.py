class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        n = len(senate)
        radiant, dire = deque(), deque()
        
        for i, party in enumerate(senate):
            if party == 'R':
                radiant.append(i)
            else:
                dire.append(i)
        
        while radiant and dire:
            rad_idx, dir_idx = radiant.popleft(), dire.popleft()
            
            if rad_idx < dir_idx:
                radiant.append(rad_idx + n)
            else:
                dire.append(dir_idx + n)
        
        return "Radiant" if radiant else "Dire"