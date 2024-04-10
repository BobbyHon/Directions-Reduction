function dirReduc(arr){
    let returnArr = []
    
    //filter
    for (let i = 0; i < arr.length; i++){
      let arr1 = arr[i]
      let arr2 = arr[i + 1]
      
      if (arr1 == 'NORTH' && arr2 == 'SOUTH')
        {
          i++
        }
      else if (arr1 == 'SOUTH' && arr2 == 'NORTH')
        {
          i++
        }
      else if (arr1 == 'WEST' && arr2 == 'EAST')
        {
          i++
        }
      else if (arr1 == 'EAST' && arr2 == 'WEST')
        {
          i++
        }
      else{
        returnArr.push(arr[i])
      }
    }
    //recursion
    returnArr = returnArr.map(function(num, index){
      if (num == 'NORTH' && returnArr[index + 1] == 'SOUTH')
        {
          return true
        }
      else if (num == 'SOUTH' && returnArr[index + 1] == 'NORTH')
        {
          return true
        }
      else if (num == 'EAST' && returnArr[index + 1] == 'WEST')
        {
          return true
        }
      else if (num == 'WEST' && returnArr[index + 1] == 'EAST')
        {
          return true
        }
      else{
        return false
      }
    }).filter(Boolean).length > 0 ? dirReduc(returnArr) : returnArr
    
    return returnArr
  }
  /* WRONG IDEA ON HOW THIS ONE WANTS TO BE SOLVE!
    //index 0 = North, index 1 = South, index 2 = East, index 3 = West
    let arrCount = []
    arrCount[0] = arr.filter((word) => word.toString().toUpperCase() == 'NORTH').length
    arrCount[1] = arr.filter((word) => word.toString().toUpperCase() == 'SOUTH').length
    arrCount[2] = arr.filter((word) => word.toString().toUpperCase() == 'EAST').length
    arrCount[3] = arr.filter((word) => word.toString().toUpperCase() == 'WEST').length
  
    //Filter
    arrCount = arrCount.map(function(num, index){
      index = index % 2 == 0 ? index + 1 : index - 1
      num -= arrCount[index]
      return num < 0 ? 0 : num
    })
    
    //Setup Placement
    let returnArr = []
    for (let i =0; i < arr.length; i++){
      if (arr[i].toString().toUpperCase() == 'NORTH' && arrCount[0] > 0)
        {
          returnArr.push('NORTH')
          arrCount[0] -= 1
        }
      else if (arr[i].toString().toUpperCase() == 'SOUTH' && arrCount[1] > 0)
        {
          returnArr.push('SOUTH')
          arrCount[1] -= 1
        }
      else if (arr[i].toString().toUpperCase() == 'EAST' && arrCount[2] > 0)
        {
          returnArr.push('EAST')
          arrCount[2] -= 1
        }
      else if (arr[i].toString().toUpperCase() == 'WEST' && arrCount[3] > 0)
        {
          returnArr.push('WEST')
          arrCount[3] -= 1
        }
    }
    