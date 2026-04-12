import { vi } from 'vitest';

const mockAxios = {
  get: vi.fn(() => Promise.resolve({ data: {} })),
  post: vi.fn(() => Promise.resolve({ data: {} })),
  put: vi.fn(() => Promise.resolve({ data: {} })),
  delete: vi.fn(() => Promise.resolve({ data: {} })),
  head: vi.fn(() => Promise.resolve({ data: {} })),
  patch: vi.fn(() => Promise.resolve({ data: {} })),
  request: vi.fn(() => Promise.resolve({ data: {} })),
  create: vi.fn(() => mockAxios),
  CancelToken: {
    source: vi.fn(() => ({ token: 'token', cancel: vi.fn() })),
  },
  defaults: { headers: { common: {} } },
  isAxiosError: vi.fn((error) => !!(error && error.isAxiosError)),
};

mockAxios.interceptors = {
  request: { use: vi.fn(), eject: vi.fn() },
  response: { use: vi.fn(), eject: vi.fn() },
};

export default mockAxios;
