// export const steps = [
//     {
//         id: '1',
//         message: 'Hola, ¿Como te llamas?',
//         trigger: 2,
//     },
//     {
//         id: '2',
//         user: true,
//         trigger: 3,
//     },
//     {
//         id:'3',
//         message: 'Hola {previousValue}, Bienvenido a San Pedro Colalao',
//         trigger: 4,
//     },
//     {
//         id:'4',
//         message: 'Esperemos te la pases genial, ¿Te gustaria ir a la Cerveceria Herr Vilem?',
//         trigger:5,
//     },
//     {
//         id:'5',
//         options: [
//             {value: 1, label: 'Si', trigger: 6},
//             {value: 2, label: 'No', trigger: 7}
//         ],
//     },
//     {
//         id:'6',
//         message: 'www.google.com/herVilem',
//         end: true,
//     },
//     {
//         id:'7',
//         message: '¿Te gustaria visitar algun restaurant, hotel o bar en San Pedro Colalao?',
//         end: true,
//     },


// ]

export const steps = [
    {
        id: '1',
        message: 'Hola, ¿Cómo te llamas?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        trigger: 'greeting',
    },
    {
        id: 'greeting',
        message: 'Hola {previousValue}, Bienvenido a San Pedro Colalao',
        trigger: 'restaurant',
    },
    {
        id: 'restaurant',
        message: '¿Te gustaría visitar algún restaurant, hotel o bar en San Pedro Colalao?',
        trigger: 'restaurant-options',
        delay: 500, // Agregamos un retraso de medio segundo antes de mostrar las opciones para evitar que se superpongan los mensajes.
    },
    {
        id: 'restaurant-options',
        options: [
            {
                value: 'si',
                label: 'Sí',
                trigger: 'restaurant-yes',
            },
            {
                value: 'no',
                label: 'No',
                trigger: 'end-message',
            },
        ],
    },
    {
        id: 'restaurant-yes',
        message: '¡Genial! ¿Te puedo recomiendar la Cervezeria Herr Vilem?',
        trigger: 'cervezeria-options',
        delay: 500,
    },
    {
        id: 'cervezeria-options',
        options: [
            {
                value: 'si',
                label: 'Si',
                trigger: 'web-vilem',
            },
            {
                value: 'no',
                label: 'No',
                trigger: 'other-options',
            },
        ],
    },
    {
            id: 'web-vilem',
            message: 'Visita la pagina web offical de la Cervezeria Herr Vilem herrvilem.com',
            end: true,
    },
    {
        
        id: 'other-options',
        message: "Aqui listamos algunos otros de los mejores lugares para visitar",
        trigger: 'other-places',
        delay: 500
    },
    {
        id:'other-places',
        options: [
            {
                value: 'Bar el Chavo',
                label: 'Bar el Chavo',
                trigger: 'end-places',
            },
            {
                value: 'Restaurante el Cardon',
                label: 'Restaurante el Cardon',
                trigger: 'end-places',
            },
            {
                value: 'Plaza Norte',
                label: 'Plaza Norte',
                trigger: 'end-places',
            },
            {
                value: 'Aqui me quedo',
                label: 'Aqui me quedo',
                trigger: 'end-places',
            },
            {
                value: 'Hotel y Restaurant La Casona',
                label: 'Hotel y Restaurant La Casona',
                trigger: 'end-places',
            },
        ]
    },
    {
        id:'end-places',
        message: 'Esperemos que disfrutes de {previousValue} en San Pedro Colalao',
        end: true,
    },
    {
        id: 'end-message',
        message: 'Gracias por visitar San Pedro Colalao. ¡Que tengas un buen día!',
        end: true,
    },
];
