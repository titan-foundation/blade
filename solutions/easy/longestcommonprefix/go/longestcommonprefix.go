func longestCommonPrefix(strs []string) string {
    if len(strs) == 0 {
        return ""
    }
    
    prefix := strs[0]
    
    for i := 1; i < len(strs); i++ {
        for !strings.HasPrefix(strs[i], prefix) {
            prefix = prefix[:len(prefix)-1]
            if len(prefix) == 0 {
                return ""
            }
        }
    }
    
    return prefix
}

func test() {
    strs := []string {"flower", "flow", "flight"}
    fmt.Println(longestCommonPrefix(strs)) // Output: "fl"
}
