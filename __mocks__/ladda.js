import { vi } from 'vitest';

const create = vi.fn(() => ({
  start: vi.fn(),
  stop: vi.fn(),
}));
const stopAll = vi.fn();
const bind = vi.fn();

export { create, stopAll, bind };
export default {
  create,
  stopAll,
  bind,
};
