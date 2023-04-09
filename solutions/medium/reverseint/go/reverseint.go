func reverse(x int) int {
    reversed := 0
    
    for x != 0 {
        digit := x % 10
        reversed = reversed*10 + digit
        x /= 10
    }
    
    if reversed > math.MaxInt32 || reversed < math.MinInt32 {
        return 0
    }
    
    return reversed
}
