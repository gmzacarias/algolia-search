import type{ NextApiRequest, NextApiResponse } from "next";
const data=[
    {
      "id": 1,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 2,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 3,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 4,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 5,
      "name": "John Doe",
      "age": 29
    },
    {
      "id": 6,
      "name": "John Doe",
      "age": 30
    },
    {
      "id": 7,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 8,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 9,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 10,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 11,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 12,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 13,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 14,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 15,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 16,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 17,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 18,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 19,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 20,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 21,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 22,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 23,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 24,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 25,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 26,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 27,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 28,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 29,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 30,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 31,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 32,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 33,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 34,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 35,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 36,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 37,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 38,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 39,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 40,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 41,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 42,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 43,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 44,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 45,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 46,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 47,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 48,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 49,
      "name": "John Doe",
      "age": 28
    },
    {
      "id": 50,
      "name": "John Doe",
      "age": 28
    }
  ]

 export function getLista() {
    const mapeo = data.map(item => {
        return item
    })
    return mapeo
}

