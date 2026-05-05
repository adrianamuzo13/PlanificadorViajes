import type { Trip } from '../types/trip'

export const trips: Trip[] = [
  {
    id: '1',
    destination: 'París, Francia',
    startDate: '2025-06-01',
    endDate: '2025-06-07',
    description: 'Viaje romántico a París',
    days: [
      {
        id: 'd1',
        date: '2025-06-01',
        activities: [
          {
            id: 'a1',
            title: 'Torre Eiffel',
            description: 'Visita a la Torre Eiffel',
            time: '10:00'
          }
        ]
      }
    ]
  }
]