import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/registration', async () => {
    return HttpResponse.json({ status: 201 });
  }),
];
