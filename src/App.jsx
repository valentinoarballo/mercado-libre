import { useState } from 'react'
import './App.css'
import ProductDetail from './componets/ProductDetail'

const obj = {
  "id": "MLA1418598167",
  "site_id": "MLA",
  "title": "Camiseta Remera Boca Juniors Titular 2024 Cabj Nueva Zenon ",
  "seller_id": 1339413864,
  "category_id": "MLA1286",
  "official_store_id": null,
  "price": 18999,
  "base_price": 18999,
  "original_price": 18999,
  "currency_id": "ARS",
  "initial_quantity": 651,
  "sale_terms": [
    {
      "id": "WARRANTY_TYPE",
      "name": "Tipo de garantía",
      "value_id": "6150835",
      "value_name": "Sin garantía",
      "value_struct": null,
      "values": [
        {
          "id": "6150835",
          "name": "Sin garantía",
          "struct": null
        }
      ],
      "value_type": "list"
    }
  ],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_special",
  "condition": "new",
  "permalink": "https://articulo.mercadolibre.com.ar/MLA-1418598167-camiseta-remera-boca-juniors-titular-2024-cabj-nueva-zenon-_JM",
  "thumbnail_id": "706938-MLA75400057518_042024",
  "thumbnail": "http://http2.mlstatic.com/D_706938-MLA75400057518_042024-I.jpg",
  "pictures": [
    {
      "id": "706938-MLA75400057518_042024",
      "url": "http://http2.mlstatic.com/D_706938-MLA75400057518_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_706938-MLA75400057518_042024-O.jpg",
      "size": "390x500",
      "max_size": "624x800",
      "quality": ""
    },
    {
      "id": "907649-MLA75349549536_032024",
      "url": "http://http2.mlstatic.com/D_907649-MLA75349549536_032024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_907649-MLA75349549536_032024-O.jpg",
      "size": "500x500",
      "max_size": "1200x1200",
      "quality": ""
    },
    {
      "id": "815307-MLA75919769273_042024",
      "url": "http://http2.mlstatic.com/D_815307-MLA75919769273_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_815307-MLA75919769273_042024-O.jpg",
      "size": "500x149",
      "max_size": "1200x358",
      "quality": ""
    },
    {
      "id": "929095-MLA75349495212_032024",
      "url": "http://http2.mlstatic.com/D_929095-MLA75349495212_032024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_929095-MLA75349495212_032024-O.jpg",
      "size": "312x402",
      "max_size": "312x402",
      "quality": ""
    },
    {
      "id": "906460-MLA75349587976_032024",
      "url": "http://http2.mlstatic.com/D_906460-MLA75349587976_032024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_906460-MLA75349587976_032024-O.jpg",
      "size": "500x500",
      "max_size": "1200x1200",
      "quality": ""
    },
    {
      "id": "846260-MLA75919673393_042024",
      "url": "http://http2.mlstatic.com/D_846260-MLA75919673393_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_846260-MLA75919673393_042024-O.jpg",
      "size": "500x149",
      "max_size": "1200x358",
      "quality": ""
    },
    {
      "id": "801771-MLA75502080493_032024",
      "url": "http://http2.mlstatic.com/D_801771-MLA75502080493_032024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_801771-MLA75502080493_032024-O.jpg",
      "size": "354x500",
      "max_size": "370x522",
      "quality": ""
    },
    {
      "id": "755594-MLA75349587992_032024",
      "url": "http://http2.mlstatic.com/D_755594-MLA75349587992_032024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_755594-MLA75349587992_032024-O.jpg",
      "size": "500x500",
      "max_size": "1200x1200",
      "quality": ""
    },
    {
      "id": "836818-MLA75919693439_042024",
      "url": "http://http2.mlstatic.com/D_836818-MLA75919693439_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_836818-MLA75919693439_042024-O.jpg",
      "size": "500x149",
      "max_size": "1200x358",
      "quality": ""
    },
    {
      "id": "899935-MLA75558593253_042024",
      "url": "http://http2.mlstatic.com/D_899935-MLA75558593253_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_899935-MLA75558593253_042024-O.jpg",
      "size": "312x402",
      "max_size": "312x402",
      "quality": ""
    },
    {
      "id": "806049-MLA75404079700_042024",
      "url": "http://http2.mlstatic.com/D_806049-MLA75404079700_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_806049-MLA75404079700_042024-O.jpg",
      "size": "500x500",
      "max_size": "1200x1200",
      "quality": ""
    },
    {
      "id": "989072-MLA75751668824_042024",
      "url": "http://http2.mlstatic.com/D_989072-MLA75751668824_042024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_989072-MLA75751668824_042024-O.jpg",
      "size": "500x149",
      "max_size": "1200x358",
      "quality": ""
    },
    {
      "id": "613019-MLA76619206657_052024",
      "url": "http://http2.mlstatic.com/D_613019-MLA76619206657_052024-O.jpg",
      "secure_url": "https://http2.mlstatic.com/D_613019-MLA76619206657_052024-O.jpg",
      "size": "312x402",
      "max_size": "312x402",
      "quality": ""
    }
  ],
  "video_id": null,
  "descriptions": [
  ],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [
  ],
  "shipping": {
    "mode": "me2",
    "methods": [
    ],
    "tags": [
    ],
    "dimensions": null,
    "local_pick_up": false,
    "free_shipping": false,
    "logistic_type": "xd_drop_off",
    "store_pick_up": false
  },
  "international_delivery_mode": "none",
  "seller_address": {
    "city": {
      "id": "TUxBQlBVRTQ5NjBa",
      "name": "Puerto Madero"
    },
    "state": {
      "id": "AR-C",
      "name": "Capital Federal"
    },
    "country": {
      "id": "AR",
      "name": "Argentina"
    },
    "search_location": {
      "neighborhood": {
        "id": "TUxBQlBBUjUyOTZa",
        "name": "Parque Chacabuco"
      },
      "city": {
        "id": "TUxBQ0NBUGZlZG1sYQ",
        "name": "Capital Federal"
      },
      "state": {
        "id": "TUxBUENBUGw3M2E1",
        "name": "Capital Federal"
      }
    },
    "id": 1293385419
  },
  "seller_contact": null,
  "location": {
  },
  "coverage_areas": [
  ],
  "attributes": [
    {
      "id": "AGE_GROUP",
      "name": "Edad",
      "value_id": "6725189",
      "value_name": "Adultos",
      "values": [
        {
          "id": "6725189",
          "name": "Adultos",
          "struct": null
        }
      ],
      "value_type": "list"
    },
    {
      "id": "BRAND",
      "name": "Marca",
      "value_id": "276243",
      "value_name": "Genérica",
      "values": [
        {
          "id": "276243",
          "name": "Genérica",
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "FOOTBALL_SHIRT_EDITION",
      "name": "Edición especial de la camiseta",
      "value_id": "-1",
      "value_name": null,
      "values": [
        {
          "id": "-1",
          "name": null,
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "FOOTBALL_SHIRT_NUMBER",
      "name": "Número de la camiseta",
      "value_id": "-1",
      "value_name": null,
      "values": [
        {
          "id": "-1",
          "name": null,
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "FOOTBALL_SHIRT_TYPE",
      "name": "Tipo de camiseta",
      "value_id": "1245252",
      "value_name": "Titular",
      "values": [
        {
          "id": "1245252",
          "name": "Titular",
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "FOOTBALL_SHIRT_VERSION",
      "name": "Versión de la camiseta",
      "value_id": "-1",
      "value_name": null,
      "values": [
        {
          "id": "-1",
          "name": null,
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "GENDER",
      "name": "Género",
      "value_id": "110461",
      "value_name": "Sin género",
      "values": [
        {
          "id": "110461",
          "name": "Sin género",
          "struct": null
        }
      ],
      "value_type": "list"
    },
    {
      "id": "IS_FOR_GOALKEEPER",
      "name": "Es para arquero",
      "value_id": "242084",
      "value_name": "No",
      "values": [
        {
          "id": "242084",
          "name": "No",
          "struct": null
        }
      ],
      "value_type": "boolean"
    },
    {
      "id": "ITEM_CONDITION",
      "name": "Condición del ítem",
      "value_id": "2230284",
      "value_name": "Nuevo",
      "values": [
        {
          "id": "2230284",
          "name": "Nuevo",
          "struct": null
        }
      ],
      "value_type": "list"
    },
    {
      "id": "OCCASION_TYPE",
      "name": "Tipo de ocasión",
      "value_id": "1245250",
      "value_name": "Partido",
      "values": [
        {
          "id": "1245250",
          "name": "Partido",
          "struct": null
        }
      ],
      "value_type": "list"
    },
    {
      "id": "SIZE_GRID_ID",
      "name": "ID de la guía de talles",
      "value_id": null,
      "value_name": "1562008",
      "values": [
        {
          "id": null,
          "name": "1562008",
          "struct": null
        }
      ],
      "value_type": "grid_id"
    },
    {
      "id": "SPORT_SEASON",
      "name": "Temporada",
      "value_id": null,
      "value_name": "2023/2024",
      "values": [
        {
          "id": null,
          "name": "2023/2024",
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "TEAM",
      "name": "Equipo",
      "value_id": "4194629",
      "value_name": "Boca Juniors",
      "values": [
        {
          "id": "4194629",
          "name": "Boca Juniors",
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "TEAM_COUNTRY",
      "name": "País del equipo",
      "value_id": "2486996",
      "value_name": "Argentina",
      "values": [
        {
          "id": "2486996",
          "name": "Argentina",
          "struct": null
        }
      ],
      "value_type": "string"
    },
    {
      "id": "TEAM_TYPE",
      "name": "Tipo de equipo",
      "value_id": "416096",
      "value_name": "Club internacional",
      "values": [
        {
          "id": "416096",
          "name": "Club internacional",
          "struct": null
        }
      ],
      "value_type": "list"
    }
  ],
  "listing_source": "",
  "variations": [
    {
      "id": 180208237508,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Zenón",
          "values": [
            {
              "id": null,
              "name": "Zenón",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "17552780",
          "value_name": "S",
          "values": [
            {
              "id": "17552780",
              "name": "S",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "706938-MLA75400057518_042024",
        "907649-MLA75349549536_032024",
        "815307-MLA75919769273_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237510,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Zenón",
          "values": [
            {
              "id": null,
              "name": "Zenón",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "2282666",
          "value_name": "M",
          "values": [
            {
              "id": "2282666",
              "name": "M",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "706938-MLA75400057518_042024",
        "907649-MLA75349549536_032024",
        "815307-MLA75919769273_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237512,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Zenón",
          "values": [
            {
              "id": null,
              "name": "Zenón",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "10490141",
          "value_name": "L",
          "values": [
            {
              "id": "10490141",
              "name": "L",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "706938-MLA75400057518_042024",
        "907649-MLA75349549536_032024",
        "815307-MLA75919769273_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237514,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Zenón",
          "values": [
            {
              "id": null,
              "name": "Zenón",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "433336",
          "value_name": "XL",
          "values": [
            {
              "id": "433336",
              "name": "XL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "706938-MLA75400057518_042024",
        "907649-MLA75349549536_032024",
        "815307-MLA75919769273_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237516,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Zenón",
          "values": [
            {
              "id": null,
              "name": "Zenón",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "3423417",
          "value_name": "XXL",
          "values": [
            {
              "id": "3423417",
              "name": "XXL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "706938-MLA75400057518_042024",
        "907649-MLA75349549536_032024",
        "815307-MLA75919769273_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237518,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Merentiel",
          "values": [
            {
              "id": null,
              "name": "Merentiel",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "17552780",
          "value_name": "S",
          "values": [
            {
              "id": "17552780",
              "name": "S",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "929095-MLA75349495212_032024",
        "906460-MLA75349587976_032024",
        "846260-MLA75919673393_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237520,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Merentiel",
          "values": [
            {
              "id": null,
              "name": "Merentiel",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "2282666",
          "value_name": "M",
          "values": [
            {
              "id": "2282666",
              "name": "M",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "929095-MLA75349495212_032024",
        "906460-MLA75349587976_032024",
        "846260-MLA75919673393_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237522,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Merentiel",
          "values": [
            {
              "id": null,
              "name": "Merentiel",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "10490141",
          "value_name": "L",
          "values": [
            {
              "id": "10490141",
              "name": "L",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "929095-MLA75349495212_032024",
        "906460-MLA75349587976_032024",
        "846260-MLA75919673393_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237524,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Merentiel",
          "values": [
            {
              "id": null,
              "name": "Merentiel",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "433336",
          "value_name": "XL",
          "values": [
            {
              "id": "433336",
              "name": "XL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "929095-MLA75349495212_032024",
        "906460-MLA75349587976_032024",
        "846260-MLA75919673393_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237526,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Merentiel",
          "values": [
            {
              "id": null,
              "name": "Merentiel",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "3423417",
          "value_name": "XXL",
          "values": [
            {
              "id": "3423417",
              "name": "XXL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "929095-MLA75349495212_032024",
        "906460-MLA75349587976_032024",
        "846260-MLA75919673393_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237528,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Sin Jugador",
          "values": [
            {
              "id": null,
              "name": "Sin Jugador",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "17552780",
          "value_name": "S",
          "values": [
            {
              "id": "17552780",
              "name": "S",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "801771-MLA75502080493_032024",
        "755594-MLA75349587992_032024",
        "836818-MLA75919693439_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237530,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Sin Jugador",
          "values": [
            {
              "id": null,
              "name": "Sin Jugador",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "2282666",
          "value_name": "M",
          "values": [
            {
              "id": "2282666",
              "name": "M",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "801771-MLA75502080493_032024",
        "755594-MLA75349587992_032024",
        "836818-MLA75919693439_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237532,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Sin Jugador",
          "values": [
            {
              "id": null,
              "name": "Sin Jugador",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "10490141",
          "value_name": "L",
          "values": [
            {
              "id": "10490141",
              "name": "L",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "801771-MLA75502080493_032024",
        "755594-MLA75349587992_032024",
        "836818-MLA75919693439_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237534,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Sin Jugador",
          "values": [
            {
              "id": null,
              "name": "Sin Jugador",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "433336",
          "value_name": "XL",
          "values": [
            {
              "id": "433336",
              "name": "XL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "801771-MLA75502080493_032024",
        "755594-MLA75349587992_032024",
        "836818-MLA75919693439_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 180208237536,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Sin Jugador",
          "values": [
            {
              "id": null,
              "name": "Sin Jugador",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "3423417",
          "value_name": "XXL",
          "values": [
            {
              "id": "3423417",
              "name": "XXL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "801771-MLA75502080493_032024",
        "755594-MLA75349587992_032024",
        "836818-MLA75919693439_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182342321075,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Cavani",
          "values": [
            {
              "id": null,
              "name": "Cavani",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "10490141",
          "value_name": "L",
          "values": [
            {
              "id": "10490141",
              "name": "L",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "899935-MLA75558593253_042024",
        "806049-MLA75404079700_042024",
        "989072-MLA75751668824_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182342321077,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Cavani",
          "values": [
            {
              "id": null,
              "name": "Cavani",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "2282666",
          "value_name": "M",
          "values": [
            {
              "id": "2282666",
              "name": "M",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "899935-MLA75558593253_042024",
        "806049-MLA75404079700_042024",
        "989072-MLA75751668824_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182342321079,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Cavani",
          "values": [
            {
              "id": null,
              "name": "Cavani",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "17552780",
          "value_name": "S",
          "values": [
            {
              "id": "17552780",
              "name": "S",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "899935-MLA75558593253_042024",
        "806049-MLA75404079700_042024",
        "989072-MLA75751668824_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182342321081,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Cavani",
          "values": [
            {
              "id": null,
              "name": "Cavani",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "433336",
          "value_name": "XL",
          "values": [
            {
              "id": "433336",
              "name": "XL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "899935-MLA75558593253_042024",
        "806049-MLA75404079700_042024",
        "989072-MLA75751668824_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182342321083,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Cavani",
          "values": [
            {
              "id": null,
              "name": "Cavani",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "3423417",
          "value_name": "XXL",
          "values": [
            {
              "id": "3423417",
              "name": "XXL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "899935-MLA75558593253_042024",
        "806049-MLA75404079700_042024",
        "989072-MLA75751668824_042024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182904608801,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Advincula",
          "values": [
            {
              "id": null,
              "name": "Advincula",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "10490141",
          "value_name": "L",
          "values": [
            {
              "id": "10490141",
              "name": "L",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "613019-MLA76619206657_052024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182904608803,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Advincula",
          "values": [
            {
              "id": null,
              "name": "Advincula",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "2282666",
          "value_name": "M",
          "values": [
            {
              "id": "2282666",
              "name": "M",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "613019-MLA76619206657_052024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182904608805,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Advincula",
          "values": [
            {
              "id": null,
              "name": "Advincula",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "17552780",
          "value_name": "S",
          "values": [
            {
              "id": "17552780",
              "name": "S",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "613019-MLA76619206657_052024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182904608807,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Advincula",
          "values": [
            {
              "id": null,
              "name": "Advincula",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "433336",
          "value_name": "XL",
          "values": [
            {
              "id": "433336",
              "name": "XL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "613019-MLA76619206657_052024"
      ],
      "catalog_product_id": null
    },
    {
      "id": 182904608809,
      "price": 18999,
      "attribute_combinations": [
        {
          "id": "COLOR",
          "name": "Color",
          "value_id": "52028",
          "value_name": "Azul",
          "values": [
            {
              "id": "52028",
              "name": "Azul",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "PLAYER",
          "name": "Jugador",
          "value_id": null,
          "value_name": "Advincula",
          "values": [
            {
              "id": null,
              "name": "Advincula",
              "struct": null
            }
          ],
          "value_type": "string"
        },
        {
          "id": "SIZE",
          "name": "Talle",
          "value_id": "3423417",
          "value_name": "XXL",
          "values": [
            {
              "id": "3423417",
              "name": "XXL",
              "struct": null
            }
          ],
          "value_type": "string"
        }
      ],
      "sale_terms": [
      ],
      "picture_ids": [
        "613019-MLA76619206657_052024"
      ],
      "catalog_product_id": null
    }
  ],
  "status": "active",
  "sub_status": [
  ],
  "tags": [
    "good_quality_thumbnail",
    "certified_quality_thumbnail",
    "immediate_payment",
    "cart_eligible"
  ],
  "warranty": "Sin garantía",
  "catalog_product_id": null,
  "domain_id": "MLA-FOOTBALL_SHIRTS",
  "parent_item_id": null,
  "deal_ids": [
    "MLA54082",
    "MLA52726"
  ],
  "automatic_relist": false,
  "date_created": "2024-03-31T05:25:29.000Z",
  "last_updated": "2024-06-11T00:00:33.000Z",
  "health": 0.7,
  "catalog_listing": false
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductDetail item={obj}></ProductDetail>
    </>
  )
}

export default App
