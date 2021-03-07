# Pizza Pie

## Project Description

[Pizza Pie!](https://pizza-pie.netlify.app/) is a merchant social-esque React App, Airtable build where the user can interactively build their own pizza, name it, and place it for order. The homepage will have a main section displaying an empty pizza where the user will have the ability to toggle pizza topping icons that will be animately placed on their pizza. Upon finishing their creation, the user will have the option of naming their pizza via textbox. On submisson of the pizza, the user will be taken to a confirmation page that will display their order number and any relevant information about the order. At the top of the homepage there will be a link to a second page where the user can see recently ordered pizzas. Each pizza image will have an 'Order Now' button and display the title of the pizza the user gave it. Ordering from the display page will take the user to the confirmation page.

## Wireframes
[Mobile - Homepage](https://wireframe.cc/HwaLKd)  
[Mobile - Pizza Gallery](https://wireframe.cc/0Mc59r)  
[WebApp - Homepage](https://wireframe.cc/uEOWT8)  
[WebApp - Pizza Gallery](https://wireframe.cc/uiSwxC)  

## Component Hierarchy
![Component Hierarchy](/img/P2_Components.jpg)

## API and Data Sample
```
[
   {
      "id": "recjN9wzK1glyvWVR",
      "fields": {
         "name": "Point Break",
         "mushrooms": "true",
         "pepperoni": "false",
         "onion": "false",
         "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Greek_pizza_%281%29.jpg/1200px-Greek_pizza_%281%29.jpg"
      },
      "createdTime": "2020-12-04T02:48:40.000Z"
   },
   {
      "id": "recr1DG21uwRTclPj",
      "fields": {
         "name": "John Wick",
         "mushrooms": "false",
         "pepperoni": "false",
         "onion": "false",
         "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWsIInhUeAnK-bvK5LMo_qIbj5kY8yiTcA&usqp=CAU"
      },
      "createdTime": "2020-12-04T02:48:40.000Z"
   }
]
```

### MVP/PostMVP

#### MVP
- Homepage with toggle pizza topping icons that cover a blank pizza if selected.
- Give user the ability to 'name' their pizza creation. 
- 'Order' button to POST user built pizza order to Airtable.
- GET order number to the user once order has been submitted and thank them for their purchase.
- Link on the Homepage that takes user to seperate page with images of 'Recently Ordered Pizzas'. (GET)
- 'Order Now' button overlayed on each 'Recently Ordered Pizzas' image along with 'name' of the pizza creation. (POST)

#### PostMVP
- Give user the ability to order more than one pizza a one time.
- Give user the ability to DELETE a pizza from their working order summary.
- Make design prettier with CSS
- Add a 'Secret Stoner Menu' page with ordering features

## Project Schedule
| Day      | Deliverable                                                  | Status   |
| -------- | -------------------------------------------------------------| -------- |
| Dec 04   | Proposal Approval / Airtable Setup                           | Incomplete |
| Dec 05   | Get Homepage items displaying & order submitting to Airtable | Incomplete |
| Dec 06   | Get Pizza Gallery displaying and connected                   | Incomplete |
| Dec 07   | Tieing up loose ends - ensuring MVP works                    | Incomplete |
| Dec 08   | Depolyed MVP                                                 | Incomplete |
| Dec 09   | Advanced CSS (icon animation) and PostMVP                    | Incomplete |
| Dec 10   | Advanced CSS and PostMVP                                     | Incomplete |
| Dec 11   | Advanced CSS and PostMVP                                     | Incomplete |
| Dec 12   | Presentation                                                 | Incomplete |


