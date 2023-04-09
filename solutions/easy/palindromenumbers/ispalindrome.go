func isPalindrome(x int) bool {
    input_num := x
    var remainder int
    res := 0

    for x > 0 {
      remainder = x % 10
      res = (res * 10) + remainder
      x = x / 10
    }

    if input_num == res {
      return true
    } else {
      return false
    }
}
