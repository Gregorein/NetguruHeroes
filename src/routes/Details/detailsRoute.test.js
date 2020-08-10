/* mock for apollo test
const mocks = [
  {
    request: {
      query: GET_HEROES,
      variables: {
        first: 1,
        skip: 0,
      },
    },
    result: {
      total_count: 1,
      data: [
        {
          "id": "ckdo8ussw00ib0719nli1l9vu",
          "full_name": "Albert Einstain",
          "avatar_url": "http://localhost:4000/assets/einstein.png",
          "type": {
            "name": "Human"
          },
          "description": "Sed nec venenatis felis. Aenean efficitur et massa auctor auctor."
        }
      ],
    },
  },
]
*/