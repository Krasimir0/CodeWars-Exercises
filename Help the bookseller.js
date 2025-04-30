function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) {
         return ""
    }
    
     let categoriesObj = {}
    categories.forEach(category => {
     categoriesObj[category] = 0 
    })
         
    books.forEach(book => {
       let [title, number] = book.split(" ");
       if (Object.hasOwn(categoriesObj, title[0])) {
                 categoriesObj[title[0]] += Number(number)
             }
    });
    return categories
    .map(cat => `(${cat} : ${categoriesObj[cat]})`)
    .join(" - ");
 }
 
 stockList(["ROXANNE 102","RHODODE 123","BKWRKAA 125","BTSQZFG 239","DRTYMKH 060"],
     ["B","R","D","X"])