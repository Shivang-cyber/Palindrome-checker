function palindrome(str) {
    str = str.replace(/\W/g,'')
    str = str.replace('_','')
    str = str.toLowerCase()
    var res = str.toLowerCase()
    var rts = ""
    for(let i =res.length-1;i>=0;i--){
    rts += res[i]
    }
    console.log(str)
    if(rts === str){ 
      return true
      }else{
        return false
      }
    
    
     
    }
    
    
    
    console.log(palindrome("A man, a plan, a canal. Panama") )