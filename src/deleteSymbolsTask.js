function sortTrolles() {
    const arrTrolles = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я",
      "А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"]
    let trollesText = "Цей сайт для невдах, ЛОЛ"
    const createText = []
    trollesText = Array.from(trollesText);
    for (let x = 0; x < arrTrolles.length; x++) {
      for (let count = -1; (count = trollesText.indexOf(arrTrolles[x], count + 1)) !== -1;) {
        createText.push(count);
      }
    }
  
    let lastTrolesText = trollesText.map((item, index) => {
      const censore = "*"
  
      for (let n = 0; n < createText.length; n++) {
        if (index === createText[n]) {
          return censore;
        }
      }
  
      return item;
    })
    let trolleResult = lastTrolesText.filter((item) => {
      if (item === "*") {
        return false
      }
      return true
    })
    trolleResult = trolleResult.join("")
  
    return trolleResult
  }
  
  // sortTrolles()
  export{sortTrolles}