// /**
//  * Created by jsr on 4/14/17.
//  */
"use strict"



    var pizza = {
        toppings: ["pepperoni", "green peppers", "onions"],
        crust: "stuffed",
        delivery: "true"
    };

// output the type of crust for the pizza
    console.log('The type of crust for the first pizza:' + pizza.crust);

    console.log(pizza.crust);

////////////////////////////////////////////////////////
//     When
//     you
//     are
//     finished
//     with the above
//     part, uncomment //
//     everything
//     until
//     the
//     next
//     comment
//     block              //
////////////////////////////////////////////////////////

    var orders = [
    {
        toppings: ['pepperoni', 'green peppers', 'onions'],
        crust: 'stuffed',
        delivery: (true),
        price: 12.95
    },

    {
        toppings: ['onion', 'salami'],
        crust:'pretzel',
        deliver:(false),
            price: 11.95
    }
    ,
        {
            toppings: ['pineapple', 'ham'],
            crust: 'regular',
            delivery: true,
            specialInstructions: 'extra crispy crust',
            price: 9.95))
        }
];

    console.log('Here are the different crust types for each order: ');
    orders.forEach(function (order) {
        console.log(order.crust)
    });

//////////////////////////////////////////////////////////////////////
// When you are finished with the section above, uncomment the rest //
//////////////////////////////////////////////////////////////////////

 console.log('--------------------------------------------------');
 console.log(' > Orders For Delivery');
 console.log('--------------------------------------------------');

 // output information about all the orders for delivery
 for (var index = 0; index <= orders.length; index += 1) {
     var order = orders[index];

//       if an order is not for delivery, skip it
// //     if (! order.delivery) {
//         break;
    }

    var orderNumber = index + 1;
    var formattedPrice = '$' + (order.price / 100).toFixed(2);

    // output the order number
    console.log('--- Order # ' + orderNumber + ' ---');
    console.log('Toppings'  + order.toppings.length);
    // output all the toppings for the order
    order.toppings.forEach(function (topping) {
        console.log('- ' + order.topping);
    });

    console.log('Crust: ' + order.crust);
    // output the special instructions, if there are any
    if (order.specialInstructions) {
        console.log('Special Prep: ' + order.specialInstructions);
    }

    console.log('Total: ' + formattedPrice);
};

