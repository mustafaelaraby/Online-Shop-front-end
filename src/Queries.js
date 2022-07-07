export const request =()=> {
 return(
        {
            query:`
            {
              category(input:{title:"clothes"}){
                name
                products{
                  id
                  name
                  brand
                  prices{
                    amount
                    currency{
                      label
                      symbol
                    }
                  }
                  inStock
                  gallery
                  category
                  attributes{
                    id
                    name
                    items{
                      id
                      value
                      displayValue
                    }
                  }
                  description
                }
              }
            }
            `
        }
    )
}